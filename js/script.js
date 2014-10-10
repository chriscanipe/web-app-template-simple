$(document).ready(function() {
    console.log("Hello world.")
});


//creates an array of objects
d3.csv('https://www.gocolumbiamo.com/PSJC/Services/911/911dispatch/fire_csvexport.php', function(data){
    console.log(data);
});




