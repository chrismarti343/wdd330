const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    }


  ]

  let counter = 1;

   links.forEach(function (info) {
   

    let link = "link"+counter;
    console.log(link)
    
    document.getElementById(link).innerHTML = '<a href="' + info.url + '">'+ info.label +'</a>';
    
    counter++;
  


})



//document.getElementById("week").innerHTML = links.label