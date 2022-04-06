function change() {
    let body = document.body;
    body.classList.toggle("dark");

    let box = document.getElementById("dark-box");
    box.classList.toggle("dbox");

    let box2 = document.getElementById("dark-box2");
    box2.classList.toggle("dbox2");

    // icons
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

    // project

    let phead = document.getElementById("project-header");
    phead.classList.toggle("p-h1");

    // home
    let name = document.getElementById("name");
    name.classList.toggle("dname"); 

    let skill = document.getElementById("skill");
    skill.classList.toggle("dskill");

    let s1 = document.getElementById("s1");
    s1.classList.toggle("ds1");

    // about
    let about = document.getElementById("about");
    about.classList.toggle("dabout");
}