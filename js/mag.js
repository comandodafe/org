jQuery(document).ready(function(){
            jQuery(".mag").click(function(){
                jQuery("#contato").slideToggle('slow');
                jQuery(this).toggleClass(''); return false;
            });
        });
