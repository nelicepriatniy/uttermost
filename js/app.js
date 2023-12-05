let headerMenuItem = document.querySelectorAll('.header-menu-item');

if (headerMenuItem.length > 0) {
    for (let i = 0; headerMenuItem.length > i; i++) {
        headerMenuItem[i].onmousemove = () => {
            let buttonsList = headerMenuItem[i].querySelectorAll('.header-menu-left-text');
            let blockList = headerMenuItem[i].querySelectorAll('.header-menu-block__right__item');
            for (let o = 0; buttonsList.length > o; o++) {
                buttonsList[o].onmousemove = () => {
                    for (let j = 0; blockList.length > j; j++) {
                        blockList[j].classList.remove('active');
                    }
                    blockList[o].classList.add('active')
                }
            }
        }
    }
}

const swiper = new Swiper('.main-slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.mainPrev',
        nextEl: '.mainNext',
    },
    autoplay: {
        delay: 3000,
    },
});

let questions = document.querySelectorAll('.question-item'); //вставляем class блока с вопросом
if(questions.length > 0) {
    questions[0].classList.add('active')
    for(let i = 0; questions.length > i; i++) {
        questions[i].onclick = ()=>{
            questions[i].classList.toggle('active')
        }
    }
}


//закрытие всех попапов

const closePopups = document.querySelector('.closePopups'),
      popups = document.querySelectorAll('.popup');

if(closePopups) {
    closePopups.onclick = ()=>{
        closePopups.classList.remove('active')
        if(popups.length > 0) {
            for(let i = 0; popups.length > i; i++) {
                popups[i].classList.remove('active')
            }
        }
    }
}

//красные инпуты
let forms = document.querySelectorAll('.form') //класс форм
function formCheck(item) {
    if (item) {
        let childInp = item.querySelectorAll('.form-input'); //класс инпутов формы
        let button = item.querySelector('.form-send'); //класс кнопки формы
        button.onclick = () => {
            for (let i = 0; i < childInp.length; i++) {
                if (!childInp[i].value) {
                    childInp[i].classList.add('red-flag') //добавляем класс красных инпутов
                } else {
                    childInp[i].classList.remove('red-flag') //убираем класс красных инпутов
                }
            }
        }
    }
}

for (let i = 0; i < forms.length; i++) {
    formCheck(forms[i])
}


//хедер моб менб

const burger = document.querySelector('.burger');

if(burger) {
    burger.onclick = ()=>{
        const mobileMenu = document.querySelector('.mobMenu')
        mobileMenu.classList.add('active')
        closePopups.classList.add('active')
    }
}

//активации формы в попапе в товарах

const productsBuyBtns = document.querySelectorAll('.form-popup-btn');

if(productsBuyBtns.length > 0) {
    const popupForm = document.querySelector('.form-popup');
    for(let i = 0; productsBuyBtns.length > i; i++) {
        productsBuyBtns[i].onclick = ()=>{
            popupForm.classList.add('active')
            closePopups.classList.add('active')
        }
    }
}

// header scrolling

function offsetPosition(element) {
    var offsetLeft = 0, offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop += element.offsetTop;
    } while (element = element.offsetParent);
    return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollbtn');  //класс кнопок для скролла
scrollBtn.forEach(el => {
    let elem = el;
    el.addEventListener('click', function () {
        let data = elem.getAttribute('data-b'); 
        let block = document.querySelector(data);
        let offset = offsetPosition(block);
        window.scrollTo({
            top: offset -160,
            behavior: 'smooth',
            
        });
        console.log(offset)
    })
});