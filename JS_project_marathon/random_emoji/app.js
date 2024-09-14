const btn = document.querySelector("button");
const text = document.querySelector("p");

const emoji = []

async function fetchEmoji(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=8f5d1b8bcfe4b14bb3dcbdb43acdf430b6fa1110")
    const data = await response.json()
    console.log(data)

    for(let i = 0; i < 1000; i){
        emoji.push({
            emoji: data[i].character,
            name: data[i].unicodeName
        })
    }

}

try {
    fetchEmoji();
}catch (e) {
    console.log(e)
}

btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 1000);

    btn.textContent = emoji[random].emoji;
    text.textContent = emoji[random].name;
  
})
