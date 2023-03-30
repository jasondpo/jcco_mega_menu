var header = (function(){

    let mainNavItem = $(".mega-menu-container > li > a");
    var selectedBtn = document.querySelector(":root");


    // Get screen width
    function getScreenWidth(){
        let screenWidth = window.innerWidth;
        return screenWidth;
    }

    // Mouse over
    $(".triggerOverlay").mouseover(function () {   
        if(getScreenWidth() > 990){
            
            $(".dark-transparent-screen-overlay").fadeIn("fast");
            selectedBtn.style.setProperty("--linkSelected", "rgba(60, 132, 233, 0)");
            mainNavItem.each(function(){
                $(this).css("opacity",".4");
            })
                $(this).css("opacity","1");
        }
    })

    // Mouse leave
    $(".mega-menu-container").mouseleave(function () { 
        if(getScreenWidth() > 990){
            $(".dark-transparent-screen-overlay").fadeOut("fast");
            mainNavItem.each(function(){
                $(this).css("opacity","1")
            })
            selectedBtn.style.setProperty("--linkSelected", "rgba(60, 132, 233, 1)");
        } 
    })

    // Debounce resets mobile dropdown
    const debounce = (fn, delay)=>{
        let timeoutID;
        return function(...args){
            if(timeoutID){
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(()=>{
                fn(...args);
            }, delay);
        };
    };

    // On resize
    window.addEventListener("resize", debounce(e =>{
        resetMainNavState();
    },250))

    function resetMainNavState(){
        if($('.mega-menu-container').is(":visible")){
            $(".menuMobileUnderlay").css("background-color","rgba(0, 0, 0, 0)");
            $('.mega-menu-container').removeClass('display');
            $(".searchBtn").removeClass("ghosted");
            $('.mobile-menu-container').removeClass('formX');
            $(".dark-transparent-screen-overlay").fadeOut(25);
            $('.mega-drop-down').each(function(){
                $(this).find(".single-mega-menu").css("display","");
            })
        }
    }

    // Change colors after scrolled set distance
    let throttleTimer;
    let navBarColor = $(".top-header-main-nav-wrapper");
    let mainHero = $(".j-container:first");
    // let mainHero = $("#bloc-1");

    const throttle = (callback, time) => {
    if (throttleTimer) return;
        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    }

    window.addEventListener("scroll", () => { 
        throttle(navBarColorChange, 150);
    });

    function navBarColorChange() {
        let scrollPos = window.pageYOffset;
        if(scrollPos > 120 && getScreenWidth() > 960){
            mainHero.addClass("marginTop");
            navBarColor.addClass("main-nav-scrolled");
        }else{
            navBarColor.removeClass("main-nav-scrolled");
            mainHero.removeClass("marginTop");
        };
    }

    ////// Mobile /////////
    $('.mobile-menu-container').click(function(){
        $('.mega-menu-container').toggleClass('display');
        $(this).toggleClass("formX");
        if($(".dark-transparent-screen-overlay").is(":hidden")){
            $(".menuMobileUnderlay").css("background-color","rgba(0, 0, 0, .5)");
            $(".dark-transparent-screen-overlay").fadeIn(150);
            $(".searchBtn").addClass("ghosted");
        }else{
            $(".menuMobileUnderlay").css("background-color","rgba(0, 0, 0, 0)");
            $(".dark-transparent-screen-overlay").fadeOut(150);
            $(".searchBtn").removeClass("ghosted");
        }     
    });  

    /// Create function that toggles dropdown in mobile
    $('.mega-drop-down').on({'touchstart' : function(){
         let thisIndex =  $('.mega-drop-down').index(this);
        $('.mega-drop-down').each(function(){
           if($('.mega-drop-down').index(this) != thisIndex){
            $(this).find(".single-mega-menu").hide();
           }else{
            $(this).find(".single-mega-menu").toggle();
           }
        })
    }}); 

    // On click shows search bar
    $('.searchBtn').click(function(){
        if($(".dark-transparent-screen-overlay").is(":hidden")){
            $(".dark-transparent-screen-overlay").fadeIn(150);
            $(".mobile-search-wrapper").fadeIn(150);
            $(".mobile-menu-container").addClass("ghosted");
        }else{
            $(".mobile-search-wrapper").fadeOut(150);
            $(".dark-transparent-screen-overlay").fadeOut(150);
            $(".mobile-menu-container").removeClass("ghosted");
        }  
    })
    
    // Replace Google Translate language letters with actual names
    setTimeout(()=>{
        let thisEnglish = $(document.querySelector('[title="English"]')); thisEnglish.html("<span>English</span>");
        let thisSpanish = $(document.querySelector('[title="Spanish"]')); thisSpanish.html("<span>Español</span>");
        let thisGerman = $(document.querySelector('[title="German"]')); thisGerman.html("<span>Deutsche</span>");
        let thisDutch = $(document.querySelector('[title="Dutch"]')); thisDutch.html("<span>Dutch</span>");
        let thisPortuguese = $(document.querySelector('[title="Portuguese"]')); thisPortuguese.html("<span>Português</span>");
        let thisKiswahili = $(document.querySelector('[title="Swahili"]')); thisKiswahili.html("<span>Kiswahili</span>");
        let thisChinese = $(document.querySelector('[title="Chinese (Traditional)"]')); thisChinese.html("<span>繁体</span>");
        let thisJapanese = $(document.querySelector('[title="Japanese"]')); thisJapanese.html("<span>日本語</span>");
        let thisKorean = $(document.querySelector('[title="Korean"]')); thisKorean.html("<span>한국어</span>");
    },1000);

    /////////////////////

    let gtranslateMouseLeave;

        $(".translateDropDown p").click(function(e){
            if(this === e.target || this.firstChild.tagName =="FONT"){
                $(".translation-list-wrapper").toggle(); 
            }
        })

        $(".translation-list-wrapper").click(function(){
            $(".translation-list-wrapper").delay(250).fadeOut("fast"); 
        })

        $(".translation-list-wrapper, .translateDropDown").mouseleave(function(e){
            gtranslateMouseLeave = setTimeout(function(){
                if (e.target != $('.translateDropDown')){
                    $(".translation-list-wrapper").fadeOut()
                } 
            }, 500)
        })

        $(".translation-list-wrapper").mouseenter(function(e){
            clearTimeout(gtranslateMouseLeave)
        })

    ////////// Animate Bobbie Glow ///////////
    
    $(".bobbie").mouseover(function(){
        $(".skyline, .glow").addClass("revealElem");
    })

    $(".bobbie").mouseout(function(){
        $(".skyline, .glow").removeClass("revealElem");
    })


})();