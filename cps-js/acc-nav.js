let prev_sect = null;

// Open/Close Menu (Mobile)
function mob_nav_ec() 
    {
    var elem = document.getElementById("menu-nav-cont").classList; //Gets the Class List from the menu content div
    elem.toggle("not-show"); // Removes/Add from the menu content div's class list

    if (elem.contains("not-show")) //If the menu content div's class list contains the "not-show" class...
        {
        document.getElementById("menu-button-label").innerHTML = "Menu"; //Changes the menu label to "Menu"
        document.getElementById("menu-button-icon").classList.remove('nw-mm__ham--open');
        document.getElementById("menu-nav-btn").setAttribute("aria-label","Open Menu");
        document.getElementById("menu-nav-btn").setAttribute("aria-expanded","false");
        if (document.getElementById("main").classList.contains("not-show")) //If the <main> has the contains the "not-show" class...
            {
            //Main Content
            document.getElementById("main").classList.remove("not-show"); // Remove the "no-show" class from <main> (no-show class removes the element)
            document.getElementById("main").classList.remove("no-scroll"); // Remove the "no-show" class from <main> (no-scroll prevents user from scrolling down.)
            //Footer
            document.getElementById("footer").classList.remove("not-show"); // Remove the "no-show" class from <footer> (no-show class removes the element)
            document.getElementById("footer").classList.remove("no-scroll"); // Remove the "no-show" class from <footer> (no-scroll prevents user from scrolling down.)
            }
        }
    else
        {
        document.getElementById("menu-button-label").innerHTML = "Close"; //Changes the menu label to "Close [X]"
        document.getElementById("menu-button-icon").classList.add('nw-mm__ham--open');
        document.getElementById("menu-nav-btn").setAttribute("aria-label","Close Menu");
        document.getElementById("menu-nav-btn").setAttribute("aria-expanded","true");
        if (!document.getElementById("main").classList.contains("not-show")) //If the <main> does not contains the "not-show" class...
            {
            //Main Content
            document.getElementById("main").classList.add("not-show"); // Add the "no-show" class to <main>
            document.getElementById("main").classList.add("no-scroll"); // Add the "no-show" class to <main>
            //Footer
            document.getElementById("footer").classList.add("not-show"); // Add the "no-show" class to <footer>
            document.getElementById("footer").classList.add("no-scroll"); // Add the "no-show" class to <footer> 
            }
        }
    }

function openSubMenu(id) { // Opens Sub Menu
    document.getElementById("mob-tab-main").classList.add("not-show");
    document.getElementById(id).classList.remove("not-show");
    document.getElementById(id).setAttribute("aria-expanded","true");
    }

function closeSubMenu() {  // Back Button 
    //Reset all Content
    document.getElementById("mob-tab-general").classList.add("not-show");
    document.getElementById("mob-tab-general").setAttribute("aria-expanded","false");
    
    document.getElementById("mob-tab-info").classList.add("not-show");
    document.getElementById("mob-tab-info").setAttribute("aria-expanded","false");

    document.getElementById("mob-tab-rec-tra").classList.add("not-show");
    document.getElementById("mob-tab-rec-tra").setAttribute("aria-expanded","false");

    document.getElementById("mob-tab-testing").classList.add("not-show");
    document.getElementById("mob-tab-testing").setAttribute("aria-expanded","false");

    document.getElementById("mob-tab-tools").classList.add("not-show");
    document.getElementById("mob-tab-tools").setAttribute("aria-expanded","false");

    //Remove "not-show class"
    document.getElementById("mob-tab-main").classList.remove("not-show");
    document.getElementById("mob-btn-general").focus();
    }


// For Dropdown Menu (Desktop)
function dropdown(x,id) {
    document.getElementById("btn-general").setAttribute("aria-expanded","false");
    document.getElementById("btn-info").setAttribute("aria-expanded","false");
    document.getElementById("btn-rec-tra").setAttribute("aria-expanded","false");
    document.getElementById("btn-testing").setAttribute("aria-expanded","false");
    document.getElementById("btn-tools").setAttribute("aria-expanded","false");

    set_content()
    // if(prev_sect == null) {
    //     prev_sect = x;
    //     set_content()
    // } else {
    //     animation = document.getElementById(prev_sect);
    //     animation.style.animate = "animation: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 close-tabcontentAnimation;";
    //     animation.addEventListener('animationend', () => {
    //         animation.style.animate = "animation: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 tabcontentAnimation;";
    //         set_content()
    //     });

    //     prev_sect = x;
    // }

    

    function set_content() {
        //Reset all Content
        document.getElementById("tab-general").classList.add("not-show");
        document.getElementById("btn-general").setAttribute("onclick","dropdown('tab-general',this.id)");

        document.getElementById("tab-info").classList.add("not-show");
        document.getElementById("btn-info").setAttribute("onclick","dropdown('tab-info',this.id)");

        document.getElementById("tab-rec-tra").classList.add("not-show");
        document.getElementById("btn-rec-tra").setAttribute("onclick","dropdown('tab-rec-tra',this.id)");

        document.getElementById("tab-testing").classList.add("not-show");
        document.getElementById("btn-testing").setAttribute("onclick","dropdown('tab-testing',this.id)");

        document.getElementById("tab-tools").classList.add("not-show");
        document.getElementById("btn-tools").setAttribute("onclick","dropdown('tab-tools',this.id)");

        //Remove "not-show class"
        document.getElementById(x).classList.remove("not-show");
        document.getElementById(x).focus();

        // Remove and add current
        document.getElementById("btn-general").classList.remove("current");
        document.getElementById("btn-info").classList.remove("current");
        document.getElementById("btn-rec-tra").classList.remove("current");
        document.getElementById("btn-testing").classList.remove("current");
        document.getElementById("btn-tools").classList.remove("current");

        document.getElementById(id).classList.add("current");

        // var lastChildID = document.getElementById(x).lastChild.id;
        // lastChildID.focus();


        document.getElementById("tabcontent-bd").style.height = document.getElementById(x).offsetHeight+30+"px";
        document.getElementById(id).setAttribute("onclick","dropup()");
        document.getElementById(id).setAttribute("aria-expanded","true");
        document.getElementById("overlay").style.display = "block";
        // document.getElementById("overlay").style.opacity = "0.7";
        $("#overlay").animate({opacity: "0.7"},500,"swing");

        
        // Tabbing Control // 
        if (!document.getElementById("tab-general").classList.contains('not-show') || !document.getElementById("tab-info").classList.contains('not-show')) {
            var nav_key_map = {9: false, 40: false};

            $(document).keydown(function(e) {
                if ((e.keyCode in nav_key_map)) {
                    nav_key_map[e.keyCode] = false;
                    
                    if(document.activeElement === document.getElementById("lastelement-bg")) {
                        document.getElementById(id).focus();
                        dropup();   
                    }

                    if(document.activeElement === document.getElementById("lastelement-br")) {
                        document.getElementById('btn-info').focus();
                        dropup();   
                    }

                    if(document.activeElement === document.getElementById("lastelement-bt")) {
                        document.getElementById('btn-rec-tra').focus();
                        dropup();   
                    }

                    if(document.activeElement === document.getElementById("lastelement-bp")) {
                        document.getElementById('btn-testing').focus();
                        dropup();   
                    }

                    if(document.activeElement === document.getElementById("lastelement-bo")) {
                        document.getElementById('btn-tools').focus();
                        dropup();   
                    }
                }
            }); 
        }
    }
}
    

     

function dropup() {
    //Reset all Content
    document.getElementById("tab-general").classList.add("not-show");
    document.getElementById("btn-general").setAttribute("onclick","dropdown('tab-general',this.id)");
    document.getElementById("btn-general").classList.remove("current");

    document.getElementById("tab-info").classList.add("not-show");
    document.getElementById("btn-info").setAttribute("onclick","dropdown('tab-info',this.id)");
    document.getElementById("btn-info").classList.remove("current");

    document.getElementById("tab-rec-tra").classList.add("not-show");
    document.getElementById("btn-rec-tra").setAttribute("onclick","dropdown('tab-rec-tra',this.id)");
    document.getElementById("btn-rec-tra").classList.remove("current");

    document.getElementById("tab-testing").classList.add("not-show");
    document.getElementById("btn-testing").setAttribute("onclick","dropdown('tab-testing',this.id)");
    document.getElementById("btn-testing").classList.remove("current");

    document.getElementById("tab-tools").classList.add("not-show");
    document.getElementById("btn-tools").setAttribute("onclick","dropdown('tab-tools',this.id)");
    document.getElementById("btn-tools").classList.remove("current");

    document.getElementById("btn-general").setAttribute("aria-expanded","false");
    document.getElementById("btn-info").setAttribute("aria-expanded","false");
    document.getElementById("btn-rec-tra").setAttribute("aria-expanded","false");
    document.getElementById("btn-testing").setAttribute("aria-expanded","false");
    document.getElementById("btn-tools").setAttribute("aria-expanded","false");

    document.getElementById("tabcontent-bd").style.height="0px";

    $("#overlay").animate({opacity: "0"},500,"swing");

    if (document.getElementById("overlay").style.opacity = "0") {
        document.getElementById("overlay").style.display = "none";
    }    
}