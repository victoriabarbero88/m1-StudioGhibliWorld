//Movies js

const list = document.getElementById("list");

fetch("https://studio-ghibli-world-app.herokuapp.com/films")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    //list.innerHTML = "";

    data.forEach(peli => {
      const newEl = document.createElement("div");

        newEl.innerHTML = `
          <div class"movie-card">        
            <h3>${peli.title} (${peli.release_date})<h3>
            <div class="containerM">
              <img src="${peli.image}" alt="Avatar" class="imageM">
              <div class="overlayM">
              <div class="textM">${peli.description}</div>
            </div>
          </div>
         `;

      list.appendChild(newEl);

      //createNewMovie(newEl, peli); // con la funcion
    });
  });

/*function createNewMovie(el, obj) {
  el.innerHTML = `
     <div class="movie-card">
        <p>Title: ${obj.title}</p>
        <p>${obj.description}</p>
        <img src="${obj.image}" alt="" />
     </div>
     `;

   list.appendChild(el);
 }*/

 


