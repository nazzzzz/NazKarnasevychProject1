
function setup() {
    createCanvas(2000, 1400);

    //sunset color
    background(145, 34, 25, 60);
    noStroke();
    //grass
    fill(10, 230, 20, 70);
    rect(0,1000, 2000, 1000);
    //sky
    fill(70, 80, 230);
    rect(0,0, 2000, 500);
}



function draw() {
	 
    drawTree();
    drawSun();
}


function drawTree() {

	//TRUNK
	trunkVec = [];
    for (counter = 900; counter < 1440; counter += 10) {
        trunkVec.push({x:1500, y:counter});
        
    }

    for (i = 0; i < trunkVec.length; i++) {
    	fill(0);
    	//println(trunkVec[i].x, trunkVec[i].y);
        ellipse(trunkVec[i].x, trunkVec[i].y, 100, 40);
    }

    //Branch 1


}

function drawSun(){
	fill(200, 150, 20, 50);
	rect(200, 600, 150, 150);

	fill(250, 170, 0, 50);
	rect(225, 625, 100, 100);


	fill(255, 170, 0);
	rect(250, 650, 50, 50);
	
}

function drawCloud(params){

}
