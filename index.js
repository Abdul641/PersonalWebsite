const projectMainDiv = document.querySelector(".allProject");
const secondProject = document.querySelector(".secondProject");
var w = window.innerWidth;
var h = window.innerHeight;

//var x = document.getElementById("demo");
console.log("Browser width: " + w + ", height: " + h + ".");
//x.innerHTML = "Browser width: " + w + ", height: " + h + ".";

function checkingWidth() {
  if (window.innerWidth > 1000) {
    let secondProjectImage = document.createElement("img");
    secondProjectImage.src = "./pictures/fourth.jpg";
    secondProjectImage.append(secondProjectImage);
  }
}

checkingWidth();
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
console.log("hi");
