const hideAppear = function(){
    let iconId = document.getElementById("search-icon-nav")
    let searchInput = document.getElementById("nav-form-control")
    iconId.style.display = "none"
    searchInput.style.display = "block"
}
const hideAppear1 = function(){
    let iconId = document.getElementById("search-icon-nav")
    let searchInput = document.getElementById("nav-form-control")
    iconId.style.display = "block"
    searchInput.style.display = "none"
}




const loadMovies = function(genreArr){

    for(let i = 0; i < genreArr.length; i++ ){
        fetch("https://striveschool-api.herokuapp.com/api/movies/horror" , {
        method:"GET",
        headers: {   
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
        }
            })
        .then(response => response.json())
        .then(movies=>{
           
            console.log(movies)
           displayMovies(movies,i)  
            
        })
         
        .catch(err=>{
            alert(err,"danger")
        })
    }
}


const displayMovies = function(movies,index){

    let moviesRow = document.querySelector(".moviesRow")
    movies.forEach((movie,i) =>{
        moviesRow.innerHTML += `<a href="/backOffice-page.html?movieId=${movie._id}&movieGenre=${movie.category}"><div class="col-sm-5 col-md-4 col-lg-3 col-xl-2 pt-2 pb-2 pl-0 pr-1 img-hover-zoom">
        <img src="${movie.imageUrl}" class="card-img-top" alt="..." width="100%" height="100%"/>
    </div>`
    })
}


window.onload =  function(){
    
    let genreArr = ["romantic"]

            loadMovies(genreArr)



              
               
}