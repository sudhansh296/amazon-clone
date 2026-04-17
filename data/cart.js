export let cart;

loadFromStorage();

export function loadFromStorage(){
    cart= JSON.parse(localStorage.getItem('cart'));

if(!cart){ // default value
    cart = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionId :'1' // act as a foreign key 1 point to the cart 1 .
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionId:'2'
}];
}

};

// [{
//     productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//     quantity:2
// },{
//     productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
//     quantity:1
// }]; 

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
};


export function addToCart(productId){
     let matchingItem;

       cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){ // if parameter is not given it will show an error that the productid is not defined 
                matchingItem=cartItem;
            }
       });

       if(matchingItem){
        matchingItem.quantity+=1;
       } else {
        cart.push({
            productId: productId,
            quantity:1,
            deliveryOptionId:'1'
       });
       }
       saveToStorage()//local storage function
};

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;

    saveToStorage();//local storage function
};

export function updateDeliveryOption(productId , deliveryOptionId){
    let matchingItem;

       cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){ 
                matchingItem=cartItem;
            }
       });

       matchingItem.deliveryOptionId=deliveryOptionId;

       saveToStorage();

};

export let products = []; 

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
  console.log(xhr.response)
  
  fun();

});

  xhr.open('GET','https:/supersimplebackend.dev/cart');
  xhr.send();
  //xhr.response() load using the addToListner and then get the response from it 
}

