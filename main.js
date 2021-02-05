canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 200;
rover_height = 200;
background_image = "mars.jpg";
rover_img = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
       left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y >= 0)
    {
        rover_y -= 10;
        console.log("When Up Arrow Is pressed = "+ rover_x+ "-"+rover_y);
        uploadBackground();

        uploadrover();
    }
}

function down(){
    if(rover_y <= 600)
    {
        rover_y += 10;
        console.log("When Down Arrow Is pressed = "+ rover_x+ "y = " +rover_y);
        uploadBackground();

        uploadrover();
    }
}

function left(){
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("When left Arrow Is pressed = "+ rover_x+ "y = " +rover_y);
        uploadBackground();

        uploadrover();
    }
}

function right(){
    if(rover_x <= 800)
    {
        rover_x += 10;
        console.log("When right Arrow Is pressed = "+ rover_x+ "y = " +rover_y);
        uploadBackground();
   
        uploadrover();
    }
}