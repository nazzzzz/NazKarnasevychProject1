//class for first type of cloud
function CloudOne(cloudX, cloudY) {
    //defining parameters
    this.xPos = cloudX;
    this.yPos = cloudY;
    this.speed = random(1, 1.5);
    this.faded = 0;
    this.cloud_dark = color(237, 179, 167);
    this.cloud_light = color(247, 208, 207);

    //display function to draw the different ellipses that make up the cloud
    this.display = function() {

        noStroke();
        fill(this.cloud_light);
        ellipse(this.xPos + 25, this.yPos - 20, 40, 40);

        fill(this.cloud_dark);
        ellipse(this.xPos, this.yPos, 60, 60);
        ellipse(this.xPos + 60, this.yPos + 5, 30, 30);
        ellipse(this.xPos + 65, this.yPos + 20, 30, 30);
        ellipse(this.xPos + 45, this.yPos - 10, 40, 30);

        fill(this.cloud_light);
        ellipse(this.xPos - 5, this.yPos + 10, 15, 15);
        ellipse(this.xPos + 55, this.yPos + 3, 25, 25);

        fill(this.cloud_dark);
        ellipse(this.xPos + 20, this.yPos + 30, 90, 20);
        ellipse(this.xPos + 30, this.yPos + 10, 60, 40);
        ellipse(this.xPos + 70, this.yPos + 15, 60, 30);
    }
    //move function that changes the cloud's position by adding its speed to the position
    this.move = function() {
        if (this.xPos - 50 > width) {
            this.xPos = -200;
        }
        this.xPos = this.xPos + this.speed;
    }

    //function that slows down the cloud by lowering its speed
    this.slow = function() {
        {
            if (this.speed > 0) {
                this.speed = this.speed - 0.005;
            } else {
                this.speed = 0;
            }
        }
    }

    //this function fades the cloud
    this.fade = function() {
        //if the cloud is done moving
        if (this.speed == 0) {
            //updates the faded amount, and makes sure that it doesn't overflow
            if (this.faded <= 1) {
                this.faded += 0.001;
            }
            this.cloud_dark = lerpColor(color(237, 179, 167), color(255, 245, 227), this.faded);
            this.cloud_light = lerpColor(color(247, 208, 207), color(255, 245, 227), this.faded);

        }
    }
}
