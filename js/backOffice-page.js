    
          const genre = new URLSearchParams(window.location.search).get("movieGenre")
          const movieId = new URLSearchParams(window.location.search).get("movieId")
          //const url = category? "https://striveschool-api.herokuapp.com/api/movies/" + genre: "https://striveschool-api.herokuapp.com/api/movies"
          const url = movieId? "https://striveschool-api.herokuapp.com/api/movies/" + genre + "/" + movieId: "https://striveschool-api.herokuapp.com/api/movies"
          const method = movieId? "PUT":"POST"
          const deleteBtn = document.getElementById("deleteBtn")
        
          console.log(genre)
          console.log(movieId)
        


          const handleSubmit = function(event){
            event.preventDefault()
            const newMovie= {
                name: document.getElementById("movie-name").value,
                description: document.getElementById("description").value,
                category: document.getElementById("category").value.toLowerCase(),
                imageUrl: document.getElementById("imageUrl").value
            }
            fetch(url, {
            method,
            body:JSON.stringify(newMovie),    
            headers: {
                'Content-Type': 'application/json',   
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
            }
                })
            .then(response => response.json())
            .then(movies=>{
                console.log(movies)    
              setTimeout( alertBox("Successfully posted new product","success"),3000)
            })
            .catch(err=>{
                alertBox(err,"danger")
            })
        }


      



          const handleDelete = async function(){
            confirm(`Do you want to delete product with id ${movieId}?`)
            if(confirm){
              fetch(url_id, {
                method:"DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"

            }
          })
          
            }

          }
    
          const alertBox = function(msg,color){
            let alertBox = document.querySelector("#alertBox")
            alertBox.innerHTML =""
            alertBox.classList.add (`bg-${color}`)
            alertBox.innerHTML =`${msg}`
            }


          
        
          
        
        window.onload = function(){
          if(movieId){
            deleteBtn.style.display = "block"
            document.querySelector(".h4").innerText = "-Edit Mode-"
            fetch(url_id, {
              method:"GET",
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
          }
      })
      .then(response => response.json())
      .then(movies =>{
        console.log(movies)
        document.getElementById("movie-name").value =movies.name
        document.getElementById("description").value =movies.description
        document.getElementById("category").value =movies.category
        document.getElementById("imageUrl").value =movies.imageUrl
      }).catch(err => alertBox(err,"danger"))

        
          }
        }




// ==============================================================

// let movieId = new URLSearchParams(window.location.search)

// let url = movieId? "https://striveschool-api.herokuapp.com/api/movies/" + movieId : "https://striveschool-api.herokuapp.com/api/movies" 
// let method = movieId? "PUT":"POST"

//     const submitPost = function(event){
//         event.preventDefault()
//         // let form = document.querySelector("form")
//         // form.classList.add("validated")
//         const newMovie = {
//             name: document.getElementById("movie-name").value,
//             description: document.getElementById("description").value,
//             category: document.getElementById("category").value.toLowerCase(),
//             imageUrl: document.getElementById("imageUrl").value
//         }
        
//         fetch("https://striveschool-api.herokuapp.com/api/movies", {
//             method:"POST",
//             body:JSON.stringify(newMovie),
//             headers: {
//             'Content-Type': 'application/json',
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
//             }
//         })
//         .then(response => response.json())
//         .then(jsonData=>{
//             alert('hello')
//           setTimeout( alertBox("Successfully posted new movie","success"),3000)
//         //   window.location.assign("/")
//         })
         
//         .catch(err=>{
//             alertBox(err,"danger")
//         })
//     }

//     // =====
//     fetch("https://striveschool-api.herokuapp.com/api/movies/romantic", {
//             method: "GET", 
//             headers: {
            
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
//         }
//     })
//     .then(response => response.json())
//     .then(jsonData=>{
//     console.log(jsonData)
   
//     })
     
//     .catch(err=>{
//         alertBox(err,"danger")
//     })


//     fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
//         method: "GET", 
//         headers: {
        
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
//         }
//     })
//     .then(response => response.json())
//     .then(jsonData=>{
//     console.log(jsonData)
   
//     })
     
//     .catch(err=>{
//         alertBox(err,"danger")
//     })


//     fetch("https://striveschool-api.herokuapp.com/api/movies/kid", {
//         method: "GET", 
//         headers: {
        
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
//         }
//     })
//     .then(response => response.json())
//     .then(jsonData=>{
//     console.log(jsonData)
   
//     })
     
//     .catch(err=>{
//         alertBox(err,"danger")
//     })
// // =====



//     window.onload = function(){

//     }