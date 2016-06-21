
function Custom() {
    this.initialize.apply(this, arguments);
}

Custom.prototype.initialize = function() {
	this.canvas = document.getElementById('canvas');
	this.stage = new createjs.Stage(canvas);
	this.layer = [];

	this.progress = 0;
	this.progressText = new createjs.Text('Loading... 0%', '15px Arial', '#000000');
	this.stage.addChild(this.progressText);
	
	this.width  = 325;
	this.height = 624;

	this.images;
	this.images = this.images||{};

	this.manifest = [
			{src: 'image/00_bob.png', 		id: 'bob'},
			{src: 'image/00_long.png', 		id: 'long'},
			{src: 'image/00_semilong.png', 		id: 'semilong'},
			{src: 'image/00_airly.png', 		id: 'airly'},
			{src: 'image/00_short.png', 		id: 'short'},
			{src: 'image/00_twin.png', 		id: 'twin'},
			{src: 'image/00_twoside.png', 		id: 'twoside'},
			{src: 'image/00_pony.png', 		id: 'pony'},
			{src: 'image/00_ponyC.png', 		id: 'ponyC'},
			{src: 'image/00_twinC.png', 		id: 'twinC'},
			{src: 'image/00_twosideC.png', 		id: 'twosideC'},
			{src: 'image/01_twin_hl.png', 		id: 'twin_hl'},
			{src: 'image/01_twoside_hl.png', 		id: 'twoside_hl'},
			{src: 'image/01_pony_hl.png', 		id: 'pony_hl'},
			
			{src: 'image/02_blazer.png', 				id: 'back_blazer'},
			{src: 'image/02_blazer.png', 				id: 'back_blazerOpen'},
			
			{src: 'image/03_base.png', 				id: 'base'},
			{src: 'image/05_base_hl.png', 				id: 'base_hl'},
			
			{src: 'image/07_suit.png', 				id: 'suit'},
			{src: 'image/07_bodyTights.png', 				id: 'bodyTights'},
			{src: 'image/08_gloveB0.png', 				id: 'glove0B'},
			{src: 'image/08_gloveB1.png', 				id: 'glove1B'},
			{src: 'image/08_gloveB2.png', 				id: 'glove2B'},
			{src: 'image/08_gloveB3.png', 				id: 'glove3B'},
			{src: 'image/08_gloveW0.png', 				id: 'glove0W'},
			{src: 'image/08_gloveW1.png', 				id: 'glove1W'},
			{src: 'image/08_gloveW2.png', 				id: 'glove2W'},
			{src: 'image/08_gloveW3.png', 				id: 'glove3W'},
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
			{src: 'image/09_shirtW1.png', 				id: 'sleeve_shirtOpenW1'},
			{src: 'image/09_shirtW2.png', 				id: 'sleeve_shirtOpenW2'},
			{src: 'image/09_shirtW3.png', 				id: 'sleeve_shirtOpenW3'},
			
			{src: 'image/10_blazer1.png', 				id: 'sleeve_blazer1'},
			{src: 'image/10_blazer2.png', 				id: 'sleeve_blazer2'},
			{src: 'image/10_blazer3.png', 				id: 'sleeve_blazer3'},
			{src: 'image/10_blazer1.png', 				id: 'sleeve_blazerOpen1'},
			{src: 'image/10_blazer2.png', 				id: 'sleeve_blazerOpen2'},
			{src: 'image/10_blazer3.png', 				id: 'sleeve_blazerOpen3'},
			{src: 'image/10_trench1.png', 				id: 'sleeve_trench1'},
			{src: 'image/10_trench2.png', 				id: 'sleeve_trench2'},
			{src: 'image/10_trench3.png', 				id: 'sleeve_trench3'},
			{src: 'image/10_trench1.png', 				id: 'sleeve_trenchOpen1'},
			{src: 'image/10_trench2.png', 				id: 'sleeve_trenchOpen2'},
			{src: 'image/10_trench3.png', 				id: 'sleeve_trenchOpen3'},
			
			{src: 'image/11_lowB.png', 					id: 'lowB'},
			{src: 'image/11_lowW.png', 					id: 'lowW'},
			{src: 'image/11_highB.png', 					id: 'highB'},
			{src: 'image/11_highW.png', 					id: 'highW'},
			{src: 'image/11_pantsB.png', 				id: 'pantsB'},
			{src: 'image/11_pantsW.png', 				id: 'pantsW'},
			{src: 'image/11_microB.png', 				id: 'microB'},
			{src: 'image/11_microW.png', 				id: 'microW'},
			{src: 'image/11_spatsB.png', 				id: 'spatsB'},
			{src: 'image/11_spatsW.png', 				id: 'spatsW'},
			
			{src: 'image/12_tightsB0.png', 				id: 'tights0B'},
			{src: 'image/12_tightsB1.png', 				id: 'tights1B'},
			{src: 'image/12_tightsB2.png', 				id: 'tights2B'},
			{src: 'image/12_tightsW0.png', 				id: 'tights0W'},
			{src: 'image/12_tightsW1.png', 				id: 'tights1W'},
			{src: 'image/12_tightsW2.png', 				id: 'tights2W'},
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
			{src: 'image/13_skirtBu-1.png', 				id: 'skirtBu-1'},
			{src: 'image/13_skirtBu0.png', 				id: 'skirtBu0'},
			{src: 'image/13_skirtBu1.png', 				id: 'skirtBu1'},
			{src: 'image/13_skirtBu2.png', 				id: 'skirtBu2'},
			{src: 'image/13_skirtBu3.png', 				id: 'skirtBu3'},
			{src: 'image/13_tight-1.png', 				id: 'tight-1'},
			{src: 'image/13_tight0.png', 				id: 'tight0'},
			{src: 'image/13_tight1.png', 				id: 'tight1'},
			{src: 'image/13_tight2.png', 				id: 'tight2'},
			{src: 'image/13_tight3.png', 				id: 'tight3'},
			{src: 'image/13_jeans-1.png', 				id: 'jeans-1'},
			{src: 'image/13_jeans0.png', 				id: 'jeans0'},
			{src: 'image/13_jeans1.png', 				id: 'jeans1'},
			{src: 'image/13_jeans2.png', 				id: 'jeans2'},
			{src: 'image/13_jeans3.png', 				id: 'jeans3'},
			{src: 'image/13_stretch-1.png', 				id: 'stretch-1'},
			{src: 'image/13_stretch0.png', 				id: 'stretch0'},
			{src: 'image/13_stretch1.png', 				id: 'stretch1'},
			{src: 'image/13_stretch2.png', 				id: 'stretch2'},
			{src: 'image/13_stretch3.png', 				id: 'stretch3'},
			
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
			{src: 'image/14_shirtOpenW0.png', 				id: 'hem_shirtOpenW0'},
			{src: 'image/14_shirtOpenW1.png', 				id: 'hem_shirtOpenW1'},
			{src: 'image/14_shirtOpenW2.png', 				id: 'hem_shirtOpenW2'},
			{src: 'image/14_shirtOpenW3.png', 				id: 'hem_shirtOpenW3'},
			{src: 'image/14_camisoleB0.png', 				id: 'hem_camisoleB0'},
			{src: 'image/14_camisoleB1.png', 				id: 'hem_camisoleB1'},
			{src: 'image/14_camisoleB2.png', 				id: 'hem_camisoleB2'},
			{src: 'image/14_camisoleB3.png', 				id: 'hem_camisoleB3'},
			{src: 'image/14_camisoleW0.png', 				id: 'hem_camisoleW0'},
			{src: 'image/14_camisoleW1.png', 				id: 'hem_camisoleW1'},
			{src: 'image/14_camisoleW2.png', 				id: 'hem_camisoleW2'},
			{src: 'image/14_camisoleW3.png', 				id: 'hem_camisoleW3'},
			{src: 'image/14_tubeB0.png', 				id: 'hem_tubeB0'},
			{src: 'image/14_tubeB1.png', 				id: 'hem_tubeB1'},
			{src: 'image/14_tubeB2.png', 				id: 'hem_tubeB2'},
			{src: 'image/14_tubeB3.png', 				id: 'hem_tubeB3'},
			{src: 'image/14_tubeW0.png', 				id: 'hem_tubeW0'},
			{src: 'image/14_tubeW1.png', 				id: 'hem_tubeW1'},
			{src: 'image/14_tubeW2.png', 				id: 'hem_tubeW2'},
			{src: 'image/14_tubeW3.png', 				id: 'hem_tubeW3'},
			
			{src: 'image/15_blazer0.png', 				id: 'hem_blazer0'},
			{src: 'image/15_blazer1.png', 				id: 'hem_blazer1'},
			{src: 'image/15_blazer2.png', 				id: 'hem_blazer2'},
			{src: 'image/15_blazer3.png', 				id: 'hem_blazer3'},
			{src: 'image/15_blazerOpen0.png', 				id: 'hem_blazerOpen0'},
			{src: 'image/15_blazerOpen1.png', 				id: 'hem_blazerOpen1'},
			{src: 'image/15_blazerOpen2.png', 				id: 'hem_blazerOpen2'},
			{src: 'image/15_blazerOpen3.png', 				id: 'hem_blazerOpen3'},
			{src: 'image/15_trench0.png', 				id: 'hem_trench0'},
			{src: 'image/15_trench1.png', 				id: 'hem_trench1'},
			{src: 'image/15_trench2.png', 				id: 'hem_trench2'},
			{src: 'image/15_trench3.png', 				id: 'hem_trench3'},
			{src: 'image/15_trenchOpen0.png', 				id: 'hem_trenchOpen0'},
			{src: 'image/15_trenchOpen1.png', 				id: 'hem_trenchOpen1'},
			{src: 'image/15_trenchOpen2.png', 				id: 'hem_trenchOpen2'},
			{src: 'image/15_trenchOpen3.png', 				id: 'hem_trenchOpen3'},
			
			{src: 'image/20_breast0.png', 			id: 'breast0'},
			{src: 'image/20_breast1.png', 			id: 'breast1'},
			{src: 'image/20_breast2.png', 			id: 'breast2'},
			{src: 'image/20_breast3.png', 			id: 'breast3'},
			{src: 'image/20_breast4.png', 			id: 'breast4'},
			{src: 'image/20_breast5.png', 			id: 'breast5'},
			{src: 'image/20_breast6.png', 			id: 'breast6'},
			{src: 'image/20_breast7.png', 			id: 'breast7'},
			
			{src: 'image/23_breast1_hl.png', 			id: 'breast1_hl'},
			{src: 'image/23_breast2_hl.png', 			id: 'breast2_hl'},
			{src: 'image/23_breast3_hl.png', 			id: 'breast3_hl'},
			{src: 'image/23_breast4_hl.png', 			id: 'breast4_hl'},
			{src: 'image/23_breast5_hl.png', 			id: 'breast5_hl'},
			{src: 'image/23_breast6_hl.png', 			id: 'breast6_hl'},
			{src: 'image/23_breast7_hl.png', 			id: 'breast7_hl'},

			{src: 'image/24_suit1.png', 			id: 'breast1_suit'},
			{src: 'image/24_suit2.png', 			id: 'breast2_suit'},
			{src: 'image/24_suit3.png', 			id: 'breast3_suit'},
			{src: 'image/24_suit4.png', 			id: 'breast4_suit'},
			{src: 'image/24_suit5.png', 			id: 'breast5_suit'},
			{src: 'image/24_suit6.png', 			id: 'breast6_suit'},
			{src: 'image/24_suit7.png', 			id: 'breast7_suit'},
			
			{src: 'image/24_bodyTights1.png', 			id: 'breast1_bodyTights'},
			{src: 'image/24_bodyTights2.png', 			id: 'breast2_bodyTights'},
			{src: 'image/24_bodyTights3.png', 			id: 'breast3_bodyTights'},
			{src: 'image/24_bodyTights4.png', 			id: 'breast4_bodyTights'},
			{src: 'image/24_bodyTights5.png', 			id: 'breast5_bodyTights'},
			{src: 'image/24_bodyTights6.png', 			id: 'breast6_bodyTights'},
			{src: 'image/24_bodyTights7.png', 			id: 'breast7_bodyTights'},
			
			{src: 'image/26_braB0.png', 			id: 'breast0_braB'},
			{src: 'image/26_braB1.png', 			id: 'breast1_braB'},
			{src: 'image/26_braB2.png', 			id: 'breast2_braB'},
			{src: 'image/26_braB3.png', 			id: 'breast3_braB'},
			{src: 'image/26_braB4.png', 			id: 'breast4_braB'},
			{src: 'image/26_braB5.png', 			id: 'breast5_braB'},
			{src: 'image/26_braB6.png', 			id: 'breast6_braB'},
			{src: 'image/26_braB7.png', 			id: 'breast7_braB'},
			
			{src: 'image/26_braW0.png', 			id: 'breast0_braW'},
			{src: 'image/26_braW1.png', 			id: 'breast1_braW'},
			{src: 'image/26_braW2.png', 			id: 'breast2_braW'},
			{src: 'image/26_braW3.png', 			id: 'breast3_braW'},
			{src: 'image/26_braW4.png', 			id: 'breast4_braW'},
			{src: 'image/26_braW5.png', 			id: 'breast5_braW'},
			{src: 'image/26_braW6.png', 			id: 'breast6_braW'},
			{src: 'image/26_braW7.png', 			id: 'breast7_braW'},
			
			{src: 'image/26_microB0.png', 			id: 'breast0_microB'},
			{src: 'image/26_microB1.png', 			id: 'breast1_microB'},
			{src: 'image/26_microB2.png', 			id: 'breast2_microB'},
			{src: 'image/26_microB3.png', 			id: 'breast3_microB'},
			{src: 'image/26_microB4.png', 			id: 'breast4_microB'},
			{src: 'image/26_microB5.png', 			id: 'breast5_microB'},
			{src: 'image/26_microB6.png', 			id: 'breast6_microB'},
			{src: 'image/26_microB7.png', 			id: 'breast7_microB'},
			
			{src: 'image/26_microW0.png', 			id: 'breast0_microW'},
			{src: 'image/26_microW1.png', 			id: 'breast1_microW'},
			{src: 'image/26_microW2.png', 			id: 'breast2_microW'},
			{src: 'image/26_microW3.png', 			id: 'breast3_microW'},
			{src: 'image/26_microW4.png', 			id: 'breast4_microW'},
			{src: 'image/26_microW5.png', 			id: 'breast5_microW'},
			{src: 'image/26_microW6.png', 			id: 'breast6_microW'},
			{src: 'image/26_microW7.png', 			id: 'breast7_microW'},
			
			{src: 'image/27_sailorW0.png', 			id: 'breast0_sailorW'},
			{src: 'image/27_sailorW1.png', 			id: 'breast1_sailorW'},
			{src: 'image/27_sailorW2.png', 			id: 'breast2_sailorW'},
			{src: 'image/27_sailorW3.png', 			id: 'breast3_sailorW'},
			{src: 'image/27_sailorW4.png', 			id: 'breast4_sailorW'},
			{src: 'image/27_sailorW5.png', 			id: 'breast5_sailorW'},
			{src: 'image/27_sailorW6.png', 			id: 'breast6_sailorW'},
			{src: 'image/27_sailorW7.png', 			id: 'breast7_sailorW'},
			
			{src: 'image/27_sailorB0.png', 			id: 'breast0_sailorB'},
			{src: 'image/27_sailorB1.png', 			id: 'breast1_sailorB'},
			{src: 'image/27_sailorB2.png', 			id: 'breast2_sailorB'},
			{src: 'image/27_sailorB3.png', 			id: 'breast3_sailorB'},
			{src: 'image/27_sailorB4.png', 			id: 'breast4_sailorB'},
			{src: 'image/27_sailorB5.png', 			id: 'breast5_sailorB'},
			{src: 'image/27_sailorB6.png', 			id: 'breast6_sailorB'},
			{src: 'image/27_sailorB7.png', 			id: 'breast7_sailorB'},
			
			{src: 'image/27_shirtW0.png', 			id: 'breast0_shirtW'},
			{src: 'image/27_shirtW1.png', 			id: 'breast1_shirtW'},
			{src: 'image/27_shirtW2.png', 			id: 'breast2_shirtW'},
			{src: 'image/27_shirtW3.png', 			id: 'breast3_shirtW'},
			{src: 'image/27_shirtW4.png', 			id: 'breast4_shirtW'},
			{src: 'image/27_shirtW5.png', 			id: 'breast5_shirtW'},
			{src: 'image/27_shirtW6.png', 			id: 'breast6_shirtW'},
			{src: 'image/27_shirtW7.png', 			id: 'breast7_shirtW'},
			
			{src: 'image/27_shirtOpenW0.png', 			id: 'breast0_shirtOpenW'},
			{src: 'image/27_shirtOpenW1.png', 			id: 'breast1_shirtOpenW'},
			{src: 'image/27_shirtOpenW2.png', 			id: 'breast2_shirtOpenW'},
			{src: 'image/27_shirtOpenW3.png', 			id: 'breast3_shirtOpenW'},
			{src: 'image/27_shirtOpenW4.png', 			id: 'breast4_shirtOpenW'},
			{src: 'image/27_shirtOpenW5.png', 			id: 'breast5_shirtOpenW'},
			{src: 'image/27_shirtOpenW6.png', 			id: 'breast6_shirtOpenW'},
			{src: 'image/27_shirtOpenW7.png', 			id: 'breast7_shirtOpenW'},
			
			{src: 'image/27_camisoleW0.png', 			id: 'breast0_camisoleW'},
			{src: 'image/27_camisoleW1.png', 			id: 'breast1_camisoleW'},
			{src: 'image/27_camisoleW2.png', 			id: 'breast2_camisoleW'},
			{src: 'image/27_camisoleW3.png', 			id: 'breast3_camisoleW'},
			{src: 'image/27_camisoleW4.png', 			id: 'breast4_camisoleW'},
			{src: 'image/27_camisoleW5.png', 			id: 'breast5_camisoleW'},
			{src: 'image/27_camisoleW6.png', 			id: 'breast6_camisoleW'},
			{src: 'image/27_camisoleW7.png', 			id: 'breast7_camisoleW'},
			
			{src: 'image/27_camisoleB0.png', 			id: 'breast0_camisoleB'},
			{src: 'image/27_camisoleB1.png', 			id: 'breast1_camisoleB'},
			{src: 'image/27_camisoleB2.png', 			id: 'breast2_camisoleB'},
			{src: 'image/27_camisoleB3.png', 			id: 'breast3_camisoleB'},
			{src: 'image/27_camisoleB4.png', 			id: 'breast4_camisoleB'},
			{src: 'image/27_camisoleB5.png', 			id: 'breast5_camisoleB'},
			{src: 'image/27_camisoleB6.png', 			id: 'breast6_camisoleB'},
			{src: 'image/27_camisoleB7.png', 			id: 'breast7_camisoleB'},
			
			{src: 'image/27_tubeB0.png', 			id: 'breast0_tubeB'},
			{src: 'image/27_tubeB1.png', 			id: 'breast1_tubeB'},
			{src: 'image/27_tubeB2.png', 			id: 'breast2_tubeB'},
			{src: 'image/27_tubeB3.png', 			id: 'breast3_tubeB'},
			{src: 'image/27_tubeB4.png', 			id: 'breast4_tubeB'},
			{src: 'image/27_tubeB5.png', 			id: 'breast5_tubeB'},
			{src: 'image/27_tubeB6.png', 			id: 'breast6_tubeB'},
			{src: 'image/27_tubeB7.png', 			id: 'breast7_tubeB'},
			
			{src: 'image/27_tubeW0.png', 			id: 'breast0_tubeW'},
			{src: 'image/27_tubeW1.png', 			id: 'breast1_tubeW'},
			{src: 'image/27_tubeW2.png', 			id: 'breast2_tubeW'},
			{src: 'image/27_tubeW3.png', 			id: 'breast3_tubeW'},
			{src: 'image/27_tubeW4.png', 			id: 'breast4_tubeW'},
			{src: 'image/27_tubeW5.png', 			id: 'breast5_tubeW'},
			{src: 'image/27_tubeW6.png', 			id: 'breast6_tubeW'},
			{src: 'image/27_tubeW7.png', 			id: 'breast7_tubeW'},
			
			{src: 'image/29_blazer0.png', 			id: 'breast0_blazer'},
			{src: 'image/29_blazer1.png', 			id: 'breast1_blazer'},
			{src: 'image/29_blazer2.png', 			id: 'breast2_blazer'},
			{src: 'image/29_blazer3.png', 			id: 'breast3_blazer'},
			{src: 'image/29_blazer4.png', 			id: 'breast4_blazer'},
			{src: 'image/29_blazer5.png', 			id: 'breast5_blazer'},
			{src: 'image/29_blazer6.png', 			id: 'breast6_blazer'},
			{src: 'image/29_blazer7.png', 			id: 'breast7_blazer'},
			
			{src: 'image/29_blazerOpen0.png', 			id: 'breast0_blazerOpen'},
			{src: 'image/29_blazerOpen1.png', 			id: 'breast1_blazerOpen'},
			{src: 'image/29_blazerOpen2.png', 			id: 'breast2_blazerOpen'},
			{src: 'image/29_blazerOpen3.png', 			id: 'breast3_blazerOpen'},
			{src: 'image/29_blazerOpen4.png', 			id: 'breast4_blazerOpen'},
			{src: 'image/29_blazerOpen5.png', 			id: 'breast5_blazerOpen'},
			{src: 'image/29_blazerOpen6.png', 			id: 'breast6_blazerOpen'},
			{src: 'image/29_blazerOpen7.png', 			id: 'breast7_blazerOpen'},
			
			{src: 'image/29_trench0.png', 			id: 'breast0_trench'},
			{src: 'image/29_trench1.png', 			id: 'breast1_trench'},
			{src: 'image/29_trench2.png', 			id: 'breast2_trench'},
			{src: 'image/29_trench3.png', 			id: 'breast3_trench'},
			{src: 'image/29_trench4.png', 			id: 'breast4_trench'},
			{src: 'image/29_trench5.png', 			id: 'breast5_trench'},
			{src: 'image/29_trench6.png', 			id: 'breast6_trench'},
			{src: 'image/29_trench7.png', 			id: 'breast7_trench'},
			
			{src: 'image/29_trenchOpen0.png', 			id: 'breast0_trenchOpen'},
			{src: 'image/29_trenchOpen1.png', 			id: 'breast1_trenchOpen'},
			{src: 'image/29_trenchOpen2.png', 			id: 'breast2_trenchOpen'},
			{src: 'image/29_trenchOpen3.png', 			id: 'breast3_trenchOpen'},
			{src: 'image/29_trenchOpen4.png', 			id: 'breast4_trenchOpen'},
			{src: 'image/29_trenchOpen5.png', 			id: 'breast5_trenchOpen'},
			{src: 'image/29_trenchOpen6.png', 			id: 'breast6_trenchOpen'},
			{src: 'image/29_trenchOpen7.png', 			id: 'breast7_trenchOpen'},
			
			{src: 'image/30_hairshadow_pattun0.png', 	id: 'hairshadow_pattun0'},
			{src: 'image/30_hairshadow_pattun1.png', 	id: 'hairshadow_pattun1'},
			{src: 'image/30_hairshadow_pattun2.png', 	id: 'hairshadow_pattun2'},
			{src: 'image/30_hairshadow_jagi0.png', 	id: 'hairshadow_jagi0'},
			{src: 'image/30_hairshadow_jagi1.png', 	id: 'hairshadow_jagi1'},
			{src: 'image/30_hairshadow_jagi2.png', 	id: 'hairshadow_jagi2'},
			{src: 'image/30_hairshadow_mof0.png', 	id: 'hairshadow_mof0'},
			{src: 'image/30_hairshadow_mof1.png', 	id: 'hairshadow_mof1'},
			{src: 'image/30_hairshadow_mof2.png', 	id: 'hairshadow_mof2'},
			{src: 'image/30_hairshadow_naname.png', 	id: 'hairshadow_naname'},
			{src: 'image/30_hairshadow_center.png', 	id: 'hairshadow_center'},
			{src: 'image/31_cheek.png', 	id: 'cheek'},
			{src: 'image/32_mouth_normal.png', 		id: 'normal'},
			{src: 'image/32_mouth_smile0.png', 		id: 'smile0'},
			{src: 'image/32_mouth_smile1.png', 		id: 'smile1'},
			{src: 'image/32_mouth_smile2.png', 		id: 'smile2'},
			{src: 'image/32_mouth_smile3.png', 		id: 'smile3'},
			{src: 'image/32_mouth_open0.png', 		id: 'open0'},
			{src: 'image/32_mouth_open1.png', 		id: 'open1'},
			
			{src: 'image/40_eye.png', 			id: 'eye'},
			{src: 'image/40_eye0.png', 			id: 'eye0'},
			{src: 'image/40_eye0.png', 			id: 'eye1'},
			{src: 'image/40_eye2.png', 			id: 'eye2'},
			{src: 'image/40_eye3.png', 			id: 'eye3'},
			{src: 'image/40_eye3.png', 			id: 'eye4'},
			{src: 'image/41_pupil0.png', 			id: 'pupil0'},
			{src: 'image/41_pupil1.png', 			id: 'pupil1'},
			{src: 'image/41_pupil2.png', 			id: 'pupil2'},
			{src: 'image/42_heart.png', 			id: 'heart'},
			{src: 'image/42_star.png', 			id: 'star'},
			{src: 'image/42_kira.png', 			id: 'kira'},
			{src: 'image/43_pupil_hl0.png', 			id: 'pupil_hl0'},
			{src: 'image/43_pupil_hl1.png', 			id: 'pupil_hl1'},
			{src: 'image/43_pupil_hl2.png', 			id: 'pupil_hl2'},
			{src: 'image/43_pupil_hl3.png', 			id: 'pupil_hl3'},
			{src: 'image/44_eyelashes0.png', 	id: 'eyelashes0'},
			{src: 'image/44_eyelashes1.png', 	id: 'eyelashes1'},
			{src: 'image/44_eyelashes2.png', 	id: 'eyelashes2'},
			{src: 'image/44_eyelashes3.png', 	id: 'eyelashes3'},
			{src: 'image/44_eyelashes4.png', 	id: 'eyelashes4'},
			{src: 'image/45_eyebrow0_0.png', 		id: 'eyebrow0_0'},
			{src: 'image/45_eyebrow0_1.png', 		id: 'eyebrow0_1'},
			{src: 'image/45_eyebrow0_2.png', 		id: 'eyebrow0_2'},
			{src: 'image/45_eyebrow0_3.png', 		id: 'eyebrow0_3'},
			{src: 'image/45_eyebrow1_0.png', 		id: 'eyebrow1_0'},
			{src: 'image/45_eyebrow1_1.png', 		id: 'eyebrow1_1'},
			{src: 'image/45_eyebrow1_2.png', 		id: 'eyebrow1_2'},
			{src: 'image/45_eyebrow1_3.png', 		id: 'eyebrow1_3'},
			{src: 'image/45_eyebrow2_0.png', 		id: 'eyebrow2_0'},
			{src: 'image/45_eyebrow2_1.png', 		id: 'eyebrow2_1'},
			{src: 'image/45_eyebrow2_2.png', 		id: 'eyebrow2_2'},
			{src: 'image/45_eyebrow2_3.png', 		id: 'eyebrow2_3'},
			
			{src: 'image/46_squareR.png', 		id: 'glasses_squareR'},
			{src: 'image/46_squareB.png', 		id: 'glasses_squareB'},
			{src: 'image/46_squareW.png', 		id: 'glasses_squareW'},
			{src: 'image/46_wellingtonR.png', 		id: 'glasses_wellingtonR'},
			{src: 'image/46_wellingtonB.png', 		id: 'glasses_wellingtonB'},
			{src: 'image/46_wellingtonW.png', 		id: 'glasses_wellingtonW'},
			{src: 'image/46_underrimR.png', 		id: 'glasses_underrimR'},
			{src: 'image/46_underrimB.png', 		id: 'glasses_underrimB'},
			{src: 'image/46_underrimW.png', 		id: 'glasses_underrimW'},
			{src: 'image/46_roundR.png', 		id: 'glasses_roundR'},
			{src: 'image/46_roundB.png', 		id: 'glasses_roundB'},
			{src: 'image/46_roundW.png', 		id: 'glasses_roundW'},
			{src: 'image/46_visorR.png', 		id: 'glasses_visorR'},
			{src: 'image/46_visorB.png', 		id: 'glasses_visorB'},
			{src: 'image/46_visorW.png', 		id: 'glasses_visorW'},
			
			{src: 'image/47_ear_mecha.png', 	id: 'ear_mecha'},
			{src: 'image/47_ear_normal.png', 		id: 'ear_normal'},
			{src: 'image/47_ear_antenna.png', 		id: 'ear_antenna'},
			{src: 'image/47_ear_elf.png', 		id: 'ear_elf'},
			
			{src: 'image/48_ribbonK_g.png', 	id: 'back_ribbonK_g'},
			{src: 'image/48_ribbonB_g.png', 	id: 'back_ribbonB_g'},
			{src: 'image/48_ribbonBu_g.png', 	id: 'back_ribbonBu_g'},
			{src: 'image/48_ribbonR_g.png', 	id: 'back_ribbonR_g'},
			{src: 'image/48_ribbonW_g.png', 	id: 'back_ribbonW_g'},
			{src: 'image/48_ribbonK_p.png', 	id: 'back_ribbonK_p'},
			{src: 'image/48_ribbonB_p.png', 	id: 'back_ribbonB_p'},
			{src: 'image/48_ribbonBu_p.png', 	id: 'back_ribbonBu_p'},
			{src: 'image/48_ribbonR_p.png', 	id: 'back_ribbonR_p'},
			{src: 'image/48_ribbonW_p.png', 	id: 'back_ribbonW_p'},
			{src: 'image/48_ribbonK_t.png', 	id: 'back_ribbonK_t'},
			{src: 'image/48_ribbonB_t.png', 	id: 'back_ribbonB_t'},
			{src: 'image/48_ribbonBu_t.png', 	id: 'back_ribbonBu_t'},
			{src: 'image/48_ribbonR_t.png', 	id: 'back_ribbonR_t'},
			{src: 'image/48_ribbonW_t.png', 	id: 'back_ribbonW_t'},
			
			{src: 'image/49_catEar.png', 	id: 'kemoearin_cat'},
			{src: 'image/50_catEar.png', 	id: 'kemoear_cat'},
			{src: 'image/50_foxEar.png', 	id: 'kemoear_fox'},
			
			{src: 'image/51_collarB.png', 	id: 'collarB'},
			{src: 'image/51_collarW.png', 	id: 'collarW'},
			{src: 'image/51_collarR.png', 	id: 'collarR'},
			{src: 'image/51_mufflerB.png', 	id: 'mufflerB'},
			{src: 'image/51_mufflerW.png', 	id: 'mufflerW'},
			{src: 'image/51_mufflerR.png', 	id: 'mufflerR'},
			{src: 'image/51_chokerB.png', 	id: 'chokerB'},
			{src: 'image/51_chokerW.png', 	id: 'chokerW'},
			{src: 'image/51_chokerR.png', 	id: 'chokerR'},
			{src: 'image/51_necklaceB.png', 	id: 'necklaceB'},
			{src: 'image/51_necklaceW.png', 	id: 'necklaceW'},
			{src: 'image/51_necklaceR.png', 	id: 'necklaceR'},
			
			{src: 'image/52_pattun0.png', 	id: 'pattun0'},
			{src: 'image/52_pattun1.png', 		id: 'pattun1'},
			{src: 'image/52_pattun2.png', 		id: 'pattun2'},
			{src: 'image/52_jagi0.png', 		id: 'jagi0'},
			{src: 'image/52_jagi1.png', 		id: 'jagi1'},
			{src: 'image/52_jagi2.png', 		id: 'jagi2'},
			{src: 'image/52_mof0.png', 		id: 'mof0'},
			{src: 'image/52_mof1.png', 		id: 'mof1'},
			{src: 'image/52_mof2.png', 		id: 'mof2'},
			{src: 'image/52_naname.png', 		id: 'naname'},
			{src: 'image/52_center.png', 		id: 'center'},
			{src: 'image/53_general_hl.png', 		id: 'pattun0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'pattun1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'pattun2_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi2_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof2_hl'},
			{src: 'image/53_naname_hl.png', 		id: 'naname_hl'},
			{src: 'image/53_center_hl.png', 		id: 'center_hl'},
			
			{src: 'image/54_side0.png', 		id: 'side0'},
			{src: 'image/54_side1.png', 		id: 'side1'},
			{src: 'image/54_side2.png', 		id: 'side2'},
			{src: 'image/54_wave0.png', 		id: 'wave0'},
			{src: 'image/54_wave2.png', 		id: 'wave2'},
			{src: 'image/54_mof0.png', 		id: 'moff0'},
			{src: 'image/54_mof2.png', 		id: 'moff2'},
			{src: 'image/55_general_hl.png', 		id: 'side0_hl'},
			{src: 'image/55_general_hl.png', 		id: 'side1_hl'},
			{src: 'image/55_general_hl.png', 		id: 'side2_hl'},
			{src: 'image/55_general_hl.png', 		id: 'wave0_hl'},
			{src: 'image/55_general_hl.png', 		id: 'wave2_hl'},
			{src: 'image/55_general_hl.png.png', 		id: 'moff0_hl'},
			{src: 'image/55_general_hl.png.png', 		id: 'moff2_hl'},
			
			{src: 'image/56_headphone.png', 		id: 'earmuff_headphone'},
			{src: 'image/57_hairbandB.png', 		id: 'hairbandB'},
			{src: 'image/57_hairbandW.png', 		id: 'hairbandW'},
			{src: 'image/57_hairbandK.png', 		id: 'hairbandK'},
			{src: 'image/57_hairbandR.png', 		id: 'hairbandR'},
			{src: 'image/57_hairbandBu.png', 		id: 'hairbandBu'},
			{src: 'image/57_casquetteB.png', 		id: 'casquetteB'},
			{src: 'image/57_casquetteW.png', 		id: 'casquetteW'},
			{src: 'image/57_casquetteK.png', 		id: 'casquetteK'},
			{src: 'image/57_casquetteR.png', 		id: 'casquetteR'},
			{src: 'image/57_casquetteBu.png', 		id: 'casquetteBu'},
			{src: 'image/57_knitcapB.png', 		id: 'knitcapB'},
			{src: 'image/57_knitcapW.png', 		id: 'knitcapW'},
			{src: 'image/57_knitcapK.png', 		id: 'knitcapK'},
			{src: 'image/57_knitcapR.png', 		id: 'knitcapR'},
			{src: 'image/57_knitcapBu.png', 		id: 'knitcapBu'},
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
			hairhl:'',
			hairColor:[0,0,0], 
			cheek:'',
			pupil:'0', 
			pupilOption:'',
			pupilHl:'0',
			eyeColor:[0,0,0], 
			eyelashes:'0', 
			eyebrow:'0',
			eyebrowEx:'0',
			eyebrowDark:false,
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
			bra:'',
			braColor:'',
			bottom:'',
			bottomLength:'1',
			top:'',
			sleeve:'1',
			hem:'1',
			glasses:'',
			glassesColor:'',
			head:'',
			headsColor:'',
			headsType:'',
			cap:'',
			neck:'',
			neckColor:'',
			glove:'',
			gloveColor:'',
			socks:'',
			socksColor:'',
			
		};
};


Custom.prototype.formLoad = function (){
	this.data.front = document.forms.customForm.frontHair.value;
	this.data.side = document.forms.customForm.sideHair.value;
	this.data.back = document.forms.customForm.backHair.value;
	this.data.hairhl = document.forms.customForm.hairhl.checked ? this.data.hairhl = '_hl' : this.data.hairhl = '_';
	
	this.data.hairColor[0] = document.forms.customForm.hairColorR.value / 128;
	this.data.hairColor[1] = document.forms.customForm.hairColorG.value / 128;
	this.data.hairColor[2] = document.forms.customForm.hairColorB.value / 128;
	
	this.data.cheek = document.forms.customForm.cheek.checked ? this.data.cheek = 'cheek' : this.data.cheek = '';
	this.data.eyelashes = String(document.forms.customForm.eye.value);
	this.data.pupil = String(document.forms.customForm.pupil.value);
	this.data.pupilOption = document.forms.customForm.pupilOption.value;
	this.data.pupilHl = String(document.forms.customForm.pupilHl.value);
	this.data.eyeColor[0] = document.forms.customForm.eyeColorR.value / 128;
	this.data.eyeColor[1] = document.forms.customForm.eyeColorG.value / 128;
	this.data.eyeColor[2] = document.forms.customForm.eyeColorB.value / 128;
	this.data.mouth = document.forms.customForm.mouth.value;
	this.data.eyebrow = String(document.forms.customForm.eyeBrow.value);
	this.data.eyebrowEx = String(document.forms.customForm.eyeBrowEx.value);
	this.data.eyebrowDark = document.forms.customForm.eyebrowDark.checked;
	
	this.data.breast = String(document.forms.customForm.breast.value);
	this.skinColor(document.forms.customForm.skin.value);
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
	
	this.data.head = document.forms.customForm.head.value;
	this.data.headColor = document.forms.customForm.headColor.value;
	this.data.neck = document.forms.customForm.neck.value;
	this.data.neckColor = document.forms.customForm.neckColor.value;
	this.data.glasses = document.forms.customForm.glasses.value;
	this.data.glassesColor = document.forms.customForm.glassesColor.value;
	this.data.glove = document.forms.customForm.glove.value;
	this.data.gloveColor = document.forms.customForm.gloveColor.value;
	this.data.socks = document.forms.customForm.socks.value;
	this.data.socksColor = document.forms.customForm.socksColor.value;
	
	this.preload.addEventListener("progress",  function(event){
	  	custom.progress = Math.floor(event.progress * 100);
	  	custom.progressText.text = 'Loading... ' + String(custom.progress) + '%';
	});
	
	this.preload.addEventListener("complete",function(event){
		var array = [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,20,22,23,24,25,26,27,28,29,30,31,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
		for(var i = 0; i < array.length; i++){
			custom.layer[array[i]] = new createjs.Bitmap();
		}
		custom.layer[3].image = custom.images['base'];
		custom.layer[4].image = custom.images['base_hl'];
		
		custom.layer[1].compositeOperation ='lighter';
		custom.layer[4].compositeOperation ='lighter';
		custom.layer[23].compositeOperation ='lighter';
		custom.layer[42].compositeOperation ='lighter';
		custom.layer[43].compositeOperation ='lighter';
		custom.layer[53].compositeOperation ='lighter';
		custom.layer[55].compositeOperation ='lighter';
		for(var i=0; i<custom.layer.length; i++){
			if(custom.layer[i]){
				custom.stage.addChild(custom.layer[i]);
			};
		}
		
		custom.update()
		custom.stage.removeChild(custom.progressText);
	});

};



Custom.prototype.update = function (){
	this.cap();
	this.ribbon();
	this.longCoat();
	
	this.layer[0].image = this.images[this.data.back + this.data.cap];
	this.layer[1].image = this.images[this.data.back + this.data.cap + this.data.hairhl];
	this.layer[2].image = this.images['back_' + this.data.outer];
	
	this.layer[7].image = this.images[this.data.inner];
	this.layer[8].image = this.images[this.data.glove + this.data.gloveColor];
	this.layer[9].image = this.images['sleeve_' + this.data.top + this.data.sleeve];
	this.layer[10].image = this.images['sleeve_' + this.data.outer + this.data.outerSleeve];
	
	this.layer[11].image = this.images[this.data.pants + this.data.pantsColor];
	this.layer[12].image = this.images[this.data.socks + this.data.socksColor];
	this.layer[13].image = this.images[this.data.bottom + this.data.bottomLength];
	this.layer[14].image = this.images['hem_' +this.data.top + this.data.hem];
	this.layer[15].image = this.images['hem_' + this.data.outer + this.data.outerHem];
	
	this.layer[20].image = this.images['breast' + this.data.breast];
	this.layer[23].image = this.images['breast' + this.data.breast + '_hl'];
	this.layer[24].image = this.images['breast' + this.data.breast + '_' + this.data.inner];
	this.layer[26].image = this.images['breast' + this.data.breast + '_' + this.data.bra + this.data.braColor];
	this.layer[27].image = this.images['breast' + this.data.breast + '_' + this.data.top];
	this.layer[28].image = this.images['breast' + this.data.breast + '_' + this.data.outer];
	
	this.layer[30].image = this.images['hairshadow_' + this.data.front];
	this.layer[31].image = this.images[this.data.cheek];
	this.layer[32].image = this.images[this.data.mouth];
	
	this.layer[40].image = this.images['eye' + this.data.eyelashes];
	this.layer[41].image = this.images['pupil' + this.data.pupil];
	this.layer[42].image = this.images[this.data.pupilOption];
	this.layer[43].image = this.images['pupil_hl' + this.data.pupilHl];
	this.layer[44].image = this.images['eyelashes' + this.data.eyelashes];
	this.layer[45].image = this.images['eyebrow' + this.data.eyebrow + '_' + this.data.eyebrowEx];
	
	this.layer[46].image = this.images['glasses_' + this.data.glasses + this.data.glassesColor];
	this.layer[47].image = this.images['ear_' + this.data.ear];
	this.layer[48].image = this.images['back_' + this.data.head + this.data.headColor + this.data.headType];
	this.layer[49].image = this.images['kemoearin_' + this.data.ear];
	this.layer[50].image = this.images['kemoear_' + this.data.ear];
	this.layer[51].image = this.images[this.data.neck + this.data.neckColor];
	
	this.layer[52].image = this.images[this.data.front];
	this.layer[53].image = this.images[this.data.front + this.data.hairhl];
	this.layer[54].image = this.images[this.data.side];
	this.layer[55].image = this.images[this.data.side + this.data.hairhl];
	this.layer[56].image = this.images['earmuff_' + this.data.ear];
	this.layer[57].image = this.images[this.data.head + this.data.headColor];
	
	this.changeEyeColor();
	this.changeHairColor();
	this.changeSkinColor();
};

Custom.prototype.cap = function(){
	this.data.cap = '';
	switch(this.data.head){
	case 'casquette':
		if(this.data.back === 'pony'){
			this.data.cap = 'C'
		}
		break;
	case 'knitcap':
		if(this.data.back === 'pony' || this.data.back === 'twin' || this.data.back === 'twoside'){
			this.data.cap = 'C'
		}
		break;
	}
};

Custom.prototype.ribbon = function(){
	this.data.headType = '_g'
	if(this.data.head === 'ribbon'){
		switch(this.data.back){
		case 'pony':
			this.data.headType = '_p'
			break;
		case 'twin':
		case 'twoside':
			this.data.headType = '_t'
			break;
		}
	}
};

Custom.prototype.longCoat = function(){
	this.data.bottom = document.forms.customForm.bottom.value;
	if(this.data.outer === 'trench' && this.data.outerHem === '3'){
		this.data.bottom = '';
	}
};


Custom.prototype.changeHairColor = function(){
	var array = [0, 44, 45, 50, 52, 54]; //後ろ髪、睫毛、眉毛、ケモ耳、バング、サイド
	for(var i = 0; i < array.length; i++){
		this.layer[array[i]].filters = [new createjs.ColorFilter(this.data.hairColor[0], this.data.hairColor[1], this.data.hairColor[2], 1)];
		if((array[i] === 44 || array[i] === 45) && this.data.eyebrowDark){
			this.layer[array[i]].filters = [new createjs.ColorFilter(this.data.hairColor[0] - 0.5, this.data.hairColor[1] - 0.5, this.data.hairColor[2] - 0.5, 1)];
		}
		this.layer[array[i]].cache(0,0,this.width,this.height);
	};
};

Custom.prototype.changeEyeColor = function(){
	this.layer[41].filters = [new createjs.ColorFilter(this.data.eyeColor[0], this.data.eyeColor[1], this.data.eyeColor[2], 1)];
	this.layer[41].cache(0,0,this.width,this.height);
};

Custom.prototype.skinColor = function(value){
	switch (Number(value)){
	case 0:
		this.data.skinColor = [0.5, 0.3, 0.2];
		break;
	case 1:
		this.data.skinColor = [0.7, 0.5, 0.4];
		break;
	case 2:
		this.data.skinColor = [0.8, 0.6, 0.5];
		break;
	case 3:
		this.data.skinColor = [0.9, 0.75, 0.65];
		break;
	case 4:
		this.data.skinColor = [1.0, 0.9, 0.8];
		break;
	case 5:
		this.data.skinColor = [1.0, 1.0, 1.0];
		break;
	}
}

Custom.prototype.changeSkinColor = function(){
	var array = [3, 20, 30, 47]; //素体、乳、髪影、耳
	for(var i = 0; i < array.length; i++){
		if(array[i] === 47 && (this.data.ear === 'mecha' || this.data.ear === 'antenna')){ 
			this.layer[array[i]].filters = null;
			this.layer[array[i]].cache(0,0,this.width,this.height);
			continue; 
		}
		this.layer[array[i]].filters = [new createjs.ColorFilter(this.data.skinColor[0], this.data.skinColor[1], this.data.skinColor[2], 1)];
		this.layer[array[i]].cache(0,0,this.width,this.height);
	};
};

Custom.prototype.save = function(){
	this.canvas.toBlob(function ( blob ) {
            saveAs( blob, 'custom');
        },"image/png"
    );
};

Custom.prototype.select = function(value, name){
	name = value;
	this.update();
};

Custom.prototype.color = function(value, type, name){
	name = value;
	this.update();
};

Custom.prototype.backHair = function(value){
	this.data.back = value;
	this.update();
};

Custom.prototype.frontHair = function(value){
	this.data.front  = value;
	this.update();
};

Custom.prototype.sideHair = function(value){
	this.data.side  = value;
	this.update();
};

Custom.prototype.hairColor = function(color, type){
	this.data.hairColor[type]  = color / 128;
	this.update();
};

Custom.prototype.hairhl = function(checked){
	checked ? this.data.hairhl = '_hl' : this.data.hairhl = '_';
	this.update();
};

Custom.prototype.eye = function(value){
	this.data.eyelashes = String(value);
	this.update();
};

Custom.prototype.pupil = function(value){
	this.data.pupil = String(value);
	this.update();
};

Custom.prototype.pupilOption = function(value){
	this.data.pupilOption = String(value);
	this.update();
};

Custom.prototype.pupilHl = function(value){
	this.data.pupilHl = String(value);
	this.update();
};

Custom.prototype.eyeColor = function(color, type){
	this.data.eyeColor[type]  = color / 128;
	this.update();
};

Custom.prototype.eyebrow = function(value){
	this.data.eyebrow = String(value);
	this.update();
};

Custom.prototype.eyebrowEx = function(value){
	this.data.eyebrowEx = String(value);
	this.update();
};

Custom.prototype.eyebrowDark = function(checked){
	this.data.eyebrowDark = checked;
	this.update();
};

Custom.prototype.cheek = function(checked){
	checked ? this.data.cheek = 'cheek' : this.data.cheek = '';
	this.update();
};

Custom.prototype.mouth = function(value){
	this.data.mouth = value;
	this.update();
};

Custom.prototype.breast = function(value){
	this.data.breast = String(value);
	this.update();
};

Custom.prototype.skin = function(value){
	this.skinColor(value);
	this.update();
};

Custom.prototype.ear = function(value){
	this.data.ear = value;
	this.update();
};

Custom.prototype.outer = function(value){
	this.data.outer = value;
	this.update();
};

Custom.prototype.outerSleeve = function(value){
	this.data.outerSleeve = value;
	this.update();
};

Custom.prototype.outerHem = function(value){
	this.data.outerHem = value;
	this.update();
};

Custom.prototype.top = function(value){
	this.data.top = value;
	this.update();
};

Custom.prototype.topSleeve = function(value){
	this.data.sleeve = value;
	this.update();
};

Custom.prototype.topHem = function(value){
	this.data.hem = value;
	this.update();
};

Custom.prototype.bottom = function(value){
	this.data.bottom = value;
	this.update();
};

Custom.prototype.bottomLength = function(value){
	this.data.bottomLength = value;
	this.update();
};

Custom.prototype.inner = function(value){
	this.data.inner = value;
	this.update();
};

Custom.prototype.under = function(value){
	this.data.under = value;
	this.update();
};

Custom.prototype.pants = function(value){
	this.data.pants = value;
	this.update();
};

Custom.prototype.pantsColor = function(value){
	this.data.pantsColor = value;
	this.update();
};

Custom.prototype.bra = function(value){
	this.data.bra = value;
	this.update();
};

Custom.prototype.braColor = function(value){
	this.data.braColor = value;
	this.update();
};

Custom.prototype.head = function(value){
	this.data.head = value;
	this.update();
};

Custom.prototype.headColor = function(value){
	this.data.headColor = value;
	this.update();
};

Custom.prototype.neck = function(value){
	this.data.neck = value;
	this.update();
};

Custom.prototype.neckColor = function(value){
	this.data.neckColor = value;
	this.update();
};

Custom.prototype.glasses = function(value){
	this.data.glasses = value;
	this.update();
};

Custom.prototype.glassesColor = function(value){
	this.data.glassesColor = value;
	this.update();
};


Custom.prototype.glove = function(value){
	this.data.glove = value;
	this.update();
};

Custom.prototype.gloveColor = function(value){
	this.data.gloveColor = value;
	this.update();
};

Custom.prototype.socks = function(value){
	this.data.socks = value;
	this.update();
};

Custom.prototype.socksColor = function(value){
	this.data.socksColor = value;
	this.update();
};

var custom = new Custom();

createjs.Ticker.setFPS(10);
createjs.Ticker.addEventListener("tick", function() {
    custom.stage.update();
});
