
var noscript = document.createElement("noscript")


var canvas = document.createElement("canvas")
canvas.setAttribute("id", "myChart")
canvas.setAttribute("width","150vw")
canvas.setAttribute("height","180vh")

document.getElementById("table1").before(canvas)



 var table = document.querySelector('table')
var tableArr = [];
var tablepays = [];
var annee2002 = []
var annee2003 = []
var annee2004 = []
var annee2005 = []
var annee2006 = []
var annee2007 = []
var annee2008 = []
var annee2009 = []
var annee2010 = []
var annee2011= []
var annee2012 = []


//loop all rows and form data array
for ( var i = 1; i < table.rows.length; i++ ) {
    tableArr.push([
     table.rows[i].cells[1].innerText,
     table.rows[i].cells[2].innerText,
     table.rows[i].cells[3].innerText,
     table.rows[i].cells[4].innerText,
     table.rows[i].cells[5].innerText,
     table.rows[i].cells[6].innerText,
     table.rows[i].cells[7].innerText,
     table.rows[i].cells[8].innerText,
     table.rows[i].cells[9].innerText,
     table.rows[i].cells[10].innerText,
     table.rows[i].cells[11].innerText,
     table.rows[i].cells[12].innerText,
     
    ]);
tablepays.push(table.rows[i].cells[1].innerText)
annee2002.push(parseFloat(table.rows[i].cells[2].innerText))
annee2003.push(parseFloat(table.rows[i].cells[3].innerText))
annee2004.push(parseFloat(table.rows[i].cells[4].innerText))
annee2005.push(parseFloat(table.rows[i].cells[5].innerText))
annee2006.push(parseFloat(table.rows[i].cells[6].innerText))
annee2007.push(parseFloat(table.rows[i].cells[7].innerText))
annee2008.push(parseFloat(table.rows[i].cells[8].innerText))
annee2009.push(parseFloat(table.rows[i].cells[9].innerText))
annee2010.push(parseFloat(table.rows[i].cells[10].innerText))
annee2011.push(parseFloat(table.rows[i].cells[11].innerText))
annee2012.push(parseFloat(table.rows[i].cells[12].innerText))


}

var nombredannee = tableArr[0]
nombredannee.splice(0,1)




console.log(tableArr); 

console.log(annee2011)



console.log(nombredannee)

/* result2002.splice(0,1);   // pour enlever le premier chiffre 
tablepays.splice(0,1); */





tablepays.splice(0,1)
annee2002.splice(0,1);
annee2003.splice(0,1);
annee2004.splice(0,1);
annee2005.splice(0,1);
annee2006.splice(0,1);
annee2007.splice(0,1);
annee2008.splice(0,1);
annee2009.splice(0,1);
annee2010.splice(0,1);
annee2011.splice(0,1);
annee2012.splice(0,1);


var belgique = tableArr[1]
belgique.splice(0,1)
var bel = belgique.map(x => parseInt(x));
console.log(bel)


/*  const middleIndex = Math.ceil(tablepays.length / 2);

const firstHalf = tablepays.splice(0, middleIndex);   
const secondHalf = tablepays.splice(-middleIndex);
console.log(firstHalf)
console.log(secondHalf)  */



//TABLEAU




 const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: tablepays ,
        datasets: [{
            label: 'annee2002',
            data: annee2002 ,
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
            borderWidth: 1,
            hidden:true,
        } ,{
          label: " année 2003",
          data: annee2003,
          
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        
        borderColor:'rgba(54, 162, 235, 0.5)',

          hidden:true,

        },
        {
            label: " année 2004",
            data: annee2004,
            
            backgroundColor: 'rgba(54, 15, 235, 0.8)',
          
          borderColor:'rgba(54, 15, 235, 0.5)',
  
  
          hidden:true,
          },
          {
            label: " année 2005",
            data: annee2005,
            
            backgroundColor: 'rgba(54, 162, 23, 0.8)',
          
          borderColor:'rgba(54, 162, 23, 0.5)',
  
          hidden:true,
  
          },
          {
            label: " année 2006",
            data: annee2006,
            
            backgroundColor: 'rgba(54, 16, 23, 0.8)',
          
          borderColor:'rgba(54, 16, 23, 0.5)',
  
          hidden:true,
  
          },
          {
            label: " année 2007",
            data: annee2007,
            
            backgroundColor: 'rgba(254, 162, 23, 0.8)',
          
          borderColor:'rgba(254, 162, 23, 0.5)',
  
  
  
          },
          {
            label: " année 2008",
            data: annee2008,
            
            backgroundColor: 'rgba(175, 62, 223, 0.8)',
          
          borderColor:'rgba(175, 62, 223, 0.5)',
  
          hidden:true,
  
          },
          {
            label: " année 2009",
            data: annee2009,
            
            backgroundColor: 'rgba(75, 75, 75, 0.8)',
          
          borderColor:'rgba(75, 75, 75, 0.5)',
  
          hidden:true,
  
          },
          {
            label: " année 2010",
            data: annee2010,
            
            backgroundColor: 'rgba(254, 162, 123, 0.8)',
          
          borderColor:'rgba(254, 162, 123, 0.5)',
  
  
          hidden:true,
          },
          {
            label: " année 2011",
            data: annee2011,
            
            backgroundColor: 'rgba(154, 212, 80, 0.8)',
          
          borderColor:'rgba(154, 212, 80, 0.5)',
  
          hidden:true,
  
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
         indexAxis:'y',  
        
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


document.querySelector('canvas').style.display = 'initial';



//DEUXIEME TABLEAU






var canvas2 = document.createElement("canvas")
canvas2.setAttribute("id", "myChart2")
canvas2.setAttribute("width","400vw")
canvas2.setAttribute("height","150vh")

document.getElementById("table2").before(canvas2)

 var table2 = document.getElementById("table2")
var tableArr2 = [];
var tablepays2 = [];
var annee7a9 = []
var annee10a12 = []

for ( var i = 1; i < table2.rows.length; i++ ) {
    tableArr2.push([
     table2.rows[i].cells[1].innerText,
     table2.rows[i].cells[2].innerText,
     table2.rows[i].cells[3].innerText,
     
     
    ]);
tablepays2.push(table2.rows[i].cells[1].innerText)
annee7a9.push(parseInt(table2.rows[i].cells[2].innerText))
annee10a12.push(parseInt(table2.rows[i].cells[3].innerText))




}

console.log(tablepays2)
console.log(tableArr2)
console.log(annee7a9)
console.log(annee10a12)








const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: tablepays2 ,
        datasets: [{
            label: 'De 2007 a 2009 ',
            data: annee7a9 ,
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
          label: " de 2010 a 2012 ",
          data: annee10a12,
          
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        
        borderColor:'rgba(54, 162, 235, 0.5)',



        },
       
        
        
        
        ]
    },
    options: {
        responsive:true,
        
        
        plugins: {
          title: {
            display: true,
            text: 'Nombre de mort'
          }
        },
        
    scales: {
       
        title: {
            display: true,
            text: 'Value'}

      },
      
    
    }




      
});




 
var dynamic = document.createElement("canvas")
dynamic.setAttribute("id", "mycanvas3")
dynamic.setAttribute("width","400vw")
dynamic.setAttribute("height","150vh")







document.getElementById("firstHeading").after(dynamic)


// used for example purposes

  
  // create initial empty chart
  var ctx_live = document.getElementById("mycanvas3");
  var myChart3 = new Chart(ctx_live, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderWidth: 1,
        borderColor:'rgba(255, 99, 132, 0.8)',
        label: 'Compteur en live ',
      },
     /*  {
        data: [],
        borderWidth: 1,
        borderColor:'#00c0ef',
        label: 'Compteur en live ',
      }, */
    
    
    
    ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });


 


var i = 1 
var refresh = function(){
  i++

  var settings = {
    'cache': false,
    'dataType': "jsonp",
    "async": true,
    "crossDomain": true,
    "url": "https://canvasjs.com/services/data/datapoints.php",
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
    }
}

$.ajax(settings).done(function (response) {
  
 
   var res = response.map(function(v) {
    return v[1];
  }); 

    var res2 = response.map(function(t) {
      return[0]
    });
 

    console.log(response);

     myChart3.data.labels.push("Crime mondiaux par seconde"); 
     myChart3.update();
     if ( i > 10 ){ 
      myChart3.data.labels.shift(); 
      myChart3.update();

     }
      myChart3.data.datasets[0].data.push(res); 
      myChart3.update();
      
       if (i > 10 ){
        myChart3.data.datasets[0].data.shift();
        myChart3.update(); 

      } 
      
     
     /*  myChart3.data.datasets[1].data.push(res2); */ 
    
   console.log(res) 
    myChart3.update();

});



}

setInterval(refresh,1000) 





































  