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