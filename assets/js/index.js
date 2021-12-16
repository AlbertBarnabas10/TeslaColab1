var i = 0;
var txt = "Provide the best for you."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("HeroDesc").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
window.onscroll = () => {
  const aboutsection = document
    .querySelector("#aboutSection")
    .getBoundingClientRect();
  console.log(aboutsection);
  const navigationbar = document.querySelector("nav");
  if (aboutsection.top <= 0) {
    navigationbar.style.backgroundColor = "#000000";
  } else if (aboutsection.top > 0) {
    navigationbar.style.backgroundColor = "#00000000";
  }
};

const db = [
  {
    id: 0,
    img: "./assets/img/tesla/modelsbg.png",
    title: "Model S",
    desc: "Model S",
    link: "models.html",
  },
  {
    id: 1,
    img: "./assets/img/tesla/model3bg.png",
    title: "Model 3",
    desc: "Model 3",
    link: "model3.html",
  },
  {
    id: 2,
    img: "./assets/img/tesla/modelxbg.png",
    title: "Model X",
    desc: "Model X",
    link: "modelx.html",
  },
  {
    id: 3,
    img: "./assets/img/tesla/modelybg.png",
    title: "Model Y",
    desc: "Model Y",
    link: "modely.html",
  },
];

const toggleactivecarousel = (imgselected, chosenone, id) => {
  for (let i = 0; i < imgselected.length; i++) {
    imgselected[i].classList.remove("active");
  }
  chosenone.classList.add("active");
  const mainimg = (document.getElementById("mainimg").src = db[id].img);
  const title = (document.getElementById("abouttitle").innerText =
    db[id].title);
  const desc = (document.getElementById("aboutdesc").innerText = db[id].desc);
  const descbutton = (document.getElementById(
    "aboutbutton"
  ).href = `./pages/${db[id].link}`);
};

const imgselected = document.querySelectorAll(".childimg");
for (let i = 0; i < imgselected.length; i++) {
  imgselected[i].addEventListener("click", (e) => {
    toggleactivecarousel(imgselected, imgselected[i], i);
  });
}
