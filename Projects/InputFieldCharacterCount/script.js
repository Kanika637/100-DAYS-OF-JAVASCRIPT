const count=document.querySelector(".count")
const Input=document.querySelectorAll("input")

Input.addEventListener("keyup",()=>{
    count.innerHTML=Input.values.length;
})

