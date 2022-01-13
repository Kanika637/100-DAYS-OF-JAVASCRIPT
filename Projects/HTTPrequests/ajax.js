// LOAD ALL USERS

const btn=document.getElementById("btn")
btn.addEventListener("click",getUsers)

// CREATE GEYUSER FUNCTION

function getUsers(e){
    e.preventDefault();

    const http=new XMLHttpRequest();

    //making it asynchronous as if true

    http.open("GET","users.json",true);


    //onload function

    http.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            //making the string of data into object

            const users=JSON.parse(this.responseText);

            //making a empty string

            let output="";

            //displaying the data on the screen

            users.forEach(function(user){
                output+=`
                <hr>
                <ul>
                <li>ID: ${user.id}</li>
                <li>NAME: ${user.name}</li>
                <li>AGE: ${user.age}</li>
                <li>EMAIL: ${user.email}</li>
                </ul>
                `;
            })

            document.getElementById("users").innerHTML=output;
        }

    }

    http.send(); 
}