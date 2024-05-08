
console.log("hellll")

document.querySelector("#bmi-info").addEventListener('submit', function (e) {
    
    e.preventDefault();

    const h = parseInt(document.querySelector("#height").value);
    const w = parseInt(document.querySelector("#weight").value);
    const textbox = document.querySelector("#textbox");

    if(h<0 || h=='' || isNaN(h)){
        textbox.innerHTML = 'please enter valid height';
    }
    if(w<0 || w=='' || isNaN(w)){
        textbox.innerHTML = 'please enter valid weight';
    }
    else{
        document.querySelector("#textbox").innerHTML = `your bmi is ${h*w}`;
    }
    
})