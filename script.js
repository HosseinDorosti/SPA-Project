const findBtn = document.getElementById('findBtn');
findBtn.addEventListener('click', generateList);
const apiID='tt3896198'
const apiKey='9f1dc6dd'

function generateList()
{
    let txtSearch = document.getElementById('search-txt').value;
    fetch(`http://www.omdbapi.com/?i=${apiID}&apikey=${apiKey}&t=${txtSearch}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let html = "";
        
    });
}