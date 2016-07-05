
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
			{src: 'image/00_soto.png', 		id: 'soto'},
			{src: 'image/00_wave.png', 		id: 'wave'},
			{src: 'image/00_sidetail.png', 		id: 'sidetail'},
			{src: 'image/00_pig.png', 		id: 'pig'},
			{src: 'image/00_ippon.png', 		id: 'ippon'},
			{src: 'image/00_lowtwin.png', 		id: 'lowtwin'},
			{src: 'image/00_ponyC.png', 		id: 'ponyC'},
			{src: 'image/00_twinC.png', 		id: 'twinC'},
			{src: 'image/00_sidetailC.png', 		id: 'sidetailC'},
			{src: 'image/00_pigC.png', 		id: 'pigC'},
			{src: 'image/00_twosideC.png', 		id: 'twosideC'},
			{src: 'image/01_twin_hl.png', 		id: 'twin_hl'},
			{src: 'image/01_twoside_hl.png', 		id: 'twoside_hl'},
			{src: 'image/01_pony_hl.png', 		id: 'pony_hl'},
			{src: 'image/01_pig_hl.png', 		id: 'pig_hl'},
			{src: 'image/01_sidetail_hl.png', 		id: 'sidetail_hl'},
			
			{src: 'image/02_blazer.png', 				id: 'back_blazer'},
			{src: 'image/02_blazer.png', 				id: 'back_blazerOpen'},
			
			{src: 'image/02_cape0.png', 				id: 'back_cape0'},
			{src: 'image/02_cape1.png', 				id: 'back_cape1'},
			{src: 'image/02_cape2.png', 				id: 'back_cape2'},
			{src: 'image/02_cape3.png', 				id: 'back_cape3'},
			{src: 'image/02_capeR0.png', 				id: 'back_capeR0'},
			{src: 'image/02_capeR1.png', 				id: 'back_capeR1'},
			{src: 'image/02_capeR2.png', 				id: 'back_capeR2'},
			{src: 'image/02_capeR3.png', 				id: 'back_capeR3'},
			
			{src: 'image/03_fishtailR3.png', 				id: 'back_fishtailR-1'},
			{src: 'image/03_fishtailR3.png', 				id: 'back_fishtailR0'},
			{src: 'image/03_fishtailR3.png', 				id: 'back_fishtailR1'},
			{src: 'image/03_fishtailR3.png', 				id: 'back_fishtailR2'},
			{src: 'image/03_fishtailR3.png', 				id: 'back_fishtailR3'},
			{src: 'image/03_fishtailB3.png', 				id: 'back_fishtailB-1'},
			{src: 'image/03_fishtailB3.png', 				id: 'back_fishtailB0'},
			{src: 'image/03_fishtailB3.png', 				id: 'back_fishtailB1'},
			{src: 'image/03_fishtailB3.png', 				id: 'back_fishtailB2'},
			{src: 'image/03_fishtailB3.png', 				id: 'back_fishtailB3'},
			{src: 'image/03_fishtailBu3.png', 				id: 'back_fishtailBu-1'},
			{src: 'image/03_fishtailBu3.png', 				id: 'back_fishtailBu0'},
			{src: 'image/03_fishtailBu3.png', 				id: 'back_fishtailBu1'},
			{src: 'image/03_fishtailBu3.png', 				id: 'back_fishtailBu2'},
			{src: 'image/03_fishtailBu3.png', 				id: 'back_fishtailBu3'},
			
			{src: 'image/04_base.png', 				id: 'base'},
			{src: 'image/05_base_hl.png', 				id: 'base_hl'},
			
			{src: 'image/07_suit.png', 				id: 'suit'},
			{src: 'image/07_bodyTights.png', 				id: 'bodyTights'},
			{src: 'image/07_suitT.png', 				id: 'suitT'},
			{src: 'image/07_bodyTightsT.png', 				id: 'bodyTightsT'},
			
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
			{src: 'image/09_shirtB1.png', 				id: 'sleeve_shirtB1'},
			{src: 'image/09_shirtB2.png', 				id: 'sleeve_shirtB2'},
			{src: 'image/09_shirtB3.png', 				id: 'sleeve_shirtB3'},
			{src: 'image/09_shirtB1.png', 				id: 'sleeve_shirtOpenB1'},
			{src: 'image/09_shirtB2.png', 				id: 'sleeve_shirtOpenB2'},
			{src: 'image/09_shirtB3.png', 				id: 'sleeve_shirtOpenB3'},
			{src: 'image/09_maid1.png', 				id: 'sleeve_maid1'},
			{src: 'image/09_maid2.png', 				id: 'sleeve_maid2'},
			{src: 'image/09_maid3.png', 				id: 'sleeve_maid3'},
			{src: 'image/09_maid1_O.png', 				id: 'sleeve_maid1_O'},
			{src: 'image/09_maid2_O.png', 				id: 'sleeve_maid2_O'},
			{src: 'image/09_maid3_O.png', 				id: 'sleeve_maid3_O'},
			{src: 'image/09_maid1.png', 				id: 'sleeve_maidEro1'},
			{src: 'image/09_maid2.png', 				id: 'sleeve_maidEro2'},
			{src: 'image/09_maid3.png', 				id: 'sleeve_maidEro3'},
			{src: 'image/09_maid1_O.png', 				id: 'sleeve_maidEro1_O'},
			{src: 'image/09_maid2_O.png', 				id: 'sleeve_maidEro2_O'},
			{src: 'image/09_maid3_O.png', 				id: 'sleeve_maidEro3_O'},
			{src: 'image/09_kimonoR1.png', 				id: 'sleeve_kimonoR1'},
			{src: 'image/09_kimonoR2.png', 				id: 'sleeve_kimonoR2'},
			{src: 'image/09_kimonoR3.png', 				id: 'sleeve_kimonoR3'},
			{src: 'image/09_kimonoB1.png', 				id: 'sleeve_kimonoB1'},
			{src: 'image/09_kimonoB2.png', 				id: 'sleeve_kimonoB2'},
			{src: 'image/09_kimonoB3.png', 				id: 'sleeve_kimonoB3'},
			{src: 'image/09_kimonoW1.png', 				id: 'sleeve_kimonoW1'},
			{src: 'image/09_kimonoW2.png', 				id: 'sleeve_kimonoW2'},
			{src: 'image/09_kimonoW3.png', 				id: 'sleeve_kimonoW3'},
			{src: 'image/09_miko1.png', 				id: 'sleeve_miko1'},
			{src: 'image/09_miko2.png', 				id: 'sleeve_miko2'},
			{src: 'image/09_miko3.png', 				id: 'sleeve_miko3'},
			
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
			{src: 'image/11_highmicroB.png', 					id: 'high2B'},
			{src: 'image/11_highmicroW.png', 					id: 'high2W'},
			{src: 'image/11_pantsB.png', 				id: 'pantsB'},
			{src: 'image/11_pantsW.png', 				id: 'pantsW'},
			{src: 'image/11_microB.png', 				id: 'microB'},
			{src: 'image/11_microW.png', 				id: 'microW'},
			{src: 'image/11_spatsB.png', 				id: 'spatsB'},
			{src: 'image/11_spatsW.png', 				id: 'spatsW'},
			{src: 'image/11_spatsthickB.png', 				id: 'spats2B'},
			{src: 'image/11_spatsthickW.png', 				id: 'spats2W'},
			
			//ソックス
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
			
			{src: 'image/13_fishtailR-1.png', 				id: 'fishtailR-1'},
			{src: 'image/13_fishtailR0.png', 				id: 'fishtailR0'},
			{src: 'image/13_fishtailR1.png', 				id: 'fishtailR1'},
			{src: 'image/13_fishtailR2.png', 				id: 'fishtailR2'},
			{src: 'image/13_fishtailR3.png', 				id: 'fishtailR3'},
			{src: 'image/13_fishtailB0.png', 				id: 'fishtailB0'},
			{src: 'image/13_fishtailB1.png', 				id: 'fishtailB1'},
			{src: 'image/13_fishtailB2.png', 				id: 'fishtailB2'},
			{src: 'image/13_fishtailB3.png', 				id: 'fishtailB3'},
			{src: 'image/13_fishtailBu-1.png', 				id: 'fishtailBu-1'},
			{src: 'image/13_fishtailBu0.png', 				id: 'fishtailBu0'},
			{src: 'image/13_fishtailBu1.png', 				id: 'fishtailBu1'},
			{src: 'image/13_fishtailBu2.png', 				id: 'fishtailBu2'},
			{src: 'image/13_fishtailBu3.png', 				id: 'fishtailBu3'},
			
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
			{src: 'image/13_stretchB-1.png', 				id: 'stretchB-1'},
			{src: 'image/13_stretchB0.png', 				id: 'stretchB0'},
			{src: 'image/13_stretchB1.png', 				id: 'stretchB1'},
			{src: 'image/13_stretchB2.png', 				id: 'stretchB2'},
			{src: 'image/13_stretchB3.png', 				id: 'stretchB3'},
			
			{src: 'image/14_sailorW0.png', 				id: 'hem_sailorW0'},
			{src: 'image/14_sailorW1.png', 				id: 'hem_sailorW1'},
			{src: 'image/14_sailorW2.png', 				id: 'hem_sailorW2'},
			{src: 'image/14_sailorW3.png', 				id: 'hem_sailorW3'},
			{src: 'image/14_sailorW3_in.png', 				id: 'hem_sailorW3_in'},
			{src: 'image/14_sailorB0.png', 				id: 'hem_sailorB0'},
			{src: 'image/14_sailorB1.png', 				id: 'hem_sailorB1'},
			{src: 'image/14_sailorB2.png', 				id: 'hem_sailorB2'},
			{src: 'image/14_sailorB3.png', 				id: 'hem_sailorB3'},
			{src: 'image/14_sailorB3_in.png', 				id: 'hem_sailorB3_in'},
			{src: 'image/14_shirtW0.png', 				id: 'hem_shirtW0'},
			{src: 'image/14_shirtW1.png', 				id: 'hem_shirtW1'},
			{src: 'image/14_shirtW2.png', 				id: 'hem_shirtW2'},
			{src: 'image/14_shirtW3.png', 				id: 'hem_shirtW3'},
			{src: 'image/14_shirtW3_in.png', 				id: 'hem_shirtW3_in'},
			{src: 'image/14_shirtOpenW0.png', 				id: 'hem_shirtOpenW0'},
			{src: 'image/14_shirtOpenW1.png', 				id: 'hem_shirtOpenW1'},
			{src: 'image/14_shirtOpenW2.png', 				id: 'hem_shirtOpenW2'},
			{src: 'image/14_shirtOpenW3.png', 				id: 'hem_shirtOpenW3'},
			{src: 'image/14_shirtOpenW3_in.png', 				id: 'hem_shirtOpenW3_in'},
			{src: 'image/14_shirtB0.png', 				id: 'hem_shirtB0'},
			{src: 'image/14_shirtB1.png', 				id: 'hem_shirtB1'},
			{src: 'image/14_shirtB2.png', 				id: 'hem_shirtB2'},
			{src: 'image/14_shirtB3.png', 				id: 'hem_shirtB3'},
			{src: 'image/14_shirtB3_in.png', 				id: 'hem_shirtB3_in'},
			{src: 'image/14_shirtOpenB0.png', 				id: 'hem_shirtOpenB0'},
			{src: 'image/14_shirtOpenB1.png', 				id: 'hem_shirtOpenB1'},
			{src: 'image/14_shirtOpenB2.png', 				id: 'hem_shirtOpenB2'},
			{src: 'image/14_shirtOpenB3.png', 				id: 'hem_shirtOpenB3'},
			{src: 'image/14_shirtOpenB3_in.png', 				id: 'hem_shirtOpenB3_in'},
			{src: 'image/14_camisoleB0.png', 				id: 'hem_camisoleB0'},
			{src: 'image/14_camisoleB1.png', 				id: 'hem_camisoleB1'},
			{src: 'image/14_camisoleB2.png', 				id: 'hem_camisoleB2'},
			{src: 'image/14_camisoleB3.png', 				id: 'hem_camisoleB3'},
			{src: 'image/14_camisoleB3_in.png', 				id: 'hem_camisoleB3_in'},
			{src: 'image/14_camisoleW0.png', 				id: 'hem_camisoleW0'},
			{src: 'image/14_camisoleW1.png', 				id: 'hem_camisoleW1'},
			{src: 'image/14_camisoleW2.png', 				id: 'hem_camisoleW2'},
			{src: 'image/14_camisoleW3.png', 				id: 'hem_camisoleW3'},
			{src: 'image/14_camisoleW3_in.png', 				id: 'hem_camisoleW3_in'},
			{src: 'image/14_tubeB0.png', 				id: 'hem_tubeB0'},
			{src: 'image/14_tubeB1.png', 				id: 'hem_tubeB1'},
			{src: 'image/14_tubeB2.png', 				id: 'hem_tubeB2'},
			{src: 'image/14_tubeB3.png', 				id: 'hem_tubeB3'},
			{src: 'image/14_tubeB3_in.png', 				id: 'hem_tubeB3_in'},
			{src: 'image/14_tubeW0.png', 				id: 'hem_tubeW0'},
			{src: 'image/14_tubeW1.png', 				id: 'hem_tubeW1'},
			{src: 'image/14_tubeW2.png', 				id: 'hem_tubeW2'},
			{src: 'image/14_tubeW3.png', 				id: 'hem_tubeW3'},
			{src: 'image/14_tubeW3_in.png', 				id: 'hem_tubeW3_in'},
			{src: 'image/14_maid0.png', 				id: 'hem_maid0'},
			{src: 'image/14_maid1.png', 				id: 'hem_maid1'},
			{src: 'image/14_maid2.png', 				id: 'hem_maid2'},
			{src: 'image/14_maid3.png', 				id: 'hem_maid3'},
			{src: 'image/14_maid0.png', 				id: 'hem_maidEro0'},
			{src: 'image/14_maid1.png', 				id: 'hem_maidEro1'},
			{src: 'image/14_maid2.png', 				id: 'hem_maidEro2'},
			{src: 'image/14_maid3.png', 				id: 'hem_maidEro3'},
			{src: 'image/14_kimonoR0.png', 				id: 'hem_kimonoR0'},
			{src: 'image/14_kimonoR1.png', 				id: 'hem_kimonoR1'},
			{src: 'image/14_kimonoR2.png', 				id: 'hem_kimonoR2'},
			{src: 'image/14_kimonoR3.png', 				id: 'hem_kimonoR3'},
			{src: 'image/14_kimonoB0.png', 				id: 'hem_kimonoB0'},
			{src: 'image/14_kimonoB1.png', 				id: 'hem_kimonoB1'},
			{src: 'image/14_kimonoB2.png', 				id: 'hem_kimonoB2'},
			{src: 'image/14_kimonoB3.png', 				id: 'hem_kimonoB3'},
			{src: 'image/14_kimonoW0.png', 				id: 'hem_kimonoW0'},
			{src: 'image/14_kimonoW1.png', 				id: 'hem_kimonoW1'},
			{src: 'image/14_kimonoW2.png', 				id: 'hem_kimonoW2'},
			{src: 'image/14_kimonoW3.png', 				id: 'hem_kimonoW3'},
			{src: 'image/14_miko0.png', 				id: 'hem_miko0'},
			{src: 'image/14_miko1.png', 				id: 'hem_miko1'},
			{src: 'image/14_miko2.png', 				id: 'hem_miko2'},
			{src: 'image/14_miko3.png', 				id: 'hem_miko3'},
			
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
			
			{src: 'image/24_suit1.png', 			id: 'breast1_suitT'},
			{src: 'image/24_suit2.png', 			id: 'breast2_suitT'},
			{src: 'image/24_suit3.png', 			id: 'breast3_suitT'},
			{src: 'image/24_suit4.png', 			id: 'breast4_suitT'},
			{src: 'image/24_suit5.png', 			id: 'breast5_suitT'},
			{src: 'image/24_suit6.png', 			id: 'breast6_suitT'},
			{src: 'image/24_suit7.png', 			id: 'breast7_suitT'},
			
			{src: 'image/24_bodyTights1.png', 			id: 'breast1_bodyTights'},
			{src: 'image/24_bodyTights2.png', 			id: 'breast2_bodyTights'},
			{src: 'image/24_bodyTights3.png', 			id: 'breast3_bodyTights'},
			{src: 'image/24_bodyTights4.png', 			id: 'breast4_bodyTights'},
			{src: 'image/24_bodyTights5.png', 			id: 'breast5_bodyTights'},
			{src: 'image/24_bodyTights6.png', 			id: 'breast6_bodyTights'},
			{src: 'image/24_bodyTights7.png', 			id: 'breast7_bodyTights'},
			
			{src: 'image/24_bodyTights1.png', 			id: 'breast1_bodyTightsT'},
			{src: 'image/24_bodyTights2.png', 			id: 'breast2_bodyTightsT'},
			{src: 'image/24_bodyTights3.png', 			id: 'breast3_bodyTightsT'},
			{src: 'image/24_bodyTights4.png', 			id: 'breast4_bodyTightsT'},
			{src: 'image/24_bodyTights5.png', 			id: 'breast5_bodyTightsT'},
			{src: 'image/24_bodyTights6.png', 			id: 'breast6_bodyTightsT'},
			{src: 'image/24_bodyTights7.png', 			id: 'breast7_bodyTightsT'},
			
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
			
			{src: 'image/27_shirtB0.png', 			id: 'breast0_shirtB'},
			{src: 'image/27_shirtB1.png', 			id: 'breast1_shirtB'},
			{src: 'image/27_shirtB2.png', 			id: 'breast2_shirtB'},
			{src: 'image/27_shirtB3.png', 			id: 'breast3_shirtB'},
			{src: 'image/27_shirtB4.png', 			id: 'breast4_shirtB'},
			{src: 'image/27_shirtB5.png', 			id: 'breast5_shirtB'},
			{src: 'image/27_shirtB6.png', 			id: 'breast6_shirtB'},
			{src: 'image/27_shirtB7.png', 			id: 'breast7_shirtB'},
			
			{src: 'image/27_maid0.png', 			id: 'breast0_maid'},
			{src: 'image/27_maid1.png', 			id: 'breast1_maid'},
			{src: 'image/27_maid2.png', 			id: 'breast2_maid'},
			{src: 'image/27_maid3.png', 			id: 'breast3_maid'},
			{src: 'image/27_maid4.png', 			id: 'breast4_maid'},
			{src: 'image/27_maid5.png', 			id: 'breast5_maid'},
			{src: 'image/27_maid6.png', 			id: 'breast6_maid'},
			{src: 'image/27_maid7.png', 			id: 'breast7_maid'},
			
			{src: 'image/27_maidEro0.png', 			id: 'breast0_maidEro'},
			{src: 'image/27_maidEro1.png', 			id: 'breast1_maidEro'},
			{src: 'image/27_maidEro2.png', 			id: 'breast2_maidEro'},
			{src: 'image/27_maidEro3.png', 			id: 'breast3_maidEro'},
			{src: 'image/27_maidEro4.png', 			id: 'breast4_maidEro'},
			{src: 'image/27_maidEro5.png', 			id: 'breast5_maidEro'},
			{src: 'image/27_maidEro6.png', 			id: 'breast6_maidEro'},
			{src: 'image/27_maidEro7.png', 			id: 'breast7_maidEro'},
			
			{src: 'image/27_kimonoR0.png', 			id: 'breast0_kimonoR'},
			{src: 'image/27_kimonoR1.png', 			id: 'breast1_kimonoR'},
			{src: 'image/27_kimonoR2.png', 			id: 'breast2_kimonoR'},
			{src: 'image/27_kimonoR3.png', 			id: 'breast3_kimonoR'},
			{src: 'image/27_kimonoR4.png', 			id: 'breast4_kimonoR'},
			{src: 'image/27_kimonoR5.png', 			id: 'breast5_kimonoR'},
			{src: 'image/27_kimonoR6.png', 			id: 'breast6_kimonoR'},
			{src: 'image/27_kimonoR7.png', 			id: 'breast7_kimonoR'},
			
			{src: 'image/27_kimonoB0.png', 			id: 'breast0_kimonoB'},
			{src: 'image/27_kimonoB1.png', 			id: 'breast1_kimonoB'},
			{src: 'image/27_kimonoB2.png', 			id: 'breast2_kimonoB'},
			{src: 'image/27_kimonoB3.png', 			id: 'breast3_kimonoB'},
			{src: 'image/27_kimonoB4.png', 			id: 'breast4_kimonoB'},
			{src: 'image/27_kimonoB5.png', 			id: 'breast5_kimonoB'},
			{src: 'image/27_kimonoB6.png', 			id: 'breast6_kimonoB'},
			{src: 'image/27_kimonoB7.png', 			id: 'breast7_kimonoB'},
			
			{src: 'image/27_kimonoW0.png', 			id: 'breast0_kimonoW'},
			{src: 'image/27_kimonoW1.png', 			id: 'breast1_kimonoW'},
			{src: 'image/27_kimonoW2.png', 			id: 'breast2_kimonoW'},
			{src: 'image/27_kimonoW3.png', 			id: 'breast3_kimonoW'},
			{src: 'image/27_kimonoW4.png', 			id: 'breast4_kimonoW'},
			{src: 'image/27_kimonoW5.png', 			id: 'breast5_kimonoW'},
			{src: 'image/27_kimonoW6.png', 			id: 'breast6_kimonoW'},
			{src: 'image/27_kimonoW7.png', 			id: 'breast7_kimonoW'},
			
			{src: 'image/27_shirtOpenB0.png', 			id: 'breast0_shirtOpenB'},
			{src: 'image/27_shirtOpenB1.png', 			id: 'breast1_shirtOpenB'},
			{src: 'image/27_shirtOpenB2.png', 			id: 'breast2_shirtOpenB'},
			{src: 'image/27_shirtOpenB3.png', 			id: 'breast3_shirtOpenB'},
			{src: 'image/27_shirtOpenB4.png', 			id: 'breast4_shirtOpenB'},
			{src: 'image/27_shirtOpenB5.png', 			id: 'breast5_shirtOpenB'},
			{src: 'image/27_shirtOpenB6.png', 			id: 'breast6_shirtOpenB'},
			{src: 'image/27_shirtOpenB7.png', 			id: 'breast7_shirtOpenB'},
			
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
			
			{src: 'image/27_miko0.png', 			id: 'breast0_miko'},
			{src: 'image/27_miko1.png', 			id: 'breast1_miko'},
			{src: 'image/27_miko2.png', 			id: 'breast2_miko'},
			{src: 'image/27_miko3.png', 			id: 'breast3_miko'},
			{src: 'image/27_miko4.png', 			id: 'breast4_miko'},
			{src: 'image/27_miko5.png', 			id: 'breast5_miko'},
			{src: 'image/27_miko6.png', 			id: 'breast6_miko'},
			{src: 'image/27_miko7.png', 			id: 'breast7_miko'},
			
			{src: 'image/28_necktieB_G.png', 			id: 'tie_necktieB_G'},
			{src: 'image/28_necktieB_GO.png', 			id: 'tie_necktieB_GO'},
			{src: 'image/28_necktieB_O.png', 			id: 'tie_necktieB_O'},
			{src: 'image/28_necktieB_OO.png', 			id: 'tie_necktieB_OO'},
			{src: 'image/28_necktieB_S.png', 			id: 'tie_necktieB_S'},
			{src: 'image/28_necktieB_SO.png', 			id: 'tie_necktieB_SO'},
			{src: 'image/28_necktieB_K.png', 			id: 'tie_necktieB_K'},
			{src: 'image/28_necktieB_KO.png', 			id: 'tie_necktieB_KO'},
			{src: 'image/28_necktieW_G.png', 			id: 'tie_necktieW_G'},
			{src: 'image/28_necktieW_GO.png', 			id: 'tie_necktieW_GO'},
			{src: 'image/28_necktieW_O.png', 			id: 'tie_necktieW_O'},
			{src: 'image/28_necktieW_OO.png', 			id: 'tie_necktieW_OO'},
			{src: 'image/28_necktieW_S.png', 			id: 'tie_necktieW_S'},
			{src: 'image/28_necktieW_SO.png', 			id: 'tie_necktieW_SO'},
			{src: 'image/28_necktieW_K.png', 			id: 'tie_necktieW_K'},
			{src: 'image/28_necktieW_KO.png', 			id: 'tie_necktieW_KO'},
			{src: 'image/28_necktieR_G.png', 			id: 'tie_necktieR_G'},
			{src: 'image/28_necktieR_GO.png', 			id: 'tie_necktieR_GO'},
			{src: 'image/28_necktieR_O.png', 			id: 'tie_necktieR_O'},
			{src: 'image/28_necktieR_OO.png', 			id: 'tie_necktieR_OO'},
			{src: 'image/28_necktieR_S.png', 			id: 'tie_necktieR_S'},
			{src: 'image/28_necktieR_SO.png', 			id: 'tie_necktieR_SO'},
			{src: 'image/28_necktieR_K.png', 			id: 'tie_necktieR_K'},
			{src: 'image/28_necktieR_KO.png', 			id: 'tie_necktieR_KO'},
			
			{src: 'image/28_ribbontieB_G.png', 			id: 'tie_ribbontieB_G'},
			{src: 'image/28_ribbontieB_G.png', 			id: 'tie_ribbontieB_GO'},
			{src: 'image/28_ribbontieB_O.png', 			id: 'tie_ribbontieB_O'},
			{src: 'image/28_ribbontieB_O.png', 			id: 'tie_ribbontieB_OO'},
			{src: 'image/28_ribbontieB_S.png', 			id: 'tie_ribbontieB_S'},
			{src: 'image/28_ribbontieB_S.png', 			id: 'tie_ribbontieB_SO'},
			{src: 'image/28_ribbontieB_K.png', 			id: 'tie_ribbontieB_K'},
			{src: 'image/28_ribbontieB_K.png', 			id: 'tie_ribbontieB_KO'},
			{src: 'image/28_ribbontieW_G.png', 			id: 'tie_ribbontieW_G'},
			{src: 'image/28_ribbontieW_G.png', 			id: 'tie_ribbontieW_GO'},
			{src: 'image/28_ribbontieW_O.png', 			id: 'tie_ribbontieW_O'},
			{src: 'image/28_ribbontieW_O.png', 			id: 'tie_ribbontieW_OO'},
			{src: 'image/28_ribbontieW_S.png', 			id: 'tie_ribbontieW_S'},
			{src: 'image/28_ribbontieW_S.png', 			id: 'tie_ribbontieW_SO'},
			{src: 'image/28_ribbontieW_K.png', 			id: 'tie_ribbontieW_K'},
			{src: 'image/28_ribbontieW_K.png', 			id: 'tie_ribbontieW_KO'},
			{src: 'image/28_ribbontieR_G.png', 			id: 'tie_ribbontieR_G'},
			{src: 'image/28_ribbontieR_G.png', 			id: 'tie_ribbontieR_GO'},
			{src: 'image/28_ribbontieR_O.png', 			id: 'tie_ribbontieR_O'},
			{src: 'image/28_ribbontieR_O.png', 			id: 'tie_ribbontieR_OO'},
			{src: 'image/28_ribbontieR_S.png', 			id: 'tie_ribbontieR_S'},
			{src: 'image/28_ribbontieR_S.png', 			id: 'tie_ribbontieR_SO'},
			{src: 'image/28_ribbontieR_K.png', 			id: 'tie_ribbontieR_K'},
			{src: 'image/28_ribbontieR_K.png', 			id: 'tie_ribbontieR_KO'},
			
			
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
			
			{src: 'image/29_cape0.png', 			id: 'breast0_cape'},
			{src: 'image/29_cape0.png', 			id: 'breast0_capeR'},
			
			{src: 'image/30_hairshadow_pattun0.png', 	id: 'hairshadow_pattun0'},
			{src: 'image/30_hairshadow_pattun1.png', 	id: 'hairshadow_pattun1'},
			{src: 'image/30_hairshadow_pattun2.png', 	id: 'hairshadow_pattun2'},
			{src: 'image/30_hairshadow_jagi0.png', 	id: 'hairshadow_jagi0'},
			{src: 'image/30_hairshadow_jagi1.png', 	id: 'hairshadow_jagi1'},
			{src: 'image/30_hairshadow_jagi2.png', 	id: 'hairshadow_jagi2'},
			{src: 'image/30_hairshadow_mof0.png', 	id: 'hairshadow_mof0'},
			{src: 'image/30_hairshadow_mof1.png', 	id: 'hairshadow_mof1'},
			{src: 'image/30_hairshadow_mof2.png', 	id: 'hairshadow_mof2'},
			{src: 'image/30_hairshadow_Mji0.png', 	id: 'hairshadow_Mji0'},
			{src: 'image/30_hairshadow_Mji1.png', 	id: 'hairshadow_Mji1'},
			{src: 'image/30_hairshadow_Mji2.png', 	id: 'hairshadow_Mji2'},
			{src: 'image/30_hairshadow_nagashi.png', 	id: 'hairshadow_nagashi'},
			{src: 'image/30_hairshadow_naname.png', 	id: 'hairshadow_naname'},
			{src: 'image/30_hairshadow_center.png', 	id: 'hairshadow_center'},
			{src: 'image/30_hairshadow_katame0.png', 	id: 'hairshadow_katame0'},
			{src: 'image/31_cheek.png', 	id: 'cheek'},
			{src: 'image/32_mouth_normal.png', 		id: 'normal'},
			{src: 'image/32_mouth_smile0.png', 		id: 'smile0'},
			{src: 'image/32_mouth_smile1.png', 		id: 'smile1'},
			{src: 'image/32_mouth_smile2.png', 		id: 'smile2'},
			{src: 'image/32_mouth_smile3.png', 		id: 'smile3'},
			{src: 'image/32_mouth_open0.png', 		id: 'open0'},
			{src: 'image/32_mouth_open1.png', 		id: 'open1'},
			{src: 'image/32_mouth_tate0.png', 		id: 'tate0'},
			{src: 'image/32_mouth_tate1.png', 		id: 'tate1'},
			{src: 'image/32_mouth_yoko0.png', 		id: 'yoko0'},
			{src: 'image/32_mouth_yoko1.png', 		id: 'yoko1'},
			{src: 'image/32_mouth_giza0.png', 		id: 'giza0'},
			{src: 'image/32_mouth_giza1.png', 		id: 'giza1'},
			{src: 'image/32_mouth_yaeOpen1.png', 		id: 'yaeOpen1'},
			{src: 'image/32_mouth_yaeSmile2.png', 		id: 'yaeSmile2'},
			{src: 'image/32_mouth_yaeSmile3.png', 		id: 'yaeSmile3'},
			
			{src: 'image/40_eye.png', 			id: 'eye'},
			{src: 'image/40_eye0.png', 			id: 'eye0'},
			{src: 'image/40_eye0.png', 			id: 'eye1'},
			{src: 'image/40_eye2.png', 			id: 'eye2'},
			{src: 'image/40_eye3.png', 			id: 'eye3'},
			{src: 'image/40_eye3.png', 			id: 'eye4'},
			{src: 'image/41_pupil0.png', 			id: 'pupil0'},
			{src: 'image/41_pupil1.png', 			id: 'pupil1'},
			{src: 'image/41_pupil2.png', 			id: 'pupil2'},
			{src: 'image/41_pupil3.png', 			id: 'pupil3'},
			{src: 'image/41_pupil4.png', 			id: 'pupil4'},
			{src: 'image/42_heart.png', 			id: 'heart'},
			{src: 'image/42_star.png', 			id: 'star'},
			{src: 'image/42_kira.png', 			id: 'kira'},
			{src: 'image/42_heart_s.png', 			id: 'heart_s'},
			{src: 'image/42_star_s.png', 			id: 'star_s'},
			{src: 'image/42_kira_s.png', 			id: 'kira_s'},
			
			{src: 'image/43_pupil_hl1.png', 			id: 'pupil_hl1'},
			{src: 'image/43_pupil_hl2.png', 			id: 'pupil_hl2'},
			{src: 'image/43_pupil_hl3.png', 			id: 'pupil_hl3'},
			{src: 'image/43_pupil_hl4.png', 			id: 'pupil_hl4'},
			{src: 'image/43_pupil_hl1_s.png', 			id: 'pupil_hl1_s'},
			{src: 'image/43_pupil_hl2_s.png', 			id: 'pupil_hl2_s'},
			{src: 'image/43_pupil_hl3_s.png', 			id: 'pupil_hl3_s'},
			{src: 'image/43_pupil_hl4_s.png', 			id: 'pupil_hl4_s'},
			{src: 'image/43_pupil_hl1_ss.png', 			id: 'pupil_hl1_ss'},
			{src: 'image/43_pupil_hl2_ss.png', 			id: 'pupil_hl2_ss'},
			{src: 'image/43_pupil_hl3_ss.png', 			id: 'pupil_hl3_ss'},
			{src: 'image/43_pupil_hl4_ss.png', 			id: 'pupil_hl4_ss'},
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
			{src: 'image/48_ribbonK_s.png', 	id: 'back_ribbonK_s'},
			{src: 'image/48_ribbonB_s.png', 	id: 'back_ribbonB_s'},
			{src: 'image/48_ribbonBu_s.png', 	id: 'back_ribbonBu_s'},
			{src: 'image/48_ribbonR_s.png', 	id: 'back_ribbonR_s'},
			{src: 'image/48_ribbonW_s.png', 	id: 'back_ribbonW_s'},
			{src: 'image/48_ribbonK_l.png', 	id: 'back_ribbonK_l'},
			{src: 'image/48_ribbonB_l.png', 	id: 'back_ribbonB_l'},
			{src: 'image/48_ribbonBu_l.png', 	id: 'back_ribbonBu_l'},
			{src: 'image/48_ribbonR_l.png', 	id: 'back_ribbonR_l'},
			{src: 'image/48_ribbonW_l.png', 	id: 'back_ribbonW_l'},
			
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
			{src: 'image/51_necklaceB.png', 	id: 'tie_necklaceB_'},
			{src: 'image/51_necklaceW.png', 	id: 'tie_necklaceW_'},
			{src: 'image/51_necklaceR.png', 	id: 'tie_necklaceR_'},
			
			{src: 'image/52_pattun0.png', 	id: 'pattun0'},
			{src: 'image/52_pattun1.png', 		id: 'pattun1'},
			{src: 'image/52_pattun2.png', 		id: 'pattun2'},
			{src: 'image/52_jagi0.png', 		id: 'jagi0'},
			{src: 'image/52_jagi1.png', 		id: 'jagi1'},
			{src: 'image/52_jagi2.png', 		id: 'jagi2'},
			{src: 'image/52_mof0.png', 		id: 'mof0'},
			{src: 'image/52_mof1.png', 		id: 'mof1'},
			{src: 'image/52_mof2.png', 		id: 'mof2'},
			{src: 'image/52_Mji0.png', 		id: 'Mji0'},
			{src: 'image/52_Mji1.png', 		id: 'Mji1'},
			{src: 'image/52_Mji2.png', 		id: 'Mji2'},
			{src: 'image/52_naname.png', 		id: 'naname'},
			{src: 'image/52_center.png', 		id: 'center'},
			{src: 'image/52_katame0.png', 		id: 'katame0'},
			{src: 'image/52_nagashi.png', 		id: 'nagashi'},
			{src: 'image/53_general_hl.png', 		id: 'pattun0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'pattun1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'pattun2_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'jagi2_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof0_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof1_hl'},
			{src: 'image/53_general_hl.png', 		id: 'mof2_hl'},
			{src: 'image/53_Mji_hl.png', 		id: 'Mji0_hl'},
			{src: 'image/53_Mji_hl.png', 		id: 'Mji1_hl'},
			{src: 'image/53_Mji_hl.png', 		id: 'Mji2_hl'},
			{src: 'image/53_naname_hl.png', 		id: 'naname_hl'},
			{src: 'image/53_naname_hl.png', 		id: 'katame0_hl'},
			{src: 'image/53_center_hl.png', 		id: 'center_hl'},
			{src: 'image/53_nagashi_hl.png', 		id: 'nagashi_hl'},
			
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
			{src: 'image/55_general_hl.png', 		id: 'moff0_hl'},
			{src: 'image/55_general_hl.png', 		id: 'moff2_hl'},
			
			{src: 'image/56_headphone.png', 		id: 'earmuff_headphone'},
			{src: 'image/57_hairbandB.png', 		id: 'hairbandB'},
			{src: 'image/57_hairbandW.png', 		id: 'hairbandW'},
			{src: 'image/57_hairbandK.png', 		id: 'hairbandK'},
			{src: 'image/57_hairbandR.png', 		id: 'hairbandR'},
			{src: 'image/57_hairbandBu.png', 		id: 'hairbandBu'},
			{src: 'image/57_flowerB.png', 		id: 'flowerB'},
			{src: 'image/57_flowerW.png', 		id: 'flowerW'},
			{src: 'image/57_flowerK.png', 		id: 'flowerK'},
			{src: 'image/57_flowerR.png', 		id: 'flowerR'},
			{src: 'image/57_flowerBu.png', 		id: 'flowerBu'},
			{src: 'image/57_headdressB.png', 		id: 'headdressB'},
			{src: 'image/57_headdressW.png', 		id: 'headdressW'},
			{src: 'image/57_headdressK.png', 		id: 'headdressK'},
			{src: 'image/57_headdressR.png', 		id: 'headdressR'},
			{src: 'image/57_headdressBu.png', 		id: 'headdressBu'},
			{src: 'image/57_maidB.png', 		id: 'maidB'},
			{src: 'image/57_maidW.png', 		id: 'maidW'},
			{src: 'image/57_maidK.png', 		id: 'maidK'},
			{src: 'image/57_maidR.png', 		id: 'maidR'},
			{src: 'image/57_maidBu.png', 		id: 'maidBu'},
			{src: 'image/57_hornB.png', 		id: 'hornB'},
			{src: 'image/57_hornW.png', 		id: 'hornW'},
			{src: 'image/57_hornK.png', 		id: 'hornK'},
			{src: 'image/57_hornR.png', 		id: 'hornR'},
			{src: 'image/57_hornBu.png', 		id: 'hornBu'},
			
			{src: 'image/58_ippon.png', 		id: 'ahoge_ippon'},
			{src: 'image/58_ipponF.png', 		id: 'ahoge_ipponF'},
			{src: 'image/58_ipponC.png', 		id: 'ahoge_ipponC'},
			{src: 'image/58_nihon.png', 		id: 'ahoge_nihon'},
			
			{src: 'image/57_casquetteB.png', 		id: 'cap_casquetteB'},
			{src: 'image/57_casquetteW.png', 		id: 'cap_casquetteW'},
			{src: 'image/57_casquetteK.png', 		id: 'cap_casquetteK'},
			{src: 'image/57_casquetteR.png', 		id: 'cap_casquetteR'},
			{src: 'image/57_casquetteBu.png', 		id: 'cap_casquetteBu'},
			{src: 'image/57_knitcapB.png', 		id: 'cap_knitcapB'},
			{src: 'image/57_knitcapW.png', 		id: 'cap_knitcapW'},
			{src: 'image/57_knitcapK.png', 		id: 'cap_knitcapK'},
			{src: 'image/57_knitcapR.png', 		id: 'cap_knitcapR'},
			{src: 'image/57_knitcapBu.png', 		id: 'cap_knitcapBu'},
			{src: 'image/57_witchB.png', 		id: 'cap_witchB'},
			{src: 'image/57_witchW.png', 		id: 'cap_witchW'},
			{src: 'image/57_witchK.png', 		id: 'cap_witchK'},
			{src: 'image/57_witchR.png', 		id: 'cap_witchR'},
			{src: 'image/57_witchBu.png', 		id: 'cap_witchBu'},
			{src: 'image/57_militaryB.png', 		id: 'cap_militaryB'},
			{src: 'image/57_militaryW.png', 		id: 'cap_militaryW'},
			{src: 'image/57_militaryK.png', 		id: 'cap_militaryK'},
			{src: 'image/57_militaryR.png', 		id: 'cap_militaryR'},
			{src: 'image/57_militaryBu.png', 		id: 'cap_militaryBu'},
			
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
			ahoge:'', 
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
			hemin:false,
			glasses:'',
			glassesColor:'',
			head:'',
			headsColor:'',
			headsType:'',
			cap:'',
			neck:'',
			necktie:'',
			neckColor:'',
			glove:'',
			gloveColor:'',
			socks:'',
			socksColor:'',
			onepiece:false,
		};
};


Custom.prototype.formLoad = function (){
	this.data.front = document.forms.customForm.frontHair.value;
	this.data.side = document.forms.customForm.sideHair.value;
	this.data.back = document.forms.customForm.backHair.value;
	this.data.ahoge = document.forms.customForm.ahoge.value;
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
	this.data.hemin = document.forms.customForm.hemin.checked;
	
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
	
	this.rangeNumberDefault();
	
	this.preload.addEventListener("progress",  function(event){
	  	custom.progress = Math.floor(event.progress * 100);
	  	custom.progressText.text = 'Loading... ' + String(custom.progress) + '%';
	});
	
	this.preload.addEventListener("complete",function(event){
		var array = [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,20,22,23,24,25,26,27,28,29,30,31,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
		for(var i = 0; i < array.length; i++){
			custom.layer[array[i]] = new createjs.Bitmap();
		}
		custom.layer[4].image = custom.images['base'];
		custom.layer[5].image = custom.images['base_hl'];
		
		custom.layer[1].compositeOperation ='lighter';
		custom.layer[5].compositeOperation ='lighter';
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
	this.necktie();
	this.onepiece();
	
	this.layer[0].image = this.images[this.data.back + this.data.cap];
	this.layer[1].image = this.images[this.data.back + this.data.cap + this.data.hairhl];
	this.layer[2].image = this.images['back_' + this.data.outer];
	this.layer[3].image = this.images['back_' + this.data.bottom + this.data.bottomLength];
	
	this.layer[7].image = this.images[this.data.inner];
	this.layer[8].image = this.images[this.data.glove + this.data.gloveColor];
	this.layer[9].image = this.images['sleeve_' + this.data.top + this.data.sleeve];
	this.layer[10].image = this.images['sleeve_' + this.data.outer + this.data.outerSleeve];
	
	this.layer[11].image = this.images[this.data.pants + this.data.pantsColor];
	this.layer[12].image = this.images[this.data.socks + this.data.socksColor];
	
	if(this.data.hemin && !this.data.onepiece){
		this.layer[14].image = this.images[this.data.bottom + this.data.bottomLength];
		this.layer[13].image = this.images['hem_' +this.data.top + this.data.hem + ((this.data.hem === '3') ? '_in' : '')]
	}else{
		this.layer[13].image = this.images[this.data.bottom + this.data.bottomLength];
		this.layer[14].image = this.images['hem_' +this.data.top + this.data.hem];
	}
	this.layer[15].image = this.images['hem_' + this.data.outer + this.data.outerHem];
	
	this.layer[20].image = this.images['breast' + this.data.breast];
	this.layer[23].image = this.images['breast' + this.data.breast + '_hl'];
	this.layer[24].image = this.images['breast' + this.data.breast + '_' + this.data.inner];
	this.layer[26].image = this.images['breast' + this.data.breast + '_' + this.data.bra + this.data.braColor];
	this.layer[27].image = this.images['breast' + this.data.breast + '_' + this.data.top];
	this.layer[28].image = this.images['tie_' + this.data.neck + this.data.neckColor + this.data.necktie];
	this.layer[29].image = this.images['breast' + this.data.breast + '_' + this.data.outer];
	
	this.layer[30].image = this.images['hairshadow_' + this.data.front];
	this.layer[31].image = this.images[this.data.cheek];
	this.layer[32].image = this.images[this.data.mouth];
	
	this.layer[40].image = this.images['eye' + this.data.eyelashes];
	this.layer[41].image = this.images['pupil' + this.data.pupil];
	this.layer[42].image = this.images[this.data.pupilOption + ((this.data.pupil === '3' || this.data.pupil === '4') ? '_s':'')];
	this.layer[43].image = this.images['pupil_hl' + this.data.pupilHl + ((this.data.pupil === '3') ? '_s':'') + ((this.data.pupil === '4') ? '_ss':'')];
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
	
	this.layer[58].image = this.images['ahoge_' + this.data.ahoge];
	
	this.layer[59].image = this.images['cap_' + this.data.head + this.data.headColor];
	
	this.cape();
	this.irregularSleeve();
	
	this.changeEyeColor();
	this.changeHairColor();
	this.changeSkinColor();
};

Custom.prototype.necktie = function(){
	this.data.necktie = '_';
	if(this.data.neck === 'necktie' || this.data.neck === 'ribbontie'){
		switch(this.data.top){
			case 'shirtW':
			case 'shirtB':
			case 'maid':
			case 'maidEro':
				this.data.necktie += 'S';
				break;
			case 'shirtOpenW':
			case 'shirtOpenB':
				this.data.necktie += 'O';
				break;
			case 'kimonoB':
			case 'kimonoR':
			case 'kimonoW':
			case 'miko':
				this.data.necktie += 'K';
				break;
			default:
				this.data.necktie += 'G';
				break;
		}
		switch(this.data.outer){
			case 'blazer':
			case 'trench':
				this.data.necktie += 'O';
				break;
		}
	}

}

Custom.prototype.cap = function(){
	this.data.cap = '';
	switch(this.data.head){
	case 'casquette':
		if(this.data.back === 'pony'){
			this.data.cap = 'C'
		}
		break;
	case 'knitcap':
	case 'military':
	case 'witch':
		if(this.data.back === 'pony' || this.data.back === 'twin' || this.data.back === 'sidetail' || this.data.back === 'pig' || this.data.back === 'twoside'){
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
		case 'pig':
		case 'twoside':
			this.data.headType = '_t'
			break;
		case 'lowtwin':
			this.data.headType = '_l'
			break;
		case 'sidetail':
			this.data.headType = '_s'
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

Custom.prototype.onepiece = function(){
	this.data.onepiece = false;
	this.data.bottom = document.forms.customForm.bottom.value;
	switch(this.data.top){
	case 'maid':
	case 'maidEro':
	case 'kimonoB':
	case 'kimonoR':
	case 'kimonoW':
	case 'miko':
		this.data.bottom = '';
		this.data.onepiece = true;
		break;
	}
};

Custom.prototype.cape = function(){
	if(this.data.outer === 'cape' || this.data.outer === 'capeR'){
		this.layer[2].image = this.images['back_' + this.data.outer + this.data.outerHem];
		this.layer[29].image = this.images['breast0_' + this.data.outer];
	}
};

Custom.prototype.irregularSleeve = function(){
	if((this.data.top === 'maid' || this.data.top === 'maidEro') && !(this.data.outer === '')){
		this.layer[9].image = this.images['sleeve_' + this.data.top + this.data.sleeve + '_O'];
	}
};


Custom.prototype.changeHairColor = function(){
	var array = [0, 44, 45, 50, 52, 54, 58]; //後ろ髪、睫毛、眉毛、ケモ耳、バング、サイド、アホ毛
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


Custom.prototype.rangeNumber = function(value,id){
	var range = document.getElementById(id);
	var text = document.createTextNode(value)
	if(range.hasChildNodes()){
		range.replaceChild(text, range.firstChild);
	}else{
		range.appendChild(text);
	}
}

Custom.prototype.rangeNumberDefault = function(){
	var color = [];
	var colorNum = [];
	colorNum[0] = String(document.forms.customForm.hairColorR.value);
	colorNum[1] = String(document.forms.customForm.hairColorG.value);
	colorNum[2] = String(document.forms.customForm.hairColorB.value);
	for (var i = 0; i <= 2; i++){
		this.rangeNumber(colorNum[i], 'hairColor' + String(i));
	}
	
	colorNum[0] = String(document.forms.customForm.eyeColorR.value);
	colorNum[1] = String(document.forms.customForm.eyeColorG.value);
	colorNum[2] = String(document.forms.customForm.eyeColorB.value);
	for (var i = 0; i <= 2; i++){
		this.rangeNumber(colorNum[i], 'eyeColor' + String(i));
	}
}

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
	var array = [4, 20, 30, 47]; //素体、乳、髪影、耳
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

Custom.prototype.ahoge = function(value){
	this.data.ahoge = value;
	this.update();
};

Custom.prototype.hairColor = function(color, type){
	this.data.hairColor[type]  = color / 128;
	this.rangeNumber(color, 'hairColor' + String(type))
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
	this.rangeNumber(color, 'eyeColor' + String(type))
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

Custom.prototype.hemin = function(checked){
	this.data.hemin = checked;
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
