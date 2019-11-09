var css = document.querySelector("h3");
var color1 = document.querySelector(".Color1");
var color2 = document.querySelector(".Color2");
var body = document.getElementById("Gradient");
var Direction=document.querySelector(".ShadeOrientation");
var currentValue = "to right";

function setGradient() {
    body.style.background = "linear-gradient("+currentValue+", " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function handleClick(Direction) {
    currentValue = Direction.value;
    body.style.background = "linear-gradient("+currentValue+", " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
