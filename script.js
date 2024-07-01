function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("Light")) {
    img.setAttribute("alt", "Mayk with a black shirt in a purple background")
  } else {
    img.setAttribute("alt", "Smiling guy in a yellow background")
  }
}
