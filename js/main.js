const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }

  ]

let list = document.getElementById("myList");

links.forEach(function (info) {
   
    //console.log(info.label);
    
    document.getElementById('link').innerHTML = '<a href="' + info.url + '">'+ info.label +'</a>';
        
    //console.log(info.url);

    console.log(a);
    console.log(li);




})



//document.getElementById("week").innerHTML = links.label