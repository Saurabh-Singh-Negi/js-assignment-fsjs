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

  for(let i=0;i<faqData.length;i++) {
    const faq = document.createElement("div");
    const faq_header = document.createElement("div");
    const heading = document.createElement("h3");
    const show_btn = document.createElement("button");
    const para = document.createElement("p");

    show_btn.innerText = "+";

    //adding classes to elements
    //html structure 
    /*<div class="faq">
      <div class="faq_header">
        <h3>Who are we?</h3>
        <button class="show_btn">+</button>
      </div>
      <p class="hidden">
        We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.
      </p>
    </div> */

    faq.classList.add("faq");
    faq_header.classList.add("faq_header");
    show_btn.classList.add("show_btn");
    para.classList.add("hidden");

    faq_header.appendChild(heading);
    faq_header.appendChild(show_btn);
    faq.appendChild(faq_header);
    faq.appendChild(para);

    heading.innerText = faqData[i].question;
    para.innerText = faqData[i].answer;
    faqs[i] = faq;
    accordianBody.appendChild(faqs[i]);


    //even listener for button clicks
    show_btn.addEventListener("click", () => {
      if(para.classList[0] == "hidden"){
        para.classList.remove("hidden");
        show_btn.innerText = "-";
      } else {
        para.classList.add("hidden");
        show_btn.innerText = "+";
      }
    })

    }




