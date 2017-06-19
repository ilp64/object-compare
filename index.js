function objectCompare(o1, o2) {
	var index;
	var key;
	if (o1 === null || o2 === null) {
		return o1 === o2;
	}
	if (typeof o1 !== 'object') {
		if (typeof o2 !== 'object') {
			return o1 === o2;
		} else {
			return false;
		}
	} else {
		if (typeof o2 !== 'object') {
			return false;
		} else {
			index = Object.keys(o1).length > Object.keys(o2).length ? 0 : 1;
			key;
			for (key in arguments[index]) {
				if (!key in arguments[Math.abs(index - 1)] || !objectCompare(o1[key], o2[key])) {
					return false;
				}
			}
		}
	}
	return true;
};

module.exports = objectCompare;
