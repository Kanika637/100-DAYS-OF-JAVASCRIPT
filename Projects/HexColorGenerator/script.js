 const count=document.querySelector(".count")
 const btn=document.querySelector(".buttons")

 const ChangeColor=()=>{

    const randomColor=Math.random().toString(16).substring(2,8);
    // to set diff colors on background
    document.body.style.backgroundColor="#"+randomColor;
    // to show the clor code on the screen
    count.innerHTML="#"+randomColor;

 }
//  on clicking change of color by calling function
 btn.addEventListener("click",ChangeColor);
