
function handleClickZoom (event) {
    //console.log(event.target);
    const template = `
        <div class='lightbox'>
            <div class='lightbox-content'>
                <img src="./assets/image/img8.jpeg" alt=""/>
            </div>
        </div>
    `
    document.body.insertAdjacentHTML("beforeend", template);
}


const images = document.querySelectorAll('.image img');
//console.log(images)
images.forEach((item) => item.addEventListener('click', handleClickZoom));