const colorToggle = document.querySelector("#color-toggle")
const darkMode = document.querySelector("#dark-mode")
const lightMode = document.querySelector("#light-mode")
const root = document.querySelector(":root")
let color

const change = () => {

    if (color === "white") {
        root.style.setProperty("--background", "#eee")
        root.style.setProperty("--element", "#fff")
        root.style.setProperty("--element-hover", "#f8f8f8")
        root.style.setProperty("--font-color", "#000")

    } else {
        root.style.setProperty("--background", "#181818")
        root.style.setProperty("--element", "#111")
        root.style.setProperty("--element-hover", "#121212")
        root.style.setProperty("--font-color", "#fff")
    }
}

const toggleMode = () => {
    lightMode.classList.toggle("hidden")
    darkMode.classList.toggle("hidden")
}

if (localStorage.getItem("color") === null) {
    color = "dark"
    localStorage.setItem("color", color)
} else {
    color = localStorage.getItem("color")
}

if (color === "white") {
    lightMode.classList.add("hidden")
} else {
    darkMode.classList.add("hidden")
}

change()

colorToggle.addEventListener("click", _ => {
    color = color === "white" ? "dark" : "white"
    localStorage.setItem("color", color)
    console.log(localStorage)
    toggleMode()
    change()
})