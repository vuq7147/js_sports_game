let count = 0
    let numResets = document.getElementById("num-resets");
    let reset = document.getElementById("reset");
    
    reset.addEventListener("click", function() {
        count = count + 1;
        numResets.innerHTML = count;
        teamoneNumshoot.innerHTML = 0;
        counter1 = 0;
        teamoneHit.innerHTML = 0;
        goalcount1 = 0;
        teamtwoNumshoot.innerHTML = 0;
        counter2 = 0;
        teamtwoHit.innerHTML = 0;
    }) 
    
    let teamoneShoot = document.querySelector("#teamone-shoot");
    let counter1 = 0;
    let teamoneNumshoot = document.querySelector("#teamone-numshots");
    let teamoneHit = document.querySelector("#teamone-numhits");
    let goalcount1 = 0; 

    teamoneShoot.addEventListener("click", function () {
        console.log("+ button clicked");

        counter1 = counter1 + 1;

        teamoneNumshoot.innerHTML = counter1;

        if (Math.random()>= .5) {
            goalcount1 = goalcount1 + 1
            teamoneHit.innerHTML = goalcount1
        }

        var y = new Audio("./assets/sound/Swoosh_3.mp3")
        y.play(); 
    })

    let teamtwoShoot = document.querySelector("#teamtwo-shoot");
    let counter2 = 0;
    let teamtwoNumshoot = document.querySelector("#teamtwo-numshots");
    let teamtwoHit = document.querySelector("#teamtwo-numhits");
    let goalcount2 = 0

    teamtwoShoot.addEventListener("click", function () {
        console.log("+ button clicked");

        counter2 = counter2 + 1;

        teamtwoNumshoot.innerHTML = counter2;

        if (Math.random()>= .5) {
            goalcount2 = goalcount2 + 1;
            teamtwoHit.innerHTML = goalcount2
        }
 
        var y = new Audio("./assets/sound/Swoosh_3.mp3")
        y.play(); 
       

    })