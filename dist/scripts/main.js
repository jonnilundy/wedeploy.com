'use strict';

import { object } from 'metal';
import Toast from 'metal-toast';

/* ==========================================================================
	 Senna Lifecycle
	 ========================================================================== */

window.addEventListener('load', function() {
	var app = senna.dataAttributeHandler.getApp();
	app.on('endNavigate', endNavigate);
});

function endNavigate(e) {
	if (e.error) {
		onNavigateError(e);
	} else {
		onNavigateSuccess(e);
	}
}

function onNavigateError(e) {
	showErrorNavigationToast();
}

function onNavigateSuccess(e) {
	//ga('set', 'page', e.path);
	//ga('send', 'pageview');
}

function showErrorNavigationToast() {
	if (navigationErrorToast) {
		navigationErrorToast.dispose();
		navigationErrorToast = null;
	}

	var navigationErrorToast = new metal.Toast({
		body: 'The page cannot be loaded. Try reloading it. <a class="alert-undo-link" href="javascript:location.reload();">reload</a>',
		dismissible: true,
		elementClasses: 'alert-danger',
		hideDelay: 5000,
		spinner: true,
		spinnerDone: true,
		visible: true
	});
}
