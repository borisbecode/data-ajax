 // VAR ESSAI ZERO  
/* 
   function getCORS(url, success) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    
    xhr.open('GET', url);
    xhr.onload = success;
    
    xhr.send();
   
    return xhr;
    xhr.withCredentials = true;
}

// example request
getCORS('https://canvasjs.com/services/data/datapoints.php', function(request){
    var response = request.currentTarget.response || request.target.responseText;
    console.log(response);
    
}); 


setInterval(getCORS, 1000);  */
 



// VAR PREMIER ESSAI 

 /*  var postId = 1
 var getData =  function reseau(){


    var request = new XMLHttpRequest();
     request.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
    request.send(); 
      request.onload = function(){


          if (request.status == 200 ) {
                console.log("succes")

              const numberjson = JSON.parse(this.response)
              console.log(numberjson) ;

    
  
   
    

             myChart3.data.labels.push("Nombre de crime par seconde aujourd'hui  " + postId++);
             myChart3.data.datasets[0].data.push(); 
    
  
              myChart3.update(); 
 

          }


      }


  }
  setInterval(getData, 1000);
    */


  // DEUXIEME ESSAI


/*  function getelement(url,callback){
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
  
  request.send()
      request.onload = function() {

          callback(request)
          if (request.status == 200 ) {

            console.log("succes")
            const numberjson = JSON.parse(this.response)
          

          }


         
       }

 
     


}

getelement('https://canvasjs.com/services/data/datapoints.php',function(request){

 console.log(request.responseText)
 
})


setInterval(getelement, 1000);  */
 










  

 /*  var postId = 1;

 var getData = function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments',
      success: function(data) {
       
        myChart3.data.labels.push("Post " + postId++);
        myChart3.data.datasets[0].data.push(getRandomIntInclusive(1, 25));
        
      
        myChart3.update();
      }
    });
  }; */
  



  /* canvas.setAttribute("width","350vw")
canvas.setAttribute("height","180vh")

var pays2 = tableArr[2]
pays2.splice(0,1)
var bulga = pays2.map(x => parseInt(x));
 



















const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nombredannee ,
        datasets: [{
            label: 'belgique',
            data: bel ,
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
        //         'rgba(255, 99, 132, 0.2)',
        //        'rgba(54, 162, 235, 0.2)',
        //        'rgba(255, 206, 86, 0.2)',
        //        'rgba(75, 192, 192, 0.2)',
        //        'rgba(153, 102, 255, 0.2)',
         //       'rgba(255, 159, 64, 0.2)',
         //   , 
            borderColor: 'rgba(255, 99, 132, 1)',
      //           'rgba(255, 99, 132, 1)',
       //         'rgba(54, 162, 235, 1)',
        //        'rgba(255, 206, 86, 1)',
        //        'rgba(75, 192, 192, 1)',
        //        'rgba(153, 102, 255, 1)',
        //        'rgba(255, 159, 64, 1)'
       //     ], 
            borderWidth: 1
        } ,{
          label: " bulgarie",
          data: bulga,
          
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        
        borderColor:'rgba(54, 162, 235, 0.5)',



        },
        {
            label: " republique tcheque",
            data: annee2004,
            
            backgroundColor: 'rgba(54, 15, 235, 0.8)',
          
          borderColor:'rgba(54, 15, 235, 0.5)',
  
  
  
          },
          {
            label: " turquie",
            data: annee2005,
            
            backgroundColor: 'rgba(54, 162, 23, 0.8)',
          
          borderColor:'rgba(54, 162, 23, 0.5)',
  
  
  
          },
          {
            label: " france",
            data: annee2006,
            
            backgroundColor: 'rgba(54, 16, 23, 0.8)',
          
          borderColor:'rgba(54, 16, 23, 0.5)',
  
  
  
          },
          {
            label: " autriche",
            data: annee2008,
            
            backgroundColor: 'rgba(175, 62, 223, 0.8)',
          
          borderColor:'rgba(175, 62, 223, 0.5)',
  
  
  
          },
          {
            label: " belgique",
            data: annee2009,
            
            backgroundColor: 'rgba(75, 75, 75, 0.8)',
          
          borderColor:'rgba(75, 75, 75, 0.5)',
  
  
  
          },
          {
            label: " italie",
            data: annee2010,
            
            backgroundColor: 'rgba(254, 162, 123, 0.8)',
          
          borderColor:'rgba(254, 162, 123, 0.5)',
  
  
  
          },
          {
            label: " année 2011",
            data: annee2011,
            
            backgroundColor: 'rgba(154, 212, 80, 0.8)',
          
          borderColor:'rgba(154, 212, 80, 0.5)',
  
  
  
          },
          {
            label: " année 2012",
            data: annee2012,
            
            backgroundColor: 'rgba(54, 162, 180, 0.8)',
          
          borderColor:'rgba(54, 162, 180, 0.5)',
  
  
  
          },
          {
            label: " republique tcheque",
            data: annee2004,
            
            backgroundColor: 'rgba(54, 15, 235, 0.8)',
          
          borderColor:'rgba(54, 15, 235, 0.5)',
  
  
  
          },
          {
            label: " turquie",
            data: annee2005,
            
            backgroundColor: 'rgba(54, 162, 23, 0.8)',
          
          borderColor:'rgba(54, 162, 23, 0.5)',
  
  
  
          },
          {
            label: " france",
            data: annee2006,
            
            backgroundColor: 'rgba(54, 16, 23, 0.8)',
          
          borderColor:'rgba(54, 16, 23, 0.5)',
  
  
  
          },
          {
            label: " autriche",
            data: annee2008,
            
            backgroundColor: 'rgba(175, 62, 223, 0.8)',
          
          borderColor:'rgba(175, 62, 223, 0.5)',
  
  
  
          },
          {
            label: " belgique",
            data: annee2009,
            
            backgroundColor: 'rgba(75, 75, 75, 0.8)',
          
          borderColor:'rgba(75, 75, 75, 0.5)',
  
  
  
          },
          {
            label: " italie",
            data: annee2010,
            
            backgroundColor: 'rgba(254, 162, 123, 0.8)',
          
          borderColor:'rgba(254, 162, 123, 0.5)',
  
  
  
          },
          {
            label: " année 2011",
            data: annee2011,
            
            backgroundColor: 'rgba(154, 212, 80, 0.8)',
          
          borderColor:'rgba(154, 212, 80, 0.5)',
  
  
  
          },
          {
            label: " année 2012",
            data: annee2012,
            
            backgroundColor: 'rgba(54, 162, 180, 0.8)',
          
          borderColor:'rgba(54, 162, 180, 0.5)',
  
  
  
          },
          {
            label: " republique tcheque",
            data: annee2004,
            
            backgroundColor: 'rgba(54, 15, 235, 0.8)',
          
          borderColor:'rgba(54, 15, 235, 0.5)',
  
  
  
          },
          {
            label: " turquie",
            data: annee2005,
            
            backgroundColor: 'rgba(54, 162, 23, 0.8)',
          
          borderColor:'rgba(54, 162, 23, 0.5)',
  
  
  
          },
          {
            label: " france",
            data: annee2006,
            
            backgroundColor: 'rgba(54, 16, 23, 0.8)',
          
          borderColor:'rgba(54, 16, 23, 0.5)',
  
  
  
          },
          {
            label: " autriche",
            data: annee2008,
            
            backgroundColor: 'rgba(175, 62, 223, 0.8)',
          
          borderColor:'rgba(175, 62, 223, 0.5)',
  
  
  
          },
          {
            label: " belgique",
            data: annee2009,
            
            backgroundColor: 'rgba(75, 75, 75, 0.8)',
          
          borderColor:'rgba(75, 75, 75, 0.5)',
  
  
  
          },
          {
            label: " italie",
            data: annee2010,
            
            backgroundColor: 'rgba(254, 162, 123, 0.8)',
          
          borderColor:'rgba(254, 162, 123, 0.5)',
  
  
  
          },
          {
            label: " année 2011",
            data: annee2011,
            
            backgroundColor: 'rgba(154, 212, 80, 0.8)',
          
          borderColor:'rgba(154, 212, 80, 0.5)',
  
  
  
          },
          {
            label: " année 2012",
            data: annee2012,
            
            backgroundColor: 'rgba(54, 162, 180, 0.8)',
          
          borderColor:'rgba(54, 162, 180, 0.5)',
  
  
  
          },
        
        
        
        
        
        
         
         
        
        
        
        ]
    },
    options: {
        responsive:true,
 //         indexAxis:'y',   
        
        plugins: {
          title: {
            display: true,
            text: 'Years Settings'
          }
        },
        
    scales: {
       
        title: {
            display: true,
            text: 'Value'}

      },
      
    
    }




      
});




*/