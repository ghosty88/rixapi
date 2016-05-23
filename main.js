$page = $('.landing');

$mobileIcon = $('.mobile-icon');
$mobileMenu = $('.slider-menu');

var pageTimeframe = 700;
var menuTimeframe = 400;

$(document).ready(function() {
    $page.fadeIn(pageTimeframe);
    $mobileIcon.click(function(){
        $mobileMenu.find('ul').toggle(200).find('li').each(function(){
            if ($(this).hasClass('active-li')){
                $(this).removeClass('active-li');
            }
            else $(this).addClass('active-li');
        });
    });
});