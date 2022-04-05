function change() {
    let body = document.body;
    body.classList.toggle("dark");

    let box = document.getElementById("dark-box");
    box.classList.toggle("dbox");

    let box2 = document.getElementById("dark-box2");
    box2.classList.toggle("dbox2");

    let button = document.getElementById("dark-button");
    button.classList.toggle("dbutton");

    let ficons = document.getElementById("f-icons");
    ficons.classList.toggle("dicons");

    let iicons = document.getElementById("i-icons");
    iicons.classList.toggle("dicons");

    let ticons = document.getElementById("t-icons");
    ticons.classList.toggle("dicons");

    let dicons = document.getElementById("d-icons");
    dicons.classList.toggle("dicons");
}