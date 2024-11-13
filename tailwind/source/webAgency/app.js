const project = document.querySelector('.projects');
const btn = document.querySelector('.loadmore');
const urls = ["media/hero.jpg","media/igor-miske-JVSgcV8_vb4-unsplash.jpg","media/nathan-da-silva-k-rKfqSm4L4-unsplash.jpg","media/kevin-bhagat-zNRITe8NPqY-unsplash.jpg"];

btn.addEventListener('click', () => {

    console.log("clicked");
    if (btn.textContent==="Collapse"){
        for(let i=0; i<4;i++){
            setTimeout(() =>{
                project.removeChild(project.lastChild);
            },i*500);
        }
        btn.textContent = "Load More";
        return;
    }

    let delay = 0;
    for(let url of urls){
        setTimeout(() =>{
            const img = document.createElement('img');
            img.src = url;
            project.appendChild(img);    
        },delay)
        delay += 500;
    }
    // project.appendChild(btn);

    btn.textContent = "Collapse";
})
;

