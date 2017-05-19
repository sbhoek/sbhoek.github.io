var selectedelement 

function select_item(id, status){

	if (status == 'click' || status == 'over'){ 
		if (document.getElementById(id)){
				document.getElementById(id).style.background = "url(../../images/arrow_active.gif) no-repeat #13670D 2px 5px" 
				document.getElementById(id).style.color = "#ffcc00"
		} 
	}
	if (status == 'out'){
		if (selectedelement){
			if (selectedelement == id){
				return false
			}
		}
		if (document.getElementById(id)){
			document.getElementById(id).style.background = "url(../../images/arrow.gif) no-repeat #13770D  0px 5px" 
			document.getElementById(id).style.color = "#ffee99"
			
		}
	}
	
	if (status == 'click'){
		if (selectedelement){
			if (selectedelement != id){
				if (document.getElementById(selectedelement)){
					document.getElementById(selectedelement).style.background = "url(../../images/arrow.gif) no-repeat #13770D  0px 5px" 
					document.getElementById(selectedelement).style.color = "#ffee99"
				}
				img = 'img_'+ selectedelement
				if (document.getElementById(img)){
					document.getElementById(img).style.visibility = "hidden"
				}
				text = 'text_' + selectedelement
				if (document.getElementById(text)){
					document.getElementById(text).style.visibility = "hidden"
				}
			}
		}
		selectedelement = id
		img = "img_"+ id
		if (document.getElementById(img)){
			document.getElementById(img).style.visibility = "visible"
		}
		text = 'text_' + id
		if (document.getElementById(text)){
			document.getElementById(text).style.visibility = "visible"
		}
	}
	
}

//popup a larger image
function showlarge_animation(title, image){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=html\\images\\content\\landuse\\" + image
	app_string += "&legend=Data\\Indicators\\legend_lu.png"
	document.location.href = app_string
} 

function showlarge(title, image, year, scenario ){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=Data\\Current Scenarios\\" + scenario +"\\"+ year +"\\" + image
	app_string += "&legend=Data\\Indicators\\legend_" + image
	document.location.href = app_string

	

}
function landscapeoverview(){
	if (document.forms[0].elements['indicator'].value == "LU"){
		title  = "land use, "+document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	} else if (document.forms[0].elements['indicator'].value == "hot_urban"){
		title ="urbanisation, "+document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	} else if (document.forms[0].elements['indicator'].value == "hot_nature"){
		title ="nature, "+document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	} else if (document.forms[0].elements['indicator'].value == "hot_agr"){
		title ="agriculture, "+document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	}  
	//title = document.forms[0].elements['indicator'].value + " hotspots, " +document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	image = document.forms[0].elements['indicator'].value + ".png"
	year =  document.forms[0].elements['year'].value
	scenario = document.forms[0].elements['scenario'].value
	showlarge(title, image, year, scenario )
}

function hotspotselection(title, image, year){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=Data\\Indicators\\meta_indicator_" + image
	app_string += "&legend=Data\\Indicators\\legend_" + image
	document.location.href = app_string
}

/*
//popup a larger image
function showlarge_animation(title, image){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=html\\images\\content\\landuse\\" + image
	app_string += "&legend=Data\\Indicators\\legend_lu.png"
	document.location.href = app_string
} 

function showlarge_hotspot(title, image){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=html\\images\\content\\metaindicators\\" + image
	app_string += "&legend=html\\images\\content\\metaindicators\\legend"+  image + ".bmp"
	document.location.href = app_string
} 


function showlarge(title, image, year, scenario ){
	var app_string
	app_string   = "Bitmap.app$title= " + title 
	app_string += "&bitmap=Data\\Current Scenarios\\" + scenario +"\\"+ year +"\\" + image
	app_string += "&legend=Data\\Indicators\\legend_" + image
	document.location.href = app_string
}

function hotspotselection(){
	title = document.forms[0].elements['indicator'].value + " hotspots, " +document.forms[0].elements['scenario'].value +" , " + document.forms[0].elements['year'].value
	image =document.forms[0].elements['indicator'].value
	year =  document.forms[0].elements['year'].value
	scenario = document.forms[0].elements['scenario'].value
	showlarge(title, image, year, scenario )
}
*/