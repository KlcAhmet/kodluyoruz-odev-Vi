const darkTheme = document.querySelector("body");
const darkThemeButton = document.getElementById("theme-button");
const partyThemeButton = document.getElementById("party-button");

darkThemeButton.addEventListener("click", function() {
    if (darkTheme.className === "") {
        darkTheme.classList.add("body--dark");
    } else {
        darkTheme.className = "";
    }
});

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

partyThemeButton.addEventListener("click", async function() {

    while (true) {
        darkTheme.classList.add("body--red");
        await sleep(200);
        darkTheme.classList.remove("body--red");
        darkTheme.classList.add("body--orange");
        await sleep(200);


        darkTheme.classList.remove("body--orange");
        darkTheme.classList.add("body--green");
        await sleep(200);


        darkTheme.classList.remove("body--green");
        darkTheme.classList.add("body--blue");


        await sleep(200);
        darkTheme.classList.remove("body--blue");
        darkTheme.classList.add("body--indigo");


        await sleep(200);
        darkTheme.classList.remove("body--indigo");
        darkTheme.classList.add("body--violet");
        await sleep(200);
        darkTheme.classList.remove("body--violet");
        await sleep(200);
    }



});