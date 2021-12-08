"use strict";

function fetchData(){
    var myInit ={
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
    };
    
    let myRequest = new Request("./planets.json", myInit);
    
    fetch(myRequest)
    .then(function (response){
        return response.json();
    })
    
    .then(function (data){
        console.log(data[0].name);

        let counter = 1;
        data.forEach(function (info){
            document.getElementById(counter).onclick = function ()
            {
            document.getElementById("position").innerHTML = "Position: " + info.position;
            document.getElementById("description").innerHTML = info.description;
            document.getElementById("name-planet").innerHTML = info.name;
            document.getElementById("velocity").innerHTML = "Velocity: " + info.velocity + ' km/s';
            document.getElementById("distance").innerHTML ="Distance: " +  info.distance + ' km';
            document.getElementById("image").src = info.image;

            }
            counter++;

        })


    })
}

function card(){
    const card = document.querySelector(".flip-card-inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
}

function card2(){
    const card = document.querySelector(".flip-card-inner2");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
}

function shadow(){
   
    document.getElementById('1').onclick = function ()
    {
        document.getElementById("mercury").style.boxShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 55px #00fefe";
    }
}
        

card();
card2();
shadow();
fetchData();