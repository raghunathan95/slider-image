const continer =document.querySelector(".container");
const btns = document.querySelectorAll(".btn")
const images=["1","2","3"]
let index=0;
btns.forEach(( button)=>{
    button.addEventListener("click",()=>{

        if(button.classList.contains("btn-right")){

            
            index--;
            
            if(index<0){
                index=images.lenght-1;
            }
            continer.style.background=` url("img/${images[index]}.jpg") center/cover no-repeat`
        }
        else{ 
            index++;
            if(index==images.length){
                index=0
            }
            continer.style.background=` url("img/${images[index]}.jpg") center/cover no-repeat` 
        }
    })
})