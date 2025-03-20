// Search Function




// Magic Eight Ball Function - Randomizer


// Dark Theme Function

function darkTheme() {
    // let makeItDark = document.querySelector(".container"); // Select the container
    // makeItDark.classList.toggle("dark"); // Toggle the "dark" class on the container

    // OR if you meant to apply it to the entire page:
    document.body.classList.toggle("dark");
}

let button = document.querySelector(".dark-theme-button"); // Target only the dark mode button
button.addEventListener("click", darkTheme);

