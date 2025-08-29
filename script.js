let diceSizes = [20, 12, 10, 8, 6, 4];

//looping over each container based on the id naming convention instead of attaching eventListeners each time
diceSizes.forEach(diceSize => {
    let diceContainer = document.getElementById(`d${diceSize}-container`);
    //Adds click effects to roll each dice
    diceContainer.addEventListener('click', () =>{
        diceContainer.children[1].textContent = Math.ceil(Math.random()*diceSize) //Generates a random number based on the number of sides on the current die
        diceContainer.children[1].style.color = '#51bb51'; //temporarily sets color to green and enlarges text to indicate that the dice has been rolled
        diceContainer.children[1].style.fontSize = '3rem';
        setTimeout(()=>{
            diceContainer.children[1].style.color = 'white'; //sets the color and size back to normal
            diceContainer.children[1].style.fontSize = '2rem';
        },1500)
    });

    // Adds Hover Effects for each dice container
    diceContainer.addEventListener('mouseenter', ()=>{
        console.log(`Mount entered d${diceSize} container`)
        diceContainer.style.flexGrow = 2; //allows the currently hovered box to grow slightly on hover
        diceContainer.children[2].style.color = "#000000aa" //Makes the dice description "Twenty Sided Die" visible on hover
    });
    diceContainer.addEventListener('mouseleave', ()=>{
        //sets everything back to normal after hover ends
        console.log(`Mount left d${diceSize} container`)
        diceContainer.style.flexGrow = 1;
        diceContainer.children[2].style.color = "transparent"
    });
});