const target = document.querySelector('#target');
const images = document.querySelectorAll('.img');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        target.innerHTML = img.alt;
    })

    img.addEventListener('mouseleave', () => {
        target.innerHTML = "Search";
    })
})