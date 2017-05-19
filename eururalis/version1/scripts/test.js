	var scenario =-1
	var testResult1
	var testResult2 
	var list1 = new Array()
	var list2 = new Array()
	var counter = 0
	var segmentResult =-1
	
	var  segmentTitle = new Array ("Care-takers", "Conservatives", "Hedonists", "Well-balanced", "Materialists", "Professionals", "Broadminded", "Socially minded")
	var  segmentBody = new Array()
	segmentBody[0] = "Caretaking and faithful persons focus on the well-being of others. You are a sociable person that draws energy from helping your fellow man. Your lifestyle is sober, but you are generous for others. You keep to traditions and old merits. These traditions and old merits give you tranquillity and certainty in life. You do not have much desire in change and are modest. Caring and faithful persons are praiseworthy within the (church-) community. You are not in essence a creative person. You prefer to carry out the developed processes of others. Both reading and watching television belong to you daily activities. You prefer reading the regional paper. You are reasonably informed in political and social matters. You pay little attention to luxury and modern articles. You prefer what is familiar. The key word for this group is Social."
	segmentBody[1] ="Being conservative person, you concentrate on your own living environment. The security of your own family stands above everything and you undertake a great deal with loved ones and your circle of friends. You are not a person who likes to stand out, but you quickly (pre-)judge those who do. You attempt as best as possible to keep to rules and standards but try to stay clear of dangerous discussions and situations. You are hardly likely to be called a long-term planner; you like to act impulsively. You are a cheerful person and enjoy informal amusement. You watch a lot of television, especially the entertainment programs. Many conservatives are disappointed in both society and politics and have turned their backs to them. You are not a real materialist but do like some luxury and modern gadgets. The key word for this group is conformism."
	segmentBody[2] ="As hedonist, you are a true social animal. You focus your life around your own pleasure and enjoyment, both physical and emotional. You are sooner a sportsman than a creative type of person. Provoking or risky situations are met head-on, excitement and adventure are the thing you are looking for in life. You are definitely not a worrywart and in many situations, you are actually easy-going and act impulsively. You like to go out on the town, also in company of others, but not in a real social sense. Political and social issues do not really arouse your curiosity. Unlike reading, hedonists watch more than the average amount of television. Especially the commercial broadcasting networks have your preference. You do watch the news, however in-depth background information you find less interesting. Your spending behaviour is higher than average and you buy impulsively. You enjoy spending your money in restaurants and new trendy novelties. The key word for this group is Pleasure. "
	segmentBody[3] =" Being a well-balanced person, you are like the average of the entire population. As far as interests, education, spending patterns, range of thoughts and lifestyle is concerned you fall between the other groups. If your answers lean towards one of the other group segments, you resemble more the average of the segment. The key word for this group is average."
	segmentBody[4] ="Being a materialist, you have high ambitions and you pursue success and recognition. You attach great significance to a comfortable life, but extremely dislike sitting still. You seek challenges and bend the rules a bit when you find necessary. Religious persons are least found amongst materialists. Your lifestyle is strongly oriented around your own needs and you are not engaged in affairs of others. Judging others is something you do quickly and you are outspoken in this respect. You are socially interested and get your information from both newspapers and television programs. The materialists group segment contains the most Veronica and Telegraaf subscribers. You own many modern gadgets that you like to show. From your point of view, technological development does not evolve fast enough. You are sensitive to trends and you are one of the first with the newest mobile phones. The key word for this group is achievement."
	segmentBody[5] ="Being a professional, you are ambitious and independent. You focus on your own development and belong to the group segment of highly educated. You are a hard worker and a quick and creative thinker. You truly enjoy life and strive a challenging and stimulating existence. The households of professionals exist for the greater part out of double incomes of the highest income bracket. Your spending pattern shows this. You like luxurious, tasteful, trendy products and are very sensitive to technical gadgets. Furthermore, you also donate money to worthy causes. You are critical but open for new things and ideas. You watch more than average television, above all the news and background documentaries. You are well informed on political and social issues. Persons from the other group segments consider you a Yuppie. The key word for this group is self-determined. "
	segmentBody[6] ="Being a broadminded person, you are progressive with a good education. You have many leftwing-oriented ideals. You are concerned about social problems and try to better the world, beginning with yourself. You belong to the most environmental-conscious groups. You are extremely fond of your freedom and truly enjoy following your own path. You like a varied lifestyle with some risks. Self-development is very important to you and you set high standards for yourself and others. You stand open for the world around you and attach a great amount of importance to terms like understanding and depth. You despise prejudice. You read a lot and you watch mainly television programs of the public broadcasting networks. Political and social affairs are close to your heart. You have a flexible attitude and a modern view on life. The key word for this group is maturity."
	segmentBody[7] ="Being a socially minded person, you value harmony and stability, both in the community as well as in your own life. You are a sociable person who likes to undertake activities in a group. Socially mined persons are community persons. Furthermore, you are the type of person who goes cautiously and level-headed to work. When taking decisions you think about the consequences they will have on your surroundings. You are part of the more elderly segment but with a rather high education. You prefer to read rather then watch television. You like the arts, nature and politics. You are not materialistic, but are attracted to beautiful and tasteful things. New technological gadgets have no effect on your consumer behaviour. The key word for this group is security. "

	//save the choosen scenario 
	function chooseScenario(id){
		scenario = id
	}
	
	//choose prefrered statements, put choices in atwo arrays 
	function choose(id, listNr){
		document.getElementById(id).style.display = "none";
		document.getElementById(id + "selected" ).style.display = "inline";
		document.getElementById(id + "selected" ).innerText = "selected " + (counter+1) +"th";
		if(listNr == 1){
			list1[counter] = id 
		} else {
			list2[counter] = id 
		}		
		counter++
		if (counter == 18){
			saveAnswers(listNr)
		}
	}

	//undo a choice
	function undo(listNr){
		if (counter > 0){
		
			if(listNr == 1){
				document.getElementById(  list1[ (list1.length -1 ) ]  ).style.display = "inline";
				document.getElementById(  list1[ (list1.length -1 ) ] + "selected"  ).style.display = "none";
				list1.length = list1.length -1 
			} else {
				document.getElementById(  list2[ (list2.length -1 ) ]  ).style.display = "inline";
				document.getElementById(  list2[ (list2.length -1 ) ] + "selected"  ).style.display = "none";
				list2.length = list2.length -1 
			}		
			counter--
		}
	}
	
	//go to the nextpage of the test, on the last page, calculate the results and go to the result page
	function saveAnswers(listNr){
		if(listNr == 1){
			parent.topFrame.saveResult(list1, 1)
			document.location.href= "testPage2.htm"
		} else {
			parent.topFrame.saveResult(list2, 2)
			calculateResult()
			document.location.href= "testPage3.htm"
		}	
	}
	
	//testje
	function test(){
		list1 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)
		list2 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)
		parent.topFrame.saveResult(list1, 1)
		parent.topFrame.saveResult(list2, 2)
		document.location.href= "testPage3.htm"
	}
	
	
	//calculate the result and store in top frame var segmentResult
	function calculateResult(){
		
		      DECALCULATION = new Array(
            new Array(9.293956, 9.70303 , 10.08943, 8.177424, 10.28941, 8.637618, 9.468037, 7.871285, 9.694618, 9.302226, 9.669838, 9.246384, 10.7122 , 11.48675, 10.25873, 10.25068, 10.4095),
            new Array(9.225801, 9.764644, 10.23402, 8.454073, 10.67584, 8.729816, 9.790604, 7.878396, 10.06463, 9.439754, 9.876729, 9.117108, 11.09435, 11.72437, 10.47237, 10.61801, 10.78948),
            new Array(8.981136, 9.556637, 10.17897, 8.821823, 11.01277, 8.871663, 10.05653, 7.868394, 10.27434, 9.436981, 10.09811, 8.954476, 11.32755, 11.87595, 10.63763, 10.80219, 11.13327),
            new Array(9.076829, 9.434782, 9.999713, 8.514499, 10.63018, 8.817213, 9.602978, 7.832415, 9.906222, 9.269555, 9.922733, 9.050519, 11.05354, 11.52613, 10.43641, 10.42962, 10.75574),
            new Array(8.856932, 9.312805, 9.945323, 8.92962 , 11.00959, 8.993052, 9.883424, 7.880913, 10.20554, 9.370046, 10.10292, 8.919493, 11.25434, 11.72941, 10.61035, 10.74038, 11.15288),
            new Array(8.977566, 9.176242, 9.844475, 8.877141, 10.93075, 9.170567, 9.682868, 8.005597, 10.05237, 9.29035 , 10.12958, 9.000045, 11.23227, 11.6098 , 10.62084, 10.51885, 11.02993),
            new Array(9.124695, 9.204625, 9.76667 , 8.326153, 10.34691, 8.944253, 9.311425, 7.938638, 9.601478, 9.151309, 9.850146, 9.17255 , 10.96775, 11.25513, 10.28988, 9.975365, 10.46775),
            new Array(9.260455, 9.489646, 9.921029, 8.119743, 10.19583, 8.763289, 9.258675, 7.901881, 9.587479, 9.181628, 9.735405, 9.260891, 10.80842, 11.29351, 10.26641, 9.986366, 10.30215)
            );


        DICALCULATION = new Array(
            new Array(8.339711, 8.771527, 9.36083 , 7.114517, 8.09948 , 8.924139, 8.587038, 7.656799, 6.253134, 8.972902, 8.927391, 9.106427, 10.09796, 7.454914, 9.062878, 8.438745, 10.28831, -1487.78),
            new Array(8.261263, 9.049512, 9.477693, 7.063112, 8.091003, 9.123395, 8.816903, 7.842951, 6.408029, 9.093198, 8.987505, 9.213757, 10.2656 , 7.496267, 9.00132 , 8.38538 , 10.3853 , -1532.95),
            new Array(8.156136, 9.12762 , 9.377738, 6.966077, 8.047577, 9.112173, 9.052271, 8.033584, 6.503129, 9.142285, 8.954223, 9.158301, 10.27964, 7.510695, 8.990681, 8.413161, 10.45067, -1554.05),
            new Array(8.142163, 8.71104 , 9.05793 , 7.041986, 8.149892, 8.839673, 8.79519 , 7.870544, 6.397473, 8.827519, 8.723377, 8.877066, 9.920398, 7.459302, 9.175902, 8.567976, 10.38   , -1490.30),
            new Array(7.934434, 8.838266, 9.015085, 6.982986, 8.105991, 8.857538, 9.002228, 8.064216, 6.542189, 8.873398, 8.689814, 8.731462, 9.924616, 7.377487, 9.10375 , 8.541259, 10.39241, -1518.02),
            new Array(7.830591, 8.511744, 8.620161, 6.984739, 8.141004, 8.637393, 8.871824, 8.049835, 6.475485, 8.549007, 8.408159, 8.450085, 9.586301, 7.378808, 9.233944, 8.717599, 10.45499, -1491.38),
            new Array(8.002483, 8.306631, 8.627229, 7.06037 , 8.192233, 8.468849, 8.593992, 7.74935 , 6.279137, 8.440628, 8.374994, 8.450049, 9.538445, 7.333424, 9.222692, 8.746899, 10.32055, -1439.28),
            new Array(8.196751, 8.406882, 9.002716, 7.144769, 8.171141, 8.643666, 8.502638, 7.635641, 6.247666, 8.672689, 8.599995, 8.751723, 9.801207, 7.417751, 9.227658, 8.648798, 10.2244 , -1453.39)
            );
			
			
		var de = new Array(8);
		var di = new Array(8);
		var eind = new Array(18)
		var instr = new Array(18)
		var i,j
		var score
		var segment		
			
		eindSplit = parent.topFrame.testResult1.split(",")
		instrSplit = parent.topFrame.testResult2.split(",")
		for (i=0; i<18; i++){
			eind[eindSplit[i]] = i+1
			instr[instrSplit[i]] = i+1
		}
		
	// swap arrays to eind en instr
    for (i  = 0; i < 8; i++ )
    {
        de[i] = 0;
        for (j = 0; j < 17; j++ )
            de[i] = de[i] + DECALCULATION[i][j] * eind[j];
        de[i] = Math.round(de[i]);
    };

    for (i  = 0; i < 8; i++ )
    {
	
        di[i] = DICALCULATION[i][17];
        for (j  = 0; j < 17; j++ )
            di[i] = di[i] + DICALCULATION[i][j] * instr[j];
        di[i]   = Math.round(di[i]);
	};

//    for i := 0 to High(FEind) do
//        mmoResult.Lines.Add(Format('%d, %d', [FEind[i], FInstr[i]]));

    score   = -99999;
	segment = -1
    for (i = 0; i < 8; i++){
	    if (di[i] + de[i] >= score){
            segment = i;
			score   = di[i] + de[i];
        };
     };
	parent.topFrame.segmentResult = segment
}

		//convert the result to a string  and save it	
	function saveResult(result, listNr){
		if(listNr == 1){
			testResult1 = String(result)
		} else {
			testResult2 = String(result)
		}	
		
	}
	
	
	//match scenraio and test results..
	function getResult(){
		scenarioPreference = parent.topFrame.scenario
		segment = parent.topFrame.segmentResult
		if(scenarioPreference == -1 && segment ==-1 ){
			document.getElementById('testScenarioMatch').innerHTML  = "You haven't done the tests yet, please take both tests."
		
		} 
		else if(scenarioPreference == -1 ){
		document.getElementById('testScenarioMatch').innerHTML  = "You haven't done the scenario test yet."
		
		} else if (segment ==-1){
		document.getElementById('testScenarioMatch').innerHTML  = "You haven't done the self test test yet."
		
		} else {
			                // a1,a2,b1,.b2
		var scenCheck = new Array(
			new Array(0, 0, 0, 1),		//Zorgzamen
			new Array(0, 1, 0, 0),		//Behoudenden
			new Array(0, 1, 0, 0),		// Genieters		
			new Array(0, 1, 0, 0),		// Evenwichtigen
			new Array(0, 1, 0, 0),		// Luxezoekers
			new Array(0, 0, 0, 1),		// Zakelijken
			new Array(0, 0, 1, 0),		// Ruimdenkers
			new Array(0, 0, 0, 1)		// Geengageerden
		)

		var segmentScen = new Array(
			3,		//Zorgzamen
			1,		//Behoudenden
			1,		// Genieters		
			1,		// Evenwichtigen
			1,		// Luxezoekers
			3,		// Zakelijken
			2,		// Ruimdenkers
			3		// Geengageerden
		)
		
	//alert("scenario "+parent.topFrame.scenario)
		//alert(parent.topFrame.testResult1)
		//alert(parent.topFrame.testResult2)

		//	alert(scenarioPreference)
		//alert(segment)
		//alert(scenCheck[segment][scenarioPreference])
		scenarioArray = new Array("A1", "A2", "B1", "B2")
		
		if ( segmentScen[segment] == scenarioPreference)
		{
			document.getElementById('testScenarioMatch').innerHTML = "Your personal position matches your scenarios preference. You have chosen scenario " + scenarioArray[scenarioPreference]
		}
		else
		{
			document.getElementById('testScenarioMatch').innerHTML = "your personal position did not match your scenarios preference. <br>Your scenario preference is "  + 	scenarioArray[scenarioPreference] + ". But your  personal position matches scenario  " + scenarioArray[segmentScen[segment]] +"."
		}
	}	
	}
	
	//write test results to the screen
	function showResult(){
document.getElementById('Title').innerHTML = segmentTitle[parent.topFrame.segmentResult] 
document.getElementById('Body').innerHTML = segmentBody[parent.topFrame.segmentResult] 

	}