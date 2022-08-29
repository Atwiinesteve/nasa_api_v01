(function() {

 const apiKey = 'M2CTDWqbbZmNUcpChaaII75zDUA6TtR8PDg0Wyce';
 const nasaBTN = document.querySelector('.load--nasa--data');
 const container = document.querySelector('.container');
 const body = document.getElementsByTagName('body');


 function fetchData() {
  const nasaData = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  nasaData
   .then((response) => response.json())
   .then((data) => {

    container.innerHTML = `
    
    <div class='inner'>
     <div class="background--description">
      <div class="title--area">
       <h2 class="title">${data.title}</h2>
       <img src="${data.hdurl}" class="nasa--image">
      </div>
      <div class="explanation--area">
       <p class="explanation">${data.explanation}</p>
      </div>
      <div class="image--details">
       <p class="date">${data.date}</p>
       <p class="copyright">${data.copyright}</p>
      </div>
     </div>
    </div>


    `;
    
   })
   .catch((error) => console.error(error.message))
  }
  

  nasaBTN.addEventListener('click', function() {
   nasaBTN.style.display = 'none'
   fetchData();
  })

})();