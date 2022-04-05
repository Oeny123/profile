function change() {
    let body = document.body;
    body.classList.toggle("dark");

    let box = document.getElementById("dark-box");
    box.classList.toggle("dbox");

    let box2 = document.getElementById("dark-box2");
    box2.classList.toggle("dbox2");

    let button = document.getElementById("dark-button");
    button.classList.toggle("dbutton");
}