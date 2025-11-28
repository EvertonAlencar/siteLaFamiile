function tooglebtn (){
    let btn = document.getElementById("toast-menu-button");
    if (btn.innerHTML == '<i class="fa-solid fa-bars"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-x"></i>'
    } else if (btn.innerHTML == '<i class="fa-solid fa-x"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
}