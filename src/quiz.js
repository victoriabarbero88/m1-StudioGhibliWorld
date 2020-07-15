const quiz = {
    questions: [
        {
            img: 'https://i.pinimg.com/564x/e2/b2/f2/e2b2f2d9b30e02d6d265bdac904f3a49.jpg',
            options : ["Nausicaä of the Valley of the Wind", "Princess Mononoke","Arrietty"],
            correctAnswer: "Arrietty"
        },
        {
            img: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/12/spirited_away_still.jpg',
            options : ["Castle in the sky", "Spirited Away","Only Yesterday"],
            correctAnswer: "Spirited Away"
        },
        {
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/grave-2.jpg',
            options : ["Grave of the Fireflies", "Kiki's Delivery Service","Pom Poko"],
            correctAnswer: "Grave of the Fireflies"
        },
        {
            img: 'https://i.insider.com/5ecff15f988ee329ba228306?width=1100&format=jpeg&auto=webp',
            options : ["When Marnie Was", "The Wind Rises","From Up on Poppy Hill"],
            correctAnswer: "From Up on Poppy Hill"
        },
        {
            img: 'https://cdn.vox-cdn.com/thumbor/9pg9j5mtkNMmK2YNr_YLHzDKUuA=/0x0:2560x1600/1200x800/filters:focal(1076x596:1484x1004)/cdn.vox-cdn.com/uploads/chorus_image/image/52660659/mononoke.0.jpg',
            options : ["Princess Mononoke", "Tales from Earthsea","Howl's Moving Castle "],
            correctAnswer: "Princess Mononoke"
        },
        {
            img: '',
            options : ["", "",""],
            correctAnswer: ""
        },
        {
            img: '',
            options : ["", "",""],
            correctAnswer: ""
        },
        {
            img: '',
            options : ["", "",""],
            correctAnswer: ""
        },
        {
            img: '',
            options : ["", "",""],
            correctAnswer: ""
        },
        {
            img: '',
            options : ["", "",""],
            correctAnswer: ""
        },
       
        

    ]
}

const quizList = document.getElementById("quizList");


quiz.questions.forEach(i => {
    const newMov = document.createElement("div");

        newMov.innerHTML = `
        <div>
            <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="${i.img}" style="width:100%">
            <div class="textq">
                <select name="select" class="selectList">
                    <option value="value0">Choose one option...</option>
                    <option value="value1">${i.options[0]}</option> 
                    <option value="value2">${i.options[1]}</option>
                    <option value="value3">${i.options[2]}</option>       
                </select>
            </div>
            </div>
        </div>  
            
        `;
    quizList.appendChild(newMov);
});

//addEventListener


//crear array answers con datos de las respuestas del usuario


//igualar la respuesta correcta con cada answer del usuario 
//y si es correcta sumarla al counter el cual nos dará el resultado final de aciertos

//mostrar el resultado en la ultima slide.
