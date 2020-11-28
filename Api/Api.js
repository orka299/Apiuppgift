
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


   /* let matches = info.filter(movies => {
        const regex = new RegExp(`^${movietext}`,'gi');
        return movies.name.match(regex) || movies.abbr.match(regex);
    });

    console.log(matches)

*/
 let htmlInsert = "";
    for(let i = 0; i < filmer.length;i++){
           
        
        console.log(filmer[i].Title)
        htmlInsert +=
        '<div id = "delar">' +
        '<h2 class ="deepSearch">'+ filmer[i].Title+'</h2>' + 
        '<i>' + filmer[i].Year + '</i>' +
        '<img src="'+filmer[i].Poster+'">' +
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
    movie.value = null;
    
    }else{
    switchbtn.value = 'movie'
    switchbtn.innerHTML ='Movies'
    movie.value = null;
    
    
};
};

movie.addEventListener('input',() =>
movieSearch(movie.value));














/*let links = document.querySelectorAll('.deepSearch');
for (let link of links) {
    link.addEventListener('click', alert);
}

function alert(){
    alert('here')
}


*/
/*async function fetchJSON() {

   
        let parameter = this.id;
        console.log(parameter)
        let response = await fetch('http://www.omdbapi.com/?apikey=5587ccd4&s='+sökning.value);
        let info = await response.json(); 

       
       
       
       
       
        
       for(let i = 0; i < filmer.length;i++){
           

        console.log(filmer[i].Title)
        movieplace.innerHTML +=
        '<div id = "delar">' +
        '<h2>'+ filmer[i].Title+'</h2>' + 
        '<i>' + filmer[i].Year + '</i>' +
        '<img src="'+filmer[i].Poster+'">' +
        '</div>'
       }
           
         
        
    
}
submit.addEventListener('click',fetchJSON);{
    
}
noll.addEventListener('click',remdel);{
    delar.remove
}

*/