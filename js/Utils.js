export default {
	getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	getRndFloat() {
		return parseFloat(Math.random().toFixed(2));
	}
}