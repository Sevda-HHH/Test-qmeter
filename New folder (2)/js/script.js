function myFunc() {
    alert("bghbk")
}
function handleCloseDialog() {
    let modal = document.querySelector(".deeTheDetails")
    modal.classList.add("d-none")
}
function handleOpenDialog() {
    let notesLarge = document.querySelector(".deeTheDetails .largeImg .notes")
    let notes = document.querySelector("#floatingTextarea2").value
    let modal = document.querySelector(".deeTheDetails ")
    let modalImg = document.querySelector(".deeTheDetails img")
    let mainImgSrc = document.querySelector("#selectedImgSrc").getAttribute("src")
    notesLarge.innerHTML = `<p>${notes}</p>`
    modalImg.removeAttribute('src')
    modalImg.setAttribute("src", mainImgSrc)
    modal.classList.remove("d-none")
}

function selecImage(url) {
    let mainImg = document.querySelector("#selectedImgSrc")
    mainImg.removeAttribute('src')
    mainImg.setAttribute("src", `./assets/img/${url}`)
}

function toggleShowCommmet() {
    let comment = document.querySelector(".commentsForOrder")
    comment.classList.toggle("d-none")
}

function showWrittenComment(value) {
    let notes = document.querySelector(".notes")
    notes.innerHTML = `<p> ${value}</p>`
    console.log(value)
}

//cards 
function chooseCard(dataId) {
    let cards = document.querySelectorAll(".seectCard")
    cards.forEach(element => {
        element.classList.remove("active")
    });
    cards.forEach(element => {
        let att = element.getAttribute("data-id")
        if (att == dataId) {
            element.classList.add("active")
        }
    });
}

// tab menu
document.getElementById("Описание").style.display = "block";

function openTab(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}