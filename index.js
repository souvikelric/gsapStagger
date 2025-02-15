gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const container1 = document.querySelector(".container");

const h1Elements = container1.querySelectorAll("h1");

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
  })
  .from("nav", {
    transform: "scaleY(0)",
  })
  .from("nav div", {
    opacity: 0,
    y: -40,
    stagger: 0.2,
  });

const container2 = document.querySelectorAll(".container")[1];
const hidden = container2.querySelectorAll(".hidden");
console.log(container2);
const sectionH1 = container2.querySelectorAll("h1");
console.log(sectionH1);
const H1First = sectionH1[0];
const H1Second = sectionH1[1];

console.log(H1First.innerText, H1Second.innerText);

gsap.from(hidden, {
  scrollTrigger: {
    trigger: container2,
    start: "40% 70%",
    end: "60% 60%",
    scrub: 3,
  },
  stagger: 0.1,
  duration: 1,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  // opacity: 0,
  // y: 50,
});
