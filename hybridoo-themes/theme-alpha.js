function hydkfDownload(htmlObj, fileId) {
  
  //alert(htmlObj);
  //<a href="https://drive.google.com/uc?export=download&id=1ZZYBC1GeiLituyuEw4W_OIgTC47VSJxN">
  window.location = "https://drive.google.com/uc?export=download&id=" + fileId;
  htmlObj.blur();
}
//svg-img-div | svg-img-doc | svg-pdf-btn
$(document).ready(function(){
  $(".svg-img-div").prepend('<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>');
  $("button.svg-pdf-btn").attr('disabled','disabled');
  window.addEventListener("load", event => {
    var image = document.querySelector('.svg-img-doc');
    if(image) {
      var isLoaded = image.complete && image.naturalHeight !== 0;
      $(".svg-img-div .spinner-border").replaceWith('<div></div>');
      $("button.svg-pdf-btn").removeAttr('disabled');
    }
  });
});
/*
summary_noimg = 400;
summary_img = 300;
img_thumb_height = 150;
img_thumb_width = 200; 

function removeHtmlTag(strx,chop){ 
    if(strx.indexOf("<")!=-1)
    {
        var s = strx.split("<"); 
        for(var i=0;i<s.length;i++){ 
            if(s[i].indexOf(">")!=-1){ 
                s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
            } 
        } 
        strx =  s.join(""); 
    }
    chop = (chop < strx.length-1) ? chop : strx.length-2; 
    while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
    strx = strx.substring(0,chop-1); 
    return strx+'...'; 
}

function createSummaryAndThumb(pID){
    var div = document.getElementById(pID);
    var imgtag = "";
    var img = div.getElementsByTagName("img");
    var summ = summary_noimg;
    if(img.length>=1) { 
        imgtag = '<img src="'+img[0].src+'" class="pbtthumbimg"/>';
        summ = summary_img;
    }
    
    var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
    div.innerHTML = summary;
}
*/

//below code to handle nav bar
// Your code to run since DOM is loaded and ready
document.addEventListener("DOMContentLoaded", function (event) {

  const showNavbar = (toggleId, navId, bodyId, headerId, bmContainerId) => {
     const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId),
        bmContainer = document.getElementById(bmContainerId)

     // Validate that all variables exist
     if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
           // show navbar
           nav.classList.toggle('show')
           // change icon
           toggle.classList.toggle('bx-x')
           // add padding to body
           bodypd.classList.toggle('body-pd')
           // add padding to header
           headerpd.classList.toggle('body-pd')
           bmContainer.classList.toggle('bmContainer')
        })

        if(window.matchMedia("(max-width: 767px)").matches) {
          // The viewport is less than 768 pixels wide
          //alert("This is a mobile device.");
          $(".post.hentry").swipe( {
            //Generic swipe handler for all directions
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
              if(direction === "right") {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
                bmContainer.classList.toggle('bmContainer')
              }
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:75,
            allowPageScroll: 'auto'
          });
        } else{
          // The viewport is at least 768 pixels wide
          //alert("This is a tablet or desktop.");
        }
     }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'bmContainer')

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
     if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
     }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
  
}); 
$(document).ready(function(){

    //adjusting hdo-iframe width based on devices 
    const iframes = document.querySelectorAll('.hdo-iframe iframe');
    if(iframes && iframes.length > 0) {
      if(window.matchMedia("(max-width: 767px)").matches) {
        iframes.forEach( ifr => {
          ifr.setAttribute("width", "98%");
          ifr.style["margin-bottom"] = "20px";
        });
      } else {
        iframes.forEach( ifr => {
          ifr.setAttribute("width", "33%");
        });
      }
    }
    //adjusting evernote-table
    const tables = document.querySelectorAll('en-table table');
    if(tables && tables.length > 0) {
      tables.forEach( table => {
        table.removeAttribute("style");
        table.removeAttribute("width");
        table.setAttribute("class", "table table-striped");
      });
    }
    const enTables = document.querySelectorAll('en-table div.container');
    if(enTables && enTables.length > 0) {
      enTables.forEach( enTable => {
        $( enTable ).parent().replaceWith( "<div class='table-responsive'>" + $( enTable ).html() + "</div>");
      });
    }
    //syntax highlighter
    $('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol'});

    //add scroll top button
    $("body").append('<button id="hdo-scroll-top-button"><i class="bx bx-arrow-to-top"></i></button>');
    // Get the button
    let mybutton = document.getElementById("hdo-scroll-top-button");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {   
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
     // When the user clicks on the button, scroll to the top of the document
    /*$("body").on('click touchstart', '#hdo-scroll-top-button', function() {
      $("html, body").animate({ scrollTop: "0" });
      return false;
    });*/
    
    $("#hdo-scroll-top-button").click(function() {
      $("html, body").animate({ scrollTop: "0" });
      /*$('html, body').animate({
        scrollTop: 0
      }, 800);*/
      return !1
    });
    //end of scroll top logic
});