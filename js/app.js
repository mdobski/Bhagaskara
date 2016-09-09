$(function() {
    
    // Section HOME
    
    
    
    
    // Section TEAM
    
    var profile = $('.team-profiles').find('>div');
    
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
            
            var htmlProgress = htmlBar.find('.bar-progress');
            htmlProgress.animate({
                width: (0.75*htmlProgress.parent().width())
            }, 500);
            htmlBar.find('.bar-percentage').text('75%');
            
            var uxProgress = uxBar.find('.bar-progress');
            uxProgress.animate({
                width: (0.75*uxProgress.parent().width())
            }, 500);
            uxBar.find('.bar-percentage').text('75%');
            
        } else if ($(this).hasClass('profile-2')) {
            var webProgress = webBar.find('.bar-progress');
            webProgress.animate({
                width: (0.40*webProgress.parent().width())
            }, 500);
            webBar.find('.bar-percentage').text('40%');
            
            var graphicProgress = graphicBar.find('.bar-progress');
            graphicProgress.animate({
                width: (0.95*graphicProgress.parent().width())
            }, 500);
            graphicBar.find('.bar-percentage').text('95%');
            
            var htmlProgress = htmlBar.find('.bar-progress');
            htmlProgress.animate({
                width: (0.7*htmlProgress.parent().width())
            }, 500);
            htmlBar.find('.bar-percentage').text('70%');
            
            var uxProgress = uxBar.find('.bar-progress');
            uxProgress.animate({
                width: (0.9*uxProgress.parent().width())
            }, 500);
            uxBar.find('.bar-percentage').text('90%');
            
        } else {
            var webProgress = webBar.find('.bar-progress');
            webProgress.animate({
                width: (0.65*webProgress.parent().width())
            }, 500);
            webBar.find('.bar-percentage').text('65%');
            
            var graphicProgress = graphicBar.find('.bar-progress');
            graphicProgress.animate({
                width: (0.7*graphicProgress.parent().width())
            }, 500);
            graphicBar.find('.bar-percentage').text('70%');
            
            var htmlProgress = htmlBar.find('.bar-progress');
            htmlProgress.animate({
                width: (0.35*htmlProgress.parent().width())
            }, 500);
            htmlBar.find('.bar-percentage').text('35%');
            
            var uxProgress = uxBar.find('.bar-progress');
            uxProgress.animate({
                width: (0.75*uxProgress.parent().width())
            }, 500);
            uxBar.find('.bar-percentage').text('75%');
        }
    })
    
    profile.on('mouseleave', function() {
        $(this).removeClass('profile-focus');
        
        
        bars.find('.bar-percentage').text('');
        bars.find('.bar-progress').finish();
    })
    
    $('.team-profiles').on('mouseleave', function() {
        bars.find('.bar-progress').animate({
            width: 0
        }, 300)
    })
    
    
    // Section BLOG
    
    var days = $('.data-days');
    var activity = $('.data-active').find('span');
    var users = $('.data-users');
    var posts = $('.data-posts');
    
    var countStop = 1;
    
    $(window).on('scroll', function() {
        
        var position = $('#blog').offset().top - $(window).height() + ($('#blog').height() * 0.4);
        var tempDays = 0;
        var tempActivity = 0;
        var tempUsers = 0;
        var tempPosts = 0;
        
        
        if (($(window).scrollTop() > position) && countStop) {
            
            var intervalDays = setInterval(countDays, 15);
            var intervalActivity = setInterval(countActivity, 17);
            var intervalUsers = setInterval(countUsers, 8);
            var intervalPosts = setInterval(countPosts, 6);
            countStop = 0;
            
            function countDays() {
                tempDays+=5;
                
                days.text(tempDays);
                if (tempDays >= 365) {
                    clearInterval(intervalDays);
                }
            }
            
            function countActivity() {
                tempActivity+=1;
                
                activity.text(tempActivity);
                if (tempActivity >= 98) {
                    clearInterval(intervalActivity);
                }
            }
            
            function countUsers() {
                tempUsers+=3;
                
                users.text(tempUsers);
                if (tempUsers >= 873) {
                    clearInterval(intervalUsers);
                }
            }
            
            function countPosts() {
                tempPosts+=11;
                
                var t1 = tempPosts.toString().substr(0,1);
                var t2 = tempPosts.toString().substr(1,4);
                
                var result = t1 + ',' + t2;
                posts.text(result);
                if (tempPosts >= 5379) {
                    clearInterval(intervalPosts);
                }
            }
        }
        
    });
    
    
    // Section PORTFOLIO
    
    var imgs = document.querySelectorAll('.thumbnails>div');
    var btns = document.querySelectorAll('.tag-btns>button');
    var btnAll = document.querySelector('.all');
    
    btnAll.classList.add('selected');
    
    
    function tags() {
        for (var i = 0; i < btns.length; i++) {

            btns[i].addEventListener('click', function() {
                var tag = this.dataset.tag;
                
                btns.forEach(function(btn){
                    btn.classList.remove('selected');
                })
                this.classList.add('selected');
                console.log(this.parentElement.children);
                

                if (tag != 'all') {
                    for (var j = 0; j < imgs.length; j++) {
                        var tags = imgs[j].dataset.tag;
                        
                        imgs[j].classList.add('invisible');
                        
                        for (var t = 0; t < tags.length; t++) {
                            if (tag == tags.substring(t, t + tag.length)) {
                                imgs[j].classList.remove('invisible');

                            }
                        }
                    }
                } else {
                    for (var j = 0; j < imgs.length; j++) {
                        imgs[j].classList.remove('invisible');
                    }
                }

            })
        }
    }
    
    tags();
    
    var body = document.querySelector('body');
    var images = document.querySelectorAll('.thumb-img');
    
    var bigImg = document.createElement('div');
    bigImg.classList.add('fullscreen');
    bigImg.innerHTML = '<img>';
    
    function enlarge() {
        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function() {
                var src = $(this).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
                
                var img = bigImg.querySelector('img');
                img.setAttribute('src', src);
                
                body.appendChild(bigImg);
            })
        }
        var image = bigImg.querySelector('img');
        image.addEventListener('click', function() {
            body.removeChild(bigImg);
        })
    }
    
    enlarge();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});