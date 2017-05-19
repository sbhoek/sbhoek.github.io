var mytitle								=""
var active 								=""
var theme								="" 
var 	activemenu 					=""
var menu_bg_over 				= "#1D6719" 
var menu_color_over 		= "#ffcc33" 
var menu_bg 						= "none"  
var menu_color 					= "#c0e6c0"
var default_tab 					= "empty.htm"
var default_rows 					= parent.document.body.rows 
var tab_background_over 	= "#024702 url(images/bg_button_over.jpg) repeat-x"
var tab_background 			= "#024702 url(images/bg_button.jpg) repeat-x " 
var tab_border						= "1px solid #508703 " 
var tab_border_over			= "1px solid #006600 "
var tabup								= "70,68,*"
var newsize							=  530
var tab_up_bg 						= "images/bg_small.jpg"

//menu rollover
function swapmenu(id, onoff){
	if (onoff==1 && activemenu!= id){
		document.getElementById(id).style.background  = menu_bg_over
		document.getElementById(id).style.color  	=  menu_color_over
	}
	if (onoff==0 && activemenu != id){
		document.getElementById(id).style.background 	= menu_bg 
		document.getElementById(id).style.color  	= menu_color
	}
	if (onoff==2){
	//alert(id)
	//parent.topFrame.document.getElementById(id).style.background  = menu_bg_over
	//parent.topFrame.document.getElementById(id).style.color  	=  menu_color_over
		document.getElementById(id).style.background  = menu_bg_over
		document.getElementById(id).style.color  	=  menu_color_over
		if (activemenu!= "" && activemenu != id){
			document.getElementById(activemenu).style.background = menu_bg
			document.getElementById(activemenu).style.color  = menu_color 
		}
		activemenu = id
		if(parent.mainFrame){
			parent.mainFrame.location 	= id +".htm"
		}
		if(parent.detailFrame){
			parent.detailFrame.location 	=default_tab
		}
		parent.document.body.rows	=default_rows
	}
}

//tab rollover
function swap(id, onoff){
	if (checkposition(id)){
		if (onoff==1 && active!= id ){
			document.getElementById(id).style.background = tab_background_over
		}
		if (onoff==0 && active!= id ){
			document.getElementById(id).style.background = tab_background
			document.getElementById(id).style.borderBottom = tab_border
		}
	}
}


function checkposition(id){
	if ( parent.document.body.rows== tabup){
		if (id == mytitle){
			return false;
		}
	} 
	return true;
}


function resizelayer(){
	start = new Date()
	timer = setTimeout("updateTimer()", 100)
}


function updateTimer() {
   var   tDate = new Date();
   var   tDiff = tDate.getTime() - start.getTime();
   tDate.setTime(tDiff);
	if ( tDate.getSeconds() <= 0.5){
		newsize  -= 51.25
		parent.document.body.rows="70,"+ newsize +",*";
		timer = setTimeout("updateTimer()", 100);
	} else{
		parent.document.body.rows= tabup
	}
}


function gotopage(page){
	
	if (newsize >500){ 
		resizelayer()
	}
	
	parent.detailFrame.location = page + ".htm"
	document.all.readmore.src = "images/hide_tabs.jpg"
	document.all.readmore.style.cursor="hand"
	if (document.all(page)){
		document.all(page).style.background = tab_background_over
		document.all(page).style.borderBottom =  tab_border_over
		if (active != "" && active != page){
			document.all(active).style.background= tab_background
			document.all(active).style.borderBottom =  tab_border 
		}
	}
	active = page
	/**/
	document.all.nextchapter.style.visibility = "hidden"
}

function hidetabs(){
	newsize= 530
	parent.document.body.rows	=default_rows
	document.all.readmore.src = "images/more3.jpg"
	parent.detailFrame.location 	=default_tab
	document.all.readmore.style.cursor="default"
	document.all.nextchapter.style.visibility = "visible"


	if (active != ""  &&  document.all(active)){
		document.all(active).style.background= tab_background
		document.all(active).style.borderBottom =  tab_border 
		active=""
	}

}

function gotoapp(){
	parent.mainFrame.location = "close.htm"
}

function next_chapter(){
	current_page = (document.location.href).split("/")
	current_page = (current_page[current_page.length - 1])
	switch (current_page){
		case "introduction.htm":
			parent.topFrame.swapmenu('past',2)
			break
		case "past.htm":
	 		parent.topFrame.swapmenu('scenarios',2)
	  		break
		case "scenarios.htm":
			parent.topFrame.swapmenu('driving_forces',2)
			break
		case "driving_forces.htm":
	 		parent.topFrame.swapmenu('land_use_change',2)
	  		break
		case "land_use_change.htm":
	 		parent.topFrame.swapmenu('indicators',2)
	  		break
		case "indicators.htm":
	 		parent.topFrame.swapmenu('meta-indicators',2)
	  		break
		case "meta-indicators.htm":
		 	parent.topFrame.swapmenu('conclusions',2)
			break
	}
}

function hide_next_chapter(){
	current_page = (document.location.href).split("/")
	current_page = (current_page[current_page.length - 1])
	if(current_page == "conclusions.htm"){
		document.all.nextchapter.style.visibility = "hidden"
	}
}


function guidedTour(start){
	if(start){
		parent.topFrame.document.getElementById('menu').style.visibility = "hidden" 
		parent.topFrame.document.getElementById('tourmenu').style.visibility = "visible"
		parent.mainFrame.location.href = "content/guidedtour/1.htm" 
		page = 1
	} else {
		parent.topFrame.document.getElementById('menu').style.visibility = "visible" 
		parent.topFrame.document.getElementById('tourmenu').style.visibility = "hidden"
		parent.mainFrame.location.href = "introduction.htm" 
		page = 1
	} 
}

var page = 1
var lastPage =3
function nextPage(){
	page++
	parent.mainFrame.location.href =  "content/guidedtour/" + page +".htm" 
	if(page ==lastPage){
			page = 1
			parent.topFrame.document.getElementById('tourmenu').style.visibility = "hidden"
	}
}
function closeTour(){
		page = 1
		parent.topFrame.document.getElementById('menu').style.visibility = "visible" 
		parent.topFrame.document.getElementById('tourmenu').style.visibility = "hidden"
		parent.mainFrame.location.href = "../../introduction.htm" 
		
}