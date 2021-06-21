
function frasesRep () {
    const div = document.querySelector('.div');
    var c = 1
    while (c <= 6) {
        div.innerHTML += `<p>Frase ${c}</p>`
        c++

    } 
}

frasesRep();