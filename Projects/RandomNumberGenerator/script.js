const count=document.querySelector(".count")
const btn=document.querySelector(".buttons")

const NumberGenerator=()=>{
    const randomNumber=Math.floor(Math.random()*10+1)
    count.innerHTML=randomNumber;
}

btn.addEventListener("click",NumberGenerator);

NumberGenerator();