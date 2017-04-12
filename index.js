module.exports = function (o1, o2) {
	if (o1 === null) {
		o1 = {};
	}
	if (o2 === null) {
		o2 = {};
	}
	if (typeof o1 !== 'object') {
		if (typeof o2 !== 'object') {
			return o1 === o2;
		} else {
			return 0;
		}
	} else {
		if (typeof o2 !== 'object') {
			return 0;
		} else {
			let index = Object.keys(o1).length > Object.keys(o2).length ? 0 : 1;
			let key;
			for (key in arguments[index]) {
				if (!key in arguments[Math.abs(index - 1)] || !objectCompare(o1[key], o2[key])) {
					return 0;
				}
			}
		}
	}
	return 1;
};