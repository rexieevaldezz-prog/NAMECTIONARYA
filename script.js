const alphabetDiv = document.getElementById("alphabet");
const searchInput = document.getElementById("searchInput");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* CREATE A-Z BUTTONS */

letters.forEach(letter => {

    const button = document.createElement("button");

    button.innerText = letter;

    button.addEventListener("click", () => {

        const section = document.getElementById(letter);

        if(section){

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

    alphabetDiv.appendChild(button);

});


/* SEARCH FUNCTION */

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const allLetters = document.querySelectorAll(".letter");

    allLetters.forEach(letterSection => {

        const terms = letterSection.querySelectorAll(".term");

        let hasVisibleTerm = false;

        terms.forEach(term => {

            const text = term.innerText.toLowerCase();

            if(text.includes(value)){

                term.style.display = "block";
                hasVisibleTerm = true;

            }else{

                term.style.display = "none";

            }

        });

        /* SHOW LETTER ONLY IF MATCH EXISTS */

        if(hasVisibleTerm){

            letterSection.style.display = "block";

        }else{

            letterSection.style.display = "none";

        }

    });

});