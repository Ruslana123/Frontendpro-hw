const smiles = [
    {
        smile: "&#128521;",
        vote_counter: 0
    },
    {
        smile: "&#128517;",
        vote_counter: 0
    },
    {
        smile: "&#128514;",
        vote_counter: 0
    },
    {
        smile: "&#128513;",
        vote_counter: 0
    },
    {
        smile: "&#128512;",
        vote_counter: 0
    },
    {
        smile: "&#128512;",
        vote_counter: 0
    },

]
const wrapper = document.querySelector("#wrapper");



smiles.forEach(item => {
    const mysmile = document.createElement('div');
    mysmile.innerHTML = item.smile;
    mysmile.classList.add('smile');

    wrapper.appendChild(mysmile);

    mysmile.addEventListener("click",  ()=> {
        item.vote_counter += 1;
        counter.textContent = item.vote_counter;

    });

    const counter = document.createElement("div");
    counter.textContent = item.vote_counter;
    counter.classList.add('vote-counter');

    mysmile.appendChild(counter);

});


