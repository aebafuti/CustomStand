

function Custom() {
    this.initialize.apply(this, arguments);
}

Custom.prototype.initialize = function() {
	this.canvas = document.getElementById('canvas');
	this.context = this.canvas.getContext('2d');
	this.srcs = [
		'image/custom/0_lonhair_black.png',
		'image/custom/1_base.png',
		'image/custom/2_breast0.png',
		'image/custom/3_hairshadow_pattun.png',
		'image/custom/4_mouth_normal.png',
		'image/custom/5_eye_red.png',
		'image/custom/6_eyelashes_black.png',
		'image/custom/7_eyebrow_black.png',
		'image/custom/8_pattun_black.png',
	];
	
	
	this.images = [];
	for (var i in this.srcs) {
		this.images[i] = new Image();
		this.images[i].src = this.srcs[i];
	}
	
	for (var i in this.images) {
		this.images[i].addEventListener('load', function() {

		}, false);
	}
	for (var j in this.images) {
		this.context.drawImage(this.images[j], 0, 0, 325, 624);
	}
};

Custom.prototype.update = function() {

};



Custom.prototype.breast = function(value) {
	this.srcs[2] = this.fileName(2, 'breast', value);
	console.log(this.context);
};

Custom.prototype.fileName = function(layer, type, value) {
	return 'image/custom/' + String(layer) + '_' + type + String(value) +'.png'
};

var custom = new Custom();


function Breast(value){
	custom.breast(value);
}
