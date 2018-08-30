var player = {
  x:200,
  y:200
}


var drawPlayer = fuction(){
      this.layer.fillRect(player.x, player.y, 64, 64);
      this.layer.drawImage(this.images.ship, player.x, player.y)
};
