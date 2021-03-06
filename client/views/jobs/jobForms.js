AutoForm.addHooks(['jobNew', 'jobEdit'], {
	after: {
		insert: function(error, result) {
			if (error) {
				console.log("Insert Error:", error);
			} else {
				ga("send", "event", "job", "insert", result.title);
				Router.go('job', {_id:result});
			}
		},
		update: function(error, result) {
			if (error) {
				console.log("Update Error:", error);
			} else {
				ga("send", "event", "job", "update", result.title);
				Router.go('job', {_id: Router.current().params._id});
			}
		}
	}
});

Template.jobEdit.events({
	'click #cancel':function(event, template){
		event.preventDefault();
		Router.go("job",{_id:this.job._id});
	}
});

Template.jobLabels.helpers({
    isBounty: function () {
        return this.jobtype === 'Bounty';
    }
});
