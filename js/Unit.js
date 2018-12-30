import Utils from './Utils.js';

export default class Unit {
    constructor(id, options) {
        this.id = id;
        this.life = Utils.getRndInteger(15, 100);
        this.speed = Utils.getRndInteger(2, 50);
        this.opacity = Utils.getRndInteger(0, 80);
        this.startPositionTop = Utils.getRndInteger(-10, options.elHeight);
        this.startPositionLeft = Utils.getRndInteger(0, options.elWidth);
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

    move() {

        this.subLife(1);

        this.startPositionTop += this.speed;
        // this.startPositionLeft++;

    }

    isDead() {
        let lifeValue = this.getLife();
        return !lifeValue;
    }


    unitDraw(ctx) {
        ctx.beginPath();
        ctx.arc(this.startPositionLeft, this.startPositionTop, this.size,0,Math.PI*2, false);
        ctx.fillStyle = "rgba(" + this.color + ", 0." + this.opacity + ")";
        ctx.fill();
    }

    render(ctx) {
        this.unitDraw(ctx);
    }


}