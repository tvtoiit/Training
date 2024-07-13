// var itemParent = document.querySelector('.grid-row');
// var modallAdd = document.querySelector('.modal');
// var modalClose = document.querySelector('.form-active-close');
//  itemParent.onclick = function(e) {
//     var modal = e.target.closest('.home-product-item');

//     if(modal) {
//         modallAdd.classList.add('open-modal');
//     }
// }

// function modalClosefunction() {
//     modallAdd.classList.remove('open-modal');
// }
// modalClose.addEventListener('click',modalClosefunction);

// Xử lí Modal chi tiết sản phẩm
// var cartItem = document.querySelector('.header__navbar-item-click');
// var modallChitiet = document.querySelector('.modal-chitiet');
// // lấy dom nút close
// var cartClose = document.querySelector('.form-active-chitiet-close');
// console.log(cartClose);

// cartItem.addEventListener('click', openModal);
// cartClose.addEventListener('click', closeModal);

// function closeModal() {
//     modallChitiet.classList.remove('open-modal-chitiet');
// }

// function openModal() {
//     modallChitiet.classList.add('open-modal-chitiet');
// }
//lấy chỗ bấm
var AddressBam = document.querySelector('.header__navbar-city')
// add nó vào
var address = document.querySelector('.header__navbar-city-address');
function addclassAddress() {
    
    address.classList.add('header__navbar-city-address-block');
}

function closeAddress() {
    address.classList.remove('header__navbar-city-address-block');
}
AddressBam.addEventListener('click', addclassAddress);

if (AddressBam) {
    AddressBam.addEventListener('click', closeAddress);
}

///////////////////////////////////////////////////
// modal mobile navbar
var modalmobile = document.querySelector('.nav-mobile');
var buttonOpenModal = document.querySelector('.header__navbar-cart-menu');
console.log(buttonOpenModal);
var buttonClodeModal = document.querySelector('.nav-mobile-check-icon');

function openModal() {
    console.log(123)
    modalmobile.classList.add('nav-mobile-open-modal');
}

function closeModal() {
    modalmobile.classList.remove('nav-mobile-open-modal')
}
buttonOpenModal.addEventListener('click', openModal);
buttonClodeModal.addEventListener('click',closeModal);



