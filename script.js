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
    
    
     let movieinfo = `
            Title:${movie.Title}
            Year:${movie.Year}
            Genre:${movie.Genre}
            Director : ${movie.Director}
            Product of : ${movie.Country}
            Awards : ${movie.Awards}
            BoxOffice : ${movie.BoxOffice}
            Plot:
                ${movie.Plot}        
             `;
             alert(movieinfo)
    
}