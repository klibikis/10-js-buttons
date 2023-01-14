const btn = document.querySelectorAll<HTMLElement>(".btn");
const boxes = document.querySelectorAll<HTMLElement>("div.box");
const input = document.querySelector<HTMLElement>(".input");
const output = document.querySelector<HTMLElement>(".output");


btn[0].addEventListener("click", () => {
    boxes[0].style.backgroundColor = "yellow";
})
btn[1].addEventListener("click", () => {
    boxes[1].firstElementChild.textContent = "SUCCESS"
})
btn[2].addEventListener("click", () => {
        boxes[2].style.visibility = "hidden";
})
btn[3].addEventListener("click", () => {
    if(boxes[3].style.visibility === ""){
        boxes[3].style.visibility = "hidden";
    }
    else{
        boxes[3].style.visibility = "";
    }
})
btn[4].addEventListener("click", () => {
    let colors:string[] = ["red", "yellow", "blue", "green", "purple"];
    let color: string = "";
    while(true){
        color = colors[Math.floor(Math.random()*5)];
        if(boxes[4].style.backgroundColor !== color){
            boxes[4].style.backgroundColor = color;
            break;
        }
    }
})
// Timer for box No6.
btn[5].addEventListener("click", () => {
    let func = (i: number) => {
        setTimeout(() => {
            boxes[5].firstElementChild.textContent = String(i);
        }, i*3000)
    }
    for(let i=0; i<=10; i++){
        func(i);
    }  
})
// Button 7 - change all box colors and background
btn[6].addEventListener("click", () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "#18D5E1";
    })
    document.body.style.backgroundColor = "#000000"
    output.style.color = "white"
})
// Box No1. => background color red on hover
boxes[0].addEventListener("mouseover", () => {
    boxes[0].style.backgroundColor = "red";
})
boxes[0].addEventListener("mouseout", () => {
    boxes[0].style.backgroundColor = "";
})
// Timer for box No5 on hover.
    let timeoutId: NodeJS.Timeout;
boxes[4].addEventListener("mouseover", () => {
    let func1 = (i: number) => {
        setTimeout(() => {
            boxes[4].firstElementChild.textContent = String(i);
        }, i*3000)
    }
    for(let i=0; i<=10; i++){
        func1(i);
    }  
})
boxes[4].addEventListener("mouseout", () => {
    clearTimeout(timeoutId);
    boxes[4].firstElementChild.textContent = "0";
})
// TEXT OUTPUT

input.addEventListener("keypress", (e) => {
    output.textContent += `${e.key}`;
})

// RESET
btn[7].addEventListener("click", () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    })
    document.body.style.backgroundColor = ""
    boxes[2].style.visibility = ""
    boxes[3].style.visibility = ""
    boxes[1].firstElementChild.textContent = "FAIL"
})

