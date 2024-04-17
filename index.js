const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id == "#181818") {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }
        if (e.target.id == "white") {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if (e.target.id == "#40E0D0") {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
    })
})