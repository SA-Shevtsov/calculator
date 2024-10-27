let input = document.querySelector('.calculator__input');
let output = document.querySelector('.calculator__output');

document.addEventListener('click', (e) => {
    if (e.target.className == "calculator__button"){
        if (e.target.textContent === "AC"){
            input.textContent = "";
            output.textContent = "";
        } else if (e.target.textContent === "<") {
            input.textContent = input.textContent.slice(0, input.textContent.length-1);
        } else if (e.target.textContent === "=") {
            output.textContent = eval(input.textContent);
        } else if(output.textContent !== "" && (
                  e.target.textContent === "/" || 
                  e.target.textContent === "*" || 
                  e.target.textContent === "-" || 
                  e.target.textContent === "+")) 
            {
            input.textContent = output.textContent + e.target.textContent;
            output.textContent = "";
        } else {
            input.textContent += e.target.textContent;
        }
    }
})