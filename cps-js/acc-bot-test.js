var bot_open = false;

function toggle_bot() {
    var bot_button = document.getElementById('bot-button');
    var chat_container = document.getElementById('chat-box-cont');
    bot_open = !bot_open;
    
    if(bot_open == true) {
        bot_button.classList.add("open");
        chat_container.classList.add("open");
        bot_button.innerHTML = 'Close <span class="material-icons" aria-hidden="true">close</span>';
        bot_button.setAttribute('aria-expanded','true');
    }

    if(bot_open == false) {
        bot_button.classList.remove("open");
        chat_container.classList.remove("open");
        bot_button.innerHTML = '<span class="material-icons" aria-label="open accessibility bot" >chat</span>';
        bot_button.setAttribute('aria-expanded','false');
    }
}