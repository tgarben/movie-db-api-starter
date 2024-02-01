function getPopularMovies(){

    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=a62f3387aafa8e8da7e6c61bb38c27d9&language=en-US&page=1'
    let popularMovies = document.getElementById("popular");
    let imgURL = "https://image.tmdb.org/t/p/w500/";

    const data = null;

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        console.log(json);

        let html = "";

        for(let i = 0; i < 4; i++){
            html+= `
                <figure>
                    <img src="${imgURL}${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>
            `
        }

        popularMovies.innerHTML = html;
    }
    });

    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjJmMzM4N2FhZmE4ZThkYTdlNmM2MWJiMzhjMjdkOSIsInN1YiI6IjY1YmFhOGE3NDZlNzVmMDE2MWJjMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YM0ZEDl1HtsTE0g9loW07wtfU7QkKkAJuScUVnWL9wU');

    xhr.send(data);

}

function getBirthYearMovies(e){
    e.preventDefault();
    let year = encodeURI(document.getElementById("userYear"));
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=a62f3387aafa8e8da7e6c61bb38c27d9&primary_release_year=${encodeURI(year)}&sort_by=revenue.desc&language=en-US&page=1&include_adult=false`
    let birthMovies = document.getElementById("birthYear");
    let imgUrl = "https://image.tmdb.org/t/p/w500/";


    const data = null;

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        console.log(json);

        let html = "";

        for(let i = 0; i < 4; i++){
            html+= `
                <figure>
                    <img src="${imgUrl}${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>
            `
        }

        birthMovies.innerHTML = html;
    }
    });

    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjJmMzM4N2FhZmE4ZThkYTdlNmM2MWJiMzhjMjdkOSIsInN1YiI6IjY1YmFhOGE3NDZlNzVmMDE2MWJjMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YM0ZEDl1HtsTE0g9loW07wtfU7QkKkAJuScUVnWL9wU');

    xhr.send(data);


}

window.addEventListener("load", function(){
    getPopularMovies();
    this.document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
})