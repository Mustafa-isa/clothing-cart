let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);
// read num of product in cart icon
let cart = document.getElementById("cart");
let label = document.getElementById("label");
let shopping_cart = document.getElementById("shopping-cart");
function cal() {
if(basket.length >0){
    let num = basket
    .map((e) => {
      return e.item;
    })
    .reduce((e, a) => {
      return e + a;
    });

  cart.innerHTML = num;
}else{
    return
}

}
cal();if(basket.length !== 0){

    console.log("fror")
    
    
    }else{
    shopping_cart.innerHTML =``
    label.innerHTML =`
     <h2>cart is empty</h2>
     <a href ="index.html"> <button class ="empty">home</button></a>`
    
    }

