const findBtn = document.getElementById('findBtn');
findBtn.addEventListener('click', generateList);
const apiID='tt3896198'
const apiKey='9f1dc6dd'
const movieList = document.getElementById('movie');

//const detailsContent = document.querySelector('.popup');
movieList.addEventListener('click', getMovieInfo);
const closeBtn = document.getElementById('close-btn');
//let detailshow=true;
// closeBtn.addEventListener('click', () => {
//     detailsContent.parentElement.classList.remove('showDetails');
// });
function generateList()
{
    let txtSearch = document.getElementById('search-txt').value;
    const url=`http://www.omdbapi.com/?&apikey=${apiKey}&s=${txtSearch}`
    //console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        let html = "";
        // create a div in index.html and generate html code for it and show the results
        
       if(data.Search){
        html=`<h3>${data.totalResults} found</h3>`
            data.Search.forEach(search => {
                html += `
                    <div class = "movie-item" id = "${search.imdbID}">

                        <div class = "movie-img">
                            <img src = "${search.Poster}" alt = ${search.Title}">
                        </div>
                        <div class = "Movie-Title">
                            <h3>${search.Title}</h3>
                            <a href = "#" class = "movieBtn">Show Details</a>
                        </div>
                        <div class = "movie-details-content>
                
                        </div>
                    </div>
                `;
            });
            movieList.classList.remove('NoResult');
        } else{
            html = "No Result!";
            movieList.classList.add('NoResult');
        }

        movieList.innerHTML = html; 
    });
}


// exctract movie details
function getMovieInfo(e){
    e.preventDefault();
    if(e.target.classList.contains('movieBtn')){
        //console.log(e.target.parentElement.parentElement)
        let imdbID = e.target.parentElement.parentElement.id;
        const url=`http://www.omdbapi.com/?&apikey=${apiKey}&i=${imdbID}`
        //console.log(url)
        fetch(url)
        .then(response => {
         console.log(response.json)
        return response.json()})
        .then(data => 
            {//console.log('showing movie info',data)
            movieModal(data)});
        //console.log(data)
    }
}

//let popup =document.getElementById("popup")

// create a modal
function movieModal(movie){
    
    alert('movie')
     let movieinfo = `
            Title">${movie.Title}
            <p class = "movie-year">${movie.Year}</p>
            <div class = "movie-Genre">
                <h3>Genre : ${movie.Genre}</h3>
                <h4>Director : ${movie.Director}</h4>
                <h3>Plot:</h3>
                <p>${movie.Plot}</p>
                <h4>Product of : ${movie.Country}</h4>
                <h4>Awards : ${movie.Awards}</h4>
                <h4>Ratings : ${movie.Ratings}</h4>
                <h4>BoxOffice : ${movie.BoxOffice}</h4>
            </div>
             `;
    
    const detailsContent = document.querySelector('.movie-details-content');

   
    detailsContent.innerHTML = html;
  
    detailsContent.parentElement.classList.add('showDetails');
   
}
// function movieModal(movie){
//     console.log('movie',movie)
//     //movie = movie[0];        
//     let html = `
        
//             <h2 class = "movie-title">${movie.Title}</h2>
//             <p class = "movie-year">${movie.Year}</p>
//             <div class = "movie-Genre">
//                 <h3>Genre : ${movie.Genre}</h3>
//                 <h4>Director : ${movie.Director}</h4>
//                 <h3>Plot:</h3>
//                 <p>${movie.Plot}</p>
//                 <h4>Product of : ${movie.Country}</h4>
//                 <h4>Awards : ${movie.Awards}</h4>
//                 <h4>Ratings : ${movie.Ratings}</h4>
//                 <h4>BoxOffice : ${movie.BoxOffice}</h4>
//             </div>
            
            
        
//     `;
    
//     const detailsContent = document.querySelector('.movie-details-content');

//     //console.log('html',html);
//     //<button type="button" onclick="closePopup()">OK </button>
//     //<div class = "popup img">
//     // <img src = "${movie.Poster}" alt = "">
//     // </div>
//     detailsContent.innerHTML = html;
//     // detailshow=!detailshow;
//     // detailsContent.classList.toggle('hide',detailshow)
//     //console.log(detailshow,detailsContent)
//     detailsContent.parentElement.classList.add('showDetails');
//     //popup.classList.add("open-popup");
// }


// function openPopup(){
//     popup.classList.add("open-popup");
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }