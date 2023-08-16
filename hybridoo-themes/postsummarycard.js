$(document ).ready(function() {
	if ( window.location.pathname == '/' ) {
    	// Index (home) page
    	//execute only for homepage
	} else {
	    // Other page
	    //console.log(window.location.pathname);
	    return;
	}
	if(window.domainPrefix === undefined || window.domainPrefix === null) {
		return;
	}
	let htmlPageLinks;
	if(window.fetchHtmlPageLinks) {
		htmlPageLinks = fetchHtmlPageLinks;
	} else {
		htmlPageLinks = [
 		window.domainPrefix + "/2023/08/celebrate-india-independence-day.html",
 		window.domainPrefix + "/2023/08/building-code-editor-with-codemirror.html",
 		window.domainPrefix + "/2023/08/motivational-quotes.html"
 		];
	}
 	
 	var removeHtmlTag = function(strx,chop) { 
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
	};
 	async function doSomethingAsync(element) {
        return new Promise(resolve => {
            $.get(element).done(function(data) {
            	
            	var lHtmlCard = `
            		<div class="col-md-4 col-12 mb-1 d-flex justify-content-center">
            		<div class="card" style="max-width: 17rem;padding-left: 0px;padding-right: 0px;">
            			<img style="height:180px;" class="card-img-top" 
            				src="`+$(data).find('.post-body.entry-content img').attr('src')+`" alt="brightenminds"/>
            			<div class="card-body" style="padding-top: 5px;padding-right: 12px;padding-left: 12px;padding-bottom: 12px;">
            				<h5 class="card-title">`+$(data).find('.post-title.entry-title').text()+`</h5>
            				<p class="card-text">`+removeHtmlTag($(data).find('.post-body.entry-content').html(), 80)+`</p>
            				<div class="position-absolute bottom-0 end-0" style="margin-right: 0.5rem">
            					<p class="card-text">
            					<small class="text-muted">
            						<a class="more-link" href="`+element+`">
            						  Explore
            						</a>
            					</small>
            					</p>
            				</div>
            			</div>
            		</div>
            		</div>
            		`;
            	resolve(lHtmlCard);
		    });
        });
 	}
 	htmlPageLinks.forEach(async function(element) {
 		await doSomethingAsync(element).then((value) => {
		  $('.postsummarycard').append(value);
		});
 		
 	});
 	
	// using XMLHttpRequest
	//var xhr = new XMLHttpRequest();
	//xhr.open("GET", "https://www.brightenminds.com/2023/08/motivational-monday-quotes.html", true);
	//xhr.onload = function () {
	//console.log(xhr.responseText); };
	//xhr.send();
 });
//https://cdn.jsdelivr.net/gh/geekjai/brightenminds/postsummarycard.js