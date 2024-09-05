const array = [
    {
        name: '- John',
        url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I was blown away by the outstanding service provided by Unkown. Their website developer team is top-notch, delivering a flawless website that exceeded all my expectations. I highly recommend their services to anyone looking for professional web development."
    },
    {
        name: '- Samantha Adams',
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Working with Unkown's website developer was a game-changer for my business. Their attention to detail and creativity elevated my online presence to a whole new level. I highly recommend their services to anyone looking to stand out in the digital world."
    },
    {
        name: '- Eva Adams',
        url: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am extremely impressed with the website developer services provided by Unkown. The team was professional, efficient, and created a stunning website for my business. I highly recommend Unkown for anyone looking to enhance their online presence."
    }
]

const img = document.querySelector('img');
const username = document.querySelector('h4');
const text = document.querySelector('p');

let i = 0;
function updateTestimonial(){
        img.src = array[i]['url'];
        username.textContent = array[i]['name'];
        text.textContent = array[i]['text'];

        i++;
        if(i<array.length) {
            setTimeout(updateTestimonial, 5000);
        }
        if(i===array.length) {
            i = 0;
            setTimeout(updateTestimonial, 5000);
        }

    
}

updateTestimonial();