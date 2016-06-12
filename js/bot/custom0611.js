
var canvas = document.getElementById('canvas');
var stage = new createjs.Stage(canvas);

createjs.Ticker.setFPS(10);
createjs.Ticker.addEventListener("tick", function() {
	/*
	if(preload.loaded){
		update();
	}
	*/
    stage.update();
});

var layer = [];


var width  = 325;
var height = 624;


var images;
images = images||{};
var manifest = [
		{src: 'image/00_bob.png', 		id: 'bob'},
		{src: 'image/00_long.png', 		id: 'long'},
		{src: 'image/00_twin.png', 		id: 'twin'},
		{src: 'image/00_pony.png', 		id: 'pony'},
		{src: 'image/00_ponyC.png', 		id: 'ponyC'},
		
		{src: 'image/01_blazer.png', 				id: 'back_blazer'},
		
		{src: 'image/05_base.png', 				id: 'base'},
		{src: 'image/06_base_hl.png', 				id: 'base_hl'},
		{src: 'image/07_inner_suit.png', 				id: 'suit'},
		{src: 'image/08_gloveB0.png', 				id: 'gloveB0'},
		{src: 'image/08_gloveB1.png', 				id: 'gloveB1'},
		{src: 'image/08_gloveB2.png', 				id: 'gloveB2'},
		{src: 'image/08_gloveB3.png', 				id: 'gloveB3'},
		{src: 'image/08_gloveW0.png', 				id: 'gloveW0'},
		{src: 'image/08_gloveW1.png', 				id: 'gloveW1'},
		{src: 'image/08_gloveW2.png', 				id: 'gloveW2'},
		{src: 'image/08_gloveW3.png', 				id: 'gloveW3'},
		{src: 'image/09_sailorW0.png', 				id: 'sleeve_sailorW0'},
		{src: 'image/09_sailorW1.png', 				id: 'sleeve_sailorW1'},
		{src: 'image/09_sailorW2.png', 				id: 'sleeve_sailorW2'},
		{src: 'image/09_sailorW3.png', 				id: 'sleeve_sailorW3'},
		{src: 'image/09_sailorB0.png', 				id: 'sleeve_sailorB0'},
		{src: 'image/09_sailorB1.png', 				id: 'sleeve_sailorB1'},
		{src: 'image/09_sailorB2.png', 				id: 'sleeve_sailorB2'},
		{src: 'image/09_sailorB3.png', 				id: 'sleeve_sailorB3'},
		
		{src: 'image/09_shirtW1.png', 				id: 'sleeve_shirtW1'},
		{src: 'image/09_shirtW2.png', 				id: 'sleeve_shirtW2'},
		{src: 'image/09_shirtW3.png', 				id: 'sleeve_shirtW3'},
		
		{src: 'image/10_blazer1.png', 				id: 'sleeve_blazer1'},
		{src: 'image/10_blazer2.png', 				id: 'sleeve_blazer2'},
		{src: 'image/10_blazer3.png', 				id: 'sleeve_blazer3'},
		{src: 'image/11_lowB.png', 					id: 'lowB'},
		{src: 'image/11_lowW.png', 					id: 'lowW'},
		{src: 'image/11_pantsB.png', 				id: 'pantsB'},
		{src: 'image/11_pantsW.png', 				id: 'pantsW'},
		{src: 'image/11_spatsB.png', 				id: 'spatsB'},
		{src: 'image/11_spatsW.png', 				id: 'spatsW'},
		{src: 'image/12_tights0.png', 				id: 'tights0'},
		{src: 'image/12_tights1.png', 				id: 'tights1'},
		{src: 'image/12_tights2.png', 				id: 'tights2'},
		{src: 'image/12_tightsW.png', 				id: 'tightsW'},
		{src: 'image/12_nisoB.png', 				id: 'nisoB'},
		{src: 'image/12_nisoW.png', 				id: 'nisoW'},
		{src: 'image/13_skirtR-1.png', 				id: 'skirtR-1'},
		{src: 'image/13_skirtR0.png', 				id: 'skirtR0'},
		{src: 'image/13_skirtR1.png', 				id: 'skirtR1'},
		{src: 'image/13_skirtR2.png', 				id: 'skirtR2'},
		{src: 'image/13_skirtR3.png', 				id: 'skirtR3'},
		{src: 'image/13_skirtB-1.png', 				id: 'skirtB-1'},
		{src: 'image/13_skirtB0.png', 				id: 'skirtB0'},
		{src: 'image/13_skirtB1.png', 				id: 'skirtB1'},
		{src: 'image/13_skirtB2.png', 				id: 'skirtB2'},
		{src: 'image/13_skirtB3.png', 				id: 'skirtB3'},
		{src: 'image/13_tight-1.png', 				id: 'tight-1'},
		{src: 'image/13_tight0.png', 				id: 'tight0'},
		{src: 'image/13_tight1.png', 				id: 'tight1'},
		{src: 'image/13_tight2.png', 				id: 'tight2'},
		{src: 'image/13_tight3.png', 				id: 'tight3'},
		{src: 'image/14_sailorW0.png', 				id: 'hem_sailorW0'},
		{src: 'image/14_sailorW1.png', 				id: 'hem_sailorW1'},
		{src: 'image/14_sailorW2.png', 				id: 'hem_sailorW2'},
		{src: 'image/14_sailorW3.png', 				id: 'hem_sailorW3'},
		{src: 'image/14_sailorB0.png', 				id: 'hem_sailorB0'},
		{src: 'image/14_sailorB1.png', 				id: 'hem_sailorB1'},
		{src: 'image/14_sailorB2.png', 				id: 'hem_sailorB2'},
		{src: 'image/14_sailorB3.png', 				id: 'hem_sailorB3'},
		{src: 'image/14_shirtW0.png', 				id: 'hem_shirtW0'},
		{src: 'image/14_shirtW1.png', 				id: 'hem_shirtW1'},
		{src: 'image/14_shirtW2.png', 				id: 'hem_shirtW2'},
		{src: 'image/14_shirtW3.png', 				id: 'hem_shirtW3'},
		{src: 'image/15_blazer0.png', 				id: 'hem_blazer0'},
		{src: 'image/15_blazer1.png', 				id: 'hem_blazer1'},
		{src: 'image/15_blazer2.png', 				id: 'hem_blazer2'},
		{src: 'image/15_blazer3.png', 				id: 'hem_blazer3'},
		
		{src: 'image/20_breast0.png', 			id: 'breast0'},
		{src: 'image/20_breast1.png', 			id: 'breast1'},
		{src: 'image/20_breast2.png', 			id: 'breast2'},
		{src: 'image/20_breast3.png', 			id: 'breast3'},
		{src: 'image/20_breast4.png', 			id: 'breast4'},
		{src: 'image/20_breast5.png', 			id: 'breast5'},
		{src: 'image/20_breast6.png', 			id: 'breast6'},
		{src: 'image/20_breast7.png', 			id: 'breast7'},
		{src: 'image/21_breast1_hl.png', 			id: 'breast1_hl'},
		{src: 'image/21_breast2_hl.png', 			id: 'breast2_hl'},
		{src: 'image/21_breast3_hl.png', 			id: 'breast3_hl'},
		{src: 'image/21_breast4_hl.png', 			id: 'breast4_hl'},
		{src: 'image/21_breast5_hl.png', 			id: 'breast5_hl'},
		{src: 'image/21_breast6_hl.png', 			id: 'breast6_hl'},
		{src: 'image/21_breast7_hl.png', 			id: 'breast7_hl'},

		{src: 'image/23_suit1.png', 			id: 'breast1_suit'},
		{src: 'image/23_suit2.png', 			id: 'breast2_suit'},
		{src: 'image/23_suit3.png', 			id: 'breast3_suit'},
		{src: 'image/23_suit4.png', 			id: 'breast4_suit'},
		{src: 'image/23_suit5.png', 			id: 'breast5_suit'},
		{src: 'image/23_suit6.png', 			id: 'breast6_suit'},
		{src: 'image/23_suit7.png', 			id: 'breast7_suit'},
		
		{src: 'image/25_braB0.png', 			id: 'breast0_braB'},
		{src: 'image/25_braB1.png', 			id: 'breast1_braB'},
		{src: 'image/25_braB2.png', 			id: 'breast2_braB'},
		{src: 'image/25_braB3.png', 			id: 'breast3_braB'},
		{src: 'image/25_braB4.png', 			id: 'breast4_braB'},
		{src: 'image/25_braB5.png', 			id: 'breast5_braB'},
		{src: 'image/25_braB6.png', 			id: 'breast6_braB'},
		{src: 'image/25_braB7.png', 			id: 'breast7_braB'},
		
		{src: 'image/25_braW0.png', 			id: 'breast0_braW'},
		{src: 'image/25_braW1.png', 			id: 'breast1_braW'},
		{src: 'image/25_braW2.png', 			id: 'breast2_braW'},
		{src: 'image/25_braW3.png', 			id: 'breast3_braW'},
		{src: 'image/25_braW4.png', 			id: 'breast4_braW'},
		{src: 'image/25_braW5.png', 			id: 'breast5_braW'},
		{src: 'image/25_braW6.png', 			id: 'breast6_braW'},
		{src: 'image/25_braW7.png', 			id: 'breast7_braW'},
		
		{src: 'image/26_sailorW0.png', 			id: 'breast0_sailorW'},
		{src: 'image/26_sailorW1.png', 			id: 'breast1_sailorW'},
		{src: 'image/26_sailorW2.png', 			id: 'breast2_sailorW'},
		{src: 'image/26_sailorW3.png', 			id: 'breast3_sailorW'},
		{src: 'image/26_sailorW4.png', 			id: 'breast4_sailorW'},
		{src: 'image/26_sailorW5.png', 			id: 'breast5_sailorW'},
		{src: 'image/26_sailorW6.png', 			id: 'breast6_sailorW'},
		{src: 'image/26_sailorW7.png', 			id: 'breast7_sailorW'},
		
		{src: 'image/26_sailorB0.png', 			id: 'breast0_sailorB'},
		{src: 'image/26_sailorB1.png', 			id: 'breast1_sailorB'},
		{src: 'image/26_sailorB2.png', 			id: 'breast2_sailorB'},
		{src: 'image/26_sailorB3.png', 			id: 'breast3_sailorB'},
		{src: 'image/26_sailorB4.png', 			id: 'breast4_sailorB'},
		{src: 'image/26_sailorB5.png', 			id: 'breast5_sailorB'},
		{src: 'image/26_sailorB6.png', 			id: 'breast6_sailorB'},
		{src: 'image/26_sailorB7.png', 			id: 'breast7_sailorB'},
		
		{src: 'image/26_shirtW0.png', 			id: 'breast0_shirtW'},
		{src: 'image/26_shirtW1.png', 			id: 'breast1_shirtW'},
		{src: 'image/26_shirtW2.png', 			id: 'breast2_shirtW'},
		{src: 'image/26_shirtW3.png', 			id: 'breast3_shirtW'},
		{src: 'image/26_shirtW4.png', 			id: 'breast4_shirtW'},
		{src: 'image/26_shirtW5.png', 			id: 'breast5_shirtW'},
		{src: 'image/26_shirtW6.png', 			id: 'breast6_shirtW'},
		{src: 'image/26_shirtW7.png', 			id: 'breast7_shirtW'},
		
		{src: 'image/29_blazer0.png', 			id: 'breast0_blazer'},
		{src: 'image/29_blazer1.png', 			id: 'breast1_blazer'},
		{src: 'image/29_blazer2.png', 			id: 'breast2_blazer'},
		{src: 'image/29_blazer3.png', 			id: 'breast3_blazer'},
		{src: 'image/29_blazer4.png', 			id: 'breast4_blazer'},
		{src: 'image/29_blazer5.png', 			id: 'breast5_blazer'},
		{src: 'image/29_blazer6.png', 			id: 'breast6_blazer'},
		{src: 'image/29_blazer7.png', 			id: 'breast7_blazer'},
		
		{src: 'image/30_hairshadow_pattun0.png', 	id: 'hairshadow_pattun0'},
		{src: 'image/30_hairshadow_pattun1.png', 	id: 'hairshadow_pattun1'},
		{src: 'image/30_hairshadow_pattun2.png', 	id: 'hairshadow_pattun2'},
		{src: 'image/30_hairshadow_jagi0.png', 	id: 'hairshadow_jagi0'},
		{src: 'image/30_hairshadow_jagi1.png', 	id: 'hairshadow_jagi1'},
		{src: 'image/30_hairshadow_jagi2.png', 	id: 'hairshadow_jagi2'},
		{src: 'image/31_cheek.png', 	id: 'cheek'},
		{src: 'image/32_eye.png', 			id: 'eye'},
		{src: 'image/33_pupil0.png', 			id: 'pupil0'},
		{src: 'image/33_pupil1.png', 			id: 'pupil1'},
		{src: 'image/33_pupil2.png', 			id: 'pupil2'},
		{src: 'image/34_heart.png', 			id: 'heart'},
		{src: 'image/34_star.png', 			id: 'star'},
		{src: 'image/34_kira.png', 			id: 'kira'},
		{src: 'image/35_eyelashes0.png', 	id: 'eyelashes0'},
		{src: 'image/35_eyelashes1.png', 	id: 'eyelashes1'},
		{src: 'image/35_eyelashes2.png', 	id: 'eyelashes2'},
		{src: 'image/36_eyebrow0_0.png', 		id: 'eyebrow0_0'},
		{src: 'image/36_eyebrow0_1.png', 		id: 'eyebrow0_1'},
		{src: 'image/36_eyebrow0_2.png', 		id: 'eyebrow0_2'},
		{src: 'image/36_eyebrow0_3.png', 		id: 'eyebrow0_3'},
		{src: 'image/36_eyebrow1_0.png', 		id: 'eyebrow1_0'},
		{src: 'image/36_eyebrow1_1.png', 		id: 'eyebrow1_1'},
		{src: 'image/36_eyebrow1_2.png', 		id: 'eyebrow1_2'},
		{src: 'image/36_eyebrow1_3.png', 		id: 'eyebrow1_3'},
		{src: 'image/36_eyebrow2_0.png', 		id: 'eyebrow2_0'},
		{src: 'image/36_eyebrow2_1.png', 		id: 'eyebrow2_1'},
		{src: 'image/36_eyebrow2_2.png', 		id: 'eyebrow2_2'},
		{src: 'image/36_eyebrow2_3.png', 		id: 'eyebrow2_3'},
		{src: 'image/37_mouth_normal.png', 		id: 'normal'},
		{src: 'image/37_mouth_smile0.png', 		id: 'smile0'},
		{src: 'image/37_mouth_smile1.png', 		id: 'smile1'},
		{src: 'image/37_mouth_smile2.png', 		id: 'smile2'},
		{src: 'image/37_mouth_smile3.png', 		id: 'smile3'},
		{src: 'image/37_mouth_open0.png', 		id: 'open0'},
		{src: 'image/37_mouth_open1.png', 		id: 'open1'},
		{src: 'image/38_glasses0.png', 		id: 'glasses0'},
		
		{src: 'image/40_ear_mecha.png', 	id: 'ear_mecha'},
		{src: 'image/40_ear_normal.png', 		id: 'ear_normal'},
		{src: 'image/42_pattun0.png', 	id: 'pattun0'},
		{src: 'image/42_pattun1.png', 		id: 'pattun1'},
		{src: 'image/42_pattun2.png', 		id: 'pattun2'},
		{src: 'image/42_jagi0.png', 		id: 'jagi0'},
		{src: 'image/42_jagi1.png', 		id: 'jagi1'},
		{src: 'image/42_jagi2.png', 		id: 'jagi2'},
		{src: 'image/43_side0.png', 		id: 'side0'},
		{src: 'image/43_side1.png', 		id: 'side1'},
		{src: 'image/43_side2.png', 		id: 'side2'},
		{src: 'image/43_wave0.png', 		id: 'wave0'},
		{src: 'image/43_wave2.png', 		id: 'wave2'},
		{src: 'image/45_hairbandB.png', 		id: 'hairbandB'},
		{src: 'image/45_hairbandW.png', 		id: 'hairbandW'},
		{src: 'image/44_casquette.png', 		id: 'shadow_casquette'},
		{src: 'image/45_casquette.png', 		id: 'casquette'},
  	];

var preload = new createjs.LoadQueue();
preload.loadManifest(manifest);
preload.addEventListener('fileload', function(event){
  	if (event.item.type == "image") {
    	images[event.item.id] = event.result;
  	}
});


var data = {
		front:'pattun', 
		side:'side0',
		back:'long', 
		hairColor:[0,0,0], 
		cheek:'',
		pupil:'0', 
		pupilOption:'',
		eyeColor:[0,0,0], 
		eyelashes:'0', 
		eyebrow:'0',
		eyebrowEx:'0',
		mouth:'normal',
		breast:'0',
		skinColor:[1,1,1],
		ear:'',
		outer:'',
		outerSleeve:'1',
		outerHem:'1',
		inner:'',
		under:'',
		pants:'',
		pantsColor:'',
		socks:'',
		glove:'',
		bra:'',
		braColor:'',
		bottom:'',
		bottomLength:'1',
		top:'',
		sleeve:'1',
		hem:'1',
		glasses:'',
		acce:'',
		cap:'',
		};

var container = {};
container.breast = new createjs.Container();
container.eye = new createjs.Container();

container.hairColor = new createjs.Container();

function formLoad(){
	data.front = document.forms.customForm.frontHair.value;
	data.side = document.forms.customForm.sideHair.value;
	data.back = document.forms.customForm.backHair.value;
	
	data.hairColor[0] = document.forms.customForm.hairColorR.value / 128;
	data.hairColor[1] = document.forms.customForm.hairColorG.value / 128;
	data.hairColor[2] = document.forms.customForm.hairColorB.value / 128;
	
	data.cheek = document.forms.customForm.cheek.checked ? data.cheek = 'cheek' : data.cheek = '';;
	data.eyelashes = String(document.forms.customForm.eye.value);
	data.pupil = String(document.forms.customForm.pupil.value);
	data.pupilOption = document.forms.customForm.pupilOption.value;
	data.eyeColor[0] = document.forms.customForm.eyeColorR.value / 128;
	data.eyeColor[1] = document.forms.customForm.eyeColorG.value / 128;
	data.eyeColor[2] = document.forms.customForm.eyeColorB.value / 128;
	data.mouth = document.forms.customForm.mouth.value;
	data.eyebrow = String(document.forms.customForm.eyeBrow.value);
	data.eyebrowEx = String(document.forms.customForm.eyeBrowEx.value);
	
	data.breast = String(document.forms.customForm.breast.value);
	SkinColor(document.forms.customForm.skin.value);
	data.ear = document.forms.customForm.ear.value;
	
	data.outer =  document.forms.customForm.outer.value;
	data.outerSleeve =  document.forms.customForm.outerSleeve.value;
	data.outerHem =  document.forms.customForm.outerHem.value;
	
	data.top =  document.forms.customForm.top.value;
	data.sleeve =  document.forms.customForm.sleeve.value;
	data.hem =  document.forms.customForm.hem.value;
	
	data.bottom =  document.forms.customForm.bottom.value;
	data.bottomLength =  document.forms.customForm.bottomLength.value;
	data.inner = document.forms.customForm.inner.value;
	data.under = document.forms.customForm.under.value;
	data.pants = document.forms.customForm.pants.value;
	data.pantsColor =  document.forms.customForm.pantsColor.value;
	data.bra = document.forms.customForm.bra.value;
	data.braColor =  document.forms.customForm.braColor.value;
	
	data.acce = document.forms.customForm.acce.value;
	data.glasses = document.forms.customForm.glasses.value;
	data.socks = document.forms.customForm.socks.value;
	data.glove = document.forms.customForm.glove.value;
	
	preload.addEventListener("complete",function(event){
		layer[0] = new createjs.Bitmap(images[data.back + data.cap]);
		layer[1] = new createjs.Bitmap(images['back_' + data.outer]);
		
		layer[5] = new createjs.Bitmap(images['base']);
		layer[6] = new createjs.Bitmap(images['base_hl']);
		layer[6].compositeOperation ='lighter';
		layer[7] = new createjs.Bitmap(images[data.inner]);
		layer[8] = new createjs.Bitmap(images[data.glove]);
		layer[9] = new createjs.Bitmap(images['sleeve_' + data.top + data.sleeve]);
		layer[10] = new createjs.Bitmap(images['sleeve_' + data.outer + data.outerSleeve]);
		layer[11] = new createjs.Bitmap(images[data.pants + data.pantsColor]);
		layer[12] = new createjs.Bitmap(images[data.socks]);
		layer[13] = new createjs.Bitmap(images[data.bottom + data.bottomLength]);
		layer[14] = new createjs.Bitmap(images['hem_' + data.top + data.hem]);
		layer[15] = new createjs.Bitmap(images['hem_' + data.outer + data.outerHem]);
		
		layer[20] = new createjs.Bitmap(images['breast' + data.breast]);
		layer[21] = new createjs.Bitmap(images['breast' + data.breast + '_hl']);
		layer[21].compositeOperation ='lighter';
		layer[23] = new createjs.Bitmap(images['breast' + data.breast + '_' + data.inner]);
		layer[25] = new createjs.Bitmap(images['breast' + data.breast + '_' + data.bra + data.braColor]);
		layer[26] = new createjs.Bitmap(images['breast' + data.breast + '_' + data.top]);
		layer[29] = new createjs.Bitmap(images['breast' + data.breast + '_' + data.outer]);
		
		layer[30] = new createjs.Bitmap(images['hairshadow_' + data.front]);
		layer[31] = new createjs.Bitmap(images[data.cheek]);
		
		layer[32] = new createjs.Bitmap(images['eye']);
		layer[33] = new createjs.Bitmap(images['pupil' + data.pupil]);
		layer[34] = new createjs.Bitmap(images[data.pupilOption]);
		layer[34].compositeOperation ='lighter';
		layer[35] = new createjs.Bitmap(images['eyelashes' + data.eyelashes]);
		layer[36] = new createjs.Bitmap(images['eyebrow' + data.eyebrow + '_' + data.eyebrowEx]);
		layer[37] = new createjs.Bitmap(images[data.mouth]);
		layer[38] = new createjs.Bitmap(images[data.glasses]);
		
		layer[40] = new createjs.Bitmap(images['ear_' + data.ear]);
		layer[42] = new createjs.Bitmap(images[data.front]);
		layer[43] = new createjs.Bitmap(images[data.side]);
		//layer[44] = new createjs.Bitmap(images['shadow_' + data.acce]);
		//layer[44].compositeOperation = 'darker';
		layer[45] = new createjs.Bitmap(images[data.acce]);
		
		for(var i=0; i<layer.length; i++){
			if(layer[i]){
				stage.addChild(layer[i]);
			};
		}
		
		update()
	});

}

function update(){
	cap();
	
	layer[0].image = images[data.back + data.cap];
	layer[1].image = images['back_' + data.outer];
	
	layer[7].image = images[data.inner];
	layer[8].image = images[data.glove];
	layer[9].image = images['sleeve_' + data.top + data.sleeve];
	layer[10].image = images['sleeve_' + data.outer + data.outerSleeve];
	
	layer[11].image = images[data.pants + data.pantsColor];
	layer[12].image = images[data.socks];
	layer[13].image = images[data.bottom + data.bottomLength];
	layer[14].image = images['hem_' +data.top + data.hem];
	layer[15].image = images['hem_' + data.outer + data.outerHem];
	
	layer[20].image = images['breast' + data.breast];
	layer[21].image = images['breast' + data.breast + '_hl'];
	layer[23].image = images['breast' + data.breast + '_' + data.inner];
	layer[25].image = images['breast' + data.breast + '_' + data.bra + data.braColor];
	layer[26].image = images['breast' + data.breast + '_' + data.top];
	layer[29].image = images['breast' + data.breast + '_' + data.outer];
	
	layer[30].image = images['hairshadow_' + data.front];
	layer[31].image = images[data.cheek];
	layer[33].image = images['pupil' + data.pupil];
	layer[34].image = images[data.pupilOption];
	layer[35].image = images['eyelashes' + data.eyelashes];
	layer[36].image = images['eyebrow' + data.eyebrow + '_' + data.eyebrowEx];
	layer[37].image = images[data.mouth];
	layer[38].image = images[data.glasses];
	
	layer[40].image = images['ear_' + data.ear];
	layer[42].image = images[data.front];
	layer[43].image = images[data.side];
	//layer[44].image = images['shadow_' + data.acce];
	layer[45].image = images[data.acce];
	
	ChangeEyeColor();
	ChangeHairColor();
	ChangeSkinColor();
}

function cap(){
	if((data.acce === 'casquette') && (data.back === 'pony')){
		data.cap = 'C';
	}else{
		data.cap = '';
	}
}

function ChangeHairColor(){
	var array = [0, 35, 36, 42, 43];
	for(var i = 0; i < array.length; i++){
		layer[array[i]].filters = [new createjs.ColorFilter(data.hairColor[0], data.hairColor[1], data.hairColor[2], 1)];
		layer[array[i]].cache(0,0,width,height);
	};
}

function ChangeEyeColor(){
	layer[33].filters = [new createjs.ColorFilter(data.eyeColor[0], data.eyeColor[1], data.eyeColor[2], 1)];
	layer[33].cache(0,0,width,height);
}

function ChangeSkinColor(){
	var array = [5, 20, 30, 40];
	for(var i = 0; i < array.length; i++){
		if(i === 30 && data.ear === 'mecha'){ continue; }
		layer[array[i]].filters = [new createjs.ColorFilter(data.skinColor[0], data.skinColor[1], data.skinColor[2], 1)];
		layer[array[i]].cache(0,0,width,height);
	};
}


function BackHair(type){
	data.back = type;
	update();
}

function FrontHair(type){
	data.front  = type;
	update();
}

function SideHair(type){
	data.side  = type;
	update();
}

function HairColor(color, type){
	data.hairColor[type]  = color / 128;
	update();
}

function Eye(value){
	data.eyelashes = String(value);
	update();
}	

function Pupil(value){
	data.pupil = String(value);
	update();
}

function PupilOption(value){
	data.pupilOption = String(value);
	update();
}

function EyeColor(color, type){
	data.eyeColor[type]  = color / 128;
	update();
}

function EyebrowEx(value){
	data.eyebrowEx = String(value);
	update();
}

function Eyebrow(value){
	data.eyebrow = String(value);
	update();
}

function Cheek(checked){
	checked ? data.cheek = 'cheek' : data.cheek = '';
	update();
}

function Mouth(value){
	data.mouth = value;
	update();
}

function Breast(value){
	data.breast = String(value);
	update();
}

function Skin(value){
	SkinColor(value);
	update();
}

function SkinColor(value){
	switch (Number(value)){
	case 0:
		data.skinColor = [0.5, 0.3, 0.2];
		break;
	case 1:
		data.skinColor = [0.7, 0.5, 0.4];
		break;
	case 2:
		data.skinColor = [0.8, 0.6, 0.5];
		break;
	case 3:
		data.skinColor = [0.9, 0.75, 0.65];
		break;
	case 4:
		data.skinColor = [1.0, 0.9, 0.8];
		break;
	case 5:
		data.skinColor = [1.0, 1.0, 1.0];
		break;
	}
}

function Ear(value){
	data.ear = value;
	update();
}

function Outer(value){
	data.outer = value;
	update();
}

function OuterSleeve(value){
	data.outerSleeve = value;
	update();
}

function OuterHem(value){
	data.outerHem = value;
	update();
}

function Top(value){
	data.top = value;
	update();
}

function TopSleeve(value){
	data.sleeve = value;
	update();
}

function TopHem(value){
	data.hem = value;
	update();
}

function Bottom(value){
	data.bottom = value;
	update();
}

function BottomLength(value){
	data.bottomLength = value;
	update();
}

function Inner(value){
	data.inner = value;
	update();
}

function Under(value){
	data.under = value;
	update();
}


function Pants(value){
	data.pants = value;
	update();
}

function PantsColor(value){
	data.pantsColor = value;
	update();
}

function Bra(value){
	data.bra = value;
	update();
}

function BraColor(value){
	data.braColor = value;
	update();
}

function Acce(value){
	data.acce = value;
	update();
}

function Glasses(value){
	data.glasses = value;
	update();
}

function Glove(value){
	data.glove = value;
	update();
}

function Socks(value){
	data.socks = value;
	update();
}

/*
function SetEyeMask(){
	var graphics;
	graphics = new createjs.Graphics().beginFill("").beginBitmapFill(images['eye'], "no-repeat").drawEllipse(0,0,300,200);
	var eyeMask = new createjs.Shape(graphics);
	stage.addChild(eyeMask);
	layer[23].mask = eyeMask;
	layer[23].cache(0,0,width,height);
}

function Custom() {
    this.initialize.apply(this, arguments);
}

	{
	width:13px;
	height:3px;
	-webkit-border-radius:37px;
	-moz-border-radius:37px;
	border-radius:37px;
	background-color:#000000;
}


Custom.prototype.initialize = function() {
	this.canvas = document.getElementById('canvas');
	this.context = this.canvas.getContext('2d');
	this.stage = new createjs.Stage(this.canvas);
	this.images;
	
	this.setUp();
	

	this.base = new createjs.Bitmap(this.images['1_base']);
	this.stage.addChild(this.base);
	this.stage.update();

};

Custom.prototype.createImage = function() {
	
};

Custom.prototype.setUp = function() {
	this.images = this.images||{};
  	var manifest = [
	    {src: 'image/0_bobhair_black.png', 		id: '0_bobhair_black'},
		{src: 'image/0_bobhair_gold.png', 		id: '0_bobhair_gold'},
		{src: 'image/0_bobhair_silver.png', 		id: '0_bobhair_silve'},
		{src: 'image/0_lonhair_black.png', 		id: '0_lonhair_black'},
		{src: 'image/0_lonhair_gold.png', 		id: '0_lonhair_gold'},
		{src: 'image/0_lonhair_silver.png', 		id: '0_lonhair_silver'},
		{src: 'image/0_twinhair_black.png', 		id: '0_twinhair_black'},
		{src: 'image/0_twinhair_gold.png', 		id: '0_twinhair_gold'},
		{src: 'image/0_twinhair_silver.png', 	id: '0_twinhair_silver'},
		{src: 'image/1_base.png', 				id: '1_base'},
		{src: 'image/2_breast0.png', 			id: '2_breast0'},
		{src: 'image/2_breast1.png', 			id: '2_breast1'},
		{src: 'image/2_breast2.png', 			id: '2_breast2'},
		{src: 'image/2_breast3.png', 			id: '2_breast3'},
		{src: 'image/2_breast4.png', 			id: '2_breast4'},
		{src: 'image/2_breast5.png', 			id: '2_breast5'},
		{src: 'image/3_hairshadow_pattun.png', 	id: '3_hairshadow_pattun'},
		{src: 'image/3_hairshadow_pattun2.png', 	id: '3_hairshadow_pattun2'},
		{src: 'image/4_mouth_normal.png', 		id: '4_mouth_normal'},
		{src: 'image/5_eye_red.png', 			id: '5_eye_red'},
		{src: 'image/6_eyelashes_black.png', 	id: '6_eyelashes_black'},
		{src: 'image/7_eyebrow_black.png', 		id: '7_eyebrow_black'},
		{src: 'image/8_pattun2_black.png', 		id: '8_pattun2_black'},
		{src: 'image/8_pattun2_gold.png', 		id: '8_pattun2_gold'},
		{src: 'image/8_pattun2_silver.png', 		id: '8_pattun2_silver'},
		{src: 'image/8_pattun_black.png', 		id: '8_pattun_black'},
		{src: 'image/8_pattun_gold.png', 		id: '8_pattun_gold'},
		{src: 'image/8_pattun_silver.png', 		id: '8_pattun_silver'},

  	];
  	

  	var queue = new createjs.LoadQueue();
  	queue.addEventListener('fileload', function(event){
  		if (event.item.type == "image") {
    		this.images[event.item.id] = event.result;
  		}
  	});
  	
  	queue.addEventListener('complete', function(event){
		this.createImage();
  	});
  	queue.loadManifest(manifest);
};


Custom.prototype.breast = function(value) {
	this.srcs[2] = this.fileName(2, 'breast', value);
	console.log(this.context);
};

Custom.prototype.fileName = function(layer, type, value) {
	return 'image/' + String(layer) + '_' + type + String(value) +'.png'
};

var custom = new Custom();


function Breast(value){
	custom.breast(value);
}

*/
