let apart = document.getElementById('apart');
let images = ['shop1.jpg', 'shop2.jpg', 'shop3.jpg', 'shop4.jpg', 'shop5.jpg'];
function bg_Change() {
    let currentImageIndex = 0;

    setInterval(()=>{
        if (currentImageIndex === images.length - 1 ) {
            currentImageIndex = 0
        } else {
            currentImageIndex++
        }
        apart.style.backgroundImage = `url('${ images[currentImageIndex]}')`;
    }, 2500);

}
bg_Change()


function toggleHamburgerMenu() {
    const xsSideMenu = document.getElementsByClassName('xs-hamburger-menu-list')
    if (xsSideMenu[0].classList.contains('hide-elem')) {
        xsSideMenu[0].classList.remove('hide-elem')
        xsSideMenu[0].classList.add('show-elem')
    }else {
        xsSideMenu[0].classList.add('hide-elem')
        xsSideMenu[0].classList.remove('show-elem')
    }


}


const closeHamburgerButtons = document.getElementsByClassName('close-hamburger-icon')
const openHamburgerButtons = document.getElementsByClassName('open-hamburger-icon')
closeHamburgerButtons[0].addEventListener('click',toggleHamburgerMenu )
openHamburgerButtons[0].addEventListener('click',toggleHamburgerMenu)
