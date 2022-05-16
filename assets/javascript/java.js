// ---------tạo hide và closer của model tickets-------------
// 1 lấy list của button tickets
const buyBtns = document.querySelectorAll('.js-btn-tickets')
    // 3 lấy class tickets
const tickets = document.querySelector('.js-tickets')
    // 5 lấy nút button closer của tickets
const closerBtn = document.querySelector('.js-tickets-closer')
    // 9 lấy body của tickets
const bodyTickets = document.querySelector('.js-tickets-container')

// 4 tạo function để hành động thêm class "open" vào class "tickets"
function showtickets() {
    tickets.classList.add('open')
}
// 7 tạo function xóa open trong class tickets
function closertickets() {
    tickets.classList.remove('open')
}

// 2 chạy vòng lặp để lắng nghe click vào button nào ??
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showtickets)
}
// 6 lắng nghe click vào nút button
closerBtn.addEventListener('click', closertickets)
    // 8 bấm vào bên ngoài tickets đóng tickets
tickets.addEventListener('click', closertickets)
    // 10 lắng nghe body tickets , va tao function ------ click vao tickets ko closer tickets
bodyTickets.addEventListener('click', function(event) {
    // ngưng nổi bọt tickets_body
    event.stopPropagation()
})

// header------------------------
var header = document.querySelector('.header');
var mobileMenu = document.querySelector('.js-mobile-menu-btn');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }
    // auto close and open menu mobile
var menuItems = document.querySelectorAll('.header__nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];


    menuItem.onclick = function() {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('header__nav-subnav');
        if (isParentMenu) {

            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

// --------drop down header
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navItems = $$('.header__nav li')
const navItem = $('.header__nav li')
const line = $('.header__nav .line')

line.style.left = navItem.offsetLeft + 'px'
line.style.width = navItem.offsetWidth + 'px'

navItems.forEach((item) => {
    item.onclick = function() {

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
    }
})



// ---------slider-------------
window.addEventListener("load", () => {
    const btnNext = document.querySelector(".btn-next")
    const btnPrev = document.querySelector(".btn-prev")
    const sliderItems = document.querySelectorAll(".slider-item")
    const sliderMain = document.querySelector(".slider")



    const sliderWidth = sliderItems[0].offsetWidth
    const sliderLength = sliderItems.length

    let positionX = 0
    let index = 0

    const dots = document.querySelectorAll(".slider-dot-item");
    [...dots].forEach(item => item.addEventListener("click", function(e) {
        [...dots].forEach(i => i.classList.remove("active"))
        e.target.classList.add("active")
        const slideIndex = parseInt(e.target.dataset.index)
        index = slideIndex
        positionX = -1 * index * sliderWidth
        sliderMain.style = `transform : translateX(${positionX}px)`

    }))

    btnNext.addEventListener("click", function() {
        handleSlider(1)
    })
    btnPrev.addEventListener("click", function() {
        handleSlider(-1)

    })

    function handleSlider(dir) {
        if (dir === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1
                return
            }
            positionX = positionX - sliderWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++
        } else if (dir === -1) {
            if (index <= 0) {
                index = 0
                return
            }
            positionX = positionX + sliderWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--
        }
        [...dots].forEach(e => e.classList.remove("active"))
        dots[index].classList.add("active")

    }
})