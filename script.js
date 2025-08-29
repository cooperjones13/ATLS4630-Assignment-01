let imageContainers = document.getElementsByClassName("image-container");

console.log(imageContainers);

Array.from(imageContainers).forEach(container => {
    container.addEventListener('mouseenter', ()=>{
        console.log(container)
        container.style.flexGrow = 2;
        container.children[2].style.color = "#000000aa"
    });
    container.addEventListener('mouseleave', ()=>{
        console.log(container)
        container.style.flexGrow = 1;
        container.children[2].style.color = "transparent"
    });
});

let diceSizes = [20, 12, 10, 8, 6, 4]

diceSizes.forEach(diceSize => {
    let diceContainer = document.getElementById(`d${diceSize}-container`);
    diceContainer.addEventListener('click', () =>{
        diceContainer.children[1].textContent = Math.ceil(Math.random()*diceSize)
        diceContainer.children[1].style.color = '#51bb51';
        diceContainer.children[1].style.fontSize = '3rem';
        setTimeout(()=>{
            diceContainer.children[1].style.color = 'white';
            diceContainer.children[1].style.fontSize = '2rem';
        },1500)
    });
});