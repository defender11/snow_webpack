let sideDetect = {
    get: function (params) {
        return this.getSide(params)
    },

    getSide: function (params) {
        if (this.isLeftSide(params)) {
            return "left";
        }
        if (this.isRightSide(params)) {
            return "right";
        }
        if (this.isTopSide(params)) {
            return "top";
        }
        if (this.isBottomSide(params)) {
            return "bottom";
        }

        return "";
    },

    isLeftSide: function (params) {
        if (
            params.x < params.mouseX
        ) {
            return true;
        }

        return false;
    },
    isRightSide: function (params) {
        if (
            params.x > params.mouseX
        ) {
            return true;
        }

        return false;

    },
    isTopSide: function (params) {
        if (
            params.y < params.mouseY
        ) {
            return true;
        }

        return false;
    },
    isBottomSide: function (params) {
        if (
            params.y > params.mouseY
        ) {
            return true;
        }

        return false;
    }
};

export default sideDetect;