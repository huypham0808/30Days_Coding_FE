const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenu = document.getElementById('ct-toggle-top-menu-icon')

document.addEventListener("click", (e) => {
    if (toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('hidden')
    } else {

    }
})