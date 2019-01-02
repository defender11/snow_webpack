import Utils from './Utils.js';
import unitMoveAlgorithm from './unitMoveAlgorithm.js'

export default class Unit {
    constructor(id, options) {
        this.id = id;

        this.life = Utils.getRndInteger(15, 100);
        this.speed = Utils.getRndFloat();
        this.opacity = Utils.getRndInteger(0, 90);

        this.y = Utils.getRndInteger(-50, options.elHeight);
        this.x = Utils.getRndInteger(0, options.elWidth);

        this.plainH = options.elHeight;
        this.plainW = options.elWidth;

        this.size = Utils.getRndInteger(1, 3);

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

    getPlainW() {
        return this.plainW;
    }
    getPlainH() {
        return this.plainH;
    }

    isDead() {
        let life= this.getLife();
        let opacity = this.getOpacity();

        if (!life || !opacity) {
            return true;
        }
        return false;
    }

    // --------------

    move(mouseOffset) {
        let life = this.getLife();

        if (life) {
            let x = this.getX(),
                y = this.getY(),
                speed = this.getSpeed(),
                opacity = this.getOpacity(),
                plainW = this.getPlainW(),
                plainH = this.getPlainH(),
                speedRandom =  Utils.getRndFloat(),
                mouseX = mouseOffset.x,
                mouseY = mouseOffset.y;

            let params = {
                speed: speed,
                speedRandom: speedRandom,
                opacity: opacity,
                plainW: plainW,
                plainH: plainH,
                mouseX: mouseX,
                mouseY: mouseY,
                x: x,
                y: y,
            };
            let unitCalculateParams = unitMoveAlgorithm.getCalculateParams(params);

            // --------------

            this.setOpacity(unitCalculateParams.opacity);
            this.subLife(unitCalculateParams.speed);
            this.setX(unitCalculateParams.x);
            this.setY(unitCalculateParams.y);
        }
    }

    unitDraw(ctx) {
        let y = this.getY(),
            x = this.getX(),
            size = this.getSize();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true);
        ctx.fillStyle = "rgba(" + this.color + ", 0." + this.opacity + ")";
        ctx.fill();
        ctx.closePath();
    }

    render(ctx) {
        this.unitDraw(ctx);
    }
}