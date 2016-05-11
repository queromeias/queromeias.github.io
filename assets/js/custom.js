$(function () {
	$('.lazy').lazy({
		// loads instantly
		row: function (element) {
			element.load();
		}
	});
});