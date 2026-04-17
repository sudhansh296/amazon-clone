class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
        
    }

    #loadFromStorage(){
      this.cartItems= JSON.parse(localStorage.getItem(this.#localStorageKey));

        if(!this.cartItems){ // default value
            this.cartItems = [{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId :'1' // act as a foreign key 1 point to the cart 1 .
        },{
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId:'2'
        }];
        }

        }

        saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
        }

    addToCart(productId){
    let matchingItem;

       this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){ // if parameter is not given it will show an error that the productid is not defined 
                matchingItem=cartItem;
            }
       });

       if(matchingItem){
        matchingItem.quantity+=1;
       } else {
        this.cartItems.push({
            productId: productId,
            quantity:1,
            deliveryOptionId:'1'
       });
       };
       this.saveToStorage()//local storage function
    }

    removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    this.cartItems=newCart;

    this.saveToStorage();//local storage function
    }


    updateDeliveryOption(productId ,deliveryOptionId){
    let matchingItem;

       this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){ 
                matchingItem=cartItem;
            }
       });

       matchingItem.deliveryOptionId=deliveryOptionId;

       this.saveToStorage();

    }

  }
   

const cart= new Cart('cart-oop');
const businessCart= new Cart('cart-business');

// cart.#localStorageKey= 'test'; it prevent us from accessing the property outside the class.

// cart.localStorageKey = 'cart-oop';
// businessCart.localStorageKey='cart-business'

// cart.loadFromStorage();
// businessCart.loadFromStorage();  moved to the constructor method that we created in the class  

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
















