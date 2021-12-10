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



window.onload = async function(){
    let genreArr = ["romantic","horror","action"]


//         // genreArr.forEach(genre => {
            fetch("https://striveschool-api.herokuapp.com/api/movies/romantic", {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2MzkxMzAwOTksImV4cCI6MTY0MDMzOTY5OX0.s2tZXViAm7UEvRtsxq8dzSl2IfgwSUd33HySA5gYoa4"
                    }
            })
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData)
                let container = document.querySelector(".container")
                container.innerHTML = ` <section>
                <div class="row">
                    <div class="row">
                        <div class="ml-4 mt-3 d-flex">
                            <h1 class="pr-3">TV Shows</h1>
                            <div class="dropdown mt-2">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" style="border-radius: 2px;">
                                    Genres
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div class="d-block">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Comedy</a>
                                        <a class="dropdown-item" href="#">Family</a>
                                        <a class="dropdown-item" href="#">Kids</a>
                                        <a class="dropdown-item" href="#">Crime</a>
                                    </div>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group" style="border-radius: 2px;">
                                    <button type="button" class="btn btn-outline-secondary" style="border-radius: 2px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-left" viewBox="0 0 16 16">
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button type="button" class="btn btn-outline-secondary" style="border-radius: 2px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                                            <path
                                                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> `
            })
        .catch(err =>{console.error(err)})
//  })
  


}
