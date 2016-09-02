$(function() {
    
    
    
    
    // Section TEAM
    
    var profile = $('.team-profiles').find('>div');
//    var prev = $('.team-arrows').first();
//    var next = $('.team-arrows').last();
    
    var bars = $('.progress-bars');
    var webBar = $('.progress-bars').find('.web-bar');
    var graphicBar = $('.progress-bars').find('.graphic-bar');
    var htmlBar = $('.progress-bars').find('.html-bar');
    var uxBar = $('.progress-bars').find('.ux-bar');
    
    console.log(profile, webBar);
    
    profile.on('mouseenter', function() {
//        $(this).animate({
//            transform: 'scale(1.2)',
//        }, 1000);
        
        
//        $(this).css('borderSpacing', 1).animate(
//            {
//              borderSpacing: 1.2
//            },
//            {
//            step: function(now,fx) {
//              $(this).css('transform','scale('+now+')');  
//            },
//            duration: 500
//        });
        
        if ($(this).hasClass('profile-1')) {
            var webProgress = webBar.find('.bar-progress');
            webProgress.animate({
                width: (0.9*webProgress.parent().width())
            }, 500);
            webBar.find('.bar-percentage').text('90%');
            
            var graphicProgress = graphicBar.find('.bar-progress');
            graphicProgress.animate({
                width: (0.7*graphicProgress.parent().width())
            }, 500);
            graphicBar.find('.bar-percentage').text('70%');
            
            htmlBar.find('.bar-progress').animate({
                width: '75%'
            }, 500);
            htmlBar.find('.bar-percentage').text('75%');
            
            uxBar.find('.bar-progress').animate({
                width: '75%'
            }, 500);
            uxBar.find('.bar-percentage').text('75%');
            
        } else if ($(this).hasClass('profile-2')) {
            var innerProgress = webBar.find('.bar-progress');
            innerProgress.animate({
                width: (0.15*innerProgress.parent().width())
            }, 500);
            webBar.find('.bar-percentage').text('40%');
            
            graphicBar.find('.bar-progress').animate({
                width: '95%'
            }, 500);
            graphicBar.find('.bar-percentage').text('95%');
            
            htmlBar.find('.bar-progress').animate({
                width: '70%'
            }, 500);
            htmlBar.find('.bar-percentage').text('70%');
            
            uxBar.find('.bar-progress').animate({
                width: '90%'
            }, 500);
            uxBar.find('.bar-percentage').text('90%');
            
        } else {
            webBar.find('.bar-progress').animate({
                width: '65%'
            }, 500);
            webBar.find('.bar-percentage').text('65%');
            
            graphicBar.find('.bar-progress').animate({
                width: '70%'
            }, 500);
            graphicBar.find('.bar-percentage').text('70%');
            
            htmlBar.find('.bar-progress').animate({
                width: '35%'
            }, 500);
            htmlBar.find('.bar-percentage').text('35%');
            
            uxBar.find('.bar-progress').animate({
                width: '75%'
            }, 500);
            uxBar.find('.bar-percentage').text('75%');
        }
    })
    
    profile.on('mouseleave', function() {
        $(this).removeClass('profile-focus');
        
        
        //bars.find('.bar-percentage').text('');
        bars.find('.bar-progress').finish();
    })
    
    $('.team-profiles').on('mouseleave', function() {
        bars.find('.bar-progress').css('width', 0);
    })
    
    
    // Section BLOG
    
    var days = $('.data-days');
    var activity = $('.data-active');
    var users = $('.data-users');
    var posts = $('.data-posts');
    
    var countStop = 1;
    
    // marekwozniak1@gmail.com 785 119 505
    
    $(window).on('scroll', function() {
        
        var position = $('#blog').offset().top -$(window).height();
        var temp = 0;
        
        
        if (($(window).scrollTop() > position) && countStop) {
            
            var interval = setInterval(count, 10);
            countStop = 0;
            function count() {
                temp+=9;
                var t1 = temp.toString().substr(0,1);
                var t2 = temp.toString().substr(1,4);
                
                var result = t1 + ',' + t2;
                $('.data-days').text(result);
                if (temp >= 5365) {
                    clearInterval(interval);
                }
            }
        }
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});