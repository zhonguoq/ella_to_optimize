!function(r){var e=r("[data-init-slideshow]");e.length&&e.each(function(){var e,i,d=r(this),t=d.data("auto-video");function l(e,i){null!=e&&null!=i&&e.contentWindow.postMessage(JSON.stringify(i),"*")}function n(e,i){var t,n,a;function o(e){e.target.playVideo()}function s(e){0===e.data&&(l(t,{event:"command",func:"playVideo"}),d.slick("slickPlay"),d.slick("next"))}e=e.find(".slick-current .item "),t=e.find("iframe").get(0),e.hasClass("slide-youtube")?(n=e.find("iframe").attr("id"),a=e.find("iframe").data("video-id"),"play"===i?(l(t,{event:"command",func:"playVideo"}),d.slick("slickPause"),r(t).on("ended",function(){l(t,{event:"command",func:"playVideo"}),d.slick("slickPlay"),d.slick("next")})):l(t,{event:"command",func:"pauseVideo"}),new YT.Player(n,{videoId:a,events:{onReady:o,onStateChange:s}})):e.hasClass("slide-video")&&null!=(n=e.find("video").get(0))&&("play"===i?(n.play(),d.slick("slickPause"),r(n).on("ended",function(){d.slick("slickPlay"),d.slick("next")})):n.pause())}d.find(".item-video").length&&((e=document.createElement("script")).src="https://www.youtube.com/iframe_api",(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,i)),t&&(d.on("init",function(e){e=r(e.currentTarget),setTimeout(function(){n(e,"play")},1e3)}),d.on("beforeChange",function(e,i){n(i=r(i.$slider),"pause"),d.on("mouseenter focus",function(e,i){r(".home-slideshow .slideshow").addClass("over_hover")})}),d.on("afterChange",function(e,i){r(".item.slick-slide:not(.slick-current) .fluid-width-video-wrapper .video").css("display","none"),r(".slick-current .fluid-width-video-wrapper .video").css("display","block"),n(i=r(i.$slider),"play"),r("video").prop("muted"),r("video").prop("muted",!0)})),d.not(".slick-initialized")&&d.slick({dots:d.data("dots"),slidesToScroll:1,verticalSwiping:!1,fade:d.data("fade"),cssEase:"ease",adaptiveHeight:!0,autoplay:d.data("autoplay"),autoplaySpeed:d.data("autoplay-speed"),arrows:d.data("arrows"),nextArrow:window.arrows.icon_next,prevArrow:window.arrows.icon_prev,rtl:window.rtl_slick,speed:d.data("speed")||500,responsive:[{breakpoint:1280,settings:{arrows:!1,dots:!0}},{breakpoint:768,settings:{arrows:!1,dots:!0}}]})})}(jQuery);