const controllers = document.getElementsByClassName("play-pause-icon");
const floating = document.getElementsByClassName("floating");
function stopstartanimate() {

    for (const icon of controllers) {
        if (icon.classList.contains("pause")) {
            icon.classList.add("play");
            icon.classList.remove("pause");
            makePlay = false;
            for (const image of floating) {
                image.classList.add("stop-animation");
            }
        } else {
            console.log("run");
            icon.classList.add("pause");
            icon.classList.remove("play");
            makePlay = true;
            for (const image of floating) {
                image.classList.remove("stop-animation");
            }
        }

    }
}
const searchText = document.getElementById("search-text");
function ShiftSearchText() {
    document.querySelector("#search-text").classList.add("active-search-text");
}


function ShiftBack() {
    let searchText = document.querySelector("#search-text");
    let searchBox = document.getElementById("store-search");
    if (searchBox.value == '') {
        searchText.classList.remove("active-search-text");
    }
}

$(document).ready(function () {

    //detect if a label within our container is pressed
    $('.bottomForm label').keypress(function (e) {

        //set variable for the key, e is the event object being passed
        var key = e.which;

        //check if the variable is equal to 13 (the return key value)
        if (key == 13) {

            //set variable for this radio button attribute
            var forAttribute = $(this).attr("for");

            //if this is already checked, uncheck it
            if ($('#' + forAttribute).is(':checked')) {
                $('#' + forAttribute).prop("checked", false);
            }
            //if this is not checked, check it
            else {
                $('#' + forAttribute).prop("checked", true);
            }

        }

    });

});