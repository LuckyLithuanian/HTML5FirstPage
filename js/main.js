
//MINDAUGAS
  $(document).ready(function(){
    $('.tabs').tabs();
  });
//MINDAUGAS


// Laimonas START NAVBAR ir BREADCRUMS 
$(document).ready(function() {
	$(".dropdown-trigger").dropdown();
	$('.sidenav').sidenav();
	  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  
  // Pyragelis
  // Mindaugas
var data = {
  series: [50, 50]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartMP1', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [50, 50]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartMP2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [50, 50]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartMP3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
// Skaiste
var data = {
  series: [40, 35]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartSP1', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [50, 50]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartSP2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [45, 55]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartSP3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
// Laimonas
var data = {
  series: [10, 25]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartLP1', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [14, 20]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartLP2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [22, 50]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chartLP3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
//Grafikas
// Mindaugas
new Chartist.Bar('.ct-chartMG1', {
  labels: ['Laimonas', 'Skaistė', 'Karolis', 'Edgaras', 'Vytautas', 'Konstancija', 'Evaldas', 'Aivaras', 'Egidijus', 'Eglė', 'Jonas'],
  series: [27, 25, 26, 28, 25, 25, 25, 27, 39, 26, 24]
}, {
  distributeSeries: true
});
// Skaiste
new Chartist.Bar('.ct-chartSG1', {
  labels: ['Laimonas', 'Mindaugas', 'Karolis', 'Edgaras', 'Vytautas', 'Konstancija', 'Evaldas', 'Aivaras', 'Egidijus', 'Eglė', 'Jonas'],
  series: [21, 26, 25, 23, 31, 20, 24, 31, 40, 26, 24]
}, {
  distributeSeries: true
});
// Laimonas
new Chartist.Bar('.ct-chartLG1', {
  labels: ['Mindaugas', 'Skaistė', 'Edgaras', 'Vytautas', 'Konstancija', 'Eglė', 'Aivaras', 'Karolis', 'Evaldas', 'Jonas', 'Egidijus'],
  series: [32, 27, 30, 28, 27, 25, 31, 34, 25, 26, 45]
}, {
  distributeSeries: true
});

});
// Laimonas END

