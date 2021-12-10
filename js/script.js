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
        fetch("https://striveschool-api.herokuapp.com/api/movies/" + genreArr[i] , {
        method:"GET",
        headers: {   
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
        }
            })
        .then(response => response.json())
        .then(data=>{
            console.log(data)    
        })
         
        .catch(err=>{
            alert(err,"danger")
        })
    }
}

window.onload =  function(){
    let genreArr = ["romantic","horror","action"]

            loadMovies(genreArr)



              
               
}