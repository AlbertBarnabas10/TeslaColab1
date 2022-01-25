var i = 0;
var txt = "Provide the best for you."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
let ctr = 0;
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
    desc: "Tesla Model S adalah salah satu sedan listrik pertama yang memiliki desain menawan sekaligus futuristik. Lampu utamanya menggunakan LED dengan desain rumah lampu menyipit. Di bagian belakang, bumper besarnya dilengkapi dengan LED dan aksen krom pada spoilernya.",
    link: "models.html",
  },
  {
    id: 1,
    img: "./assets/img/tesla/model3bg.png",
    title: "Model 3",
    desc: "Tesla Model 3 merupakan salah satu mobil tipe sedan dengan tenaga listrik. Tesla Model 3 menawarkan akselerasi cepat dan interior minimalis masa depan yang maju. Berbagai konfigurasi baterai tersedia, dan semua versi diberi peringkat lebih dari 200 mile dengan sekali pengisian daya.",
    link: "model3.html",
  },
  {
    id: 2,
    img: "./assets/img/tesla/modelxbg.png",
    title: "Model X",
    desc: "Tesla Model X merupakan salah satu mobil tipe SUV (Sport Utility Vehicle) yang diproduksi pabrikan Tesla dari Amerika. Tesla Model X merupakan mobil listrik buatan pabrik asal Amerika Serikat yang secara resmi diimport untuk dijual di Indonesia. ",
    link: "modelx.html",
  },
  {
    id: 3,
    img: "./assets/img/tesla/modelybg.png",
    title: "Model Y",
    desc: "Tesla Model Y merupakan mobil SUV listrik yang berbentuk crossover. Untuk jenis standarnya, Tesla membekali model Y ini dengan jarak jelajah sampai 370 km. Sementara untuk model Long Range, diklaim bisa mencapai jarak 482 km.",
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
  ctr = id;
};

const imgselected = document.querySelectorAll(".childimg");
for (let i = 0; i < imgselected.length; i++) {
  imgselected[i].addEventListener("click", (e) => {
    toggleactivecarousel(imgselected, imgselected[i], i);
  });
}

setInterval(() => {
  if (ctr == imgselected.length - 1) {
    ctr = 0;
    toggleactivecarousel(imgselected, imgselected[ctr], ctr);
  } else {
    ctr++;
    toggleactivecarousel(imgselected, imgselected[ctr], ctr);
  }
}, 5000);
