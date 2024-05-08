const sqaures = document.querySelectorAll(".bg-color");
for(let i = 0; i<sqaures.length; i++) {
    console.log(sqaures[i]);
    sqaures[i].style.backgroundColor = sqaures[i].getAttribute("id");
    sqaures[i].addEventListener('click', () => {
        console.log("hello world");
        //body.style.backgroundColor = sqaures[i].getAttribute("id");
        document.querySelector(".color-palette").style.backgroundColor = sqaures[i].getAttribute("id");
    })
}
