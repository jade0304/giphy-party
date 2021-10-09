const $searchBtn = $("#searchButton");
const $removeBtn = $("#removeButton");
const $searchInput = $("#searchInput");
const $gifArea = $("#gifResult");

$("#searchGif").on("submit", async function (e) {
  e.preventDefault();

  let searchTerm = $searchInput[0].value;
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  console.log(response.data);

  const responseArr = response.data.data.length;
  let randomIdx = Math.floor(Math.random() * responseArr);
  let randomImgSrc = response.data.data[randomIdx].images.original.url;
  let $newCol = $("<div>");
  let $newGif = $(`<img src=${randomImgSrc}>`);

  $($newCol).append($newGif);
  $($gifArea).append($newCol);

  $searchInput[0].value = "";
});

$("#removeButton").on("click", function () {
  $gifArea.remove();
});
