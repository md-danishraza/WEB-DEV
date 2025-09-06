require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home");
});

const rateLimit = require("express-rate-limit");

const emailLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  max: 1, // Limit each IP to 1 requests per windowMs
  message: "Too many email requests from this IP, please try again later.",
});

// Handle email sending
app.post(
  "/send-email",

  emailLimiter,
  [
    // Validation rules
    check("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long")
      .escape(),
    check("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),
    check("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters long")
      .escape(),
    ,
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    /* 
  error object
  {
  "errors": [
    {
      "msg": "Name is required",
      "param": "name",
      "location": "body"
    },
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
  */

    // if no error send email to myself
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APPPASS,
      },
    });

    // Defining the mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio message from ${name}`,
      text: message,
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Error in sending email. Please try again later.");
      } else {
        console.log("Email sent:", info.response);
        res.send("Email sent successfully!");
      }
    });
  }
);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
