document.querySelector('p').onclick = myClick;
function myClick() {
    let span = document.createElement('span');
    span.className = "item2"
        document.body.before(span);
    // console.log(22);
    let a = document.querySelector('.item1').textContent;
     let b = a;
    
    document.querySelector('.item2').innerHTML += b;
    console.log(a);
}