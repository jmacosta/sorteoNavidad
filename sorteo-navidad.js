(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sorteo_navidad_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_5", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_6", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_7", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_8", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_9", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_10", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_11", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_12", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_13", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_14", frames: [[0,0,1920,1080]]},
		{name:"sorteo_navidad_atlas_15", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.boton = function() {
	this.initialize(ss["sorteo_navidad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boton_sin_sombra = function() {
	this.initialize(ss["sorteo_navidad_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.destellos = function() {
	this.initialize(ss["sorteo_navidad_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.destellos_2 = function() {
	this.initialize(ss["sorteo_navidad_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0000_Capa32 = function() {
	this.initialize(ss["sorteo_navidad_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0001_Capa31 = function() {
	this.initialize(ss["sorteo_navidad_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0002_Capa30 = function() {
	this.initialize(ss["sorteo_navidad_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0003_Capa29 = function() {
	this.initialize(ss["sorteo_navidad_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0004_Capa28 = function() {
	this.initialize(ss["sorteo_navidad_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0005_Capa27 = function() {
	this.initialize(ss["sorteo_navidad_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0006_Capa26 = function() {
	this.initialize(ss["sorteo_navidad_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0007_Capa25 = function() {
	this.initialize(ss["sorteo_navidad_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nieve_0008_Capa24 = function() {
	this.initialize(ss["sorteo_navidad_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.parar = function() {
	this.initialize(ss["sorteo_navidad_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sin_detello = function() {
	this.initialize(ss["sorteo_navidad_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pulsar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.boton();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pulsar, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.Nieve = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.nieve_0000_Capa32();
	this.instance.setTransform(-226,-540);

	this.instance_1 = new lib.nieve_0001_Capa31();
	this.instance_1.setTransform(-226,-540);

	this.instance_2 = new lib.nieve_0002_Capa30();
	this.instance_2.setTransform(-226,-540);

	this.instance_3 = new lib.nieve_0003_Capa29();
	this.instance_3.setTransform(-226,-540);

	this.instance_4 = new lib.nieve_0004_Capa28();
	this.instance_4.setTransform(-226,-540);

	this.instance_5 = new lib.nieve_0005_Capa27();
	this.instance_5.setTransform(-226,-540);

	this.instance_6 = new lib.nieve_0006_Capa26();
	this.instance_6.setTransform(-226,-540);

	this.instance_7 = new lib.nieve_0007_Capa25();
	this.instance_7.setTransform(-226,-540);

	this.instance_8 = new lib.nieve_0008_Capa24();
	this.instance_8.setTransform(-226,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-540,1920,1080);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.destellos_2();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.destellos();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.boton_sin_sombra();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.destellos_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(734,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({startPosition:0},5).to({startPosition:0},5).to({startPosition:0},5).to({startPosition:0},5).wait(1));

	// destellos_png
	this.instance_1 = new lib.Interpolación1("synched",0);
	this.instance_1.setTransform(734,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},4).to({startPosition:0},5).to({startPosition:0},15).to({startPosition:0},5).wait(1));

	// sin_detello_png
	this.instance_2 = new lib.sin_detello();
	this.instance_2.setTransform(-226,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-540,1920,1080);


// stage content:
(lib.RECUP_sorteo_navidad_html_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		this.numeroPremio.text = 0;
		
		
		
		
		this.startStop.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		
		{
		this.gotoAndPlay(1);
			
		/*if (pulse == false) {
			pulse = true;
			this.gotoAndPlay(1);
			} 
			else {
				this.pulse = false;
				this.numeroPremio.text = fl_GenerateRandomNumber(30);
				alert("este es el que se ve");
				this.gotoAndStop(2);
			
			}*/
		}
		
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		
		
		/* Código para obtener el número del fotograma actual
		*/
	}
	this.frame_1 = function() {
		//stage.displayState = StageDisplayState.FULL_SCREEN;
		
		this.stop();
	}
	this.frame_2 = function() {
		///* Generar un número aleatorio
		//Genera un número aleatorio entre 0 y un número límite especificado.
		//
		//Instrucciones:
		//1. Para cambiar el valor aleatorio máximo, reemplace el número 100 de la última línea de este fragmento por el número que desee utilizar.
		//2. Este código genera un número aleatorio en el panel Salida.
		//*/
		//
		function fl_GenerateRandomNumber(limit)
		{
			var randomNumber = Math.floor(Math.random()*(limit)+1);
			return randomNumber;
		}
		///*trace(fl_GenerateRandomNumber(100));*/
		//
		this.numeroPremio.text = fl_GenerateRandomNumber(30);
		console.log(this.numeroPremio.text);
	}
	this.frame_3 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(2));

	// Capa_6
	this.numeroPremio = new cjs.Text("999", "200px 'Lobster'", "#FFFFFF");
	this.numeroPremio.name = "numeroPremio";
	this.numeroPremio.textAlign = "center";
	this.numeroPremio.lineHeight = 300;
	this.numeroPremio.lineWidth = 536;
	this.numeroPremio.parent = this;
	this.numeroPremio.setTransform(956.25,355);
	this.numeroPremio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.numeroPremio).wait(1).to({_off:false},0).wait(4));

	// texto_boton
	this.pulsar = new lib.pulsar("synched",0);
	this.pulsar.name = "pulsar";
	this.pulsar.setTransform(960,540);

	this.instance = new lib.parar();
	this.instance.setTransform(47,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pulsar}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.pulsar}]},1).wait(2));

	// boton_sin_sombra
	this.startStop = new lib.button();
	this.startStop.name = "startStop";
	this.startStop.setTransform(960,540);
	this.startStop._off = true;
	new cjs.ButtonHelper(this.startStop, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startStop).wait(1).to({_off:false},0).wait(4));

	// Nieve
	this.instance_1 = new lib.Nieve();
	this.instance_1.setTransform(960,540,1,1,0,0,0,734,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(4));

	// destellos
	this.instance_2 = new lib.destellos_1();
	this.instance_2.setTransform(960,540,1,1,0,0,0,734,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1967,1081);
// library properties:
lib.properties = {
	id: '5C0CF79365BF924C9BAAE3BDC8D18DB9',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sorteo_navidad_atlas_1.png?1671562531732", id:"sorteo_navidad_atlas_1"},
		{src:"images/sorteo_navidad_atlas_2.png?1671562531732", id:"sorteo_navidad_atlas_2"},
		{src:"images/sorteo_navidad_atlas_3.png?1671562531732", id:"sorteo_navidad_atlas_3"},
		{src:"images/sorteo_navidad_atlas_4.png?1671562531732", id:"sorteo_navidad_atlas_4"},
		{src:"images/sorteo_navidad_atlas_5.png?1671562531732", id:"sorteo_navidad_atlas_5"},
		{src:"images/sorteo_navidad_atlas_6.png?1671562531732", id:"sorteo_navidad_atlas_6"},
		{src:"images/sorteo_navidad_atlas_7.png?1671562531732", id:"sorteo_navidad_atlas_7"},
		{src:"images/sorteo_navidad_atlas_8.png?1671562531732", id:"sorteo_navidad_atlas_8"},
		{src:"images/sorteo_navidad_atlas_9.png?1671562531732", id:"sorteo_navidad_atlas_9"},
		{src:"images/sorteo_navidad_atlas_10.png?1671562531732", id:"sorteo_navidad_atlas_10"},
		{src:"images/sorteo_navidad_atlas_11.png?1671562531732", id:"sorteo_navidad_atlas_11"},
		{src:"images/sorteo_navidad_atlas_12.png?1671562531732", id:"sorteo_navidad_atlas_12"},
		{src:"images/sorteo_navidad_atlas_13.png?1671562531732", id:"sorteo_navidad_atlas_13"},
		{src:"images/sorteo_navidad_atlas_14.png?1671562531732", id:"sorteo_navidad_atlas_14"},
		{src:"images/sorteo_navidad_atlas_15.png?1671562531732", id:"sorteo_navidad_atlas_15"},
		{src:"sounds/lottery.mp3?1671562534501", id:"lottery"},
		{src:"sounds/singFondo.mp3?1671562534501", id:"singFondo"},
		{src:"sounds/tambores.mp3?1671562534501", id:"tambores"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5C0CF79365BF924C9BAAE3BDC8D18DB9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;