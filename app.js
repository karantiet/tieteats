let reviews = document.querySelectorAll(".review-wrapper");
let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
  cards.forEach((card_index) => {
    reviews[card_index].classList.add("active");
  });

  setInterval(() => {
    currentReviews.forEach((card_index, i) => {
      reviews[card_index].classList.remove("active");
      currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;
    });
    setTimeout(() => {
      updateReviewSlider(currentReviews);
    }, 5000);
  }, 5000);
};

updateReviewSlider(currentReviews);

// faqs

let faqs = [...document.querySelectorAll(".faq")];
faqs.map((faq) => {
  let ques = faq.querySelector(".question-box");

  ques.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

//dish slider

let dishSlider = document.querySelector(".dish-slide");

let rotationVal = 0;

setInterval(() => {
  rotationVal += 120;
  dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
}, 3000);

let navToggler = document.querySelector(".nav-toggler");
let linksContainer = document.querySelector(".links-container");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  linksContainer.classList.toggle("active");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCdcTEfECIiHZq68G1F1m3nv0KRiYovblQ",
  authDomain: "thapar-eats-4bab0.firebaseapp.com",
  projectId: "thapar-eats-4bab0",
  storageBucket: "thapar-eats-4bab0.appspot.com",
  messagingSenderId: "562509441002",
  appId: "1:562509441002:web:31580369b6eb0ba3c17493",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

document.getElementById("logout").addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      location.replace("/index.html");
      document.getElementById("logout").style.display = "none";
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened.");
    });
});

AOS.init();
