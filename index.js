const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const thumbBar2 = document.querySelector('.thumb-bar2');
const btn = document.querySelector('button');
const overlay = document.querySelector('.gallery-container');



const images = ['p1.jpg', `p2.jpg`, `p3.jpg`];
const images2 = ['p4.jpg', `p5.jpg`, `p6.jpg`];




for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);

    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;

    });
}


for (const image2 of images2) {
    const newImage2 = document.createElement('img');
    newImage2.setAttribute('src', `images/${image2}`);

    thumbBar2.appendChild(newImage2);
    newImage2.addEventListener('click', e => {
        displayedImage.src = e.target.src;

    });
}



btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = '边框调亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = '边框调暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
