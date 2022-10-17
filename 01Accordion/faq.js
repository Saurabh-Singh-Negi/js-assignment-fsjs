const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");


const faqs = [];

const faq = document.createElement("div");
const faq_header = document.createElement("div");
const heading = document.createElement("h3");
const show_btn = document.createElement("button");
const para = document.createElement("p");

show_btn.innerText = "+";
// heading.classList.add("faq");

faq_header.appendChild(heading);
faq_header.appendChild(show_btn);

faq.appendChild(heading);
accordianBody.appendChild(faq);



function showFaq() {

}

function createFaq() {
  
}

function btnStatusUpdate() {
  
}


