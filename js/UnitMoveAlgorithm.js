import sideDetect from './sideDetect.js'

let unitMoveAlgorithm = {
    params: {},

    setParams(params) {
        if (!this.isEmptyObject(params)) {
            for (var param in params) {
                if (params[param] !== '') {
                    this.params[param] = params[param];
                }
            }
        }
    },

    getCalculateParams(params) {
        this.setParams(params);

        this.calculateOpacity();

        this.calculateMove();

        this.calculateCollision();

        return this.getParams();
    },

    calculateOpacity() {
        let algParams = this.getParams();

        //opacity - speed
        let opacity = Math.floor(algParams.opacity - algParams.speed);

        this.updateParams({opacity: opacity});
    },
    calculateMove() {
        let algParams = this.getParams();

        let x = algParams.x,
            y = algParams.y;

        // if (algParams.x < algParams.plainW) {
        //     x += algParams.speedRandom;
        // }

        y += algParams.speedRandom *4;

        this.updateParams({
            x: x,
            y: y
        });
    },
    calculateCollision() {
        let algParams = this.getParams();

        let x = algParams.x,
            y = algParams.y,
            mouseX = algParams.mouseX,
            mouseY = algParams.mouseY;

        let unitSide = sideDetect.get({
            x: algParams.x,
            y: algParams.y,
            mouseX: algParams.mouseX,
            mouseY: algParams.mouseY
        });

        let spreading = .5;
        if (unitSide === 'top') {
            y -= spreading;
        }
        if (unitSide === 'left') {
            x -= spreading;
        }
        if (unitSide === 'right') {
            x += spreading;
        }
        if (unitSide === 'bottom') {
            y += spreading;
        }

        this.updateParams({
            x: x,
            y: y
        });
    },

    getParams() {
        return this.params;
    },
    updateParams(params) {
        if (!this.isEmptyObject(params)) {
            this.setParams(params);
        }
    },
    isEmptyObject(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }
};

export default unitMoveAlgorithm;