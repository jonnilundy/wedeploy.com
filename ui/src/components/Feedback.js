'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toast from 'metal-toast';

import templates from './Feedback.soy';

class Feedback extends Component {

	sendFeedback(event) {
		this.sendFeedbackToWeDeploy(event.target.dataset.feedback == 'true')
			.then((result) => {
				this.showToast('Thanks for your feedback!', 'alert-success');
			})
			.catch((error) => {
				this.showToast('Something wrong happened! Please try again later.', 'alert-danger');
			});
	}

	sendFeedbackToWeDeploy(liked) {
		return WeDeploy.data('https://db-wedeploy.wedeploy.sh')
			.create('feedback', {
				liked: liked,
				url: window.location.href,
				timestamp: new Date().toISOString()
			});
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

Soy.register(Feedback, templates);

export default Feedback;
