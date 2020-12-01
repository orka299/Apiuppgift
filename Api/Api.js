
let movie = document.getElementById('sökning');
let submit = document.getElementById('submit')
let movieplace = document.getElementById('movieplace')
let noll = document.getElementById('nollställ')
let delar = document.getElementById('delar')
let deepSearch = document.getElementById('deepsearch')
let radio = document.getElementById('radiobutton');
let switchbtn = document.getElementById('switch')


const movieSearch = async movietext =>{
try {

    const res = await fetch('http://www.omdbapi.com/?apikey=5587ccd4&s='+movie.value+'&type='+switchbtn.value);
    let info = await res.json();
    
    console.log(info);
    let filmer = info['Search']
    console.log(switchbtn.value)


 let htmlInsert = "";
    for(let i = 0; i < filmer.length;i++){
           
        
        console.log(filmer[i].Title)
        htmlInsert +=
        '<div id = "delar">' +
        '<h2 class ="deepSearch">'+ filmer[i].Title+'</h2>' + 
        '<img src="'+filmer[i].Poster+'">' +
        '<br>' +
        '<i>' + filmer[i].Year + '</i>' +
        '</div>'

        movieplace.innerHTML = htmlInsert;



        
       }

       

    

}catch(message){
        throw new Error(message);

    }
}

switchbtn.addEventListener('click',swap)
function swap(){
if(switchbtn.value === 'movie'){
    switchbtn.value = "series"
    switchbtn.innerHTML ='Series'
    movieSearch();
     }else{
    switchbtn.value = 'movie'
    switchbtn.innerHTML ='Movies'
    movieSearch();
    
    
};
};

movie.addEventListener('input',() =>
movieSearch(movie.value));














