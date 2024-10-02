function handleWindowChange() {
    let footerLinks = document.getElementById("toggle-f-direction");

    if(window.innerWidth <= 780) {
        footerLinks.classList.add("flex-row");
        footerLinks.classList.remove("flex-col");
    }
    else {
        footerLinks.classList.add("flex-col");
        footerLinks.classList.remove("flex-row");
    }

    if(window.innerWidth < 1000) {
        let profileButtons = document.querySelectorAll("#profile-buttons > button");
        profileButtons.forEach(item => item.classList.add("flex-grow"));
    }
    else {
        let profileButtons = document.querySelectorAll("#profile-buttons > button");
        profileButtons.forEach(item => item.classList.remove("flex-grow"));
    }
}

window.onload = handleWindowChange;

window.onresize = handleWindowChange;