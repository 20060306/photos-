const imagesList = document.querySelector("#images-list");

(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => console.err(err))
})()


function renderData(data) {

    imagesList.innerHTML = "";
    
    data.forEach(imageObj => {
        const listItem = document.createElement("li");
        listItem.classList.add("img-list")
        listItem.innerHTML = `<h3 class="img-id">${imageObj.id}</h3>
        <h4 class="img-title">${imageObj.title}</h4>
        <img class="img-list"src="${imageObj.url}">`

        imagesList.appendChild(listItem);
    })
}