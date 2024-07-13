const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);    

const tabItems = $$('.tab-item');
const tabpanes = $$('.header__slide-inner');

tabItems.forEach((tab, index) => {
    const pane = tabpanes[index];
    tab.onclick = function () {
        console.log(tab);

        // $('.tab-item.active').classList.remove('active');
        $('.header__slide-inner.active').classList.remove('active');

        pane.classList.add('active');
        this.classList.add('active');
    }
})