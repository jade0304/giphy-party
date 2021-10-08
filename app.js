const $searchBtn = $('#searchButton');
const $removeBtn = $('#removeButton');
const $searchInput = $('#searchInput')
const gifArea = $('#gifResult')

$('#searchGif').on('submit', async function(e) {
    e.preventDefault();

let searchTerm = $searchInput.value
let res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    console.log(res.data);
    const response = res.data
let randomImg = Math.floor(Math.random() * response.data.length);

let $newGif = $('gifArea').append('<img class="imgResult">')
const img = document.querySelector(".imgResult");
  img.src = response.data[randomImg].images.original.url;

  $searchInput.value = '';
  
})

$('#removeButton').on('click', function(){
    $gifArea.remove();
})


async function getGif(searchTerm) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    console.log(res.data)
    return res.data
}                   