(function ( $ ) {

    $.fn.socialShare = function( options ) {

        // Default options
        var settings = $.extend({
            facebook: true,
            twitter: true,
            pinterest: true,
            linkedin: true,
            whatsapp: true,
            google: true,
            reddit: true,
            tumblr: true,
            responsive: true,
            sidebar: true,
            extended: false
        }, options );

        var shareUrls = {
            facebook: "https://www.facebook.com/sharer/sharer.php?u=",
            twitter: "https://twitter.com/intent/tweet?text=",
            pinterest: "https://pinterest.com/pin/create/button/?url=",
            linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
            whatsapp: "whatsapp://send?text=",
            google: "https://plus.google.com/share?url=",
            reddit: "https://www.reddit.com/submit?url=",
            tumblr: "https://tumblr.com/share/link?url="
        };

        var urlToShare = window.location.href;
        var shareUrl = [];
        var html = [];
        var div = '<div id="socialShare"> <div class="shareButton"></div><div class="socialShareContainer"></div></div>';
        $(this).after(div);


        if(settings.facebook === true){
            shareUrl.push({"facebook" : shareUrls.facebook+urlToShare});
        }
        if(settings.twitter === true){
            shareUrl.push({ "twitter" :  shareUrls.twitter+urlToShare});
        }
        if(settings.pinterest === true){
            shareUrl.push({ "pinterest" :  shareUrls.pinterest+urlToShare});
        }
        if(settings.linkedin === true){
            shareUrl.push({ "linkedin" :  shareUrls.linkedin+urlToShare});
        }
        if(settings.whatsapp === true){
            shareUrl.push({ "whatsapp" :  shareUrls.whatsapp+urlToShare});
        }
        if(settings.google === true){
            shareUrl.push({ "google" :  shareUrls.google+urlToShare});
        }
        if(settings.reddit === true){
            shareUrl.push({ "reddit" :  shareUrls.reddit+urlToShare});
        }
        if(settings.tumblr === true){
            shareUrl.push({ "tumblr" :  shareUrls.tumblr+urlToShare});
        }

        $.each(shareUrl, function(key, value){
            $.each(value, function(key, value){
                html.push({html: "<div class='"+key+"_container'><a href='"+value+"' class='"+key+"_icon'></a></div>"})
            });
        });

        $.each(html, function(key, value){
            $("#socialShare .socialShareContainer").append(value.html);
        });

        $(".shareButton").on("click", function() {
            $(this).next().slideToggle();
        });


    }

}( jQuery ));