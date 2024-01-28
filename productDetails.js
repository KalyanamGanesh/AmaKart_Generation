
var productDetail=JSON.parse(localStorage.getItem('productDetail'));
document.body.innerHTML=`
<div id="product">
        <div class="left-column">
            <img id="productImg" src="${productDetail.thumbnail}" >
        </div>
        <div class="right-column">
            <div class="product-description">
                <h1 id="title">${productDetail.title}</h1>
                <h4 id="brand">${productDetail.brand}</h4>
                <h3>
                    Price: Rs 
                    <span id="price">${productDetail.price}</span>
                </h3>
                <div class="description">
                    <h3>Description</h3>
                    <p id="description">${productDetail.description}</p>
                </div>
                <div class="product-preview">
                    <h3>Product Preview</h3>
                    <div class="previewImg">

                    </div> 
                </div>
            </div>
            <button id='addToCartBtn' value='${productDetail.id}'> Add to cart</button>
            <a href='./cartPage.html'><button>Checkout</button></a>
            
        </div>
    </div>`;
//<span id='iconDisADDMIN'><i class="fa-solid fa-plus add"></i><i class="fa-solid fa-minus sub"></i>Product Count :<span id='productCount'>0</span></span>
var productImageElement = document.getElementsByClassName('previewImg')[0]
for (let i = 0; i < productDetail.images.length; i++) {
  var smallImg = document.createElement('img');
  smallImg.id = 'img' + i;
  smallImg.src = productDetail.images[i];
  if (i == 0) {
    smallImg.classList.add('active');
  }
  smallImg.onclick = function () {
    addActiveClass(i);
  }
  productImageElement.appendChild(smallImg);
}
function addActiveClass(num){
  var previousActiveImage=document.getElementsByClassName('active')[0];
  previousActiveImage.classList.remove('active');
  var activeCard=document.getElementById('img'+num);
  activeCard.classList.add('active');
  var productImageElement=document.getElementById('productImg');
  productImageElement.src=productDetail.images[num]
}


// var add1=document.getElementsByClassName('add')[0];
// var sub1=document.getElementsByClassName('sub')[0];
var productCount1=document.getElementById('productCount');
var addToCartBtn = document.getElementById('addToCartBtn');
var cartProducts = JSON.parse(localStorage.getItem('cartProductsId'));
var addSub=document.getElementById('iconDisADDMIN');
// var count=0;
addToCartBtn.addEventListener('click', function() {
  //addSub.style.display='inline-block';
  // count+=1;
  // productCount1.innerText=count;
  addToCartBtn.innerText="Added To Cart --->"
  if (cartProducts == null) {
    cartProducts = [];
    cartProducts.push(addToCartBtn.value);
    localStorage.setItem('cartProductsId', JSON.stringify(cartProducts));
  } else {
    cartProducts.push(addToCartBtn.value);
    localStorage.setItem('cartProductsId', JSON.stringify(cartProducts));
  }
});
