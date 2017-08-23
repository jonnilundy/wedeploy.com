var pageComponent =
webpackJsonppageComponent([202],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dispatchGlobalState = dispatchGlobalState;
function dispatchGlobalState() {
	if (window.electricPageComponent) {
		try {
			window.electricPageComponent.setState({
				element: '#pageComponent',
				page: page,
				site: data.site
			});
		} catch (error) {}
	}
}

/***/ })

},[31]);