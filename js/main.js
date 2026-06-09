document.addEventListener("DOMContentLoaded",function(){

/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});


/* ============================= */
/* SERVICE AUTO FILL + SELECT */
/* ============================= */

const cards=document.querySelectorAll(".service-card");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

cards.forEach(card=>{
card.addEventListener("click",function(){

cards.forEach(c=>c.classList.remove("selected"));
this.classList.add("selected");

const service=this.dataset.service;

subject.value="Inquiry about "+service;

message.value=
`Hello Nova Studio,

I am interested in your "${service}" service.

Please send pricing and process details.

Best regards`;

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

setTimeout(()=>{
message.focus();
},600);

});
});


/* ============================= */
/* FORM LOADING */
/* ============================= */

const form=document.getElementById("contactForm");
const btn=document.getElementById("submitBtn");
const status=document.getElementById("formStatus");

if(form){

form.addEventListener("submit",function(){

btn.classList.add("btn-loading");
btn.disabled=true;
status.textContent="Sending message...";

});

}


/* ============================= */
/* MAGNETIC BUTTON EFFECT */
/* ============================= */

document.querySelectorAll(".magnetic").forEach(btn=>{

btn.addEventListener("mousemove",function(e){

const rect=this.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

this.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;

});

btn.addEventListener("mouseleave",function(){

this.style.transform="translate(0,0)";

});

});

});
