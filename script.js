let button  = document.querySelector("button");
let circle = document.querySelector("div");
let body = document.querySelector("body");
let head = document.querySelector("h1");
let head1 = document.querySelector("h2");
let lidt = document.querySelector("#li-da");
let toggle = false;
button.addEventListener("click" , () =>{

    circle.classList.toggle("style")
    if(toggle == false){
        body.style.backgroundColor = "black";
        button.style.backgroundColor = "#222";
        head.style.color = "#fff";
        head1.style.color = "#fff";
        lidt.innerHTML = "Dark";
        toggle = true
    }else{
        body.style.backgroundColor = "white";
        button.style.backgroundColor = "black";
        head.style.color = "#222";
        head1.style.color = "#222";
        lidt.innerHTML = "Light";
        toggle = false;
    }
});