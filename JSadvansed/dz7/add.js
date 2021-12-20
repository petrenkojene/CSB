let smallPrice = 100;
let averagePrice = 150;
let bigPrice = 200;
let price = 100;
let flag;
let smile = false;
let btn = document.querySelectorAll('.size_button');
for (let button of btn){
    button.addEventListener('click', function(){
        btn.forEach((e)=>e.classList.remove('active'));
        this.classList.toggle('active')
        let buttonActivValue = document.querySelector('.active').value;
        console.log(buttonActivValue)
        switch (buttonActivValue) {
            case '1':
                mom = smallPrice;
                
               
                break;
    case '2':
    mom =averagePrice;
    
    
    
    break;
    case '3':
    mom =bigPrice;
  
    
    break;
    default:
        mom =smallPrice;
        
         
       
        
        
        break; 
              
        }
        return mom
        
    })
    add(mom)
}
function add(elem){
  return price = elem}
  console.log(price)
  
  console.log(price)
// for (var button of btn) {
//    button.addEventListener('click', function () {
//      btn.forEach(i => i.classList.remove('active'));
   
//      this.classList.toggle('active');
//      var val = document.querySelector('.active').value;
//      switch(val){
//         case '1':
//     price =smallPrice;
//     console.log(price)
//     break;
//     case '2':
//     price =averagePrice;
//     console.log(price)
//     break;
//     case '3':
//     price =bigPrice;
//     console.log(price)
//     break;
//     default:
//         price =smallPrice;
//         console.log(price) 
//         break 
//     }
//     document.querySelector('.totalPrice').innerHTML = pricekl
// return price
//    });
   let ingr = document.querySelector('.container_additive');
let lnk = document.querySelector('.ingredients');
lnk.addEventListener('click',function(){
    if(smile){
        ingr.style.display = 'none';
    }else{
        ingr.style.display = 'block';
    }
smile = !smile
})










