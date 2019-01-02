import Unit from "./Unit.js";
import Utils from "./Utils";

let app;

app = class App {
    constructor(settings) {
        this.units = [];
        this.options = {};

        this.options = settings;

        this.options.elWidth = settings.el.offsetWidth;
        this.options.elHeight = settings.el.offsetHeight;

        this.options.unitsCount = 5;

        this.options.color = settings.color !== '' ? settings.color : '0, 0, 0';

        this.ctx = this.options.el.getContext("2d");

        this.mouseX = 0;
        this.mouseY = 0;

        this.generateUnits();
    }

    run() {
        let _this_o = this;

        setInterval(function () {
            _this_o.clearCtx();

            _this_o.updateUnitsCount();

            _this_o.updateMouseCoordinate();

            _this_o.render();

        }, _this_o.options.frameRate);
    }

    render() {
        for (let id = 0; id < this.getUnitsCount(); id++) {
            let unit = this.getUnit(id);

            if (unit.isDead()) {
                this.removeUnit(id);
                this.createUnit();

            } else {
                let mouseOffset = this.getMouseCoordinate();

                unit.move(mouseOffset);
                unit.render(this.ctx);
            }
        }
    }

    clearCtx() {
        this.ctx.clearRect(0, 0, this.options.elWidth, this.options.elHeight);
    }

    // Generate FirstPoolUnits
    generateUnits() {
        for (let id = 0; id < this.options.countUnits; id++) {
            this.addUnit(this.generateUnit(id));
        }

        this.updateUnitsCount();
    }

    generateUnit(id) {
        return new Unit(id, this.options);
    }

    getUnit(id) {
        return this.units[id];
    }

    createUnit() {
        let countUnits = this.getUnitsCount();
        let newUnit = this.generateUnit(countUnits);
        this.addUnit(newUnit);
    }

    addUnit(unit) {
        this.units.push(unit)
    }

    removeUnit(id) {
        delete this.units[id];
        this.units.splice(id, 1);
    }

    issetUnit() {

    }

    updateUnitsCount() {
        this.options.unitsCount = this.getUnitsCount();
    }

    getUnitsCount() {
        return this.units.length;
    }

    setMouseX(value) {
        this.mouseX = value;
    }
    setMouseY(value) {
        this.mouseY = value;
    }
    getMouseX() {
        return this.mouseX;
    }
    getMouseY() {
        return this.mouseY;
    }

    updateMouseCoordinate() {
        let mouseX,
            mouseY;

        mouseX = this.options.el.getAttribute('x');
        mouseY = this.options.el.getAttribute('Y');

        this.setMouseX(Number(mouseX));
        this.setMouseY(Number(mouseY));
    }

    getMouseCoordinate() {
        return {
            x: this.getMouseX(),
            y: this.getMouseY(),
        };
    }
};
export default app;