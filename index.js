const h1Elements = document.querySelectorAll("h1");

function splitTextAnimation(element) {
  const text = element.textContent.split("");

  element.innerText = "";
  element.style.zIndex = "2";
  text.forEach((ch) => {
    let spanElement = document.createElement("span");
    //This styling is required in spans to make this stagger effect work
    // expecially for the translate Y animation
    spanElement.style.display = "inline-block";
    spanElement.innerText = ch;
    element.appendChild(spanElement);
  });

  gsap.fromTo(
    element.querySelectorAll("span"),
    {
      opacity: 0,
      y: 70,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.inOut",
    }
  );
}

h1Elements.forEach((h1) => splitTextAnimation(h1));

const img = document.querySelector("img");
const tl = gsap.timeline();

tl.from(img, {
  opacity: 0,
  y: 50,
  delay: 1,
  duration: 1.4,
})
  .to(img, {
    width: "90%",
    height: "130%",
  })
  .from(".button-group button", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
  });
