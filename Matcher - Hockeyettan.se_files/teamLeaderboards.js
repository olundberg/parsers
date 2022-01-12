
var TeamLeaderboards = function() {
	return {
		Powerplay: "powerplay",
		BoxPlay: "boxplay",
		Attendance: "attendance"
	};
}();

var TeamLeaderboard = function() {
	
	function setup() {
		// Is the module active.
		if (jQuery("#tbTeamLeaderboard").length > 0) {
			jQuery("#tbTeamLeaderboardSelect").on("change", updateView);
			jQuery("#tbLeaderboardGroupSelect").on("change", updateView);
		}
	}



	function setLeaderboardSelectOptionEnabled(option, enabled) {
		var option = jQuery("#tbTeamLeaderboardSelect option[value='" + option + "']");
		if (enabled === true) {
			option.removeAttr("disabled");
		}
		else {
			option.attr("disabled", "disabled");
		}
	}

	function updateView() {
		var data = {
			action: jQuery("#tbTeamLeaderboard").attr("data-action"),
			leaderbordGroupId: jQuery("#tbLeaderboardGroupSelect").val(),
			leaderboardType: jQuery("#tbTeamLeaderboardSelect").val()
		};

                console.log(data.leaderbordGroupId);
                console.log(data.leaderboardType);

		jQuery.ajax({
			type: "GET",
			url: jQuery("#tbTeamLeaderboard").attr("data-url"),
			data: data,
			dataType: "json",
			beforeSend: function(response){
				var preloader = '<div class="loaderOverlay"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div>';
				jQuery('#tbTLContent').prepend(preloader);
				jQuery('.loaderOverlay').fadeIn();
			},
			success: function(response) {
				jQuery("#tbTLContent").empty();
				jQuery("#tbTLContent").append(response.output);
			},
			error: function(response) {
				jQuery("#tbTLContent").empty();
				jQuery("#tbTLContent").append("<div class='no-data'><div class='message bounceIn'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>Misslyckades hämta data.</div></div>");

			}
		});
	}

	return {
		setup: function() {
			setup();
		}
	}
}();

jQuery(document).ready(function() {
	TeamLeaderboard.setup();
});
