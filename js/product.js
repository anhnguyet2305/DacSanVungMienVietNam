// create checkbox 

const createCheckBox = (array) =>{
    return (
    ` 
        <div class = "check-box">
            <input type = "checkbox" name = "${array}" id = "${array}">
            <label for="${array}">${array}</label>  
        </div>
    `
    )
}
const checkBox = () =>{
    const arrayBrand = [
        "EGA",
        "EGA GREEN"
    ];
    const rangePrice = [
        "Giá dưới 100.000đ",
        "100.000đ - 200.000đ",
        "200.000đ - 300.000đ",
        "300.000đ - 500.000đ",
        "500.000đ - 1.000.000đ",
        "Giá trên 1.000.000đ"
    ];
    const type = [
        "Nông sản Việt",
        "Nhập khẩu",
        "Nhiệt đới",
        "Thực phẩm tươi sống",
        "Thực phẩm"
    ]
    const checkbox1 = arrayBrand.map(items =>{
        return (createCheckBox(items));
    })
    const checkbox2 = rangePrice.map(items =>{
        return(createCheckBox(items));
    })
    const checkbox3 = type.map(items =>{
        return(createCheckBox(items));
    })
    const brandbox = document.querySelector('.brand-box');
    const pricebox = document.querySelector('.price-box');
    const typebox = document.querySelector('.type-box');
    
    brandbox.innerHTML = checkbox1.join(" ");
    pricebox.innerHTML = checkbox2.join(" ");
    typebox.innerHTML = checkbox3.join(" ");
}
checkBox();
// show the bar
const navBar1 = (filter, tab, background, body) =>{
    filter.addEventListener('click', () =>{
        tab.classList.toggle('transform-again');
        background.classList.toggle('block-background');
        body.classList.toggle('fixed-top');
    })
}
const showUpBar = () =>{
    const tab = document.querySelector('.brand-choosing');
    const filter = document.querySelector('.fa-filter-title');
    const background = document.querySelector('.background-black');
    const body = document.querySelector('body');
    navBar1(filter, tab, background, body);
    const closeButton = document.querySelector('.closing-button');
    navBar1(closeButton, tab, background, body);
}
showUpBar();
// function to cal price
const CountNewPrice = (firstPrice, sale) =>{
    const Price = Number(firstPrice);
    const saleRate = Number(sale);
    const LastPrice = Price - (Price * saleRate)/100;
    return Math.floor(LastPrice);
}
const createBoxSlide = (img, sale, nameProduct, firstPrice) =>{
    return (
        `
            <div class="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 items-1">
                <div class = "img-div">
                    <img src = "${img}">
                    <div class = "background-black-search">
                        <i class = "fa fa-info"></i>
                        <i class = "fa fa-cart-plus"></i>
                    </div>
                    <span class = "rate-sale">-${sale}%</span>
                </div>
                <a class = "text-products text-products-3" href = "#">${nameProduct}</a>
                <div class = "price-div d-flex justify-content-start align-items-center">
                    <p class = "price">${CountNewPrice(firstPrice, sale)}.000đ</p>
                    <p class = "first-price">${firstPrice}.000đ</p>
                </div>
            </div>
        `
    )
}
const createProduct = () =>{
    const imgs = [
        "../img/veg-1.jpg",
        "../img/veg-2.jpg",
        "../img/veg-3.jpg",
        "../img/veg-4.jpg",
        "../img/veg-5.jpg",
        "../img/veg-6.jpg",
        "../img/veg-7.jpg",
        "../img/veg-8.jpg",
        "../img/fruit-1.jpg",
        "../img/fruit-2.jpg",
        "../img/fruit-3.png",
        "../img/fruit-4.jpg"
    ]
    const Price = [
        "35",
        "25",
        "45",
        "15",
        "35",
        "35",
        "35",
        "35",
        "35",
        "35",
        "10",
        "12",
    ]
    const namePD = [
        "Khoai Tây Bi (500gr/gói)",
        "Cần tây hữu cơ 450gr",
        "Hành tây tím 500gr",
        "Bông cải xanh 500gr",
        "Su Hào 500gr",
        "Hành tây 500gr",
        "Khoai tây hồng 500gr",
        "Cà chua bi 500gr",
        "Táo Envy Size 70 1kg",
        "Me Ngọt Thái Hộp 500gr",
        "Chuối Unifarm 500gr",
        "Táo xanh nhập khẩu 500gr"
    ]
    const sale = [
        "20",
        "15",
        "20",
        "0",
        "10",
        "12",
        "25",
        "50",
        "60",
        "30",
        "22",
        "12",
    ]
    const TotalArray = sale.map((items, index) =>{
        return createBoxSlide(imgs[index], sale[index], namePD[index], Price[index]);
    })
    const JoinArray = TotalArray.join(" ");
    const container = document.querySelector('.container .row');
    container.innerHTML = JoinArray;
}
createProduct();

// show up the list
const functionalInput = (item =>{
    item.addEventListener('click', () =>{
        const lists = document.querySelector('.type-items');
        lists.classList.toggle('toggle-list');
    })
})
const listChosen = () =>{
    const input = document.querySelector('.input-type input');
    const arrow = document.querySelector('.input-type .fa-caret-down');
    functionalInput(input);
    functionalInput(arrow);

    const inside = document.querySelectorAll('.type-items p');
    inside.forEach(items =>{
        items.addEventListener('click', () =>{
            document.querySelector('.type-items').classList.toggle('toggle-list');
            input.value = items.textContent;
        })
    })
}
listChosen();

// create box-left
const boxLeft = () =>{
    const infor = {
        imgs: ["../img/hanh-nhan-1.jpg", "../img/hat-dieu-4.jpg", "../img/dieu-1.jpg", "../img/box-1.jpg", "../img/mo-5.jpg"],
        title: ["1kg hạnh nhân rang bơ nhập khẩu cao cấp", "1kg hạt điều nguyên rang tỏi ớt giòn ngon loại 1", 
                "(combo 1kg) 2 hộp hạt điều rang muối hiệu tân lộc phát", "hộp bánh tết hỗn hợp thiếc warmly hoàng gia - tặng túi vải không dệt",
                "combo siêu tiết kiệm - 2 hũ mơ vàng sấy dẻo dk havest nhập khẩu chính hãng"],
        price: ["107", "150", "350", "199", "350"],
        sale: ["0", "14", "29", "10", "48"],
    }
    const recommend = document.querySelector('.recommend .container');
    const newArray = infor.imgs.map((items, index) =>{
        return (
            `<div class = "row">
                <div class = "container-row col-5 col-xs-5 col-sm-5 col-md-4 col-lg-5">
                    <img src = "${infor.imgs[index]}">
                    <span class = "rate-sale rate-sale-2">-${infor.sale[index]}%</span>
                </div>
                <div class = "col-7 col-xs-7 col-sm-7 col-md-8 col-lg-7">
                    <a href = "#" class = "text-products text-products-4">${infor.title[index]}</a>
                    <div class = "check-price d-flex justify-content-start align-items-center">
                        <p class = "price">${CountNewPrice(infor.price[index], infor.sale[index])}.000<span class="currency">đ</span></p>
                        <p class = "first-price first-price-size">${infor.price[index]}.000<span class="currency">đ</span></p>
                    </div>
                </div>
            </div>`
        )
    })
    recommend.innerHTML = newArray;

    const slide = infor.imgs.map((items, index) =>{
        return (
            `<div class = "swiper-slide">
                <div class = "img-div">
                    <img src = "${infor.imgs[index]}">
                    <div class = "background-black-search">
                        <i class = "fa fa-info"></i>
                        <i class = "fa fa-cart-plus"></i>
                    </div>
                    <span class = "rate-sale">-${infor.sale[index]}%</span>
                    </div>
                    <a class = "text-products text-products-3 text-recently" href = "#">${infor.title[index]}</a>
                    <div class = "price-div d-flex justify-content-start align-items-center">
                    <p class = "price">${CountNewPrice(infor.price[index], infor.sale[index])}.000đ</p>
                    <p class = "first-price">${infor.price[index]}.000đ</p>
                </div>
            </div>
            `
        )
    })
    document.querySelector('.swiper-container .swiper-wrapper').innerHTML = slide.join(" ");
}
boxLeft();

// update count table
const buttonPage = () =>{
    const button = document.querySelectorAll('.list-number div');
    console.log(button);
}
buttonPage();