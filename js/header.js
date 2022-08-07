window.onscroll = function show_header() {
    var header = document.querySelector(".header")
    const windowWidth = document.documentElement.clientWidth
    if (windowWidth < 768){
        if (window.pageYOffset > 120) {
        header.classList.add('header_fixed')
    } else {
         header.classList.remove('header_fixed')
    }
    } else {
        if (window.pageYOffset > 70) {
        header.classList.add('header_fixed')
    } else {
         header.classList.remove('header_fixed')
    }}
    
}