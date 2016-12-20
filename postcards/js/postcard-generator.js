var canvas = document.getElementById('postcardcanvas');
ctx = canvas.getContext('2d');
var isGenerated = true;
var urlInteractivo = "http://xaviercugat.ccma.cat";

var deviceWidth = window.innerWidth;
// canvasWidth = Math.min(680, deviceWidth-20);
// canvasHeight = Math.min(480, deviceWidth-20);
canvasWidth = Math.min(855, deviceWidth-20);
canvasHeight = Math.min(300, deviceWidth-20);

canvas.width = canvasWidth;
canvas.height = canvasHeight;

OAuth.initialize("W1QUT8jFolzTPwMYUXENqxkPCl4")

// Cities
var cityNames = ["Barcelona", "Las Vegas", "Los Angeles", "Berlin", "New York", "l'Havana"];
var city = "Barcelona";
var cities = [
    {
      name: "Barcelona",
      place: "Hotel Ritz, Barcelona, España",
      greeting: "Recuerdo de Barcelona",
      fontStyle: '20pt "Diplomata SC", cursive',
      strokeColor: 'white',
      fillColor: '#d82a11',
      upperText: 1
    },
    {
      name: "Las Vegas",
      place: "The Flamingo, Las Vegas, NV, USA",
      greeting: "Welcome to Las Vegas",
      fontStyle: '28pt "Yesteryear", cursive',
      strokeColor: "#FFF",//'#f3f3f3',
      fillColor: "#279dda",//'#d23521',
      upperText: 0
    },
    {
      name: "Los Angeles",
      place: "Metro Goldwyn Mayer Studios, Beverly Hills, CA, USA",
      greeting: "Greetings from Hollywood California",
      fontStyle: '21pt "Yesteryear", cursive',
      strokeColor: 'white',
      fillColor: '#dc502b',
      upperText: 0
    },
    {
      name: "Berlin",
      place: "Akademie Hochschule für Musik, 10178, Berlin, Deutschland",
      greeting: "Herzliche Grüße aus Berlin",
      fontStyle: '22pt "Fugaz One", cursive',
      strokeColor: 'white',
      fillColor: 'red',
      upperText: 0
    },
    {
      name: "New York",
      place: "Carnegie Hall, New York, USA",
      greeting: "Souvenir from New York",
      fontStyle: '19pt "Diplomata SC", cursive',
      strokeColor: 'white',
      fillColor: 'red',
      upperText: 0
    },
    {
      name: "La Habana",
      place: "Teatro Nacional de Cuba, La Habana, República de Cuba",
      greeting: "Recuerdos de La Habana",
      fontStyle: '25pt "Yesteryear", cursive',
      strokeColor: 'white',
      fillColor: 'red',
      upperText: 0
    }
]


//  Grab the image
var bgImg = {};
var cuguiImg = {};
var paperImg = {};
var countryStampImg = {}
var stampImg = {}

function updateImages(callback){
  bgImg = $("#carousel-cities .active img");
  cuguiImg = $("#carousel-cugui .active img");
  stampImg = $("#stamps");
  var sellos =["sello-barcelona","sello-vegas","sello-hollywood","sello-chicago","sello-nyc","sello-cuba"];
  countryStampImg = $("#"+sellos[cityNames.indexOf(city)]);
  paperImg = $("#paper-texture");
  $("<img/>") // Make in memory copy of image to avoid css issues
  .attr("src", bgImg.attr("src"))
  .load(function() {
      bgImg.width = this.width;   // Note: $(this).width() will not
      bgImg.height = this.height; // work for in memory images.
      $("<img/>") // Make in memory copy of image to avoid css issues
      .attr("src", cuguiImg.attr("src"))
      .load(function() {
          cuguiImg.width = this.width;   // Note: $(this).width() will not
          cuguiImg.height = this.height; // work for in memory images.
          $("<img/>") // Make in memory copy of image to avoid css issues
          .attr("src", paperImg.attr("src"))
          .load(function() {
              paperImg.width = this.width;   // Note: $(this).width() will not
              paperImg.height = this.height; // work for in memory images.
              $("<img/>") // Make in memory copy of image to avoid css issues
              .attr("src", countryStampImg.attr("src"))
              .load(function() {
                  countryStampImg.width = this.width;   // Note: $(this).width() will not
                  countryStampImg.height = this.height; // work for in memory images.
                  $("<img/>") // Make in memory copy of image to avoid css issues
                  .attr("src", stampImg.attr("src"))
                  .load(function() {
                      stampImg.width = this.width;   // Note: $(this).width() will not
                      stampImg.height = this.height; // work for in memory images.
                      callback()
                  });
              });
          });
      });
  });

}

// When the image has loaded...
/*img.onload = function() {
  // Work out where to center it
  x = canvas.width/2 - img.width/2;
  y = canvas.height/2 - img.height/2;

  // Draw it
  ctx.drawImage(img, x, y);
}*/

function doTransform() {
  ctx.save();
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Translate to center so transformations will apply around this point
  ctx.translate(canvas.width/2, canvas.height/2);

  // Perform scale
  //var val = document.getElementById('scale').value;
  //ctx.scale(val, val);

  // Perform rotation
  //val = document.getElementById('rotate').value;
  //ctx.rotate(val*Math.PI/180);

  // Reverse the earlier translation
  ctx.translate(-canvas.width/2, -canvas.height/2);

  function wrapText(context, text, x, y, maxWidth, lineHeight, hasStroke) {
      var words = text.split(' ');
      var line = '';

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          if (hasStroke) context.strokeText(line, x, y);
          context.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      if (hasStroke) context.strokeText(line, x, y);
      context.fillText(line, x, y);
    }

    var maxWidth = 200;
    var lineHeight = 20;
    var x = (canvas.width - maxWidth) / 2;
    var y = 60;

  // Finally, draw the images
  updateImages(
    function(){

      var cityIndex = cityNames.indexOf(city);
      console.log(cities[cityIndex])

      var x = canvas.width/2;
      var y = canvas.height/2;
      //ctx.drawImage(bgImg[0], x - bgImg.width()/2, y - bgImg.height()/2);
      //ctx.drawImage(bgImg[0],0, 0, 100, 100 * bgImg.height() / bgImg.width())
      // City
      var widthFront = canvas.height * (bgImg.width / bgImg.height);
      ctx.drawImage(bgImg[0], 0, 0, bgImg.width, bgImg.height, 0, 0, widthFront, canvas.height);
      // Cugui
      ctx.drawImage(cuguiImg[0], 0, 0, cuguiImg.width, cuguiImg.height, 5, canvas.height-200-5, 200 * (cuguiImg.width / cuguiImg.height), 200);
      // Paper texture
      ctx.drawImage(paperImg[0], 0, 0, paperImg.width, paperImg.height, widthFront+10, 0, canvas.height * (paperImg.width / paperImg.height),canvas.height);
      // Stamps
      ctx.drawImage(countryStampImg[0], 0, 0, cuguiImg.width, cuguiImg.height, 720, 10, 250 * (cuguiImg.width / cuguiImg.height), 250);
      ctx.drawImage(stampImg[0], 0, 0, cuguiImg.width, cuguiImg.height, 680+(Math.random() * 20), 10+(Math.random() * 30), 250 * (cuguiImg.width / cuguiImg.height), 250);

      ctx.restore();

      // CUSTOM TEXT
      // Set the text style to that to which we are accustomed
      ctx.lineWidth  = 0;
      ctx.font = '12pt "Architects Daughter", cursive';
      ctx.strokeStyle = '#333';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'left';
      ctx.lineJoin = 'round';

      // Draw the text
      var text = $("textarea.form-control").val();
      text += " - Amb afecte, Xavier Cugat"
      //text = text.toUpperCase();
      x = widthFront+20;
      y = 100;
      //ctx.strokeText(text, x, y);
      //ctx.fillText(text, x, y);
      ctx.save();
      wrapText(ctx, text, x, y, maxWidth, lineHeight);

      // PLACE TEXT & WEB REFERENCE

      ctx.lineWidth  = 0;
      ctx.font = '9pt "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace';
      ctx.strokeStyle = '#999';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'left';
      ctx.lineJoin = 'round';

      // Draw the text
      var text = cities[cityIndex].place;
      //text = text.toUpperCase();
      x = widthFront + 20;
      y = 30;
      maxWidth = 200;
      lineHeight = 15;
      //ctx.strokeText(text, x, y);
      //ctx.fillText(text, x, y);
      ctx.save();
      wrapText(ctx, text, x, y, maxWidth, lineHeight);

      // Draw the text
      var text = "xaviercugat.ccma.cat";
      //text = text.toUpperCase();
      x = widthFront + 135;
      y = 295;
      maxWidth = 600;
      lineHeight = 15;
      //ctx.strokeText(text, x, y);
      //ctx.fillText(text, x, y);
      ctx.save();
      wrapText(ctx, text, x, y, maxWidth, lineHeight);


      // GREETINGS TEXT
      // Set the text style to that to which we are accustomed
      ctx.lineWidth  = 7;
      ctx.font = cities[cityIndex].fontStyle;
      ctx.strokeStyle = cities[cityIndex].strokeColor;
      ctx.fillStyle = cities[cityIndex].fillColor;
      ctx.textAlign = 'center';
      ctx.lineJoin = 'round';

      // Draw the text
      var text = cities[cityIndex].greeting;
      if (cities[cityIndex].upperText) text = text.toUpperCase();
      x = widthFront/2;
      y = 50;
      maxWidth = 400;
      lineHeight = 25;
      // ctx.strokeText(text, x, y);
      // ctx.fillText(text, x, y);
      ctx.save();
      wrapText(ctx, text, x, y, maxWidth, lineHeight, true);
    }

  );
}


function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}

var currentImg = "";
function postCanvasToURL(button, success, fail) {
    //console.log("entro en postCanvasToURL")
    var l = Ladda.create(button);
    l.start();
    if (!isGenerated){
      var img = $('#postcardcanvas')[0].toDataURL("image/jpeg",0.9);
      var byteString;
      if (img.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(img.split(',')[1]);
      else
          byteString = unescape(img.split(',')[1]);

      img = img.replace("data:image/jpeg;base64,", "");
      $.ajax({
        url: "https://55kesmchrh.execute-api.eu-west-1.amazonaws.com/beta/postcards",
        type: 'POST',
        data: '{"data":"'+img+'"}',
        dataType: 'json',
        crossDomain: true,
        contentType: 'application/json'
      }).done(function(result) {
          currentImg = result.url;
          isGenerated = true;
          success(result.url)
      }).fail(function(error) {
          fail(error);
      }).always(function(){
          l.stop();
      });

    } else {
      l.stop();
      success(currentImg);
    }

//     curl -X POST -H "Content-Type: application/json" -d '{
//     "width": 64,
//     "height": 64,
//     "data": "'"$( base64 -i <picture-path> )"'"
//    }' "https://<url>.amazonaws.com/dev"

	  // var img = $('#postcardcanvas')[0].toDataURL();
	  // var file = dataURItoBlob(img);
	  // var tweetText = $('#tweetText').text();
    // var urlInteractivo = "http://lab.rtve.es/xaviercugat";
    //
	  // OAuth.popup("twitter").then(function(result) {
	  //     var data = new FormData();
	  //     data.append('status', tweetText + " " + urlInteractivo +" #xaviercugat");
	  //     data.append('media[]', file, 'postcard.png');
    //
	  //     return result.post('/1.1/statuses/update_with_media.json', {
	  //         data: data,
	  //         cache:false,
	  //         processData: false,
	  //         contentType: false
	  //     });
	  // }).done(function(data){
	  //     var str = JSON.stringify(data, null, 2);
	  //     console.log("Success (Twitter) " + str);
	  // }).fail(function(e){
	  //     var errorTxt = JSON.stringify(e, null, 2)
    //     console.log("Error (Twitter) " + errorTxt);
	  //     console.log(e);
	  // });
}

function getMessage(){
  var text = "Acabo d'estar en #"+city.replace(" ","")+" amb #XavierCugatTV3, Quina passada! Viatja tu també en http://xaviercugat.ccma.cat";
  console.log(text)
  return text;
}

var imgRRSS = "";
function sendToTwitter(button){

  var file = dataURItoBlob(imgRRSS);
  var tweetText = $('#twitterText').text();

  var l = Ladda.create(button);
  l.start();
  OAuth.popup("twitter").then(function(result) {

      var data = new FormData();
      data.append('status', tweetText);
      data.append('media[]', file, 'postcard.png');

      return result.post('/1.1/statuses/update_with_media.json', {
          data: data,
          cache:false,
          processData: false,
          contentType: false
      });

  }).done(function(data){
      var str = JSON.stringify(data, null, 2);
      $("#successMsg").show()
      console.log("Success (Twitter) " + str);
  }).fail(function(e){
      var errorTxt = JSON.stringify(e, null, 2)
      console.log("Error (Twitter) " + errorTxt);
      console.log(e);
      $("#errorMsg").show()
  }).always(function(){
      $('#twitterSharing').modal('hide');
      l.stop()
  });
}

function sendToFacebook(button){

  var file = dataURItoBlob(imgRRSS);
  var facebookText = $('#facebookText').text();

  var l = Ladda.create(button);
  l.start();
  postCanvasToURL(button,
    function(img){
      FB.login(function(){
        // Note: The call will only work if you accept the permission request
        FB.api(
            "/me/photos",
            "POST",
            {
                "url": img,
                "caption": facebookText
            },
            function (response) {
              if (response && !response.error) {
                var str = JSON.stringify(response, null, 2);
                $("#successMsg").show()
                console.log("Success (Facebook) " + str);
              } else if (response.error){
                var errorTxt = JSON.stringify(response.error, null, 2)
                console.log("Error (Facebook) " + errorTxt);
                //console.log(e);
                $("#errorMsg").show()
              }
              $('#facebookSharing').modal('hide');
              l.stop()
            }
        );
      }, {scope: 'publish_actions'});

    },
    function(err){
      console.log(err);
      l.stop()
      $("#errorMsg").show()
    })

  //
  // OAuth.popup("facebook").then(function(result) {
  //
  //     var data = new FormData();
  //     data.append('status', tweetText);
  //     data.append('media[]', file, 'postcard.png');
  //
  //     return result.post('/1.1/statuses/update_with_media.json', {
  //         data: data,
  //         cache:false,
  //         processData: false,
  //         contentType: false
  //     });
  //
  // }).done(function(data){
  //     var str = JSON.stringify(data, null, 2);
  //     $("#successMsg").show()
  //     console.log("Success (Facebook) " + str);
  // }).fail(function(e){
  //     var errorTxt = JSON.stringify(e, null, 2)
  //     console.log("Error (Facebook) " + errorTxt);
  //     console.log(e);
  //     $("#errorMsg").show()
  // }).always(function(){
  //     $('#facebookSharing').modal('hide');
  //     l.stop()
  // });
}

$("#generateButton").click(function(){
  console.log("generating...");
  doTransform();
  isGenerated = false;
  currentImg = "";
  switchStep();
})

$("#editPostcard").click(function(){
  switchStep();
})

$('#sendConfirmationTwitter').click(function(){sendToTwitter(this)});
$('#sendConfirmationFacebook').click(function(){sendToFacebook(this)});

$("#shareTwitter").click(function(){
  console.log("share on Twitter clicked");
  //Acabo de estar en #LaHabana con #XavierCugatTVE, ¡qué pasada! Viaja tú también en http://lab.rtve.es/webdocs/xavier-cugat #XavierCugatRTVE
  // postCanvasToURL(this,
  //   function(data){
  //     console.log(data)
  //   },
  //   function(error){
  //     console.log(error)
  //   }
  // );
  imgRRSS = $('#postcardcanvas')[0].toDataURL();
  var twitterMsg = $("#twitterText");
  $("#twitterPostcard").attr("src",imgRRSS);
  twitterMsg.text(getMessage());
  countChar(document.getElementById("twitterText"),".charsTwitter");

  $('#twitterSharing').modal('show');

});

$("#shareFacebook").click(function(){
  console.log("share on Facebook clicked");
  //Acabo de estar en #LaHabana con #XavierCugatTVE, ¡qué pasada! Viaja tú también en xaviercugat.rtve.es
  // postCanvasToURL(this,
  //   function(data){
  //     console.log(data)
  //   },
  //   function(error){
  //     console.log(error)
  //   }
  // );

  imgRRSS = $('#postcardcanvas')[0].toDataURL();
  var facebookMsg = $("#facebookText");
  $("#facebookPostcard").attr("src",imgRRSS);
  facebookMsg.text(getMessage());
  countChar(document.getElementById("facebookText"),".charsFacebook");

  $('#facebookSharing').modal('show');
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
    }
    else {
      FB.login();
    }
  });

})

$("#carousel-cities .carousel-control").click(function(){
  setTimeout(function(){
    city = $("#carousel-cities .active div.carousel-caption").text().trim()
    console.log("update city: "+city)
    console.log("index: "+cityNames.indexOf(city));
  }, 1000)

})



// Trigger the imageLoader function when a file has been selected
//var fileInput = document.getElementById('fileInput');
//fileInput.addEventListener('change', imageLoader, false);

 // Download image from canvas feature
 document.getElementById('downloadPostcard').addEventListener('click', function() {
    downloadCanvas(this, 'postcardcanvas', 'xaviercugat-postcard.png');
 }, false);

 function downloadCanvas(link, canvasId, filename) {
    console.log("descarga postcard")
     link.href = document.getElementById(canvasId).toDataURL();
     link.download = filename;
 }

 // Char counter for custom textarea
 function countChar(val, container) {
   var len = val.value.length;
   if (len >= 140) {
     val.value = val.value.substring(0, 140);
     $(container).text(0);
   } else {
     $(container).text(140 - len);
   }
 };

 countChar(document.getElementById("customText"));

 function switchStep(){
   $("#firstStep").toggle();
   $("#secondStep").toggle();
 }

// Only for test
$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '370657399946407',
      version: 'v2.8' // or v2.1, v2.2, v2.3, ...
    });
    // $('#loginbutton,#feedbutton').removeAttr('disabled');
    // FB.getLoginStatus(updateStatusCallback);
  });
});
