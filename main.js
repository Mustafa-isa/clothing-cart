let shop = document.getElementById("shop");
let cart =document.getElementById('cart')
let numProduct =0
// create array inside it obs

let arrItem = JSON.parse(localStorage.getItem('data')) || []


let arr = [
  {
    id: 1,
    img: "./images/img-1.jpg",
    pargraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi dolorum voluptate praesentium eligendi optio odit molestiae eos incidunt iste?,",
    h2: "t-shirt",
    price: 122
  },
  {
    id: 2,
    img: "./images/img-2.jpg",
    pargraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi dolorum voluptate praesentium eligendi optio odit molestiae eos incidunt iste?,",
    h2: "blouz",
    price: 45
  },
  {
    id: 3,
    img: "./images/img-3.jpg",
    pargraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi dolorum voluptate praesentium eligendi optio odit molestiae eos incidunt iste?,",
    h2: "sweat t-shirt",
    price: 45
  },
  {
    id: 4,
    img: "./images/img-4.jpg",
    pargraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi dolorum voluptate praesentium eligendi optio odit molestiae eos incidunt iste?,",
    h2: "t-body",
    price: 222
  }
];
// enter data
shop.innerHTML=''

for(let product =0 ; product< arr.length ;product++){
    shop.innerHTML+=`       <div class="item" id="item">
    <div class="nn">
    <img src=${arr[product].img} alt="">
    </div>
    <div class="details">
        <h2>${arr[product].h2}</h2>
        <p>${arr[product].pargraph}</p>
        <div class="bottom">
            <h3>${arr[product].price} <span><i class="fa-solid fa-dollar-sign"></i></span></h3>
            <div class="buttons">
                <i  onclick="decrement(${arr[product].id})"class="fa-solid fa-minus"></i>
                <span id="${arr[product].id}">0</span>
                <i onclick="increment(${arr[product].id})" class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
</div>`
}



function increment(id){
let search = arrItem.find((x) => x.id === id)
if(search === undefined){
  arrItem.push({
    id:id,
    item:1
  })
}else{
  search.item +=1

}
localStorage.setItem("data" ,JSON.stringify(arrItem))
update(id)

}




function decrement(id){
  let search = arrItem.find((x) => x.id === id)
if(search.item ===0) return 
else search.item  -=1 
update(id)
localStorage.setItem("data" ,JSON.stringify(arrItem))

  

}
 function update(id){
  let search = arrItem.find((x) => x.id === id)
  let el =document.getElementById(id)
  el.innerHTML=search.item
  calc()

 }
 function calc(){
  numProduct  = arrItem.map( e => e.item).reduce((e,a)  =>{
    return e+a
  })
  cart.innerHTML =numProduct
 }
