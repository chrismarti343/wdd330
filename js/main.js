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
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },
    {
      label: "Week6 todo App",
      url: "week6/index.html"
    },
    {
      label: "Week7 notes",
      url: "week7/index.html"
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