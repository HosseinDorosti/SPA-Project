const findBtn = document.getElementById('findBtn');
findBtn.addEventListener('click', generateList);
const apiID='tt3896198'
const apiKey='9f1dc6dd'
const movieList = document.getElementById('movie');
const detailsContent = document.querySelector('.details-content');
movieList.addEventListener('click', getMovieInfo);
const closeBtn = document.getElementById('close-btn');

function generateList()
{
    let txtSearch = document.getElementById('search-txt').value;
    const url=`http://www.omdbapi.com/?&apikey=${apiKey}&s=${txtSearch}`
    //console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
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
        console.log(url)
        fetch(url)
        .then(response => response.json())
         console.log(response)
        //.then(data => movieModal(data.movie));
        //console.log(data)
    }
}

// create a modal
function movieModal(movie){
    console.log(movie);
    movie = movie[0];
    let html = `
        <h2 class = "movie-title">${movie.Title}</h2>
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
        <div class = "movie-img">
            <img src = "${movie.Poster}" alt = "">
        </div>
    `;
    detailsContent.innerHTML = html;
    detailsContent.parentElement.classList.add('showDetails');
}