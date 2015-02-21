generateGuid = function () {
	function s4 () {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};

	return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};

TrackedItems = (function () {
	return function () {
		var _trackedItems = {};

		var _checkTrackedItem = function (trackedKey) {
			if (!_trackedItems[trackedKey]) {
				_trackedItems[trackedKey] = new Tracker.Dependency();
			}
		};

		return {
			depend: function (trackedKey) {
				_checkTrackedItem(trackedKey);
				_trackedItems[trackedKey].depend();
			},
			changed: function (trackedKey) {
				_checkTrackedItem(trackedKey);
				_trackedItems[trackedKey].changed();
			}
		}
	}
} ());

checkProperty = function (object, key, sourceFilename) {
	var result = _.has(object, key);
	if (!result) {
		console.log('missing key:', key, 'in:', sourceFilename, 'from object:', object);
	}

	return result;
};