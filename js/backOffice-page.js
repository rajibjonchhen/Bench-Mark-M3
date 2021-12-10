
let movieId = new URLSearchParams(window.location.search)

let url = movieId? "https://striveschool-api.herokuapp.com/api/movies/" + movieId : "https://striveschool-api.herokuapp.com/api/movies" 
let method = movieId? "PUT":"POST"

    const submit = function(event){
        event.preventDefault()
        let form = document.querySelector("form")
        form.classList.add("validated")
        const newMovie = {
            name: document.getElementById("movie-name").value,
            description: document.getElementById("description").value,
            category: document.getElementById("category").toLowerCase().value,
            imageUrl: document.getElementById("imageUrl").value
        }
        
        fetch("https://striveschool-api.herokuapp.com/api/movies", {
            method:"POST",
            body:JSON.stringify(newMovie),
            headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
            }
        })
        .then(response => response.json())
        .then(jsonData=>{
            alert('hello')
          setTimeout( alertBox("Successfully posted new movie","success"),3000)
        //   window.location.assign("/")
        })
         
        .catch(err=>{
            alertBox(err,"danger")
        })
    }

    // =====
    fetch("https://striveschool-api.herokuapp.com/api/movies/romantic", {
            method: "GET", 
            headers: {
            
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{
    console.log(jsonData)
   
    })
     
    .catch(err=>{
        alertBox(err,"danger")
    })


    fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
        method: "GET", 
        headers: {
        
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{
    console.log(jsonData)
   
    })
     
    .catch(err=>{
        alertBox(err,"danger")
    })


    fetch("https://striveschool-api.herokuapp.com/api/movies/kid", {
        method: "GET", 
        headers: {
        
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{
    console.log(jsonData)
   
    })
     
    .catch(err=>{
        alertBox(err,"danger")
    })
// =====

const alertBox = function(msg,color){
    let alertBox = document.querySelector("#alertBox")
    alertBox.innerHTML =""
    alertBox.classList.add (`bg-${color}`)
    alertBox.innerHTML =`${msg}`
    }

    window.onload = function(){

    }