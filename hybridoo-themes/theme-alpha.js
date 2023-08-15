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
            threshold:75
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
    $('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol'});
});