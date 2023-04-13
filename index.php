<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JCCO Animated Header</title>
    <link rel='stylesheet' href='assets/styles/colors.css'>
    <link rel='stylesheet' href='assets/styles/main.css'>
    <link rel='stylesheet' href='assets/styles/main-nav.css'>
    <link rel="stylesheet" href='assets/styles/fontawesome/css/fontawesome.css'>
    <link rel="stylesheet" href='assets/styles/fontawesome/css/solid.css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100italic,100,300,300italic,400italic,500,500italic,700,700italic,900,900italic|Roboto+Condensed:400,300,400italic,700italic,700,300italic' rel='stylesheet' type='text/css'/>
    <script src='assets/js/jquery.js'></script>    

</head>
<body>
    <?php opcache_reset(); ?>
    
    <!-- Main Navigation -->
    <?php include "includes/main-nav.php"; ?>
    <!-- /Main Navigation --> 

    <div class="j-container pt-15 color-sky">

        <div class="glow z-index-1">
            <img src="assets/images/glow.png">
        </div>

        <div class="skyline z-index-2">
            <img src="http://localhost:8888/jcco/header_test_1-31-23/assets/images/louisville-skyline.png">
        </div>

        <div class="cloud-small z-index-1">
            <img src="http://localhost:8888/jcco/header_test_1-31-23/assets/images/cloud-real-1.png">
        </div>

        <div class="cloud-large z-index-1">
            <img src="http://localhost:8888/jcco/header_test_1-31-23/assets/images/cloud-real-large.png">
        </div>

        <div class="j-row container-grid-blue-sky">

          <div class="jcco-logo-container z-index-3">
            <img src="assets/images/jcco_logo-blue-type.svg">
          </div>

          <div class="bobbie z-index-3">
            <img src="assets/images/bobbie.png">
          </div>

          <div class="search z-index-3">
            <div class="search-container">
                <div class="j-searchField">
                    <span contenteditable="true" onfocus="if(this.innerText=='Search this site...'){this.innerText=''}" onblur="if(this.innerText==''){this.innerText='Search this site...'}">Search this site...</span>
                    <div class="magnify-glass-box">
                        <img src="assets/images/magnifying_glass_icon.svg">
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>

    <div class="j-container pt-30 lg-btn-overlap z-index-4">
       <div class="j-row container-grid-lg-sq-btns">
 
            <a href="https://www.cnn.com/" class="lg-sq-btn sq-btn-grid-1">
                <div class="sq-btn-label">
                    <img src="assets/images/lg_squares/speech_bubble.svg">
                    <div>
                        <span>Feedback</span>
                        Rate our services
                    </div>
                </div>
            </a> 

            <a href="https://www.cnn.com/" class="lg-sq-btn sq-btn-grid-2">
                <div class="sq-btn-label">
                    <img src="assets/images/lg_squares/locator_pin.svg">
                    <div>
                        <span>Locations</span>
                        Find Clerk Offices
                    </div>
                </div>
            </a>

            <a href="https://www.cnn.com/" class="lg-sq-btn sq-btn-grid-3">
                <div class="sq-btn-label">
                    <img src="assets/images/lg_squares/person_icon.svg">
                    <div>
                        <span>Elections</span>
                        Voting & Elections
                    </div>
                </div>                
            </a>

            <a href="https://www.cnn.com/" class="lg-sq-btn sq-btn-grid-4">
                <div class="sq-btn-label">
                    <img src="assets/images/lg_squares/election_icon.svg">
                    <div>
                        <span>Register to Vote</span>
                        Get registered here
                    </div>
                </div>                
            </a>
            
        </div>
    </div>


<script>window.gtranslateSettings = {"default_language":"en","languages":["en","es","de", "nl", "pt", "sw", "zh-TW", "ja","ko"],"wrapper_selector":".gtranslate_list"}</script>
<script src="assets/js/gtranslate.js" defer></script>


    <script src="assets/js/header.js"></script>
</body>
</html>