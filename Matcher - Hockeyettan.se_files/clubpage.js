(function($) {
	$(document).ready(function () {
		if ($('#tbGroupStandingSelect').length) {
			$('#tbGroupStandingSelect').trigger('change');
		}

		$('#tbGameList .toggleWrap .tabToggle').on('click', function() {
			$('#tbGameListTeam').val($('#tbGameList').data('teamid'));
			$('#tbGameStatus').val($(this).data('type')).trigger('change');
		});

		$('#top-menu-club-select a').on('click', function(e) {
			e.preventDefault();
			$('#top-menu-club-select-wrapper').slideToggle();
		});

		var mySwiper = new Swiper('#club-page .swiper-container', {
    		speed: 400,
    		spaceBetween: 100,
				slidesPerView: 'auto',
				spaceBetween: 0,
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				paginationClickable: true
		});

		$('#club-page .mMenu').on('click', function() {
			$('#club_page_menu').slideToggle();
		});

		$('.video-wrap a.open-lightbox').lightGallery({
		    selector: 'this',
		});

		jQuery('.livestream-link').lightGallery({
			selector: 'this'
		});

		$('.live-teableau .live-tableau-sidebar a').on('click', function(e) {
			e.preventDefault();

			var $link = $(this);

			$link.closest('.live-tableau-sidebar').find('a').removeClass('active');
			$link.addClass('active');

			$link.closest('.live-teableau').find('.date-wrapper').hide();
			$link.closest('.live-teableau').find('.date-wrapper[data-date="'+$link.data("date")+'"]').show();
		});

		$('#club_page_menu ul li.page_item_has_children > a > span').on('click', function(e) {
			e.preventDefault();

			$(this).find('i').toggleClass('fa-angle-down fa-angle-up');
			$(this).closest('li').children('ul').slideToggle();
		});

		/* Lazyload */
		$('.lazy-ads').lazyload({
		  // Sets the pixels to load earlier. Setting threshold to 200 causes image to load 200 pixels
		  // before it appears on viewport. It should be greater or equal zero.
		  threshold: 140,

		  // Sets the callback function when the load event is firing.
		  // element: The content in lazyload tag will be returned as a jQuery object.
		  load: function(element) {console.log('lazy');},

		  // Sets events to trigger lazyload. Default is customized event `appear`, it will trigger when
		  // element appear in screen. You could set other events including each one separated by a space.
		  trigger: "appear"
		});
	});
}(jQuery));
window.addEventListener("load", function(){
   jQuery('[id^="groupStanding_"]').addClass("tbHidden");
   var url = new URL(window.location);
	var tabell = url.searchParams.get("t");
	console.log(tabell);
	if (tabell !== null) {
		jQuery("#tbGroupStandingSelect").val(tabell).change()
	}else{
		jQuery("#tbGroupStandingSelect").val('tb_all_tournament_groups').change()
	}
   if (jQuery("#tbGroupStandingSelect").val() === 'tb_all_tournament_groups') {
   		if (jQuery("#groupId_dd").length !== 0) {
   			jQuery("#tbGroupStandingSelect").val('groupStanding_'+jQuery("#groupId_dd").html()).change()
   		}else{
			jQuery("#tbGroupStandingSelect").val('tb_all_tournament_groups').change()
   		}
   }
   jQuery("#"+jQuery("#tbGroupStandingSelect").val()).removeClass("tbHidden");
}, false);
