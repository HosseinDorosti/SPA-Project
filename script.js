const findBtn = document.getElementById('findBtn');
findBtn.addEventListener('click', generateList);
const apiID='tt3896198'
const apiKey='9f1dc6dd'
const movieList = document.getElementById('movie');

function generateList()
{
    let txtSearch = document.getElementById('search-txt').value;
    const url=`http://www.omdbapi.com/?i=${apiID}&apikey=${apiKey}&s=${txtSearch}`
    console.log(url)
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
                    <div class = "movie-item" data-id = "${search.imdbID}">

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