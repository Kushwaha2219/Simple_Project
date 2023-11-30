let out=document.querySelector("body");
let box1=document.querySelector(".first");
let text=document.querySelector(".text");
box1.addEventListener("mouseover",()=>{
    document.querySelector("body").style.backgroundColor="aqua";
   
})
let box2=document.querySelector(".second");
box2.addEventListener("mouseover",()=>{
    document.querySelector("body").style.backgroundColor="red";
   
})
let box3=document.querySelector(".third");
box3.addEventListener("mouseover",()=>{
    document.querySelector("body").style.backgroundColor="yellow";
    
})
let box4=document.querySelector(".fourth");
box4.addEventListener("mouseover",()=>{
    document.querySelector("body").style.backgroundColor="rgb(255, 0, 212";
    
})
out.addEventListener("mouseout",()=>{
     document.querySelector("body").style.backgroundColor="white";
 })
 text.addEventListener("mouseover",()=>{
    document.querySelector(".text").style.color="Blue";
 })
 text.addEventListener("mouseout",()=>{
    document.querySelector(".text").style.color="black";
})