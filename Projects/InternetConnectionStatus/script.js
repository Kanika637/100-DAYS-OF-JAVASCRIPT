 const statusDisplay=document.getElementById("status")
 const image=document.getElementById("image")
 const bgColor=document.getElementById("main")


function setColor(){
    bgColor.classList.add("online")
}




 async function connectionStatus(){
     try{
         const fetchResult=await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ninian_Park_Cardiff.jpg/243px-Ninian_Park_Cardiff.jpg?time='+(new Date()).getTime());
         image.src="./images/online.png"
         setColor();
         return fetchResult.status>=200 && fetchResult.status<300;

     }
     catch(error){
         statusDisplay.textContent="OOPS!! Your Internet Connection Is Down";
         image.src="./images/offline.jpg"
         bgColor.classList.remove("online");

     }
 }

 //MONITOR CONNECTION

 setInterval(async() => {
     const result=await connectionStatus();
     if(result){
         statusDisplay.textContent="You are ONLINE, CONNECTION LOOKS GOOD";
         setColor();
     }
     
 }, 5000);


 //CHECK CONNECTION WHEN THE PAGE LOADS

 window.addEventListener("load",async(event)=>{
     if(connectionStatus()){
         statusDisplay.textContent="You are ONLINE"
     }else{
         statusDisplay.textContent="You are OFFLINE"
     }
 })

