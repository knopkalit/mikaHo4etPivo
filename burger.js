document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('open-menu');
    document.querySelector('.header__navigation').classList.toggle('active');
    document.querySelector('.fas').classList.toggle('cart-inner');
});