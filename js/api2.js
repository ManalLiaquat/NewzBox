
var apikey = "20b039d631524aa790a42953ca629019";
const main = document.querySelector("#div");
window.addEventListener('load', async e => {
    updatedNews();
})


async function updatedNews() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`)
    imagesArray = [];    
    const json = await res.json();
    // console.log(json)
    for (let key in json.articles) {
        imagesArray.push(json.articles[key].urlToImage)
    }
    // console.log(imagesArray, "Imagess")
    var flag = 0;
    var timer;
    // console.log(imagesArray[3])
    document.getElementById('img').style.backgroundImage = "url(" + imagesArray[3] + ")"
    function images() {
        if (flag === imagesArray.length) {
            flag = 0
            // console.log(flag)
            document.getElementById('img').style.backgroundImage = "url(" + imagesArray[flag] + ")"
        }
        else {
            document.getElementById('img').style.backgroundImage = "url(" + imagesArray[flag] + ")"
            // console.log(flag)
        }
    }
    // }
    timer = setInterval(() => {
        flag++
        images()
    }, 3000)
    main.innerHTML += json.articles.map(createArticles).join('\n')
}
function createArticles(article) {
    return `
        <div class="col-md-8 col-md-offset-2">
            <h2 class='h2'>${article.title}</h2>
            <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
            <p class='h4'>${article.description}</p>
        </div>
        `
}
