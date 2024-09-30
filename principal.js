var juego = new Phaser.Game(350,600, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal={
	preload: function (){
		juego.load.image('fondo','img/fondo.png');
		juego.load.spritesheet('aliens', 'img/alien.png',160,160); // carga sprite,tiene varios spritessheet, un conjutos ej. tiene 3 y su medida es 129x30 y solo div129 / cant de imag q tiene spreet
	},
	create: function(){
		fondoJuego=juego.add.tileSprite(0,0,350,600,'fondo');
		flappy=juego.add.sprite(100,100,'aliens'); // visualiza el sprite
		flappy.frame=1;//primer cuadrante
		flappy.animations.add('vuelo', [0,1,2],10,true);// 
		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	},
	update: function(){
		fondoJuego.tilePosition.x-=1; //animacion, movimiento del fondo
		flappy.animations.play('vuelo'); // inicializa animation
		if (teclaDerecha.isDown) {
			flappy.x++;
		} else if (teclaIzquierda.isDown) {
			flappy.x--;
		}else if (teclaArriba.isDown) {
			flappy.y--;
		}else if (teclaAbajo.isDown) {
			flappy.y++;
		}
	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');