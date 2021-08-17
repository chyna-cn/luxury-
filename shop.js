let apart = document.getElementById('apart');
let images = ['shop.jpg', 'shop1.jpg', 'shop2.jpg', 'shop3.jpg', 'shop4.png'];
function bg_Change() {
    let currentImageIndex = 0;

    setInterval(()=>{
        if (currentImageIndex === images.length - 1 ) {
            currentImageIndex = 0
        } else {
            currentImageIndex++
        }
        apart.style.backgroundImage = images[currentImageIndex];
    }, 1000);

}
bg_Change()
