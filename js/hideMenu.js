$(document).ready(function() {
	$(function() {
		$('#showPhoneNav').click(function() {
			$('#myNav').slideToggle('normal', function () {
				if ($('#myNav').is(':visible')) {
					$('#showPhoneNav').text('Hide Navigation');
				}
				else {
					$('#showPhoneNav').text('Show Navigation');
				} // end of if 
			}); // end of slide toggle
		}); // end of myNav
	}); // end of showPhoneNav
}); //end of ready