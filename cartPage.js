var productsFromLocalStorage=JSON.parse(localStorage.getItem('products'));
var items1=document.getElementById('items');
var tc=document.getElementById('totalCost');
var cartProducts=JSON.parse(localStorage.getItem('cartProductsId'));
var counter={};
cartProducts.forEach(ele => {
    if(counter[ele]){
        counter[ele]+=1;
    }else{
        counter[ele]=1;
    } 
});

var uniqueCartProducts=[...new Set(cartProducts)];
var totalSum=0;
for(var i of uniqueCartProducts){
    totalSum+=productsFromLocalStorage[i-1].price*counter[i];
    items1.innerHTML+=`
    <div class='section'>
        <div class="left" >
            <img src='${productsFromLocalStorage[i-1].thumbnail}'>
        </div>
        <div class="right">
            <h3>${productsFromLocalStorage[i-1].title}</h3>
            <p><i class="fa-solid fa-xmark"></i>${counter[i]}</p>
            <p>Amount Rs ${productsFromLocalStorage[i-1].price*counter[i]}</p>
        </div>
    </div>`;
    tc.innerHTML=`<div id="totalCost">
    <p>total Amount</p>
    <p>Amount Rs:${totalSum}</p>
    <button onclick="orderPage()">Place Order</button>
    </div>`;
}
    function orderPage(){
        location.assign("./orderPage.html");
    }

