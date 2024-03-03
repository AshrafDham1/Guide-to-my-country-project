const faqs=document.querySelectorAll(".faq");


faqs.forEach(faq => {
    faq.addEventListener("mouseover", () => {
        faq.classList.add("active");
    });

    faq.addEventListener("mouseout", () => {
        faq.classList.remove("active");
    });
});


let slideIndex=1;

function plusSlides(num){
  showSlides(slideIndex+=num);
}

showSlides(slideIndex);
function showSlides(num){
  let slides=document.getElementsByClassName("mySlides");

  if (num>slides.length){
    slideIndex=1 //first slide
}
  if (num<1){
    slideIndex=slides.length //last slide
}
  for (let i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  slides[slideIndex-1].style.display="block";
}