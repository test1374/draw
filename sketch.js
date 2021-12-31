let socket;

function setup() {
  createCanvas(400, 400);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
  background(0);
}

function newDrawing(data) {
  fill(0, 100, 200);
  noStroke();
  ellipse(data.x, data.y, 36, 36);
  if(data.id !== socket.id) {
    fill(255, 0, 100);
    noStroke();
    ellipse(data.x, data.y, 36, 36);
  }
}
function mouseDragged() {
  console.log('Sending: ' + mouseX + ', ' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY,
    id: socket.id,
  }

  socket.emit('mouse', data);
}
function draw() {

}
