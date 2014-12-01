$(function () {
	$('#picker').on("change", function () {
		var selectedGroup = $(this).val();
		$('div').hide();
		$('.' + selectedGroup).show();
		if (selectedGroup === "0") {
			$('div').show();
		}
	});
});