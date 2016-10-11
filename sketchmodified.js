//arrays to store the clouds and a finished bool to check if the background is done fading out.

var cloudOneArray = [];
var cloudTwoArray = [];
finished = false;

function setup() {
    createCanvas(1920, 1080);
    background(255);

    //fill arrays with clouds positioned randomly between a select range
    for (i = 0; i < 3; i++) {
        cloudOneArray[i] = new CloudOne(random(0, 1920), random(375, 525));
    }


    for (i = 0; i < 6; i++) {
        cloudTwoArray[i] = new CloudTwo(random(0, 1920), random(525, 610));
    }
}



function draw() {

    //drawing the background and the sun
    drawBackground();
    drawSun();

    //drawing the clouds and telling them to move
    for (i = 0; i < cloudOneArray.length; i++) {
        cloudOneArray[i].move();
        cloudOneArray[i].display();
    }

    for (i = 0; i < cloudTwoArray.length; i++) {
        cloudTwoArray[i].move();
        cloudTwoArray[i].display();
    }



}

function drawSun() {
    //outer rect
    fill(200, 150, 20, 75);
    rect(412.5, 675, 250, 55);

    //middle rect
    fill(250, 170, 0, 75);
    rect(437.5, 675, 200, 45);

    //inner rect
    fill(255, 170, 0);
    rect(462.5, 675, 150, 30);

}


function drawBackground() {

    //if the framecount is almost 1000, set the finished bool to true so that the colors don't reset
    if (frameCount % 1000 == 999) {
        finished = true;
    }

    //defining colors for the different areas
    sky_upper = color(140, 113, 102);
    sky_lower = color(253, 197, 162);
    water_upper = color(227, 105, 117);
    water_lower = color(197, 105, 115);
    grass_upper = color(164, 124, 37);
    grass_lower = color(130, 124, 38);
    grass_other = color(219, 191, 66);
    finishedColor = color(255, 245, 227);

    //if the framecount has not reached 1000, keep changing each of the background areas towards the finished color.
    if (!finished) {
        sky_upper = lerpColor(sky_upper, finishedColor, frameCount % 1000 / 1000);
        sky_lower = lerpColor(sky_lower, finishedColor, frameCount % 1000 / 1000);
        grass_lower = lerpColor(grass_lower, finishedColor, frameCount % 1000 / 1000);
        grass_upper = lerpColor(grass_upper, finishedColor, frameCount % 1000 / 1000);
        water_lower = lerpColor(water_lower, finishedColor, frameCount % 1000 / 1000);
        water_upper = lerpColor(water_upper, finishedColor, frameCount % 1000 / 1000);
        grass_other = lerpColor(grass_other, finishedColor, frameCount % 1000 / 1000);

    }
    //when it is finished, permanently set the colors of the background to the finished color
    else {
        sky_upper = finishedColor;
        sky_lower = finishedColor;
        grass_lower = finishedColor;
        grass_upper = finishedColor;
        water_lower = finishedColor;
        water_upper = finishedColor;
        grass_other = finishedColor;

        //also, when finished changing the background, gradually stop the clouds and fade them out
        for (i = 0; i < cloudOneArray.length; i++) {
            cloudOneArray[i].slow();
            cloudOneArray[i].fade();
        }

        for (i = 0; i < cloudTwoArray.length; i++) {
            cloudTwoArray[i].slow();
            cloudTwoArray[i].fade();
        }

    }

    ////////////////////////////
    //drawing the different areas
    ////////////////////////////


    //sky upper
    fill(sky_upper);
    rect(0, 0, 1920, 375);

    //sky Lower
    gradientColor(0, 375, 1920, 292.5, sky_upper, sky_lower);


    //line of white ish
    gradientColor(0, 667.5, 1920, 7.5, color(251, 219, 194), color(249, 236, 227));


    //water
    gradientColor(0, 675, 1920, 75, water_upper, water_lower);


    //grass
	gradientColor(0, 787.5, 1920, 131.25, grass_upper, grass_lower);

    noStroke();
    fill(grass_lower)
    rect(0, 918.75, 2000, 131.25);

    //grass 2.0 
    fill(grass_other);
    rect(0, 750, 2000, 37.5);



}

//linear gradient function found on Processing referenece, modified for p5 and one axis
//basically draws lines down the screen, with ever subtly changing colors
function gradientColor(x, y, w, h, c1, c2) {

    for (i = y; i <= y + h; i++) {
        inter = map(i, y, y + h, 0, 1);
        c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}
