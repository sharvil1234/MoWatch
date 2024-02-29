const apiKey = "bb16257";
const apiUrl = `https://www.omdbapi.com/?s=${localStorage.getItem("query")}&apikey=${apiKey}&r=json`;

fetch(apiUrl).then(res => {
    if (!res.ok) {
        throw new Error("Network response was not ok")
    } else {
        console.log("Network response was ok on " + window.location);
    }

    return res.json();
}).then(data => {
    if (data.Response == "True") {
        const results = data.Search;
        // console.log(results);
        createButtons(results);
    } else {
        alert("No results found or error occured");
    }
}).catch(err => {
    console.error(err);
})

function createButtons(obj) {
    const container = document.getElementById('button-container');

    obj.forEach((e, index) => {
        const img = document.createElement('img');
        img.src = e.Poster
        img.id = `${e.imdbID}`;
        img.alt = e.Title;

        img.addEventListener('click', () => handleClick(img.id));
        container.appendChild(img);
    });
}

// Function to handle button click
function handleClick(id) {
    fetch(`https://omdbapi.com/?i=${id}&apikey=bb16257&r=json`).then(res => {
        return res.json();
    }).then(data => {
        localStorage.setItem("srcId", data.imdbID);
        console.log(data)
        window.location.replace("https://sharvil1234.github.io/MoWatch/watch.html");
    })
}