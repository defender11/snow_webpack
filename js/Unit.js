import Utils from './Utils.js';

export default class Unit {
    constructor(id, options) {
        this.id = id;

        this.life = Utils.getRndInteger(15, 100);
        this.speed = Utils.getRndFloat();
        this.opacity = Utils.getRndInteger(0, 90);

        this.y = Utils.getRndInteger(-50, options.elHeight);
        this.x = Utils.getRndInteger(0, options.elWidth);

        this.size = Utils.getRndInteger(2, 7);

        this.spreading = {
            min: Utils.getRndInteger(options.unitSpreading.min, 0),
            max: Utils.getRndInteger(0, options.unitSpreading.max)
        };

        this.color = options.color !== '' ? options.color : '0, 0, 0';
    }

    subLife(value) {
        let life = this.getLife();
        let newLifeValue = life - value;
        this.setLife(newLifeValue);
    }
    getLife() {
        return this.life;
    }
    setLife(value) {
        this.life = value;
    }

    setID(id) { this.id = id; }
    getID(id) { return this.id; }

    getOpacity() {
        return this.opacity;
    }
    setOpacity(value) {
        this.opacity = value;
    }

    getSpeed() {
        return this.speed;
    }
    setSpeed(value) {
        this.speed = value;
    }

    getSize(){
        return this.size;
    }
    setSize(value){
        this.size = value;
    }

    getY() { return this.y; }
    setY(value) { this.y = value; }
    getX() { return this.x; }
    setX(value) { this.x = value; }

    isDead() {
        let life= this.getLife();
        let opacity = this.getOpacity();

        if (!life || !opacity) {
            return true;
        }
        return false;
    }

    // --------------

    move() {
        let y = this.getY(),
            x = this.getX();

        let life = this.getLife();
        let speed = this.getSpeed();
        let opacity = this.getOpacity();

        if (life) {
            this.setOpacity(parseInt(opacity - speed));
            this.subLife(speed);
        }

        y += speed;

        this.setY(y);
    }


    unitDraw(ctx) {
        let y = this.getY(),
            x = this.getX(),
            size = this.getSize();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true);
        ctx.fillStyle = "rgba(" + this.color + ", 0." + this.opacity + ")";
        ctx.fill();
    }

    render(ctx) {
        this.unitDraw(ctx);
    }
}