function results(){
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    let x= Number(i.value);
    let y= Number(j.value);
    let result = (x+y);
    let print = document.querySelector('span#answer');
    print.textContent = result;
}
let b=document.querySelector('button#calc');
b.addEventListener('click',results);