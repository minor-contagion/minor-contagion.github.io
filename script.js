const anchors = document.querySelectorAll('a[href*="#sec"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

new Swiper('.test__center', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})
