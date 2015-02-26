UI.registerHelper("formatDate", function(timestamp) {
	if(timestamp)
		return moment(timestamp).format('MMMM Do YYYY');
});

UI.registerHelper("currentUserDisplayName", function() {
	return getUserName(Meteor.user());
});


UI.registerHelper("currentUserEmail", function() {
	return getUserEmail(Meteor.user());
});

UI.registerHelper("resizeImageUrl", function(imageUrl, height, width) {
	if(imageUrl)
      return imageUrl + "-/resize/" + height + "x" + width + "/";
});
