
function Custom() {
    this.initialize.apply(this, arguments);
}

Custom.prototype.initialize = function() {
	this.canvas = document.getElementById('canvas');
	this.stage = new createjs.Stage(canvas);
	this.layer = [];

	this.width  = 325;
	this.height = 624;

	this.images;
	this.images = this.images||{};

	this.manifest = [
			{src: 'image/00_bob.png', 		id: 'bob'},
			{src: 'image/00_long.png', 		id: 'long'},
			{src: 'image/00_twin.png', 		id: 'twin'},
			{src: 'image/00_pony.png', 		id: 'pony'},
			{src: 'image/00_ponyC.png', 		id: 'ponyC'},
			
			{src: 'image/01_blazer.png', 				id: 'back_blazer'},
			
			{src: 'image/05_base.png', 				id: 'base'},
			{src: 'image/06_base_hl.png', 				id: 'base_hl'},
			{src: 'image/07_suit.png', 				id: 'suit'},
			{src: 'image/07_bodyTights.png', 				id: 'bodyTights'},
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
			
			{src: 'image/23_bodyTights1.png', 			id: 'breast1_bodyTights'},
			{src: 'image/23_bodyTights2.png', 			id: 'breast2_bodyTights'},
			{src: 'image/23_bodyTights3.png', 			id: 'breast3_bodyTights'},
			{src: 'image/23_bodyTights4.png', 			id: 'breast4_bodyTights'},
			{src: 'image/23_bodyTights5.png', 			id: 'breast5_bodyTights'},
			{src: 'image/23_bodyTights6.png', 			id: 'breast6_bodyTights'},
			{src: 'image/23_bodyTights7.png', 			id: 'breast7_bodyTights'},
			
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

	this.preload = new createjs.LoadQueue();
	this.preload.setMaxConnections(6);
	this.preload.loadManifest(this.manifest);
	this.preload.addEventListener('fileload', function(event){
	  	if (event.item.type == "image") {
	    	custom.images[event.item.id] = event.result;
	  	}
	});

	this.container = {};
	this.container.breast = new createjs.Container();
	this.container.eye = new createjs.Container();

	this.data = {
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
};


Custom.prototype.formLoad = function (){
	this.data.front = document.forms.customForm.frontHair.value;
	this.data.side = document.forms.customForm.sideHair.value;
	this.data.back = document.forms.customForm.backHair.value;
	
	this.data.hairColor[0] = document.forms.customForm.hairColorR.value / 128;
	this.data.hairColor[1] = document.forms.customForm.hairColorG.value / 128;
	this.data.hairColor[2] = document.forms.customForm.hairColorB.value / 128;
	
	this.data.cheek = document.forms.customForm.cheek.checked ? this.data.cheek = 'cheek' : this.data.cheek = '';;
	this.data.eyelashes = String(document.forms.customForm.eye.value);
	this.data.pupil = String(document.forms.customForm.pupil.value);
	this.data.pupilOption = document.forms.customForm.pupilOption.value;
	this.data.eyeColor[0] = document.forms.customForm.eyeColorR.value / 128;
	this.data.eyeColor[1] = document.forms.customForm.eyeColorG.value / 128;
	this.data.eyeColor[2] = document.forms.customForm.eyeColorB.value / 128;
	this.data.mouth = document.forms.customForm.mouth.value;
	this.data.eyebrow = String(document.forms.customForm.eyeBrow.value);
	this.data.eyebrowEx = String(document.forms.customForm.eyeBrowEx.value);
	
	this.data.breast = String(document.forms.customForm.breast.value);
	SkinColor(document.forms.customForm.skin.value);
	this.data.ear = document.forms.customForm.ear.value;
	
	this.data.outer =  document.forms.customForm.outer.value;
	this.data.outerSleeve =  document.forms.customForm.outerSleeve.value;
	this.data.outerHem =  document.forms.customForm.outerHem.value;
	
	this.data.top =  document.forms.customForm.top.value;
	this.data.sleeve =  document.forms.customForm.sleeve.value;
	this.data.hem =  document.forms.customForm.hem.value;
	
	this.data.bottom =  document.forms.customForm.bottom.value;
	this.data.bottomLength =  document.forms.customForm.bottomLength.value;
	this.data.inner = document.forms.customForm.inner.value;
	//this.data.under = document.forms.customForm.under.value;
	this.data.pants = document.forms.customForm.pants.value;
	this.data.pantsColor =  document.forms.customForm.pantsColor.value;
	this.data.bra = document.forms.customForm.bra.value;
	this.data.braColor =  document.forms.customForm.braColor.value;
	
	this.data.acce = document.forms.customForm.acce.value;
	this.data.glasses = document.forms.customForm.glasses.value;
	this.data.socks = document.forms.customForm.socks.value;
	this.data.glove = document.forms.customForm.glove.value;
	
	this.preload.addEventListener("complete",function(event){
		custom.layer[0] = new createjs.Bitmap(custom.images[custom.data.back + custom.data.cap]);
		custom.layer[1] = new createjs.Bitmap(custom.images['back_' + custom.data.outer]);
		
		custom.layer[5] = new createjs.Bitmap(custom.images['base']);
		custom.layer[6] = new createjs.Bitmap(custom.images['base_hl']);
		custom.layer[6].compositeOperation ='lighter';
		custom.layer[7] = new createjs.Bitmap(custom.images[custom.data.inner]);
		custom.layer[8] = new createjs.Bitmap(custom.images[custom.data.glove]);
		custom.layer[9] = new createjs.Bitmap(custom.images['sleeve_' + custom.data.top + custom.data.sleeve]);
		custom.layer[10] = new createjs.Bitmap(custom.images['sleeve_' + custom.data.outer + custom.data.outerSleeve]);
		custom.layer[11] = new createjs.Bitmap(custom.images[custom.data.pants + custom.data.pantsColor]);
		custom.layer[12] = new createjs.Bitmap(custom.images[custom.data.socks]);
		custom.layer[13] = new createjs.Bitmap(custom.images[custom.data.bottom + custom.data.bottomLength]);
		custom.layer[14] = new createjs.Bitmap(custom.images['hem_' + custom.data.top + custom.data.hem]);
		custom.layer[15] = new createjs.Bitmap(custom.images['hem_' + custom.data.outer + custom.data.outerHem]);
		
		custom.layer[20] = new createjs.Bitmap(custom.images['breast' + custom.data.breast]);
		custom.layer[21] = new createjs.Bitmap(custom.images['breast' + custom.data.breast + '_hl']);
		custom.layer[21].compositeOperation ='lighter';
		custom.layer[23] = new createjs.Bitmap(custom.images['breast' + custom.data.breast + '_' + custom.data.inner]);
		custom.layer[25] = new createjs.Bitmap(custom.images['breast' + custom.data.breast + '_' + custom.data.bra + custom.data.braColor]);
		custom.layer[26] = new createjs.Bitmap(custom.images['breast' + custom.data.breast + '_' + custom.data.top]);
		custom.layer[29] = new createjs.Bitmap(custom.images['breast' + custom.data.breast + '_' + custom.data.outer]);
		
		custom.layer[30] = new createjs.Bitmap(custom.images['hairshadow_' + custom.data.front]);
		custom.layer[31] = new createjs.Bitmap(custom.images[custom.data.cheek]);
		
		custom.layer[32] = new createjs.Bitmap(custom.images['eye']);
		custom.layer[33] = new createjs.Bitmap(custom.images['pupil' + custom.data.pupil]);
		custom.layer[34] = new createjs.Bitmap(custom.images[custom.data.pupilOption]);
		custom.layer[34].compositeOperation ='lighter';
		custom.layer[35] = new createjs.Bitmap(custom.images['eyelashes' + custom.data.eyelashes]);
		custom.layer[36] = new createjs.Bitmap(custom.images['eyebrow' + custom.data.eyebrow + '_' + custom.data.eyebrowEx]);
		custom.layer[37] = new createjs.Bitmap(custom.images[custom.data.mouth]);
		custom.layer[38] = new createjs.Bitmap(custom.images[custom.data.glasses]);
		
		custom.layer[40] = new createjs.Bitmap(custom.images['ear_' + custom.data.ear]);
		custom.layer[42] = new createjs.Bitmap(custom.images[custom.data.front]);
		custom.layer[43] = new createjs.Bitmap(custom.images[custom.data.side]);
		//custom.layer[44] = new createjs.Bitmap(custom.images['shadow_' + custom.data.acce]);
		//custom.layer[44].compositeOperation = 'darker';
		custom.layer[45] = new createjs.Bitmap(custom.images[custom.data.acce]);
		
		for(var i=0; i<custom.layer.length; i++){
			if(custom.layer[i]){
				custom.stage.addChild(custom.layer[i]);
			};
		}
		
		custom.update()
	});

};



Custom.prototype.update = function (){
	this.cap();
	
	this.layer[0].image = this.images[this.data.back + this.data.cap];
	this.layer[1].image = this.images['back_' + this.data.outer];
	
	this.layer[7].image = this.images[this.data.inner];
	this.layer[8].image = this.images[this.data.glove];
	this.layer[9].image = this.images['sleeve_' + this.data.top + this.data.sleeve];
	this.layer[10].image = this.images['sleeve_' + this.data.outer + this.data.outerSleeve];
	
	this.layer[11].image = this.images[this.data.pants + this.data.pantsColor];
	this.layer[12].image = this.images[this.data.socks];
	this.layer[13].image = this.images[this.data.bottom + this.data.bottomLength];
	this.layer[14].image = this.images['hem_' +this.data.top + this.data.hem];
	this.layer[15].image = this.images['hem_' + this.data.outer + this.data.outerHem];
	
	this.layer[20].image = this.images['breast' + this.data.breast];
	this.layer[21].image = this.images['breast' + this.data.breast + '_hl'];
	this.layer[23].image = this.images['breast' + this.data.breast + '_' + this.data.inner];
	this.layer[25].image = this.images['breast' + this.data.breast + '_' + this.data.bra + this.data.braColor];
	this.layer[26].image = this.images['breast' + this.data.breast + '_' + this.data.top];
	this.layer[29].image = this.images['breast' + this.data.breast + '_' + this.data.outer];
	
	this.layer[30].image = this.images['hairshadow_' + this.data.front];
	this.layer[31].image = this.images[this.data.cheek];
	this.layer[33].image = this.images['pupil' + this.data.pupil];
	this.layer[34].image = this.images[this.data.pupilOption];
	this.layer[35].image = this.images['eyelashes' + this.data.eyelashes];
	this.layer[36].image = this.images['eyebrow' + this.data.eyebrow + '_' + this.data.eyebrowEx];
	this.layer[37].image = this.images[this.data.mouth];
	this.layer[38].image = this.images[this.data.glasses];
	
	this.layer[40].image = this.images['ear_' + this.data.ear];
	this.layer[42].image = this.images[this.data.front];
	this.layer[43].image = this.images[this.data.side];
	//this.layer[44].image = this.images['shadow_' + this.data.acce];
	this.layer[45].image = this.images[this.data.acce];
	
	this.ChangeEyeColor();
	this.ChangeHairColor();
	this.ChangeSkinColor();
};

Custom.prototype.cap = function(){
	if((this.data.acce === 'casquette') && (this.data.back === 'pony')){
		this.data.cap = 'C';
	}else{
		this.data.cap = '';
	}
};

Custom.prototype.ChangeHairColor = function(){
	var array = [0, 35, 36, 42, 43];
	for(var i = 0; i < array.length; i++){
		this.layer[array[i]].filters = [new createjs.ColorFilter(this.data.hairColor[0], this.data.hairColor[1], this.data.hairColor[2], 1)];
		this.layer[array[i]].cache(0,0,this.width,this.height);
	};
};

Custom.prototype.ChangeEyeColor = function(){
	this.layer[33].filters = [new createjs.ColorFilter(this.data.eyeColor[0], this.data.eyeColor[1], this.data.eyeColor[2], 1)];
	this.layer[33].cache(0,0,this.width,this.height);
};

Custom.prototype.ChangeSkinColor = function(){
	var array = [5, 20, 30, 40];
	for(var i = 0; i < array.length; i++){
		if(i === 30 && this.data.ear === 'mecha'){ continue; }
		this.layer[array[i]].filters = [new createjs.ColorFilter(this.data.skinColor[0], this.data.skinColor[1], this.data.skinColor[2], 1)];
		this.layer[array[i]].cache(0,0,this.width,this.height);
	};
};

var custom = new Custom();

function select(value, type){
	console.log(type)
	type = value;
	custom.update();
}


function BackHair(type){
	custom.data.back = type;
	custom.update();
}

function FrontHair(type){
	custom.data.front  = type;
	custom.update();
}

function SideHair(type){
	custom.data.side  = type;
	custom.update();
}

function HairColor(color, type){
	custom.data.hairColor[type]  = color / 128;
	custom.update();
}

function Eye(value){
	custom.data.eyelashes = String(value);
	custom.update();
}	

function Pupil(value){
	custom.data.pupil = String(value);
	custom.update();
}

function PupilOption(value){
	custom.data.pupilOption = String(value);
	custom.update();
}

function EyeColor(color, type){
	custom.data.eyeColor[type]  = color / 128;
	custom.update();
}

function EyebrowEx(value){
	custom.data.eyebrowEx = String(value);
	custom.update();
}

function Eyebrow(value){
	custom.data.eyebrow = String(value);
	custom.update();
}

function Cheek(checked){
	checked ? custom.data.cheek = 'cheek' : custom.data.cheek = '';
	custom.update();
}

function Mouth(value){
	custom.data.mouth = value;
	custom.update();
}

function Breast(value){
	custom.data.breast = String(value);
	custom.update();
}

function Skin(value){
	SkinColor(value);
	custom.update();
}

function SkinColor(value){
	switch (Number(value)){
	case 0:
		custom.data.skinColor = [0.5, 0.3, 0.2];
		break;
	case 1:
		custom.data.skinColor = [0.7, 0.5, 0.4];
		break;
	case 2:
		custom.data.skinColor = [0.8, 0.6, 0.5];
		break;
	case 3:
		custom.data.skinColor = [0.9, 0.75, 0.65];
		break;
	case 4:
		custom.data.skinColor = [1.0, 0.9, 0.8];
		break;
	case 5:
		custom.data.skinColor = [1.0, 1.0, 1.0];
		break;
	}
}

function Ear(value){
	custom.data.ear = value;
	custom.update();
}

function Outer(value){
	custom.data.outer = value;
	custom.update();
}

function OuterSleeve(value){
	custom.data.outerSleeve = value;
	custom.update();
}

function OuterHem(value){
	custom.data.outerHem = value;
	custom.update();
}

function Top(value){
	custom.data.top = value;
	custom.update();
}

function TopSleeve(value){
	custom.data.sleeve = value;
	custom.update();
}

function TopHem(value){
	custom.data.hem = value;
	custom.update();
}

function Bottom(value){
	custom.data.bottom = value;
	custom.update();
}

function BottomLength(value){
	custom.data.bottomLength = value;
	custom.update();
}

function Inner(value){
	custom.data.inner = value;
	custom.update();
}

function Under(value){
	custom.data.under = value;
	custom.update();
}


function Pants(value){
	custom.data.pants = value;
	custom.update();
}

function PantsColor(value){
	custom.data.pantsColor = value;
	custom.update();
}

function Bra(value){
	custom.data.bra = value;
	custom.update();
}

function BraColor(value){
	custom.data.braColor = value;
	custom.update();
}

function Acce(value){
	custom.data.acce = value;
	custom.update();
}

function Glasses(value){
	custom.data.glasses = value;
	custom.update();
}

function Glove(value){
	custom.data.glove = value;
	custom.update();
}

function Socks(value){
	custom.data.socks = value;
	custom.update();
}

createjs.Ticker.setFPS(10);
createjs.Ticker.addEventListener("tick", function() {
    custom.stage.update();
});
