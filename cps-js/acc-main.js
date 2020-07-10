var init_scroll_lvl = 98.5;

//Get Param
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

// Add the elements (paragraph) ID when using coll() function in HTML. | coll(id) 
function coll(id,this_ele) {
    if(document.getElementById(id).classList.contains("not-show")) {
        document.getElementById(id).classList.remove("not-show");
        document.getElementById(this_ele).setAttribute("aria-expanded","true");
        // document.getElementById(id).scrollIntoView(true);
    } else {
        document.getElementById(id).classList.add("not-show");	
        document.getElementById(this_ele).setAttribute("aria-expanded","false");
    }

    return false;
}

function e_focus(foc_id) {
    document.getElementById(foc_id).hover();
}


window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

// Bi-Simulator
var map = {17: false, 18: false, 66: false, 84: false, 77: false, 70: false};
var togglefx = false;


$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;

        //Open/Close Simulator
        if (map[17] == true && map[18] == true && map[66] == true) {
            if (document.getElementById("cnt-bi-sim").classList.contains("not-show")) {
                document.getElementById("cnt-bi-sim").classList.remove("not-show");
                document.getElementById("sim-close-btn").focus();
            } else {
                document.getElementById("cnt-bi-sim").classList.add("not-show");
            }
        }

        //Toggle Effects
        if (map[17] == true && map[18] == true && map[84] == true) {
            if (document.getElementById("main").classList.contains("effect")) {
                document.getElementById("main").classList.remove("effect");

                document.getElementById("sight-sec-dis").classList.remove("not-show");
                document.getElementById("sight-sec-reg").classList.add("not-show");

            } else {
                document.getElementById("main").classList.add("effect");
                document.getElementById("sight-sec-reg").classList.remove("not-show");
                document.getElementById("sight-sec-dis").classList.add("not-show");
            }
        }
    }
})

// Tabbing Control for Web Disability Simulator // 
var bs_key_map = {9: false, 40: false};

$(document).keydown(function(e) {
    if ((e.keyCode in bs_key_map)) {
        bs_key_map[e.keyCode] = false;
        if(document.activeElement === document.getElementById("lastele-bs")) {
            document.getElementById('sim-close-btn').focus();
        }
    }
}); 

// Tabbing Control for Text Reader // 
var tr_key_map = {9: false, 40: false};

$(document).keydown(function(e) {
    if ((e.keyCode in tr_key_map)) {
        tr_key_map[e.keyCode] = false;
        if(document.activeElement === document.getElementById("lastele-tr")) {
            document.getElementById('nox-close-btn').focus();
        }
    }
}); 


$(document).keyup(function(e) {
    if (e.keyCode in map) {
    map[e.keyCode] = false;
    // alert("");
    }
});

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// getElementsByClassName support for IE
if (checkBrowserSupport() == 0) {
    function getElementsByClassName(node, classname) {
        var a = [];
        var re = new RegExp('(^| )'+classname+'( |$)');
        var els = node.getElementsByTagName("*");
        for(var i=0,j=els.length; i<j; i++)
            if(re.test(els[i].className))a.push(els[i]);
        return a;
    }
}

// Disable the material icons

function checkBrowserSupport() {
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 1;
    } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
        return 1;
    } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
        return 0;
    } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
        return 1;
    } else {
        return 0; // Unknown Browsers
    }
}

// Header Scroll
window.addEventListener("scroll", header_scroll, false);

function header_scroll () {
    if (document.getElementById('header-breadcrumbs') != null) {
        if (this.scrollY > init_scroll_lvl) {
            document.getElementById('header-breadcrumbs').className = "header-breadcrumbs";
            document.getElementById('header-breadcrumbs').style.display = "block";
        } else {
            document.getElementById('header-breadcrumbs').style.display = "none";
        }
    }
}

// Stop Nox When Reloading
window.onunload = function () {
    window.speechSynthesis.cancel();
}

window.onload = function(){
    
    // Get Next Page Information 
    // next_button = document.getElementById("next-page-button");
    // web_title = "Nationwide Digital Accessibility Center";

    // switch(document.title) {
    //     case web_title : next_button.setAttribute("href","accessibility-what-is-d-acc.html"); next_button.innerHTML = "Go to Next Page (What is Digital Accessibility?)"; break;
    //     case web_title + " - What is Digital Accessibility?" : next_button.setAttribute("href","accessibility-acc-for-vend.html"); next_button.innerHTML = "Go to Next Page (Vendors and Solution Providers)"; break;
    //     case web_title + " - Vendors and Solution Providers" : next_button.setAttribute("href","accessibility-video-captioning.html"); next_button.innerHTML = "Go to Next Page (Adding Closed Captions to Videos)"; break;
    //     case web_title + " - Adding Closed Captions to Videos" : next_button.setAttribute("href","accessibility-training-rec.html"); next_button.innerHTML = "Go to Next Page (Job Aids)"; break;
    //     case web_title + " - Job Aids" : next_button.setAttribute("href","accessibility-keyboard-manual-testing.html"); next_button.innerHTML = "Go to Next Page (Keyboard and Manual Testing)"; break;
    //     case web_title + " - Keyboard and Manual Testing" : next_button.setAttribute("href","accessibility-screen-reader-testing.html"); next_button.innerHTML = "Go to Next Page (Screen Reader Testing)"; break;
    //     case web_title + " - Screen Reader Testing" : next_button.setAttribute("href","accessibility-color-contrast-checker.html"); next_button.innerHTML = "Go to Next Page (Color Contrast Checker)"; break;
    //     case web_title + " - Color Contrast Checker" : next_button.setAttribute("href","accessibility-ux-int-colc.html"); next_button.innerHTML = "Go to Next Page (Color Blindness)"; checkContrast(); break;
        
    //     default : next_button.setAttribute("href","#"); next_button.innerHTML = "Go to Next Page (N/A)"; break;
    // }

    // next_button.setAttribute("title","Click here to " + next_button.innerHTML);
    // next_button.innerHTML += " <i aria-hidden=\"true\" style=\"font-size: 1.4em\" class=\"material-icons\">chevron_right</i>";

    
    //Show Pop-Up Message for IE users
    if (checkBrowserSupport() == 0) {
        var warning = document.createElement("div");
        warning.id = "warning-gui";
        warning.innerHTML = "<div><span>Outdated Browser</span><p>Looks like you are using an outdated browser. Outdated browser may not support some of the functionality, and can ruin your experience. Use an up to date browser such as Google Chrome for the best user experience.</p><a href=\"https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQiAsbrxBRDpARIsAAnnz_OT8bsX8TjxqnkmExPJwTABxV9EbJIaIqCnAeNdD6AYP7KQxv3PyscaAmWfEALw_wcB&gclsrc=aw.ds\">Download Google Chrome Browser</a><br><button class=\"dac-button\"  onclick=\" removeElement('warning-gui')\">I Understand</button></div>";
        document.body.appendChild(warning); 

        var elements = document.getElementsByTagName(I);
        alert(elements);
        for(i=0; i < elements.length ; i++){
            elements[i].parentNode.removeChild(elements[i]);
        }
    }

    //Add Tabbing to main content
    document.getElementById('main').setAttribute('tabindex','0');

    //Open simulator if the param is available
    if(urlParams.get('rbsim') == '1') {
        function openSIM(bool) {
            if(bool==0) { // Regular Pop-Up        
                document.getElementById("cnt-bi-sim").classList.remove("not-show");
                document.getElementById("bg-bi-sim").style.opacity = 1;
                // document.getElementById("gui-bi-sim").style.top = "50%"; 
                document.getElementById("sim-close-btn").focus();
                // $("#sim-gui-box").animate({left: "0"},500,"swing");
            } else { // Close Nav Dropdown Menu first
                dropup.call();
                document.getElementById("cnt-bi-sim").classList.remove("not-show");
                document.getElementById("bg-bi-sim").style.opacity = 1;
                // document.getElementById("gui-bi-sim").style.top = "50%"; 
                document.getElementById("sim-close-btn").focus();
                // $("#sim-gui-box").animate({left: "0"},500,"swing");
            }
        
            document.getElementById("cnt-nox").classList.add("not-show");
        }
        openSIM(0);
    }

    // switch(urlParams.get('wrksec')) {
    //     case 'fab': setBC('For all associates/business'); showSec("t-fab"); break;  
    //     case 'fdqet': setBC('For developers, quality assurance, testers, user experience'); showSec("t-fdqet"); break;
    //     case 'fcccd': setBC('For content creators or creative designers'); showSec("t-fcccd"); break;  
    //     case 'fmd': setBC('For mobile developers'); showSec("t-fmd"); break;  
    //     case 'fra': setBC('For requirement analysts'); showSec("t-fra"); break;  
    //     // case 'fux': setBC('For user experience (UX)'); showSec("t-fux"); break; 
    //     case 'fvmcp': setBC('For video and multimedia creator'); showSec("t-fvmcp"); break;  
    //     default : setBC('All recommended training'); showSec("t-fab"); showSec("t-fdqet"); showSec("t-fcccd"); showSec("t-fmd"); showSec("t-fra"); showSec("t-fvmcp"); break; 
    // }

    
}