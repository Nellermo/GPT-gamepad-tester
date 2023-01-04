/*--------------------------*/
/*   Created by Nellermo!   */
/*                          */
/*     1/4/2023 10:02PM     */
/*--------------------------*/

"use strict"

const waitingScreen = document.getElementById("waiting-screen");
const main = document.getElementById("main");
const container = document.getElementById("container");
const mainText = document.getElementById("main-text");

// axes
const leftSticVertical = document.getElementById("left-stic-vertical");
const leftSticHorisontal = document.getElementById("left-stic-horisontal");
const rightSticVertical = document.getElementById("right-stic-vertical");
const rightSticHorisontal = document.getElementById("right-stic-horisontal");


let myGamepad;

// actions
function gameLoop()
{
    const gp = navigator.getGamepads()[0];
    const [gpAxes] = navigator.getGamepads();

    // axes
    if (gpAxes.axes[0] !== 0)
    {
        leftSticHorisontal.textContent = `Left Stick Horisontal ${gpAxes.axes[0]}`;
        if (gpAxes.axes[0] > 0.001 || gpAxes.axes[0] < -0.001){mainText.textContent = `axes`;};
    }

    if (gpAxes.axes[1] !== 0)
    {
        leftSticVertical.textContent = `Left Stick Vertical ${gpAxes.axes[1]}`;
        if (gpAxes.axes[1] > 0.001 || gpAxes.axes[1] < -0.001){mainText.textContent = `axes`;};
    }

    if (gpAxes.axes[2] !== 0)
    {
        rightSticHorisontal.textContent = `Right Stick Horisontal ${gpAxes.axes[2]}`;
        if (gpAxes.axes[2] > 0.001 || gpAxes.axes[2] < -0.001){mainText.textContent = `axes`;};
    }
    
    if (gpAxes.axes[3] !== 0)
    {
        rightSticVertical.textContent = `Right Stick Vertical ${gpAxes.axes[3]}`;
        if (gpAxes.axes[3] > 0.001 || gpAxes.axes[3] < -0.001){mainText.textContent = `axes`;};
    }

    // a b x y
    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed)
    {
        console.log("A", gp.buttons[0].value);
        mainText.textContent = `A ${gp.buttons[0].value}`;
    }
    else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed)
    {
        console.log("B", gp.buttons[1].value);
        mainText.textContent = `B ${gp.buttons[1].value}`;
    }
    else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed)
    {
        console.log("X", gp.buttons[2].value);
        mainText.textContent = `X ${gp.buttons[2].value}`;
    }
    else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed)
    {
        console.log("Y", gp.buttons[3].value);
        mainText.textContent = `Y ${gp.buttons[3].value}`;
    }
    // LB RB
    else if (gp.buttons[4].value > 0 || gp.buttons[4].pressed)
    {
        console.log("LB", gp.buttons[4].value);
        mainText.textContent = `LB ${gp.buttons[4].value}`;
    }
    else if (gp.buttons[5].value > 0 || gp.buttons[5].pressed)
    {
        console.log("RB", gp.buttons[5].value);
        mainText.textContent = `RB ${gp.buttons[5].value}`;
    }
    // LT RT
    else if (gp.buttons[6].value > 0 || gp.buttons[6].pressed)
    {
        console.log("LT", gp.buttons[6].value);
        mainText.textContent = `LT ${gp.buttons[6].value}`;
    }
    else if (gp.buttons[7].value > 0 || gp.buttons[7].pressed)
    {
        console.log("RT", gp.buttons[7].value);
        mainText.textContent = `RT ${gp.buttons[7].value}`;
    }
    // select start
    else if (gp.buttons[8].value > 0 || gp.buttons[8].pressed)
    {
        console.log("SELECT-", gp.buttons[8].value);
        mainText.textContent = `SELECT- ${gp.buttons[8].value}`;
    }
    else if (gp.buttons[9].value > 0 || gp.buttons[9].pressed)
    {
        console.log("START+", gp.buttons[9].value);
        mainText.textContent = `START+ ${gp.buttons[9].value}`;
    }
    // L3 R3
    else if (gp.buttons[10].value > 0 || gp.buttons[10].pressed)
    {
        console.log("L3", gp.buttons[10].value);
        mainText.textContent = `L3 ${gp.buttons[10].value}`;
    }
    else if (gp.buttons[11].value > 0 || gp.buttons[11].pressed)
    {
        console.log("R3", gp.buttons[11].value);
        mainText.textContent = `R3 ${gp.buttons[11].value}`;
    }
    // D-PAD
    else if (gp.buttons[12].value > 0 || gp.buttons[12].pressed)
    {
        console.log("D-Pad Up", gp.buttons[12].value);
        mainText.textContent = `D-Pad Up ${gp.buttons[12].value}`;
    }
    else if (gp.buttons[13].value > 0 || gp.buttons[13].pressed)
    {
        console.log("D-Pad Down", gp.buttons[13].value);
        mainText.textContent = `D-Pad Down ${gp.buttons[13].value}`;
    }
    else if (gp.buttons[14].value > 0 || gp.buttons[14].pressed)
    {
        console.log("D-Pad Left", gp.buttons[14].value);
        mainText.textContent = `D-Pad Left ${gp.buttons[14].value}`;
    }
    else if (gp.buttons[15].value > 0 || gp.buttons[15].pressed)
    {
        console.log("D-Pad Right", gp.buttons[15].value);
        mainText.textContent = `D-Pad Right ${gp.buttons[15].value}`;
    }
  
    requestAnimationFrame(gameLoop);
};

// gamepad is connected?
// connected
window.addEventListener("gamepadconnected", function(event)
{
    // view
    waitingScreen.classList.add("hidden");
    main.classList.remove("hidden");

    container.style.width = "700px";
    container.style.height = "580px";
    
    // cd
    console.log("A gamepad connected:\n", event.gamepad);
    gameLoop();
});

// disconnected
window.addEventListener("gamepaddisconnected", function(event)
{
    // view
    waitingScreen.classList.remove("hidden");
    main.classList.add("hidden");

    container.style.width = "320px";
    container.style.height = "200px";

    // cd
    console.log("A gamepad", event.gamepad.id,"disconnected:");
});