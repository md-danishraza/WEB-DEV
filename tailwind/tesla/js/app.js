const exteriorColorSelection = document.querySelector("#exterior-buttons");
const interiorColorSelection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");

// price buttons
const performanceBtn = document.getElementById("performance-btn");
const totalPrice = document.querySelector("#total-price");
const fullDriveBtn = document.getElementById("full-self-driving-checkbox");
const accessories = document.getElementById("accessories");

const basePrice = 1000000;
let currentPrice = basePrice;

const pricing = {
  "Performance Wheels": 100000,
  "Performance Package": 100000,
  "Full Self-Driving": 200000,
  Accessories: {
    "Center Console Trays": 50000,
    "All Weather Interior Liners": 50000,
    SunShade: 50000,
  },
};

function updateTotalPrice() {
  // reset
  currentPrice = basePrice;

  if (selectedOptions["Performance Wheels"]) {
    currentPrice += pricing["Performance Wheels"];
  }
  if (selectedOptions["Performance Package"]) {
    currentPrice += pricing["Performance Package"];
  }
  if (selectedOptions["Full Self-Driving"]) {
    currentPrice += pricing["Full Self-Driving"];
  }

  for (let keys in selectedOptions["Accessories"]) {
    if (selectedOptions["Accessories"][keys]) {
      currentPrice += pricing["Accessories"][keys];
    }
  }

  totalPrice.textContent = `₹${generateCommas(currentPrice)}`;

  updatePayments();
}

// numbers commma
function generateCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// globals
let selectedColor = "Stealth Gray";
const selectedOptions = {
  "Performance Wheels": false,
  "Performance Package": false,
  "Full Self-Driving": false,
  Accessories: {
    "Center Console Trays": false,
    "All Weather Interior Liners": false,
    SunShade: false,
  },
};

// scroll
const topBar = document.getElementById("top-bar");
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible", atTop);
  topBar.classList.toggle("hidden", !atTop);
}

// Image Mapping
const exteriorImages = {
  "Stealth Gray": "images/model-y-stealth-grey.jpg",
  "Pearl White": "images/model-y-pearl-white.jpg",
  "Deep Blue": "images/model-y-deep-blue-metallic.jpg",
  "Solid Black": "images/model-y-solid-black.jpg",
  "Ultra Red": "images/model-y-ultra-red.jpg",
  Quicksilver: "images/model-y-quicksilver.jpg",
};

const interiorImages = {
  Dark: "images/model-y-interior-dark.jpg",
  Light: "images/model-y-interior-light.jpg",
};

// colors
const handleColorBtnClick = (event) => {
  let button;
  //   console.log(event.target.alt);

  if (event.target.tagName === "IMG") button = event.target.closest("button");
  else if (event.target.tagName === "BUTTON") button = event.target;

  //   console.log(button);
  if (button) {
    // first remove the border from all buttons from correct parent btn container
    const allbtns = event.currentTarget.querySelectorAll("button");
    allbtns.forEach((btn) => btn.classList.remove("btn-selected"));
    // then add the border to the selected button
    button.classList.add("btn-selected");

    // changing images
    // if exterior is clicked
    if (event.currentTarget.id === "exterior-buttons") {
      selectedColor = button.querySelector("img").alt;
      // console.log(colorName);
      // console.log(exteriorImages[colorName]);
      updateExteriorImage();
    } else {
      const colorName = button.querySelector("img").alt;
      //   console.log(colorName);
      interiorImage.src = interiorImages[colorName];
    }
  }

  //   console.log(button.querySelector("img").alt);
};

// update exterior image based on color and wheels
function updateExteriorImage() {
  const performanceSuffix = selectedOptions["Performance Wheels"]
    ? "-performance"
    : "";
  const colorkey =
    selectedColor in exteriorImages ? selectedColor : "Stealth Gray";
  exteriorImage.src = exteriorImages[colorkey].replace(
    ".jpg",
    `${performanceSuffix}.jpg`
  );
}

// color btns

exteriorColorSelection.addEventListener("click", handleColorBtnClick);
interiorColorSelection.addEventListener("click", handleColorBtnClick);

// wheel btns
const wheelBtnSection = document.getElementById("wheel-buttons");

wheelBtnSection.addEventListener("click", handleWheelBtnClick);

function handleWheelBtnClick(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    // selecting btns of a within parent
    const wheelBtns = event.currentTarget.querySelectorAll("button");
    wheelBtns.forEach((btn) =>
      btn.classList.remove("bg-gray-700", "text-white")
    );

    event.target.classList.add("bg-gray-700", "text-white");

    // if performance btn
    selectedOptions["Performance Wheels"] =
      event.target.textContent.includes("Performance");
    // console.log(performanceBtn);
    // exteriorImage.src = performanceBtn
    //   ? "images/model-y-stealth-grey-performance.jpg"
    //   : "images/model-y-stealth-grey.jpg";
    updateExteriorImage();

    // updating the prices
    updateTotalPrice();
  }
}

function handlePerformanceUpgrade(event) {
  performanceBtn.classList.toggle("bg-gray-700");
  performanceBtn.classList.toggle("text-white");

  selectedOptions["Performance Package"] =
    performanceBtn.classList.contains("text-white");

  updateTotalPrice();
}
performanceBtn.addEventListener("click", handlePerformanceUpgrade);

function SelfDriving(event) {
  selectedOptions["Full Self-Driving"] = fullDriveBtn.checked;
  updateTotalPrice();
}
fullDriveBtn.addEventListener("click", SelfDriving);

// accessories

accessories.addEventListener("click", handleAccessoriesClick);

function handleAccessoriesClick(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName === "INPUT") {
    const accessory = event.target.name;
    selectedOptions["Accessories"][accessory] = event.target.checked;
  }
  // console.log(selectedOptions["Accessories"]);
  updateTotalPrice();
}

// payments
const dpr = document.getElementById("dpRate");
const downPayments = document.getElementById("down-payment");
const loanRate = document.getElementById("Loan-rate");
const monthlyPayment = document.getElementById("monthly-payment");
const loanTerm = document.getElementById("Loan-term");

dpr.addEventListener("input", (event) => {
  const dprValue = event.target.value;

  const label = dpr.previousElementSibling;

  label.innerText = `Down Payment Rate: ${dprValue}%`;

  updatePayments();
});

function updatePayments() {
  // console.log(dpr.value);
  let downpmt = Math.floor((dpr.value / 100) * currentPrice);

  downPayments.innerHTML = `₹${downpmt}`;
  const months = loanTerm.value;

  const p = currentPrice - downpmt;
  const r = 12;

  const totalEMI = calculateEMI(p, r, months);
  // console.log(totalEMI);
  monthlyPayment.innerHTML = `₹${generateCommas(totalEMI)}`;
}

function calculateEMI(principal, annualInterestRate, totalMonths) {
  const r = annualInterestRate / 100 / 12; // monthly interest rate
  const n = totalMonths; // number of payments

  const emi = (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

  return Math.floor(emi);
}

loanTerm.addEventListener("input", (event) => {
  updatePayments();
});

updatePayments();
