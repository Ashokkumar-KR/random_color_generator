
const body =document.querySelector('body');
const but = document.querySelector('#but');
const h1 = document.querySelector('h1');
but.addEventListener('click', function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let newColor = `rgb(${r},${g},${b})`;
    if(b<80){
        h1.style.color = 'white';
        but.style.backgroundColor = 'white';
    }else{
        h1.style.color = 'black';
    }
    body.style.backgroundColor= newColor;
    h1.innerText = newColor;
    }
)
