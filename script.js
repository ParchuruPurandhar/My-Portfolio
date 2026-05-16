

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};



const typing = document.querySelector(".typing");

const words = [
  "Data Analyst",
  "Data scientist"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

  const currentWord = words[wordIndex];

  if(!isDeleting){
    typing.textContent =
    currentWord.substring(0, charIndex++);

    if(charIndex > currentWord.length){
      isDeleting = true;

      setTimeout(typeEffect,1000);
      return;
    }

  }else{

    typing.textContent =
    currentWord.substring(0, charIndex--);

    if(charIndex < 0){
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();



const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,30);

    }else{
      counter.innerText = target;
    }

  };

  updateCounter();

});

