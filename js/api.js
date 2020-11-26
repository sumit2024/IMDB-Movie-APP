// // movices search.............................

// let key = "8d212b57";
// let search = document.getElementById("search")
// search.addEventListener("keydown",(e)=>{
//     if(e.keyCode === 13){
//         e.preventDefault()
//          var searchKey = e.target.value;
//          searchMovices(searchKey)
//         }
        
//         })
// //  function searchMovices(searchKey){
// //     let BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=8d212b57${searchKey}&apikey=${key}`
// // window.fetch(BASE_URL).then(data =>{
// //     data.json()
// //     .then((movice) =>{

// //     })
// // })

// //     // let res = await window.fetch(BASE_URL)
// // // console.log(res);
// // }

// async function searchMovices(searchKey){
//     let BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=8d212b57${searchKey}&apikey=${key}`
  
//     try {
//         let response = await window.fetch(BASE_URL)
//         let movies = await response.json()
//         let output = []
//         for (let movie of movies){
// output+=`
// <div class="card" col-md-3>
// <img src="${movie.poster}" class="img-card-top" alt="${movie.Titel}"
        

// <div class="card-body">
//         <h4>${movie.Titel}</h4>
//         <h4>${movie.year}</h4>

// </div>
// </div>`}
     
//     } catch (error) {
//         console.error(error)
//     }
// }



let Key = "8c5fcb32";
let search = document.getElementById("search");

search.addEventListener("keyup",(e) => {
    
     if(e.keyCode === 13)
     {
        var searchKey = e.target.value;
        searchMovies(searchKey);
     }
});

async function searchMovies(searchKey){
    let BASE_URL = `http://www.omdbapi.com/?s=${searchKey}&apikey=${Key}`

    try {
        let response = await window.fetch(BASE_URL);
        let movies = await response.json();
        let output = [];
        for(let movie of movies.Search){
            let setDefaultPoster = movie.Poster === "N/A" ? "../images/download.png" : movie.Poster;
            output += `
            <div class = "card col-md-3 p-0 custom_card">
            <img src = "${setDefaultPoster}" class="img-card-top" alt="${movie.Title}">
            <div class="card-body">
              <h4>${movie.Title}</h4>
              <h4>${movie.Year}</h4>
            </div>
            </div>`;
        }
        document.getElementById("template").innerHTML = output;
        
    } catch (error) {
        console.log(error);
        
    }
}