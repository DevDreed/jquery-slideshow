var autoplayOn = false;
var i = 0;
var timer = null;

$(document).ready(function() {

  var images = [];
  $.when($.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=2016-9-01&api_key=X76pExxKtxapjzWoaJX3uKnuEyKubezpnCWynfkl`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(response) {
      images.push(response);
    }
  }), $.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=2016-9-02&api_key=X76pExxKtxapjzWoaJX3uKnuEyKubezpnCWynfkl`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(response) {
      images.push(response);
    }
  }), $.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=2016-9-03&api_key=X76pExxKtxapjzWoaJX3uKnuEyKubezpnCWynfkl`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(response) {
      images.push(response);
    }
  }), $.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=2016-9-04&api_key=X76pExxKtxapjzWoaJX3uKnuEyKubezpnCWynfkl`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(response) {
      images.push(response);
    }
  }), $.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=2016-9-05&api_key=X76pExxKtxapjzWoaJX3uKnuEyKubezpnCWynfkl`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: function(response) {
      images.push(response);
    }
  })).then(function functionName() {
    console.log('images', images);
    displayImages();
  });

  function displayImages() {
    var slideshow = $("#slideshow")
    var finalHTML = images.map((image) => {
      return `<div class="imageContainer"><img src=${image.url} /><div>${image.title}</div></div>`;
    }).join('');

    slideshow.html(finalHTML);
    var listItems = slideshow.children('div.imageContainer');
    listItems.not(':first').hide();
    var time = null;
    function startSetInterval() {

      timer = setInterval(function() {
        changeImage("right");
      }, 4000);
    }
    $('#btnPlay').click(function () {
      if (autoplayOn){
        autoplayOn = false;
        clearInterval(timer);
        $(this).html("Play");
      }else{
        autoplayOn = true;
        startSetInterval();
        $(this).html("Stop");
      }
    });

    $('#btnRight').click(function () {
      autoplayOn = false;
      clearInterval(timer);
      changeImage("right");
      $('#btnPlay').html("Play");
    });

    $('#btnLeft').click(function () {
      autoplayOn = false;
      clearInterval(timer);
      changeImage("left");
      $('#btnPlay').html("Play");
    });

    function changeImage(direction) {
      listItems.eq(i).fadeOut(1000);
      console.log(i);
      if(direction === "right"){
        i++;
      }else{
        i--;
      }
      if (i == listItems.length) {
        i = 0;
      }
      setTimeout(function () {
        console.log(i);
        listItems.eq(i).fadeIn(500);
      }, 1500);
    }
  }
});
