const photos = {
    slides: [
        {
            img: 'https://i.pinimg.com/originals/61/ac/05/61ac053144e527202b7199beb75c057d.jpg',
            title:"Logo STUDIO GHIBLI"
        },
        {
            img: 'https://i.pinimg.com/originals/8c/54/77/8c5477985a31d370b3c8cba849cbb1af.jpg',
            title:"Castle in the Sky"
        },
        {
            img: 'https://i.pinimg.com/564x/ac/b4/49/acb449cf11fee3c1cc3d567bb63fb853.jpg',
            title:"Princess Mononoke"
        },
        {
            img: 'https://pbs.twimg.com/media/DRXLfU-W4AYC_hz?format=jpg&name=small',
            title:"Arietti"
        },
        {
            img: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/0ae/e8b/1a03f85b049f31c8e1ea7e0dee.jpg',
            title:"Howl's Moving Castle"
        },
        {
            img: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/90f/fc6/053a885a8a8cd2691fd7e1d805.jpg',
            title:"Kiki's Delivery Service"
        },
        {
            img: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/580/4f2/be296a59ff81a874aed3d1cd18.jpg',
            title:"Ponyo"
        },
        {
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/whisper-3.jpg',
            title:"Whisper of the Heart"
        },
        {
            img: 'https://i.pinimg.com/originals/8e/2e/80/8e2e80e5f5505a61e38e856a80a68ee2.jpg',
            title:"Spirited Awayo"
        }

    ]
}
const galleryList = document.getElementById("galleryPho");

photos.slides.forEach((photo, i) => {
    const newPhoto = document.createElement("div");
    
        newPhoto.innerHTML = `
        <div class="mySlides fade">
                <div class="numbertext"></div>
                <div id="gallImg"></div>
                <div class="textg">${photo.title}</div>
        </div>  
            
        `;

        
        const galleryImage = newPhoto.querySelector("#gallImg")

        galleryImage.style.backgroundImage = `url("${photo.img}")`
          
        galleryList.appendChild(newPhoto);
    }

    

   

);
