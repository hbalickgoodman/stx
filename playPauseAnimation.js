const controllers = document.getElementsByClassName("play-pause-icon");
function stopstartanimate() {

    for (const icon of controllers) {
        if (icon.classList.contains("pause")) {
            icon.classList.add("play");
            icon.classList.remove("pause");
            makePlay = false;
        } else {
            console.log("run");
            icon.classList.add("pause");
            icon.classList.remove("play");
            makePlay = true;
        }

    }
}

