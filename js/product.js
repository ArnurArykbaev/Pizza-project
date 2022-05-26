;(function () {
    var catalog = document.querySelector('.catalog');
    
    if (catalog === null) {
        return;
    }

    var updateProductPrice = function (product, price) {
        var productPrice = product.querySelector('.product_price-value');
        productPrice.textContent = price;
    };

    var changeProductSize = function(target) {
        var product = myLib.closestItemByClass(target, 'product');
        var previousBtnActive = product.querySelector('.product_size.is-active');
        var newPrice = target.getAttribute('data-product-size-price');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
        updateProductPrice(product, newPrice);
    };

    var changeProductOrderInfo = function(target) {
        var product = myLib.closestItemByClass(target, 'product');
        var order = document.querySelector('.popup-order');

        var productTitle = product.querySelector('.product_title').textContent;
        var productSize = product.querySelector('.product_size.is-active').textContent;
        var productPrice = product.querySelector('.product_price-value').textContent;
        var productImgSrc = product.querySelector('.product_img').getAttribute('src');

        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);
        order.querySelector('.order-info-size').setAttribute('value', productSize);
  
        order.querySelector('.order_img').setAttribute('src', productImgSrc);
        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
        order.querySelector('.order_size').textContent = productSize;
    };
    
    catalog.addEventListener('click', function(e) {
        var target=e.target;
        
        if (target.classList.contains ('product_size')) {
            e.preventDefault();
            changeProductSize(target);
        }

        if (target.classList.contains ('product_btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})();