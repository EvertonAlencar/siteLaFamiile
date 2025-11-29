function tooglebtn (){
    let btn = document.getElementById("toast-menu-button");
    let dropdowMenu = document.getElementById("dropdown-menu");
    if (btn.innerHTML == '<i class="fa-solid fa-bars"></i>') {
        dropdowMenu.style.display = "flex";
        dropdowMenu.style.animation = "dropdown-open 1s";
        btn.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else if (btn.innerHTML == '<i class="fa-solid fa-x"></i>') {
        dropdowMenu.style.animation = "dropdown-close 1s";
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        dropdowMenu.style.display = 'none';
    }
}