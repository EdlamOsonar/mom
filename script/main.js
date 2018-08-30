var player = {
  x:200,
  y:200
}

var app = playground({


  drawplayer: function() {
        this.layer.fillRect(player.x, player.y, 64, 64);
        this.layer.drawImage(this.images.ship, player.x, player.y);
        //console.log('funciona la llamada a la funcion');
  },


  create: function() {

    this.loadImage("ship");

  },

  ready: function() {

    /*
      ready event listener - if you want to do something
      when loader has finished the job
    */

  },

  // mousemove: function(data) {
  //   player.x = data.x;
  //   player.y = data.y;
  //   this.text = "mouse move " + data.x +  " , " + data.y;
  //
  // },
  //
  // mousedown: function(data) {
  //   player.x = data.x;
  //   player.y = data.y;
  //   this.text = "mouse down " + data.button + " " + data.x +  " , " + data.y;
  //
  // },
  //
  // mouseup: function(data) {
  //   player.x = data.x;
  //   player.y = data.y;
  //   this.text = "mouse up " + data.button + " " + data.x +  " , " + data.y;
  //
  // },

  movePlayer: function(event){
    if(event.key === "down"){
      player.y += 10;
    }
    if(event.key === "up"){
      player.y -= 10;
    }
    if(event.key === "left"){
      player.x -= 10;
    }
    if(event.key === "right"){
      player.x += 10;
    }
  },

  keydown: function(event) {
    this.movePlayer(event);
  },

  keyup: function(event) {
    this.movePlayer(event);
  },


  render: function() {

    this.layer.clear("#000088");
    this.drawplayer();

  }

});
