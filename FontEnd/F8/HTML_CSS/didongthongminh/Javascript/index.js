let productlist = [];
var productApi = 'http://localhost:3000/product';

var product = document.querySelector('.grid-row');
let currentPage = 1;
let perPage = 10;
let totalPage = 0;

let perProduct = [];


function start() {
    getProduct(function (products){
        renderPageNumbers(products);
        render();
        productlist = products;
        perProduct = productlist.slice(
            (currentPage - 1) * perPage,
            (currentPage - 1) * perPage + perPage,
        )
    });
    handleCreateForm();
}

start();




function getProduct(callback) {
    fetch(productApi)
    .then(function (response) {
        return response.json();
    })
    .then(callback);
}

function handlePageNumber(num) {
    currentPage = num;
    perProduct = productlist.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    )
    render();
}

function renderPageNumbers(products) {
    totalPage = products.length / perPage;
    for (let i = 1; i < totalPage; i++) {
        document.querySelector('.home-phantrang').innerHTML += `<span onclick="handlePageNumber(${i})">${i}</span>`;
    }
}

function render() {

    var product = document.querySelector('.grid-row');
    var html = perProduct.map(function (product) {
        return `
            <div class="col l-2 m-4 c-6">
                <div class="home-product-item">
                    <div class="home-product-item-img" style="background-image:url(${product.img});"></div>
                    <h4 class="home-product-item-name">${product.name}</h4>
                    <div class="home-product-item-price">
                        <span class="home-product-item__price-current">${product.price}</span>
                        <span class="home-product-item__price-old">${product.priceOld}</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.percent}</span>
                    </div>
                </div>
            </div>
        `;
    });
    product.innerHTML = html.join('');
}

//create form 
/**
 * 1. lấy dom ô input 
 * 2. bắt xự kiện khi click vào btn create
 * 3. lấy giá trị của các ô input
 * 4. tạo ra cái object khi gắn vào dữ liệu
 * 5.Viết hàm truyền data với phương thức post
 * 
 */
function handleCreateForm() {
    var btnCreate = document.querySelector('.form-active-div-delete');
    btnCreate.onclick = function() {
        var id = document.querySelector('input[name="form-input-ID"]').value;
        var img = document.querySelector('input[name="form-input-IMAGE"]').value;
        var name = document.querySelector('input[name="form-input-NAME"]').value;
        var price = document.querySelector('input[name="form-input-PRICE"]').value;
        var priceOld = document.querySelector('input[name="form-input-Price_OLD"]').value;
        var percent = document.querySelector('input[name="form-input-PERCENT"]').value;
        if(id == "" || img == "" || name == "" || price == "" || priceOld == "" || percent == ""){
            alert('Bạn chưa nhập thông tin!!!');
        }else{
            
            var formProduct = {
                id: id,
                img: img,
                name: name,
                price: price,
                priceOld: priceOld,
                percent: percent
            }
            createProduct(formProduct);
        }
    }
}

// Hàm làm việc với API
function createProduct(data, callback) {
    var options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'// thông báo kiểu dữ liệu là json
        },
        body: JSON.stringify(data)// truyền sang dạng stringify là json
        
    }
    fetch(productApi, options) 
    .then(function (response) {
        return response.json();
    })
    .then(callback)
}


// Tìm kiếm
function searchProduct () {
    getProduct(function (products) {
        var searchProductInput = document.querySelector('input[name="searchInput"]').value;
        var productSearch = products.filter(value => {
            return value.name.toUpperCase().includes(searchProductInput.toUpperCase())
        })
        render(productSearch);
    });
}

function randerproduct(productSearch) {
    var product = document.querySelector('.grid-row');
    var html = productSearch.map(function (product) {
        return `
            <div class="col l-2 m-4 c-6">
                <div class="home-product-item">
                    <div class="home-product-item-img" style="background-image:url(${product.img});"></div>
                    <h4 class="home-product-item-name">${product.name}</h4>
                    <div class="home-product-item-price">
                        <span class="home-product-item__price-current">${product.price}</span>
                        <span class="home-product-item__price-old">${product.priceOld}</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.percent}</span>
                    </div>
                </div>
            </div>
        `;
    });
    product.innerHTML = html.join('');
}

// Cart

var itemParent = document.querySelector('.grid-row');
var cartProduct = [];
 itemParent.onclick = function(e) {
    var modal = e.target.closest('.home-product-item');
    if(modal) {
        
        var modallChitiet = document.querySelector('.modal-chitiet');
        modallChitiet.classList.add('open-modal-chitiet');
        var cartImg = modal.querySelector('.home-product-item-img')
        var cartbackImg = cartImg.getAttribute('style');
        var nameCart = cartbackImg.replace('background-image:url(',"");
        var cartImg = nameCart.replace(');', '');

        var nameCart = modal.querySelector('.home-product-item-name').innerText;

        var priceCart = modal.querySelector('.home-product-item__price-current').innerText;
        // addCart(cartImg,nameCart,priceCart);
        addCartchitiet(cartImg,nameCart,priceCart);
        // var cartList = productlist.push(cartProduct);
    }
}

function addCartchitiet(cartImg,nameCart,priceCart) {
    var cartList = document.querySelector('.modal-chitiet');
    var html = `
    <div class="form-active-chitiet col l-8 m-10 c-11">
                <h3>
                   ${nameCart}
                   </h3>
                   <i class="form-active-chitiet-close fa-solid fa-xmark"></i>
                   <div class="modal-container">
                    <div class="modal-container-img">
                        <div class="modal-container-above">
                            <img src="${cartImg}" alt="Điện thoại hình ảnh ở trên" class="modal-container-above-img">
                        </div>
            
                        <ul class="modal-container-below">
                            <li class="modal-container-below-img">
                                <img src="./img/iphone22.jpg" alt="Điện thoại hình ảnh ở dưới" class="modal-container-below-img-con">
                            </li>
                            <li class="modal-container-below-img">
                                <img src="./img/iphone22.jpg" alt="Điện thoại hình ảnh ở dưới" class="modal-container-below-img-con">
                            </li>
                            <li class="modal-container-below-img">
                                <img src="./img/iphone22.jpg" alt="Điện thoại hình ảnh ở dưới" class="modal-container-below-img-con">
                            </li>
                        </ul>
                    </div>
                    <div class="modal-container-embrace">
                        <div class="modal-container-price">
                            <h4>Giá: ${priceCart}</h4><sup>đ</sup>
                            <span>Nhận đặt trước</span>
                        </div>
            
                        <ul class="modal-container-list">
                            <li class="modal-container-type-item">
                                <img src="./img/iphone22.jpg" alt="" class="modal-container-type-item-img">
                                <div class="modal-container-type-item-blow">
                                    <span class="modal-container-type-item-tyle">Đen</span>
                                    <span class="modal-container-type-item-price">
                                        40.990.000
                                    <sup>đ</sup>
                                </span>
                                </div>
                            </li>
                            <li class="modal-container-type-item">
                                <img src="./img/iphone22.jpg" alt="" class="modal-container-type-item-img">
                                <div class="modal-container-type-item-blow">
                                    <span class="modal-container-type-item-tyle">Đen</span>
                                    <span class="modal-container-type-item-price">
                                        40.990.000
                                    <sup>đ</sup>
                                </span>
                                </div>
                            </li>
                            <li class="modal-container-type-item">
                                <img src="./img/iphone22.jpg" alt="" class="modal-container-type-item-img">
                                <div class="modal-container-type-item-blow">
                                    <span class="modal-container-type-item-tyle">Đen</span>
                                    <span class="modal-container-type-item-price">
                                        40.990.000
                                    <sup>đ</sup>
                                </span>
                                </div>
                                </li>
                            </ul>

                            <div class="modal-container-chitiet-khuyenmai">
                                <h4>Khuyến Mãi</h4>
                                <ul class="modal-container-chitiet-khuyenmai-list">
                                    <li class="modal-container-chitiet-khuyenmai-item">
                                        Mã ưu đãi giảm đến 500.000đ khi thanh toán
                                    </li>
                                    <li class="modal-container-chitiet-khuyenmai-item">
                                        Mã ưu đãi giảm đến 500.000đ khi thanh toán
                                    </li>
                                    <li class="modal-container-chitiet-khuyenmai-item">
                                        Mã ưu đãi giảm đến 500.000đ khi thanh toán
                                    </li>
                                    <li class="modal-container-chitiet-khuyenmai-item">
                                        Mã ưu đãi giảm đến 500.000đ khi thanh toán
                                    </li>
                                </ul>
                            </div>
                            <button class="modal-container-type-btn" onclick = 'addCart()'>
                                Thêm vào giỏ hàng
                            </button>

                            <button class="modal-container-type-btn-tragop-phantram">
                               <h4>Mua trả góp 0%</h4>
                               <span>Duyệt hồ sơ trong 5 phút </span>
                            </button>

                            <button class="modal-container-type-btn-tragop-the" >
                               <h4> Trả góp qua thẻ</h4>
                               <span>Visa, Mastercart, JCB, Amex</span>
                            </button>


                        </div>
                    </div>
                </div>
    `
    cartList.innerHTML = html;

    var cartClose = document.querySelector('.form-active-chitiet-close');

    cartClose.addEventListener('click', closeModal);

    function closeModal() {
        cartList.classList.remove('open-modal-chitiet');
    }


}

function addCart(cartImg,nameCart,priceCart) {
    var cartImg = document.querySelector('.modal-container-above-img').src
    // var cartbackImg = cartImg.getAttribute('style');
    // var nameCart = cartbackImg.replace('background-image:url(',"");
    // var cartImg = nameCart.replace(');', '');

    var nameCart = document.querySelector('.form-active-chitiet h3').innerText;

    var priceCart = document.querySelector('.modal-container-price h4').innerText;
    var priceCartReplace = priceCart.replace('Giá: ', '');
    var cartLi = document.createElement('li');

    var carItem = document.querySelectorAll('.header__navbar-cart-item');
    for (var i = 0; i < carItem.length; i++) {
    var productItem = document.querySelectorAll('.header__navbar-cart-name');
        if (productItem[i].innerHTML == nameCart){
            console.log('Sanr phaamr ddax theem: ');
            return;
        }
    }
    
    var trcontent = `
                <li class="header__navbar-cart-item">
                    <div class="header__navbar-cart-img">
                        <img src="${cartImg}" alt="" class="header__navbar-cart-img-link">
                    </div>
                    <div class="header__navbar-cart-name">
                       ${nameCart}
                    </div>
                    <input class='header__navbar-cart-input' type="text" name="cartInput" id="" value="1">
                    <button href="" class="header__navbar-cart-xoa">Xóa</button>
                    <div class="header__navbar-cart-price">
                        ${priceCartReplace}
                    </div>
                </li>
        `
    cartLi.innerHTML = trcontent;
    var cartList = document.querySelector('.header__navbar-cart-list');
    cartList.append(cartLi);

    carttotal();
    XoaSP();
}

function carttotal() {
    var carItem = document.querySelectorAll('.header__navbar-cart-item');
    var tongNumber = 0;
    for (var i = 0; i < carItem.length; i++) {
        var inputValue = Number.parseFloat (carItem[i].querySelector('.header__navbar-cart-input').value);
        var priceValue = carItem[i].querySelector('.header__navbar-cart-price').innerHTML
        var pricereplace = Number.parseFloat(priceValue.replace('đ', ''));
        var tong = inputValue * pricereplace*1000000

        tongNumber += tong;
        // sumNumber = tongNumber.toLocaleString('de-DE');
    }

    var tongprice = document.querySelector('.header__navbar-cart-list-span');
    tongprice.innerHTML = 'Tổng tiền: ' +tongNumber.toLocaleString('de-DE');
    inputChange();
}

// Xóa sản phẩm

function XoaSP() {
    var carItem = document.querySelectorAll('.header__navbar-cart-item');
    var productItem = document.querySelectorAll('.header__navbar-cart-xoa');
    for (var i = 0; i < carItem.length; i++) {
    var productItem = document.querySelectorAll('.header__navbar-cart-xoa');
        productItem[i].addEventListener('click', function (e) {
            var cartDelete = e.target
            console.log(cartDelete);
            var cartItemSP = cartDelete.parentElement;
            cartItemSP.remove();
            carttotal();
        })
    }
}
// Sửa số lượng sản phẩm

function inputChange() {
    var carItem = document.querySelectorAll('.header__navbar-cart-item');
    for (var i = 0; i < carItem.length; i++) {
    var valueInput = carItem[i].querySelector('input');
        valueInput.addEventListener('change', function () {
            carttotal();
        })
    }
}


