function objectCompare(o1, o2) {
	var index;
	var key;
	var count = 0;
	var aryCompareRes = true;
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
			if (Array.isArray(o1)) {
				count++;
			}
			if (Array.isArray(o2)) {
				count++;
			}
			if (count === 1) {
				return false;
			} else if (count === 2) {
				if (o1.length !== o2.length) {
					return false;
				}
				aryCompareRes = o1.every(function (item, itemIndex) {
					return objectCompare(item, o2[itemIndex]);
				});
				if (!aryCompareRes) {
					return false;
				}
			} else {
				index = Object.keys(o1).length > Object.keys(o2).length ? 0 : 1;
				for (key in arguments[index]) {
					if (!key in arguments[Math.abs(index - 1)] || !objectCompare(o1[key], o2[key])) {
						return false;
					}
				}
			}
		}
	}
	return true;
}

module.exports = objectCompare;
