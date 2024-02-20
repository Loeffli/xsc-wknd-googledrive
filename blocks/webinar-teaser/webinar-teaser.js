let webinarTeaser = document.querySelector(".webinar-teaser")
let linkCell = webinarTeaser.childNodes[7];
let buttonLink = linkCell.innerText.trim();
linkCell.remove();

let button = document.createElement("button");
button.setAttribute("class", "webinar-teaser-button");
button.setAttribute("onclick", "window.open('" +buttonLink+ "');");
button.innerText = "Register Now!";

webinarTeaser.appendChild(button);