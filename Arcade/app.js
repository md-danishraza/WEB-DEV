

const home = document.querySelector(".home");

window.addEventListener("scroll", () => {
    home.style.backgroundSize = 100 + (window.scrollY / 5) + "%";
});

const cards = document.querySelector(".cards");

// Function to create and display the info popup
const showPopup = (title, description) => {
    const div = document.createElement("div");
    div.classList.add("info");

    const h1 = document.createElement("h1");
    h1.innerText = title;

    const p = document.createElement("p");
    p.innerText = description;

    const btn = document.createElement("button");
    btn.innerText = "Close";
    btn.classList.add("close-btn");

    // Append elements to the popup
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(btn);

    // Append the popup to the body (or another container)
    document.body.appendChild(div);

    // Add event listener to the close button
    btn.addEventListener("click", () => {
        document.body.removeChild(div); // Remove the popup from the DOM
    });
};

// Add click event listener to the cards container
cards.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const cardId = event.target.closest('.card').id; // Get the card ID

        switch (cardId) {
            case "card-one":
                showPopup("Pinball Machines", "Find pinball machines from the top manufacturers, including Stern Pinball Chicago Gaming and American Pinball. Pinball is an excellent addition to any location, especially bars and restaurants. Find a wide selection of pinball machines for sale.Everyone loves pinball machines, and adding new titles to your location generates excitement and boosts business. Check out our pinball machines for sale and see if we have the wholesale ones you’ve been looking for.Elevate your entertainment offerings and captivate your audience with the timeless appeal of commercial pinball machines. Browse our selection today and take the first step towards creating an unforgettable gaming experience in your venue.");
                break;
            case "card-two":
                showPopup("Redemptions", "Beyond the flashing lights and arcade thrill, redemption games boost your business. They’re not just pixelated entertainment; they’re powerful engagement tools that can transform your venue into a buzzing hub of activity, boost revenue, and build lasting customer loyalty.");
                break;
            case "card-three":
                showPopup("Merchandisers", "A claw machine or crane machine is a game where skill meets luck. It allows players to move the claw where they want, using a joystick to try and line up the claw with the desired prize, then hitting a button to drop the claw, attempting to win a prize like plush toys. The earliest version of this game was invented in the early 1830s but was not released until the 1920s.Claw machines and toy crane vending machines make perfect additions to game rooms at amusement parks, roller skating rinks, bowling alleys, and other venues. They are also great for laundromats, restaurants, and car washes. Fill them with small plush toys, candy, prizes, and novelties.");
                break;
            case "card-four":
                showPopup("Pushers", "Coin pushers earn well and are fun to play. Coin-pusher games come in various configurations and can payout coins or tickets.Pushers are in high demand due to their profitability and entertaining gameplay. With various configurations available, these machines can earn coins or tickets, making them a versatile choice for arcade owners.Are you looking to maximize revenue and provide endless entertainment in your FEC? Look no further than our unbeatable selection of coin-pushers for sale. These games have proven to be a crowd favorite, captivating players with the anticipation of that big group of coins teetering on the edge, just waiting to fall into their hands.");
                break;
            case "card-five":
                showPopup("Virtual Reality", "Betson Enterprises is the worldwide leader in the distribution of location-based arcade equipment, parts, and services. We work with vendors and manufacturers in many spaces to offer our customers the best equipment for their specific needs. If you are ready to jump to location-based VR, we can help. We’ll work with you to tailor equipment and financing needs to make the investment work.");
                break;
            case "card-six":
                showPopup("PhotoBooths", "Photo booths are a great purchase decision for event planners, route operators, and location owners, from shopping malls to bars, restaurants, and amusement parks.Photo booths have transcended their quirky carnival origins to become interactive powerhouses for engagement and revenue. Whether you’re an event planner orchestrating unforgettable gatherings, a route operator, or a location owner seeking to excite your space, photo booths offer a unique blend of fun, personalization, and marketing muscle.");
                break;
            case "card-seven":
                showPopup("Jukeboxes", "Betson is proud to distribute AMI digital jukeboxes. Leading companies have been developing high-tech music entertainment solutions for the bar, restaurant, and hospitality industries for over a century. Music is at the heart of creating memorable experiences, and today, many commercial businesses rely on advanced music networks and customer engagement platforms to enhance their atmosphere.");
                break;
            case "card-eight":
                showPopup("Racing Games", "Arcade racing games let customers experience fun and excitement racing through unique worlds in the vehicles of their choice. Betson is a leading supplier of arcade racing games.Guests will surely enjoy putting the pedal to the metal in the numerous driving games from major franchises.Get ready to leave the real world in the dust and roar into a universe of high-octane thrills with Betson’s unparalleled selection of arcade racing games. Forget tame simulations – we’re talking adrenaline-pumping journeys through fantastical landscapes, pulse-pounding drifts around neon-lit cityscapes, and head-to-head battles against virtual rivals so fierce, you’ll taste the rubber burning across the finish line.");
                break;
            case "card-nine":
                showPopup("Air Hockey", "Betson is a leading supplier of commercial-grade air-hockey tables. Air hockey is an excellent addition to your location, from bars and restaurants to Family Entertainment Centers. It is one of the more competitive arcade games you may come across. We offer a full line of tables from leading manufacturers.Air hockey arcade games offer your customers fun activities to round out the entertainment experience.");
                break;
            // Add more cases for each card as needed
            default:
                break;
        }
    }
});


const sr = new ScrollReveal();
const options = {
    duration: 2000, origin: 'top', distance: '50px' , reset:true,
}

sr.reveal('#catalogheading',{...options,});
sr.reveal('.card',{...options,interval:500,});
sr.reveal('.reviews .title',{...options,});
sr.reveal('.footer__content>div',{...options,interval:500,});


// Add media queries for smaller devices
const mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
    options['distance'] = '0px';
    
}

sr.reveal('#left',{...options,origin: 'left'});
sr.reveal('#right',{...options,origin: 'right'});
sr.reveal('.home{backgroung-',{...options,origin: 'right'});
sr.reveal('.login img',{...options,origin: 'left'});
sr.reveal('.login .login-page',{...options,origin: 'right'});




sr.reveal('.reviews .img-container',{...options,origin: 'left'});
sr.reveal('.reviews .info-container.one  ',{...options,origin: 'right'});
sr.reveal('.reviews .img-container.two',{...options,origin: 'right'});
sr.reveal('.reviews .info-container.two',{...options,origin: 'left'});




