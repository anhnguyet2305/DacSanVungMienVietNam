const removeAll = (form, background, button, body) =>{
    button.addEventListener('click', () =>{
        form.classList.remove('showUp-form');
        background.classList.remove('showUp-All');
        body.style.overflow = 'scroll';
    })
}
// optimize code
const optimizeForm = (button, desktop, formData, background, body, imgs, nameProduct, Price, numberCart) =>{
    button.forEach((items) =>{
        items.addEventListener('click', () =>{
            desktop.textContent = Number(desktop.innerText) + 1;
            desktop.style.display = 'flex';
            formData.classList.add('showUp-form');
            background.classList.add('showUp-All');
            // get parent
            const parent = items.parentElement.parentNode;
            // get picture
            const img = parent.querySelector('img');
            // up source
            imgs.src = img.src;
            const parentOfParent = parent.parentNode;
            const text = parentOfParent.querySelector('.text-products');
            nameProduct.textContent = text.innerText;
            const price = parentOfParent.querySelector('.price');
            Price.textContent = price.innerText;
            numberCart.textContent = Number(desktop.innerText);
            body.style.overflow = 'hidden';
        })
    });
}
const countElements = () =>{
    const button = document.querySelectorAll('.fa-cart-plus');
    const desktop = document.querySelector('.quantity');
    const formData = document.querySelector('.form-products');
    const background = document.querySelector('.background-black');
    const closeButton = document.querySelector('.fa-close-button');
    const imgs = formData.querySelector('img');
    const nameProduct = formData.querySelector('.name-products');
    const Price = formData.querySelector('.price-products');
    const numberCart = formData.querySelector('.quantity-pd');
    const body = document.querySelector('body');
    // update value
    optimizeForm(button, desktop, formData, background, body,imgs, nameProduct, Price, numberCart);
    removeAll(formData, background, closeButton, body);
}
countElements();
const informationProducts = () =>{
    const Box = document.querySelector('.information-products');
    const inforButton = document.querySelectorAll('.fa-info');
    const background = document.querySelector('.background-black');
    const body = document.querySelector('body');
    const imgs = document.querySelector('.information-products img');
    const button = document.querySelector('.close-contents');
    const priceInfor1 = document.querySelector('.priceInfor');
    const firstPrice1 = document.querySelector('.second-price');
    inforButton.forEach((items) =>{
        items.addEventListener('click', () =>{
            Box.classList.add('showUp-form');
            background.classList.add('showUp-All');
            body.style.overflow = 'hidden';
            const parent = items.parentElement.parentNode;
            const img = parent.querySelector('img');
            imgs.src = img.src;
            const nameProducts = document.querySelector('.products-name');
            const parentN = parent.parentNode;
            const links = parentN.querySelector('.text-products').innerText;
            nameProducts.textContent = links;
            priceInfor1.textContent = parentN.querySelector('.price').innerText;
            firstPrice1.textContent = parentN.querySelector('.first-price').innerText;
        })
    })
    removeAll(Box, background, button, body);
}
informationProducts();
const quantityButton = () =>{
    const increase = document.querySelector('.btn-incre');
    const decrease = document.querySelector('.btn-decre');
    const quantityValue = document.querySelector('.number-quantity');
    let i = 1;
    increase.addEventListener('click', () =>{
        i++;
        quantityValue.textContent = i;
    })
    decrease.addEventListener('click', () =>{
        i--;
        if(i > 0){
            quantityValue.textContent = i;
        }
        else{
            quantityValue.textContent = '1';
            i = 1;
        }
    })
}
quantityButton();

// update button top
const updateButtonCart = () =>{
    const button = document.querySelector('.btn-top');
    const input = document.querySelector('.number-quantity');
    let quantity1 = document.querySelector('.quantity');
    button.addEventListener('click', () =>{
        let quantityNumber = Number(input.innerText);
        quantity1.textContent = Number(quantity1.innerText) + quantityNumber;
        const form = document.querySelector('.form-products');
        const imgs = form.querySelector('img');
        const parent = button.parentElement.parentElement;
        const imgParent = parent.querySelector('img');
        imgs.src = imgParent.src;
        form.classList.add('showUp-form');
        parent.classList.remove('showUp-form');
        document.querySelector('.quantity-pd').textContent = quantity1.textContent;
        const contentPD = parent.querySelector('.products-name');
        document.querySelector('.name-products').textContent = contentPD.textContent;
        const pricePD = parent.querySelector('.priceInfor');
        document.querySelector('.price-products').textContent = pricePD.textContent;
    })
}
updateButtonCart();
const checkItems = (button, arrayCheck) =>{
    for(let i = 0; i < button.length; i++){
        let x = true;
        arrayCheck.push(x);
    }
    return arrayCheck;
}
// update the cart
const updateCart1 = () =>{
    const button = document.querySelectorAll('.fa-info');
    const button2 = document.querySelectorAll('.fa-cart-plus');
    const arrayCheck = [];
    checkItems(button, arrayCheck);
    let j = 0;
    const cart = document.querySelector('.infor-customer-cart');
    button2.forEach((items, index) =>{
        let i = 1;
        items.addEventListener('click', () =>{
            if(arrayCheck[index] === true){
                j++;
                // get img
                const parent = items.parentElement.parentElement;
                const url = parent.querySelector('img');
                const nameProduct = parent.parentElement;
                // get name
                const nameProduct1 = nameProduct.querySelector('a').textContent;
                // get price
                const priceProduct = nameProduct.querySelector('.price').textContent;
                arrayCheck[index] = false;
                const parentDiv = document.createElement('div');
                const imgDiv = document.createElement('img');
                const divText = document.createElement('div');
                imgDiv.className = 'col-6 col-xs-6 col-sm-6 col-md-5 col-lg-5';
                divText.className = 'col-6 col-xs-6 col-sm-6 col-md-7 col-lg-7 infor-pd';
                imgDiv.src = url.src;
                parentDiv.appendChild(imgDiv);
                const price = document.createElement('p');
                price.className = 'price-name';
                price.textContent = priceProduct;
                const spanNumber = document.createElement('span');
                spanNumber.textContent = `x${i}`;
                price.appendChild(spanNumber);
                const textName = document.createElement('p');
                textName.textContent = nameProduct1;
                const iconDelete = document.createElement('i');
                iconDelete.className = 'fa fa-close fa-remove-parent';
                divText.appendChild(textName);
                divText.appendChild(price);
                divText.appendChild(iconDelete);
                parentDiv.className = 'row align-items-center';
                parentDiv.appendChild(divText);

                cart.appendChild(parentDiv);
                const buttonRemove = document.querySelectorAll('.fa-remove-parent');
                buttonRemove.forEach((items, index) =>{
                    items.addEventListener('click', () =>{
                        items.parentElement.parentElement.remove();
                        
                    })
                })
            }
            else{
                i++;
            }
        })
    })
}
updateCart1();

