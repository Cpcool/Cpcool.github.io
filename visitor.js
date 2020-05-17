let myStorage = localStorage;
let socket = null;
let socketUrl = "//azym-chatbackend-busgqe7kbq-uc.a.run.app";
let appId = null;
const adminPath = 'https://cloudchat-test.azymcloud.com/public/';

// inserting chat html to body
document.body.insertAdjacentHTML(
    "afterend",
    `<div class="chat-section" id="chat-section" style="display:none">
    <div id="header-section" class="header-section">
        <div class="header-title">
        <span class="user-icon"> <img src="${adminPath}img/user.svg"></span>
            <span id="openChat">Agents are online!</span>
        </div>
        <div class="minus-close">
        <img onclick='minimizeChat()' src="${adminPath}img/minus.svg">
        <img onclick='closeChat()' src="${adminPath}img/Close.svg">
        </div>
    </div>
<div class="chat-section-remove" id="chat-section-remove">
<div id="visitorRating" style="display:none">
    <div class="visitorIcon">
    <div class="visitorRatingTitle">
     <img src="https://cloudchat-test.azymcloud.com/public/img/user-icon.svg">
    <h2 id="rating-text-heading">Please rate your customer service experience :</h2>
</div>
   <div class="labelIcon">
    <label class="tooltip">
    <input type="radio" class="visitorRating radio-emoji sad" name="rating" value="1">
   <object><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM256 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224S379.7 480 256 480z"/><circle cx="176" cy="176" r="32"/><circle cx="336" cy="176" r="32"/><path d="M256 240c-79.5 0-144 64.5-144 144h32c0-61.9 50.1-112 112-112s112 50.1 112 112h32C400 304.5 335.5 240 256 240z"/></svg></object>
   <span class="tooltiptext tooltip-bottom">It was bad</span>
    </label>
    <label class="tooltip">
    <input type="radio" class="visitorRating radio-emoji ok" name="rating" value="2">
   <object><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM256 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224S379.7 480 256 480z"/><circle cx="176" cy="176" r="32"/><circle cx="336" cy="176" r="32"/><rect x="144" y="304" width="224" height="32"/></svg></object>
     <span class="tooltiptext tooltip-bottom">It was Ok</span>
    </label>
   <label class="tooltip">
    <input type="radio" class="visitorRating radio-emoji happy" name="rating" value="3">
    <object><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM256 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224S379.7 480 256 480z"/><circle cx="176" cy="176" r="32"/><circle cx="336" cy="176" r="32"/><path d="M368 256c0 61.9-50.1 112-112 112s-112-50.1-112-112h-32c0 79.5 64.5 144 144 144s144-64.5 144-144H368z"/></svg></object>
   <span class="tooltiptext tooltip-bottom">It was Good</span>
    </label>
   
</div>
</div>
    </div>
    <div class="contact-form" id="chat-contact-form">
    <span id="sucess-msg-azym"><span>
    <input type="text" id="nameOff" name="text" autocomplete="text" placeholder="Your name*">
    <input type="email" id="emailOff" name="email" autocomplete="email" placeholder="Your email*">
    <input type="text" id="subjectOff" name="subject" autocomplete="subject" placeholder="Subject*">
    <textarea maxlength="1000" id="messageOff" placeholder="Your message*"></textarea>
    <a href="#" onclick='sendOfflineMessage()'>Send Message</a>
</div>
    <div id="online-chat">
    <div id="chat-messages" class="client-chat">
        <div class="chat-admin">
            <span class="User">
                <img src="https://cloudchat-test.azymcloud.com/public/img/user.svg">
            </span>
            <div class="User-title">
                <span class="title">Admin</span>
                 <div class="messagesPanel">
                <span class="messages">
                Welcome to Help Desk ! </br>
                How may I help you ?
                </span>
                </div>
            </div>
        </div>
        <div id="azym-visitor-parent" class="username">
            <input type="text" name="username" id="azym-visitor" autocomplete="text" placeholder="Your name*">
            <button onclick="visitorName()" type="button">Start Chat !</button>
        </div>
    </div>
    
    <div class="messages-box" id="message-box-azym">
        <textarea maxlength="1000" id="message-box-visitor" placeholder="Enter your message"></textarea>
        <div id="send-chat-message" class="subadmin-button screen-share-icon" title="send">
            <button onclick="addMessage()">
                <img src="https://cloudchat-test.azymcloud.com/public/img/send.svg">
            </button>
            <button onclick="showCobrowsingInput()">
                <img src="https://cloudchat-test.azymcloud.com/public/img/share.svg" title="start screen share">
            </button>
            <button onclick="stopSharing()">
                <img src="https://cloudchat-test.azymcloud.com/public/img/no-stopping.svg" title="Stop">
            </button>
        </div>
    </div>
    </div>
</div>
<div class="co-browsing">
    <span id="RemoteStatus">Disconnected</span>
    <input id="SessionKey" placeholder="Enter your secret key" disabled>
    <button id="BtnSessionKey" onclick="CreateSession()">Start</button>
</div>
</div>

<div class="circleChatButtonWrap" onclick="openChat()">
    <div class="circleChatBubble">
        <img class="hover" src="https://cloudchat-test.azymcloud.com/public/img/edit.svg">
        <img src="https://cloudchat-test.azymcloud.com/public/img/menu.svg">
    </div>
</div>
<div id="thank-you-feedback" class="feedback">
Thanks for your feedback !
</div>
<div class="screen-share">
    <video src="" id="video" style="width:700px; height: 350px;opacity: 0" autoplay="true"></video>
    <canvas style="display:none;" id="preview"></canvas>
    <div id="logger"></div>
</div>`
);

var canvas = document.getElementById("preview");
var context = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 700;
context.width = canvas.width;
context.height = canvas.height;
var video = document.getElementById("video");
var streamObj;

function showCobrowsingInput() {
    $('#SessionKey').val(Math.floor(100000 + Math.random() * 900000));
    $('.co-browsing').show();
}

document.getElementById('message-box-visitor').addEventListener('keypress', function (e) {
    if (!myStorage.getItem('azym-visitor-name')) {
        document.getElementById('azym-visitor-parent').style.display = 'block'
        document.getElementById('message-box-azym').style.display = 'none'
    }
});

function azym_chat(appId) {
    myStorage.setItem('id', appId)
    // setting chatId if not exists
    if (!myStorage.getItem("chatID")) {
        myStorage.setItem("chatID", createUUID());
        let history = { chat: [] };
        myStorage.setItem("history", JSON.stringify(history));
    }

    // getting chatId from local storage
    let chatId = myStorage.getItem("chatID");

    // initializing socket connection
    socket = io.connect(socketUrl,{ transports: ['websocket'] });
    let vName = myStorage.getItem('azym-visitor-name') || "Annonymous";

    socket.on("connect", () => {
        socket.emit("authentication", {
            appId: appId,
            chatId: chatId,
            visitorName: vName
        });

        socket.on("authenticated", function () {
            console.log("connected visitor");
        });
    });

    socket.on("unauthorized", reason => {
        console.log("unauthorized visitor disconnected")
        socket.disconnect();
    });

    if (socket) {

        // if all admins are offline
        socket.on('offline_message', data => {
            console.log('offline message is enabled');
            myStorage.setItem('offline', true)
            document.getElementById('openChat').innerText = 'Agents are offline !'
            document.getElementById('chat-contact-form').style.display = 'block'
            document.getElementById('online-chat').style.display = 'none'
        })

        // //status change event for offline and online
        socket.on('statusChange', (status) => {
            console.log('admin status changing', status);
            if (status) {
                myStorage.setItem('offline', true)
                document.getElementById('openChat').innerText = 'Agents are offline !'
                document.getElementById('chat-contact-form').style.display = 'block'
                document.getElementById('online-chat').style.display = 'none'
            } else {
                myStorage.setItem('offline', false)
                document.getElementById('openChat').innerText = 'Agents are online !'
                document.getElementById('chat-contact-form').style.display = 'none'
                document.getElementById('online-chat').style.display = 'block'
            }
        })


        // color change events
        socket.on('chatColorChange', (colorCode) => {
            console.log('color change event called ', colorCode);
            // change color of visitor's chat
            myStorage.setItem('color', colorCode)
            if (colorCode)
                chatColorChange(colorCode)
        })

        socket.on('stop_screenShare', (data) => {
            console.log('stop screen share called');
            stopSharing();
        });

        socket.on('start_screenShare', (data) => {
            console.log('start screen share called');
            startScreenShare();
        });

        // New message events
        socket.on("new_message", data => {
            console.log('new message arrived ', data);
            let node = document.getElementById('chat-messages');
            if (data.role == "visitor") {
                addMessage(data.message)
            } else {
                node.innerHTML += `<div class="chat-admin">
                    <span class="User">
                        <img src="https://cloudchat-test.azymcloud.com/public/img/user.svg">
                    </span>
                    <div>
                        <span class="title">Admin</span>
                        <div class="messagesPanel">
                        <span class="messages">
                           ${data.message}
                        </span>
                        </div>
                    </div>
                    </div>`
            }
            openChat();

            // saving chat history to localstorage
            let history = JSON.parse(myStorage.getItem("history"));
            history["chat"].push({ admin: data.message });
            myStorage.setItem("history", JSON.stringify(history));
        });
    }
}

// add message to chat side
function addMessage() {
    let message = document.getElementById('message-box-visitor').value
    if (message) {
        document.getElementById('message-box-visitor').value = ''
        let node = document.getElementById('chat-messages')
        node.innerHTML += ` <div class="subadmin">
                            <div class="messagesPanel">
                            <span class="messages">${message}</span>
                            </div>
                            <span class="User">
                <img src="https://cloudchat-test.azymcloud.com/public/img/user-icon.svg">
            </span>
                        </div>`
        socket.emit("new_message", { message: message });
    }
}

// binding send and enter button to send messages
document.getElementById('message-box-visitor').addEventListener('keyup', function (e) {
    if (event.keyCode === 13) {
        addMessage()
    }
});

// method for changing chat color
function chatColorChange(color = '#EEA849') {
    document.getElementsByClassName('circleChatButtonWrap')[0].style.background = color
    document.getElementsByClassName('chat-section')[0].style.background = color
}

// crreating unique chatId randomly
function createUUID() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    let uuid = s.join("");
    return uuid;
}

function visitorName() {
    let visitorName = document.getElementById('azym-visitor').value;
    if (visitorName) {
        if (socket) {
            socket.emit('visitorName', visitorName)
        }
        document.getElementById('azym-visitor-parent').style.display = 'none'
        document.getElementById('message-box-azym').style.display = 'flex'
        myStorage.setItem('azym-visitor-name', visitorName)
    }
}

//******************************************************************
//***************** SEND OFFLINE MESSAGE ***************************
//******************************************************************

async function sendOfflineMessage() {
    console.log('sending offline message to admins');
    let name = document.getElementById('nameOff').value || 'annoymous'
    let subject = document.getElementById('subjectOff').value
    let message = document.getElementById('messageOff').value
    let email = document.getElementById('emailOff').value
    let id = myStorage.getItem('id')
    if (name && subject && message && email && id) {
        const rawResponse = await fetch(`${socketUrl}/api/send/mail`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, subject, message, email, id })
        });
        const content = await rawResponse.json();
        name = document.getElementById('nameOff').value = ''
        subject = document.getElementById('subjectOff').value = ''
        message = document.getElementById('messageOff').value = ''
        email = document.getElementById('emailOff').value = ''
        console.log(content);
    } else {
        console.error('complete your form first !')
    }
}

//******************************************************************
//***************** SCREEN SHARING FUNCTION ************************
//******************************************************************

function startScreenShare() {
    _startScreenCapture().then(stream => {
        streamObj = stream;
        loadCamera(stream);
        stream.addEventListener('inactive', e => {
            socket.emit('data_received', null);
            clearInterval(interval);
        });
    }).catch(err => {
        console.log('====err==', err);
    });
}

function loadCamera(stream) {
    try {
        video.srcObject = stream;
        interval = setInterval(function () {
            viewVideo(video, context);
        }, 3);
    } catch (error) {
        video.src = URL.createObjectURL(stream);
    }
}

function viewVideo(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('data_received', canvas.toDataURL('image/webp'));
}

function _startScreenCapture() {
    if (navigator.getDisplayMedia) {
        return navigator.getDisplayMedia({ video: true })
    } else if (navigator.mediaDevices.getDisplayMedia) {
        return navigator.mediaDevices.getDisplayMedia({ video: true })
    } else {
        return navigator.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' } })
    }
}

//******************************************************************
//***************** OPEN CLOSE MINIMIZE CHAT ***********************
//******************************************************************


function minimizeChat() {
    document.getElementById('chat-section').style.display = 'none'
    document.getElementsByClassName('circleChatButtonWrap')[0].style.display = 'block'
}

function closeChat() {
    if (myStorage.getItem('offline') == 'true')
        document.getElementById('rating-text-heading').innerHTML = "We do like some feedback <br/> How do you feel about this page ?"
    else
        document.getElementById('rating-text-heading').innerHTML = 'Please rate your customer service experience :'
    document.getElementById('visitorRating').style.display = 'block'
    document.getElementById('online-chat').style.display = 'none'
    document.getElementById('chat-contact-form').style.display = 'none'
}

function openChat() {
    if (myStorage.getItem('offline') == 'true') {
        document.getElementById('openChat').innerText = 'Agents are offline !'
        document.getElementById('chat-contact-form').style.display = 'block'
        document.getElementById('online-chat').style.display = 'none'
    } else {
        document.getElementById('openChat').innerText = 'Agents are online !'
        document.getElementById('chat-contact-form').style.display = 'none'
        document.getElementById('online-chat').style.display = 'block'
    }
    document.getElementById('visitorRating').style.display = 'none'
    document.getElementById('chat-section').style.display = 'block'
    document.getElementsByClassName('circleChatButtonWrap')[0].style.display = 'none'
}

//******************************************************************
//******************Intial execution code***************************
//******************************************************************

document.getElementById('openChat').addEventListener('click', openChat)

//check initial color and change
if (myStorage.getItem('color')) {
    let color = myStorage.getItem('color')
    chatColorChange(color)
}

// add events for visitor ratings emoji's
let elements = document.getElementsByClassName('visitorRating')
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

function myFunction(e) {
    myStorage.setItem('rating', true)
    minimizeChat()
    document.getElementById('thank-you-feedback').style.display = 'block'
    setTimeout(() => { document.getElementById('thank-you-feedback').style.display = 'none' }, 1000)
    if (myStorage.getItem('offline') == 'true')
        socket.emit('azymRatings', this.value)
    else
        socket.emit('ratings', this.value)
    document.getElementById('visitorRating').style.display = 'none'
}

function offline_box() {
    document.getElementById('openChat').innerText = 'Agents are offline !'
    document.getElementById('chat-contact-form').style.display = 'block'
    document.getElementById('online-chat').style.display = 'none'
}
