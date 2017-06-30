'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toast from 'metal-toast';

import templates from './Newsletter.soy';

class Newsletter extends Component {

	subscribeToNewsletter(event) {
		event.preventDefault();

		this.sendSubscriptionToWeDeploy(event.target.email.value)
			.then((result) => {
				event.target.email.value = "";
				this.showToast('Thanks for subscribing!', 'alert-success');
			})
			.catch((error) => {
				this.showToast('Something wrong happened! Please come back later.', 'alert-danger');
			});
	}

	sendSubscriptionToWeDeploy(userEmail) {
		return WeDeploy.data('https://db-wedeploy.wedeploy.io')
			.create('newsletter', {
				email: userEmail,
				timestamp: new Date().toISOString()
			})
	}

	showToast(bodyText, toastClass) {
		if (this.toast) {
			this.toast.dispose();
			this.toast = null;
		}

		this.toast = new Toast({
			body: bodyText,
			dismissible: true,
			elementClasses: toastClass,
			hideDelay: 5000,
			spinner: true,
			spinnerDone: true,
			visible: true
		});
	}

};

Soy.register(Newsletter, templates);

export default Newsletter;
