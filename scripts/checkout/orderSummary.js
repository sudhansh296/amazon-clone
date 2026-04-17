import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {products,getProduct} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';

// import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOption.js';

import { renderPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary(){


    let cartSummaryHTML = '';

    cart.forEach((cartItem)=>{
      const productId = cartItem.productId;

    //   let matchingProduct;/
    const matchingProduct=getProduct(productId);// we created a function in product.js to reuse it anywhere in the files with the help of module down is the code we made earlier

    //   products.forEach((product)=>{
    //       if (product.id===productId){
    //           matchingProduct=product;
    //       }
    //   })

      // console.log(matchingProduct); show the html we generated 

      const deliveryOptionId = cartItem.deliveryOptionId;

      const deliveryOption = getDeliveryOption(deliveryOptionId);

    //   let deliveryOption;
    //   deliveryOptions.forEach((option)=>{
    //       if(option.id===deliveryOptionId){
    //           deliveryOption=option;
    //       }
    //   });
      //console.log(deliveryOption);

      const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays,'days'
          );
          const dateString = deliveryDate.format('dddd, MMMM D');
      

      cartSummaryHTML+=`
      <div class="cart-item-container 
       js-cart-item-container
       js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    ${matchingProduct.getPrice()}
                  </div>
                  <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                      Update
                    </span>
                    <input class="quantity-input js-quantity-input-${matchingProduct.id}" type="number" min="1" max="100" style="display: none;">
                    <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}" style="display: none;">
                      Save
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(matchingProduct,cartItem)}
                </div>
              </div>
            </div>
      
      `;
    });

    //console.log(cartSummaryHTML)

    function deliveryOptionsHTML(matchingProduct,cartItem){

    let html = '';

      deliveryOptions.forEach((deliveryOption)=>{
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays,'days'

          );
          const dateString = deliveryDate.format('dddd, MMMM D');
          
          const priceString = deliveryOption.priceCents === 0
          ? 'FREE'
          : `$${formatCurrency(deliveryOption.priceCents)}-`;

          const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

          html+= `<div class="delivery-option js-delivery-option" 
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id ="${deliveryOption.id}">
                    <input type="radio"
                    ${isChecked ? 'checked': ''}
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString} - Shipping
                      </div>
                    </div>
                  </div>`;
      });
      return html;
    };

    document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;

    document.querySelectorAll('.js-delete-link').forEach((link)=>{
      link.addEventListener('click',()=>{
          const productId=link.dataset.productId // product-id converted to camel case and saved in a variable productId
          //console.log(productId)
          removeFromCart(productId);
          //console.log(cart);
          const container=document.querySelector(
              `.js-cart-item-container-${productId}`);
          //console.log(container);

          container.remove();
          renderPaymentSummary();  
      });
    });

    document.querySelectorAll('.js-update-link').forEach((link)=>{
      link.addEventListener('click',()=>{
          const productId = link.dataset.productId;
          const container = document.querySelector(`.js-product-quantity-${productId}`);
          container.classList.add('is-editing-quantity');
          
          const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
          const saveLink = document.querySelector(`.js-save-link[data-product-id="${productId}"]`);
          const quantityLabel = container.querySelector('.quantity-label');
          
          quantityInput.style.display = 'inline-block';
          saveLink.style.display = 'inline-block';
          link.style.display = 'none';
          
          const currentQuantity = parseInt(quantityLabel.textContent);
          quantityInput.value = currentQuantity;
          quantityInput.focus();
      });
    });

    document.querySelectorAll('.js-save-link').forEach((link)=>{
      link.addEventListener('click',()=>{
          const productId = link.dataset.productId;
          const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
          const newQuantity = parseInt(quantityInput.value);
          
          if (newQuantity < 1 || newQuantity >= 100) {
            alert('Quantity must be between 1 and 99');
            return;
          }
          
          updateQuantity(productId, newQuantity);
          renderOrderSummary();
          renderPaymentSummary();
      });
    });

    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
      element.addEventListener('click',()=>{
          const {productId,deliveryOptionId} = element.dataset;
          updateDeliveryOption(productId,deliveryOptionId);
          renderOrderSummary();
          renderPaymentSummary();
      });
    });

  }

  function updateQuantity(productId, newQuantity) {
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        cartItem.quantity = newQuantity;
      }
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  //renderOrderSummary(); // we splited the file into orderSummary.js and paymentSummary.js so we will run this function to the checkout.js 