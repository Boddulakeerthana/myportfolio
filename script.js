// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){
  
  const targetId = this.getAttribute("href");
  
  if(targetId.length > 1){
  
  e.preventDefault();
  
  const target = document.querySelector(targetId);
  
  if(target){
  
  target.scrollIntoView({
  behavior:"smooth",
  block:"start"
  });
  
  }
  
  }
  
  });
  
  });
  
  
  // ================= SCROLL REVEAL =================
  
  const revealElements = document.querySelectorAll(
  ".glass-section, .project-card, .skills-apply-section, .resume-section, .contact-section"
  );
  
  function revealOnScroll(){
  
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(el=>{
  
  const elementTop = el.getBoundingClientRect().top;
  const revealPoint = 120;
  
  if(elementTop < windowHeight - revealPoint){
  
  el.classList.add("visible");
  
  }
  
  });
  
  }
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  
  
  // ================= NAVBAR SCROLL EFFECT =================
  
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", ()=>{
  
  if(!navbar) return;
  
  if(window.scrollY > 60){
  
  navbar.classList.add("nav-scroll");
  
  }else{
  
  navbar.classList.remove("nav-scroll");
  
  }
  
  });
  
  
  // ================= HERO TYPING ANIMATION =================
  
  const words = [
    "AI Data Analyst",
    "Machine Learning & AI Enthusiast",
    "Entry-Level Data Analyst"
    ];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function typeEffect(){
  
  const typingElement = document.querySelector(".typing-text");
  if(!typingElement) return;
  
  let currentWord = words[wordIndex];
  
  if(deleting){
  charIndex--;
  }else{
  charIndex++;
  }
  
  typingElement.textContent = currentWord.substring(0,charIndex);
  
  if(!deleting && charIndex === currentWord.length){
  deleting = true;
  setTimeout(typeEffect,1000);
  return;
  }
  
  if(deleting && charIndex === 0){
  deleting = false;
  wordIndex++;
  
  if(wordIndex === words.length){
  wordIndex = 0;
  }
  }
  
  setTimeout(typeEffect,90);
  
  }
  
  typeEffect();
  
  
  // ================= THEME TOGGLE =================
  
  const toggleBtn = document.getElementById("themeToggle");
  
  if(toggleBtn){
  
  toggleBtn.addEventListener("click",()=>{
  
  document.body.classList.toggle("light");
  
  if(document.body.classList.contains("light")){
  
  toggleBtn.innerHTML = "🌞 Theme";
  
  }else{
  
  toggleBtn.innerHTML = "🌙 Mood";
  
  }
  
  });
  
  }
  
  
  // ================= PARTICLES =================
  
  document.addEventListener("DOMContentLoaded", function(){
  
  particlesJS("particles-js",{
  particles:{
  number:{value:80},
  size:{value:3},
  color:{value:"#38bdf8"},
  line_linked:{
  enable:true,
  distance:150,
  color:"#38bdf8",
  opacity:0.5
  },
  move:{
  speed:2
  }
  },
  interactivity:{
  events:{
  onhover:{enable:true,mode:"repulse"},
  onclick:{enable:true,mode:"push"}
  }
  }
  });
  
  });
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    formStatus.innerHTML = "✅ Message sent successfully!";
    formStatus.style.color = "#22c55e";
    form.reset();
  }).catch(error => {
    formStatus.innerHTML = "❌ Oops! Something went wrong.";
    formStatus.style.color = "red";
  });

});