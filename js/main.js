$(function(){
    // 
    var duration = 300;

    // aside ----------------------------------------
    var $aside = $('div.list > div > div#aside');
    var $asidButton = $aside.find('div.list > div.margin > i')
    .on('click', function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $aside.stop(true).animate({left: '-70px'}, duration, 'easeOutBack');
            $asidButton.find('i').attr('class', 'fas fa-clipboard-list');
        }else{
            $aside.stop(true).animate({left: '-350px'}, duration, 'easeInBack');
            $asidButton.find('i').attr('class', 'fas fa-clipboard-list');
        };
    });

});