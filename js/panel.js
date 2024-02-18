jQuery(document).ready(function(){
 
	jQuery('.btn-slid').click(function(){
		jQuery('#panel').slideToggle('slow');
		jQuery(this).toggleClass('active'); return false;
	});
});