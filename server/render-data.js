const containers = document.querySelectorAll(".display-data");
const products = document.querySelectorAll(".display-data .item");
const productContainer = document.querySelectorAll(".product-container");
const closeProductBtn = document.querySelectorAll('.close-product-btn');
const body = document.querySelectorAll('body')
const searchInputs = document.querySelectorAll('#search');
const cartContainer = document.querySelectorAll('.cart-container');
const cartOpenBtn = document.querySelectorAll('.open-cart-btn');
const cartCloseBtn = document.querySelectorAll('.close-cart-btn');
const cartProductsContainer = document.querySelectorAll('.cart-products');
const cartTotalContainer = document.querySelectorAll('.cart-total');
const cartCounter = document.querySelectorAll('.cart-counter');


let containerDataTarget;
let url = './server/products.json';
let cart;
let data;
let finalArray;

if(localStorage.getItem('cart') == null) {
  cart = [];
 
}else {
  cart = JSON.parse(localStorage.getItem('cart'));
  cartFunction()

}
// Cart Opening Events

if (cart.length == 0) {
  cartProductsContainer.forEach(container => {
    container.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
  });

}

cartOpenBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    cartContainer.forEach(container => {
      container.classList.add('show');
      body.forEach(el => {
        el.classList.add('over-flow-hidden');
      })
    })

    localStorage.setItem('cart', JSON.stringify(cart));

  })
})

// Cart Closing Events

cartCloseBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    cartContainer.forEach(container => {
      container.classList.remove('show');
      body.forEach(el => {
        el.classList.remove('over-flow-hidden');
      })
    })
  })
})

// Geting Data Target From Containers
  
for (var i = 0; i < containers.length; i++) {
  let element = containers[i];
  containerDataTarget = element.dataset.target;

}

// Fetch Data Function

async function fetchData(url){
  const jsonData = await fetch(url);
  data = await jsonData.json()
  finalArray =  data[containerDataTarget]
}

// Invoking Render and Fetching Functions

(async ()=> {
  await fetchData(url)
  renderData(finalArray, containers)
}) ();   

// Search Function

searchInputs.forEach(search => {
  search.setAttribute('placeholder', `Search ${containerDataTarget == 'popular' ? 'top sold' : containerDataTarget}`);
})

// Render Function

function renderData(dataToRender, container) {
  let dataContainer = ``;

    let arrayToRender = dataToRender;

    for (let index = 0; index < arrayToRender.length; index++) {

        dataContainer += `
           <div class="item" onclick="view(${index})">
                  <img src="${ arrayToRender[index].image}" alt="" />
        
                  <p>
                    ${ arrayToRender[index].description}
                  </p>
        
                  <div class="price-pieces-container">
                    <span class="price">$${ arrayToRender[index].price}</span>
                    <div class="pieces-left-sale">
                      <span class="pieces-left"${arrayToRender[index].pieces < 5 ? arrayToRender[index].pieces + ' Pieces Left' : ' '}</span>
                      <span class="sale">${ arrayToRender[index].sale === null ? '' : arrayToRender[index].sale}</span>
                    </div>
                  </div>
        
                  <div class="rating-add-to-cart">
                    <button class="expand-product-bn">Expand Product</button>
                    <span class="rating">${ arrayToRender[index].rating} <i class="fas fa-star"></i></span>
                  </div>
                </div>
      
      
          `;
      
      
        
      };
      

        container.forEach(container => {
          container.innerHTML = dataContainer;
        })
    
}

// Add to Cart Function 

function addToCart(index) {
    let product = finalArray[index];


    cart.push(product);


 

    cartFunction();

}

// Cart Function
function cartFunction() {
    let cartDataContainer = '';
    for (let i = 0; i < cart.length; i++) {
        cartDataContainer += `
         <div class="cart-item">
        <img src="${cart[i].image}" alt="" />
        <div class="content">
          <p>${cart[i].description}</p>
          <div class="rating-price-cart">
            <span class="price">$${cart[i].price}</span>
            <span class="">${cart[i].rating} <i class="fas fa-star"></i> <span>+${cart[i].ratedProduct}</span> </span>
          </div>
          <button class="remove-btn" onclick="deleteProduct(${i})">Remove</button>

        </div>
  
      </div>
        
        
        `
      
    }

    let totalPrice = cart.reduce((total, product) => {

      return parseInt(total) + parseInt(product.price);
    
    }, 0);
    
    cartTotalContainer.forEach(container => {
      container.innerHTML = `
    
      <span class="products-count">(${cart.length}) Products</span>
      <span class="total-label">Total:</span>
      <span class="total-price">$${totalPrice}</span>

      <div class="cart-buttons">
        <button class="checkout-btn" >Checkout</button>
        <button class="clear-cart-btn" onclick="clearCart()">Clear Cart</button>

      </div>
    `

    })

    cartProductsContainer.forEach(container => {
      container.innerHTML = cartDataContainer;
    })
    cartCounter.forEach(counter => {
      counter.innerHTML = cart.length;
    })

    localStorage.setItem('cart', JSON.stringify(cart));

}

// Clear Cart Function 

function clearCart() {
    cart = [];
    cartFunction();
}

// Delete Product From Cart Function

function deleteProduct(index) {
    cart.splice(index, 1);
    cartFunction();
}

// Expand Product Function

function view(index) {
    body.forEach(el => {
        el.classList.add('over-flow-hidden')
    })
    productContainer.forEach(productContainer => {
        productContainer.classList.add('show')
        productContainer. innerHTML = `
        
        <div class="close-product-btn" onclick="closeProduct()">
        <i class="fas fa-xmark"></i>
        </div>

        <div class="image-container">
      <img src="${finalArray[index].image}" alt="">
      <button class="toggle-full-screen" onclick="toggleFullScreen(this.parentNode, this)"><i class="fas fa-maximize"></i></button>
        </div>


      <div class="text-content">
          <p>${ finalArray[index].description}</p>
          <div class="rating-container">
            <span class="rating">${finalArray[index].rating}</span> <i class="fas fa-star"></i> <span class="people-rated"> +${finalArray[index].ratedProduct}</span>
          </div>

          <div class="sale-pieces">
            <span class="sale">${ finalArray[index].sale === null ? '' : finalArray[index].sale}</span>
            <span class="pieces-left">${finalArray[index].pieces < 5 ? finalArray[index].pieces + ' Pieces Left' : ' '}</span>
          </div>

          <div class="price-get-it-tomorrow">
            <span class="price">$${finalArray[index].price}</span>
            <div class="get-it-tomorrow-order">
              <span class="get-it-tomorrow">Order It Now And Get It Tomorrow</span>
              <button class="add-to-cart" onclick="addToCart(${index})">Add to Cart</button>
            </div>
          </div>

          <div class="info">
            <h4>Information</h4>
            <ul>
                <li><label> Company:</label> ${finalArray[index].company}</li>
                <li><label> Model:</label> ${finalArray[index].model}</li>
                <li><label> Category:</label> ${finalArray[index].category}</li>
                <li><label> Count:</label> ${finalArray[index].count}</li>
            </ul>
          </div>
      </div>
        `


        
    })

    
}    

// Fullscreen Function

function toggleFullScreen(element, btn) {
  element.addEventListener('click', (e)=> {
    if(document.fullscreenElement) {
      document.exitFullscreen();
      btn.innerHTML = '<i class="fas fa-maximize"></i>';
    }else {
      element.requestFullscreen();
      btn.innerHTML = '<i class="fas fa-minimize"></i>';

    }
  })

  
}

// Close Product Function

function closeProduct() {
    productContainer.forEach(container => {
        container.classList.remove('show');
    })
    body.forEach(el => {
        el.classList.remove('over-flow-hidden')
    })
}

// Search Function

function searchData(searchTerm, dataToSearch) {

  let searchDataArray = [];   

  
  for(let i =0; i < dataToSearch.length; i++) {
    if(dataToSearch[i].description.toLowerCase().includes(searchTerm.toLowerCase())) {
      searchDataArray.push(dataToSearch[i]);

    }

    renderData(searchDataArray, containers)

  }


}

// Invoking Search Function While typing Search

searchInputs.forEach(search => {
  search.addEventListener('keyup', ()=>{
    searchData(search.value, finalArray)

  })


})

