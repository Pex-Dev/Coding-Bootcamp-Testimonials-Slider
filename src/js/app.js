document.addEventListener("DOMContentLoaded", () => {
  const testimonialTanya = document.getElementById("testimonial-tanya");
  const testimonialJhon = document.getElementById("testimonial-jhon");

  let position = 1;

  const tanyaButtonLeft = testimonialTanya.querySelector("#button-left");
  const tanyaButtonRight = testimonialTanya.querySelector("#button-right");
  const jhonButtonLeft = testimonialJhon.querySelector("#button-left");
  const jhonButtonRight = testimonialJhon.querySelector("#button-right");

  const testimonials = document.querySelector(".testimonials");

  tanyaButtonRight.addEventListener("click", () => {
    moveLeft();
  });
  jhonButtonRight.addEventListener("click", () => {
    moveLeft();
  });

  tanyaButtonLeft.addEventListener("click", () => {
    moveRight();
  });
  jhonButtonLeft.addEventListener("click", () => {
    moveRight();
  });

  function moveLeft() {
    if (position === 1) {
      testimonials.style.flexDirection = "row";
      testimonials.style.transition = "transform 0.8s ease";
      testimonials.style.transform = "translateX(-100dvw)";
      testimonialTanya.style.opacity = "0";
      testimonialJhon.style.opacity = "1";
      position = 2;
      return;
    }
    if (position === 2) {
      testimonials.style.transition = "none";
      testimonials.style.flexDirection = "row-reverse";
      testimonials.style.transform = "translateX(0)";
      testimonialTanya.style.opacity = "1";
      testimonialJhon.style.opacity = "0";
      setTimeout(() => {
        testimonials.style.transition = "transform 0.8s ease";
        testimonials.style.transform = "translateX(-100dvw)";
      }, 0);
      setTimeout(() => {
        testimonials.style = "";
      }, 800);
      position = 1;
      return;
    }
  }

  function moveRight() {
    if (position === 1) {
      testimonials.style.transition = "none";
      testimonials.style.flexDirection = "row-reverse";
      testimonials.style.transform = "translateX(-100dvw)";
      testimonialTanya.style.opacity = "0";
      testimonialJhon.style.opacity = "1";
      setTimeout(() => {
        testimonials.style.transition = "transform 0.8s ease";
        testimonials.style.transform = "translateX(0)";
      }, 0);
      position = 2;
      return;
    }
    if (position === 2) {
      testimonials.style.transition = "none";
      testimonials.style.flexDirection = "row";
      testimonials.style.transform = "translateX(-100dvw)";
      testimonialTanya.style.opacity = "1";
      testimonialJhon.style.opacity = "0";
      setTimeout(() => {
        testimonials.style.transition = "transform 0.8s ease";
        testimonials.style.transform = "translateX(0)";
      }, 0);
      setTimeout(() => {
        testimonials.style = "";
      }, 800);
      position = 1;
      return;
    }
  }
});
