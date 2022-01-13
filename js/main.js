// turn on Notification

const NotifyOn = () =>{
    Notification.requestPermission();   
}
NotifyOn();

// show the list
const listItems = () =>{
    const items = document.querySelector('.list-items i');
    const list = document.querySelector('.box-flow');
    items.addEventListener('click', () =>{
        list.classList.toggle('block');
        items.classList.toggle('rotate');
    })
}
listItems();

// show the navbar of mobile
const mobileNavBar = (item, navbar, layout) =>{
    item.addEventListener('click', () =>{
        navbar.classList.toggle('block-navbar');
        layout.classList.toggle('block-layout');
    })
}
const navBar = () =>{
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.mobile-navbar');
    const layout = document.querySelector('.layout-black');
    const close = document.querySelector(".top-bar .fa-times");
    mobileNavBar(hamburger, navbar, layout);
    mobileNavBar(layout, navbar, layout);
    mobileNavBar(close, navbar, layout);
}
navBar();
// show buttonTop
const scrollTop = () =>{
    const button = document.querySelector('.arrow-top');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        y > 100 ? button.classList.add('show-up-button') : button.classList.remove('show-up-button');
    })
    button.addEventListener('click', () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}
scrollTop();

// fixed navbar
const fixNavBar = () =>{
    const navbar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        if(y > 100){
            navbar.classList.add('nav-bar-fixed');
        }
        else{
            navbar.classList.remove('nav-bar-fixed');
        }
    })
}
fixNavBar();

const boxProducts = (img, products, price, firstPrice, sale) =>{
    return (
        `
            <div class = "col-2 col-xs-2 col-sm-4 col-md-4 col-lg-4 items-1">
                <div class ="img-div">
                    <img src="${img}">
                    <div class ="background-black-search">
                        <i class = "fa fa-info></i>
                        <i class = "fa fa-cart-plus"></i>
                    </div>
                    <span class = "rate-sale">${sale}</span>
                </div>
                <a class ="text-products" href = "#">${products}}</a>
                <div class = "price-div price-div d-flex justify-content-start align-items-center">
                    <p class = "price">${price}</p>
                    <p class = "first-price">${firstPrice}</p>
                </div>
            </div>
        `
    )
}
const showFooter = () =>{
    const wrapUL = document.querySelectorAll('.wrap-ul');
    const arrow = document.querySelectorAll('footer .fa-angle-down');
    arrow.forEach((items, index) =>{
        items.addEventListener('click', () =>{
            wrapUL[index].classList.toggle('block-ul');
        })
    })
}
showFooter();

