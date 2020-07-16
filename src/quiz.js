const quiz = {
    questions: [
        {
            img: 'https://techkalzen.com/wp-content/uploads/2020/02/ponyo-on-the-cliff-by-the-sea-2008.jpg.webp',
            options : ["Nausicaä of the Valley of the Wind", "Ponyo","Arrietty"],
            correctAnswer: "Ponyo"
        },
        {
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/howl-stars.jpg',
            options : ["Castle in the sky", "Howl's Moving Castle","Only Yesterday"],
            correctAnswer: "Howl's Moving Castle"
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
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/my-neighbor-2.jpg',
            options : ["Whisper of the Heart", "Porco Rosso","My Neighbor Totoro"],
            correctAnswer: "My Neighbor Totoro"
        },
        {
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/only-yesterday-1.jpg',
            options : ["Only Yesterday", "Pom Poko","The Wind Rises"],
            correctAnswer: "Only Yesterday"
        },
        {
            img: 'https://borrowingtape.com/wp-content/uploads/2017/01/Nausica%C3%A4-of-the-Valley-of-the-Wind-1984.jpg',
            options : ["Spirited Away", "Princess Mononoke","Nausicaä of the Valley of the Wind"],
            correctAnswer: "Nausicaä of the Valley of the Wind"
        },
        {
            img: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/kiki-4.jpg',
            options : ["Kiki's Delivery Service", "When Marnie Was","The Wind Rises"],
            correctAnswer: "Kiki's Delivery Service"
        },
        {
            img: 'https://cdn.myanimelist.net/s/common/uploaded_files/1444132246-19b3b93917f37308740748ab8b241b96.jpeg',
            options : ["Tales from Earthsea", "Spirited Away","From Up on Poppy Hill"],
            correctAnswer: "Spirited Away"
        },
        {
           
        },
       
    ]
}

const quizList = document.getElementById("quizList");

let counter = 0;

function handleAnswerEvent (event) {
   const answerValue = event.currentTarget.value;
   const questionIndex = event.currentTarget.dataset.index;
   const question = quiz.questions[questionIndex];

    if (answerValue === question.correctAnswer){
        counter += 1;
        const correctDiv = document.getElementById("question-result");
        correctDiv.innerHTML= "";

        console.log(counter)

        correctDiv.innerHTML= `This is correct!!! Please, go to the next one!!!^^ `
        setTimeout(()=>{
            correctDiv.innerHTML= "";
        }, 2000);

    }else {
        const errDiv = document.getElementById("question-result");
        errDiv.innerHTML= "";

        errDiv.innerHTML= `The answer is not correct! Try again!^^ `
        quizList.appendChild(errDiv);
        setTimeout(()=>{
            errDiv.innerHTML= "";
        }, 2000);
    }

}

quiz.questions.forEach((question, i) => {
    const newMov = document.createElement("div");
    
    if (quiz.questions.length -1 === i){
        newMov.innerHTML = `
        <div>
            <div class="mySlides fade">
            <div class="numbertext"></div>
            <img src="https://filmschoolrejects.com/wp-content/uploads/2019/06/when-marnie-boat.jpg" style="width:100%">
            <div class="textq">
                <p>"This is the end! How did the test go??^^"</p>
            </div>
            </div>
        </div>  
            
        `;

    }else {

        newMov.innerHTML = `
        <div>
            <div class="mySlides fade">
            <div class="numbertext"></div>
            <img src="${question.img}" style="width:100%">
            <div class="textq">
                <select name="select" class="selectList" data-index="${i}">
                    <option value="">Choose an option...</option>
                    <option value="${question.options[0]}">${question.options[0]}</option> 
                    <option value="${question.options[1]}">${question.options[1]}</option>
                    <option value="${question.options[2]}">${question.options[2]}</option>       
                </select>
            </div>
            </div>
        </div>  
            
        `;

        const selectQuiz = newMov.querySelector("select") 
    
          
        selectQuiz.addEventListener("input", handleAnswerEvent);
    }

    quizList.appendChild(newMov);

   

});


//igualar la respuesta correcta con cada answer del usuario 
//y si es correcta sumarla al counter el cual nos dará el resultado final de aciertos

//mostrar el resultado en la ultima slide.
