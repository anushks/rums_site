$( document ).ready(function(){
    $(".button-collapse").sideNav();
});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $('.scrolly').on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

var committee = {
  y2017:{
    year: 'Your Committee (2017/2018)',
    edu13:{
      name: 'Anush Shashidhara',
      email: 'zcha029@ucl.ac.uk'
    },
    edu46:{
      name: 'Aayushi Gupta',
      email: 'aayushi.gupta.13@ucl.ac.uk'
    },
    pres:{
      name: 'Ozzy Eboreime',
      email: 'oziegbe.eboreime.14@ucl.ac.uk'
    },
    events:{
      name: 'Dan Ntiubane',
      email: 'dan.ntiubane.15@ucl.ac.uk'
    },
    welfare:{
      name: 'Iram Hasan', 
      email: 'iram.hasan.13@ucl.ac.uk'
    },
    sports:{
      name: 'Charles Travers',
      email: 'charles.travers.14@ucl.ac.uk'
    }
  },
  y2016:{
    year: 'Your Committee (2016/2017)',
    edu13:{
      name: 'Carol Chan',
    },
    edu46:{
      name: 'Tay Mohammed',
    },
    pres:{
      name: 'Raj Pradhan',
    },
    events:{
      name: 'Ozzy Eboreime',
    },
    welfare:{
      name: 'Nadia Eden',
    },
    sports:{
      name: 'James Shuttleworth',
    }
  },
  y2015:{
    year: 'Your Committee (2015/2016)',
    edu13:{
      name: 'Ozzy Eboreime',
    },
    edu46:{
      name: 'Ravi Mistry',
    },
    pres:{
      name: 'Alex Maidwell',
    },
    events:{
      name: 'Frankie Cackett',
    },
    welfare:{
      name: 'Vignesh Gopalan',
    },
    sports:{
      name: 'Andy Webb',
    }
  }
}
y = ['y2017','y2016','y2015'];
y_value = y[0];
y_array_pos = 0;
x = ['pres','edu13','edu46','events','sports','welfare']

function init() {
document.getElementById("nextYear").style.visibility = "hidden";
document.getElementById("prevYear").style.visibility = "visible";
for (i = 0; i < x.length; i++) {
  z = committee[y_value]
  z = z[x[i]];
  z = z.name;
  document.getElementById(x[i]).innerHTML = z;
  document.getElementById('com_title').innerHTML = 'Your Committee (2017/2018)';
}
}


function prevYear() {
  if (y_array_pos < (y.length-1)) {
    y_array_pos = y_array_pos + 1;
    document.getElementById("prevYear").style.visibility = "visible";
    document.getElementById("nextYear").style.visibility = "visible"; 
  } else {
    document.getElementById("prevYear").style.visibility = "hidden";
    document.getElementById("nextYear").style.visibility = "visible"; 
  }
  y_value = y[y_array_pos];
  for (i = 0; i < x.length; i++) {
  z = committee[y_value]
  z = z[x[i]];
  z = z.name;
  document.getElementById(x[i]).innerHTML = z;
}
  document.getElementById('com_title').innerHTML = committee[y_value].year;
}

function nextYear() {
  if (y_array_pos > 0) {
    y_array_pos = y_array_pos - 1;
    document.getElementById("nextYear").style.visibility = "visible";
    document.getElementById("prevYear").style.visibility = "visible";
  } else {
    document.getElementById("nextYear").style.visibility = "hidden"; 
    document.getElementById("prevYear").style.visibility = "visible";
  }
  y_value = y[y_array_pos];
  for (i = 0; i < x.length; i++) {
  z = committee[y_value]
  z = z[x[i]];
  z = z.name;
  document.getElementById(x[i]).innerHTML = z;
}
  document.getElementById('com_title').innerHTML = committee[y_value].year;
}


