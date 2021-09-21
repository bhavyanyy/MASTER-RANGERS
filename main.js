var canvas = new fabric.Canvas('myCanvas');

block_y = 1;
block_x = 1;

blockImgWidth = 350;
blockImgHeight = 430;

var blockImageObject = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImgWidth);
		blockImageObject.scaleToHeight(blockImgHeight);
		blockImageObject.set({
			top: block_y,
			left: block_x
		});
		canvas.add(blockImageObject);
	});
}
function clearArea(){
    clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png");
		console.log("R key is pressed");
	}
	if (keyPressed == '71') {
		block_x = 200;
		new_image("gr.png");
		console.log("G key is pressed");
	}

	if (keyPressed == '89') {
		block_x = 350;
		new_image("yr.png");
			console.log("Y key is pressed");
		}
		if (keyPressed == '80') {
			block_x = 600;
			new_image("pr.png");
console.log("P key is pressed");
		}
		if (keyPressed == '66') {
			block_x = 700;
			new_image("br.png");
console.log("B key is pressed");
		}

	}