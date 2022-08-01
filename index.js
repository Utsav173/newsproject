// // let news = `<div class="col">
// // <div class="card text-bg-dark">
// //     <img src=".." class="card-img" alt="...">
// //     <div class="card-img-overlay">
// //         <h5 class="card-title">Card title</h5>
// //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// //         <p class="card-text">Last updated 3 mins ago</p>
// //     </div>
// // </div>
// // </div>`;


// const options = { method: "GET" };

// fetch(
//   "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=066d822bb3e44df4a346e2ad350b183c",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => response.articles)
//   .catch((err) => console.error(err));
// let newsdata = response.articles;
// let newsacroding = document.getElementById('dspnews')
// let naw = "";

// // for (const key in newsdata) {
// //     let news = `<div class="col">
// //     <div class="card text-bg-dark">
// //         <img src="${key[urlToImage]}" class="card-img" alt="...">
// //         <div class="card-img-overlay">
// //             <h5 class="card-title">${key[title]}</h5>
// //             <p class="card-text">${key[content]}</p>
// //             <p class="card-text">Last updated ${key[publishedAt]}</p>
// //         </div>
// //     </div>
// //     </div>`;
// // naw += news;
// // }

// response.forEach(function(element){
//   let news = `<div class="col" id="collapse${index}">
//                 <div class="card text-bg-dark"  id="heading${index}">
//                     <img src="${element[urlToImage]}" class="card-img" alt="...">
//                     <div class="card-img-overlay" id="${index}">
//                         <h5 class="card-title">${element[title]}</h5>
//                         <p class="card-text">${element[content]}</p>
//                         <p class="card-text">Last updated ${element[publishedAt]}</p>
//                     </div>
//                 </div>
//                 </div>`;
//   naw += news;
// });
// newsacroding.innerHTML = naw;







console.log("This is my index js file");

// Initialize the news api parameters
let apiKey = '066d822bb3e44df4a346e2ad350b183c'

// Grab the news container
let newsAccordion = document.getElementById('dscnews');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="col" id="collapse${index}">
            <div class="card text-bg-dark"  id="heading${index}">
                <img src="${element["urlToImage"]}" class="card-img" alt="...">
                <div class="card-img-overlay" id="${index}">
                    <h5 class="card-title">${element["title"]}</h5>
                    <p class="card-text">${element["content"]}</p>
                    <p class="card-text">Last updated ${element["publishedAt"]}</p>
                </div>
            </div>
            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()




