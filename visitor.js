let myStorage = localStorage;
let socket = null;
let socketUrl = "//azym-chatbackend-ukjr2sq55q-uc.a.run.app";
let appId = null;
const adminPath = 'https://cloudchat.azymcloud.com';
const bucketPath = 'https://storage.googleapis.com/azym_image_upload';
let socialOpen = false;
let adminShowing = false;
let activeSocialType = '';
let adminSocialInfo = {};
let connectTypes = {
    email: "mailto:",
    whatsapp: "https://wa.me/",
    snapchat: "https://www.snapchat.com/add/",
    phone: "",
    messenger: "http://m.me/",
    telegram: "https://telegram.me/"
}
let socialColor = {
    email: "pink",
    whatsapp: "green",
    snapchat: "yellow",
    phone: "red",
    messenger: "blue",
    telegram: "orange"
}
let socialImages = {
    email: "mail.svg",
    whatsapp: "whatsapp.svg",
    snapchat: "snapchat.svg",
    phone: "call.svg",
    messenger: "fb.svg",
    telegram: "telegram.svg"
}
let zIndex = 1;

function findHighestZIndex(elem, zIndexValue) {
    var elems = document.getElementsByTagName(elem);
    var highest = zIndexValue || Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex > highest) {
            highest = zindex;
        }
    }
    return highest;
}

document.body.insertAdjacentHTML(
    "afterend",
    `<div id="social-share-azym">
        <div id="azym-admin-list">        
        </div>
        <ul id="azym-social-icons" class="social-itens">
            <li id="whatsapp-azym">
                <span onclick="showAdmins('whatsapp')" class="social-icons">                
                
<svg width="118.134" height="118.148" viewBox="0 0 118.134 118.148">
<defs>
  <linearGradient id="linear-gradient" x1="0.49" y1="-0.398" x2="0.508" y2="1.168" gradientUnits="objectBoundingBox">
    <stop offset="0.132" stop-color="#01cf2d"/>
    <stop offset="0.794" stop-color="#009804"/>
  </linearGradient>
</defs>
<g id="whatsapp" transform="translate(-42.796 -38.505)">
  <path id="Path_334" data-name="Path 334" d="M160.93,97.551A59.067,59.067,0,1,1,101.842,38.5,59.082,59.082,0,0,1,160.93,97.551Z" fill="url(#linear-gradient)"/>
  <g id="Group_462" data-name="Group 462">
    <path id="Path_335" data-name="Path 335" d="M136.87,89.128c-3.908-16.379-18.017-27.5-35.028-27.748a44.3,44.3,0,0,0-6.868.716,35.872,35.872,0,0,0-24.6,52.329,2.25,2.25,0,0,1,.33,1.764c-1.679,5.477-3.221,11.148-4.707,16.68-.248.992-.248.992.674.717,5.823-1.57,11.589-3.056,17.4-4.487a1.429,1.429,0,0,1,1.294.082,36.214,36.214,0,0,0,23.591,3.3C128.654,128.686,141.578,108.617,136.87,89.128ZM106.894,126.7a14.494,14.494,0,0,1-4.144.357,30.95,30.95,0,0,1-16.2-4.129,1.89,1.89,0,0,0-1.831-.3c-3.249.8-6.415,1.651-9.635,2.479-.66.22-.729.109-.578-.579.854-2.973,1.652-6,2.588-9.084a2.216,2.216,0,0,0-.372-2.119c-6.51-10.571-6.221-23.646,1.06-33.446,7.584-10.13,18-14.342,30.376-11.7,12.209,2.56,20.026,10.515,22.806,22.655A29.59,29.59,0,0,1,106.894,126.7Z" fill="#fff" fill-rule="evenodd"/>
    <path id="Path_336" data-name="Path 336" d="M111.243,114.425a9.585,9.585,0,0,1-3.73-.522c-8.217-2.4-14.438-7.433-19.435-14.259-1.858-2.533-3.634-5.257-4.17-8.451a9.794,9.794,0,0,1,3.234-9.607,5.707,5.707,0,0,1,4.79-.743,4.776,4.776,0,0,1,.8.991c1.018,2.532,2.105,4.9,3.138,7.349a1.912,1.912,0,0,1-.151,1.515,13.972,13.972,0,0,1-2.2,2.945,1.361,1.361,0,0,0-.221,1.981,24.013,24.013,0,0,0,12.263,10.517,1.379,1.379,0,0,0,1.846-.413c.922-1.046,1.83-2.2,2.684-3.331a1.55,1.55,0,0,1,2-.523c1.763.826,3.5,1.651,5.175,2.422a10.96,10.96,0,0,0,1.211.551c1.775.882,1.775,1.019,1.57,2.918-.235,3.743-3.11,5.644-6.4,6.58A6.467,6.467,0,0,1,111.243,114.425Z" fill="#fff" fill-rule="evenodd"/>
  </g>
</g>
</svg>


                </span>
            </li>
            <li id="snapchat-azym">
            <span onclick="showAdmins('snapchat')" class="social-icons">      
            <svg width="118.135" height="118.15" viewBox="0 0 118.135 118.15">
            <g id="snapchat" transform="translate(-43.594 -38.574)">
            <g id="Group_460" data-name="Group 460">
                <path id="Path_332" data-name="Path 332" d="M161.729,97.621a59.068,59.068,0,1,1-59.088-59.047A59.083,59.083,0,0,1,161.729,97.621Z" fill="#f5e200"/>
            </g>
            <path id="Path_333" data-name="Path 333" d="M102.336,60.284a22.252,22.252,0,0,0-13.7,4.5,21.641,21.641,0,0,0-6.645,8.792s-.205,0-.205.1c-1.431,3.477-1.329,7.259-1.329,10.632h0c1.022,2.454.613,4.805.409,6.951a1.028,1.028,0,0,0,.1.308,18.38,18.38,0,0,1-3.374.1h0c-.818,0-1.636-.613-2.658-.92a.1.1,0,0,0-.1-.1,3.191,3.191,0,0,0-2.556.512h0A2.836,2.836,0,0,0,70.849,93.3v.205a2.357,2.357,0,0,0,.92,1.431,9.947,9.947,0,0,1,.92.716v-.1c1.738,1.125,3.68,2.146,5.418,2.146h0c1.125,1.022,2.147,1.432,2.352,2.454a5.413,5.413,0,0,1-1.022,4.294h0a26.029,26.029,0,0,1-8.178,9.4,21.574,21.574,0,0,1-6.031,2.761h-.1a4.283,4.283,0,0,0-2.147,1.227c0,.1-.1.1-.1.2a2.022,2.022,0,0,0,.307,1.737,1.909,1.909,0,0,0,.92.717h0a24.582,24.582,0,0,0,5.623,1.942h0a24.907,24.907,0,0,1,3.476.817,2.574,2.574,0,0,0,.409.919c.307,1.023.511,2.148.818,3.374a1.233,1.233,0,0,0,.715.715,1.992,1.992,0,0,0,1.329-.1h.1c3.067-.511,6.031-1.021,8.792-.307h0c2.862.715,5.316,2.761,8.178,4.5h-.1a13.852,13.852,0,0,0,7.054,2.453h0l-.1.2c1.942.1,3.578.1,5.418.1h0c1.533-1.023,3.066-.921,4.395-1.738a.1.1,0,0,1,.1-.1c2.965-1.737,5.623-3.782,8.587-5.111h0a16.192,16.192,0,0,1,3.477-.409h0a43.32,43.32,0,0,1,7.258.409h.205a1.258,1.258,0,0,0,.817-.409.66.66,0,0,0,.2-.511c.1-.2.1-.408,0-.2,0-.1.1-.1.1-.2a9.68,9.68,0,0,1,1.431-3.578,1.741,1.741,0,0,1,1.534-.409h.1a24.8,24.8,0,0,0,5.725-1.636h.1a5.771,5.771,0,0,0,2.352-1.533h0a1.594,1.594,0,0,0-.511-2.352h-.511a9.023,9.023,0,0,0-2.352-.92h.1a21.671,21.671,0,0,1-10.324-7.564,28.979,28.979,0,0,1-3.578-6.236h0a3.361,3.361,0,0,1,.1-2.658h0a7.464,7.464,0,0,1,3.578-2.249h0a13.421,13.421,0,0,0,4.8-2.453h0a3.665,3.665,0,0,0,.512-.92c.2-.409.817-1.022-.1-1.636h0a1.731,1.731,0,0,0-1.329-1.84h-2.862a20.489,20.489,0,0,1-2.556.716h0a8.47,8.47,0,0,1-2.863-.308v-.715h0c-.1-2.045-.306-3.476-.306-5.418h0c0-2.862.408-5.827,0-8.792h.1a19.866,19.866,0,0,0-8.178-12.369c-2.965-2.045-6.44-2.761-10.019-3.783h0C104.688,60.182,103.461,60.284,102.336,60.284Z" fill="#fff"/>
            </g>
            </svg>
            </span>
            </li>
            <li id="phone-azym">
            <span onclick="showAdmins('phone')" class="social-icons">            
            <svg width="118.135" height="118.15" viewBox="0 0 118.135 118.15">
            <g id="call" transform="translate(-43.157 -38.574)">
            <g id="Group_465" data-name="Group 465">
                <path id="Path_339" data-name="Path 339" d="M161.292,97.621A59.068,59.068,0,1,1,102.2,38.574,59.083,59.083,0,0,1,161.292,97.621Z" fill="#05a500"/>
            </g>
            <g id="Group_469" data-name="Group 469">
                <g id="Group_468" data-name="Group 468">
                <g id="Group_467" data-name="Group 467">
                    <path id="Path_340" data-name="Path 340" d="M136.469,118.464,125.4,107.39a5.775,5.775,0,0,0-8.142.153l-5.579,5.577c-.353-.194-.718-.4-1.1-.612A52.286,52.286,0,0,1,87.431,89.36c-.207-.374-.4-.734-.6-1.076l3.744-3.738L92.416,82.7a5.769,5.769,0,0,0,.148-8.142L81.491,63.485a5.769,5.769,0,0,0-8.141.153l-3.121,3.139.085.084A18.036,18.036,0,0,0,67.742,71.4,18.812,18.812,0,0,0,66.6,76c-1.462,12.121,4.077,23.2,19.111,38.233,20.78,20.779,37.526,19.21,38.249,19.133a18.7,18.7,0,0,0,4.614-1.159,17.985,17.985,0,0,0,4.521-2.562l.067.062,3.161-3.1A5.775,5.775,0,0,0,136.469,118.464Z" fill="#fff"/>
                </g>
                </g>
            </g>
            </g>
            </svg>
            </span>
            </li>
            <li id="messenger-azym">
            <span onclick="showAdmins('messenger')" class="social-icons">
            <svg width="118.135" height="118.149" viewBox="0 0 118.135 118.149">
            <g id="fb" transform="translate(-43.094 -39.264)">
            <g id="Group_463" data-name="Group 463">
                <path id="Path_337" data-name="Path 337" d="M161.229,98.31a59.068,59.068,0,1,1-59.088-59.046A59.083,59.083,0,0,1,161.229,98.31Z" fill="#115eff"/>
            </g>
            <path id="Path_338" data-name="Path 338" d="M102.16,63.939c-19,0-34.4,14.261-34.4,31.85a30.961,30.961,0,0,0,12.819,24.8v12.145l11.712-6.426a36.959,36.959,0,0,0,9.865,1.33c19,0,34.4-14.26,34.4-31.852s-15.4-31.85-34.4-31.85m3.42,42.893-8.76-9.343-17.093,9.343,18.8-19.959,8.974,9.342,16.879-9.342Z" fill="#fff"/>
            </g>
            </svg>
            </span>
            </li>
            <li id="telegram-azym">
            <span onclick="showAdmins('telegram')" class="social-icons">           
            <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><circle cx="12" cy="12" fill="#039be5" r="12"/><path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"/></svg>
            </span>
            </li>
            <li id="email-azym">
            <span onclick="showAdmins('email')" class="social-icons">
            <svg width="118.135" height="118.15" viewBox="0 0 118.135 118.15">
                <g id="mail" transform="translate(-43.094 -40.094)">
                <g id="Group_470" data-name="Group 470">
                    <path id="Path_341" data-name="Path 341" d="M161.229,99.141a59.068,59.068,0,1,1-59.088-59.047A59.083,59.083,0,0,1,161.229,99.141Z" fill="#7912ff"/>
                </g>
                <g id="Group_472" data-name="Group 472">
                    <path id="Path_342" data-name="Path 342" d="M143.363,75.685c0-.1.065-.186.061-.279L118.239,99.672l25.154,23.492c.015-.168-.03-.337-.03-.508V75.685Z" fill="#fff"/>
                    <path id="Path_343" data-name="Path 343" d="M114.4,103.4,104.115,113.3a2.684,2.684,0,0,1-3.7.03l-10.253-9.555-25.318,24.4a5.81,5.81,0,0,0,1.968.393h70.872a5.838,5.838,0,0,0,2.83-.777Z" fill="#fff"/>
                    <path id="Path_344" data-name="Path 344" d="M102.221,107.655l38.435-37.022a5.819,5.819,0,0,0-2.97-.864H66.814A5.837,5.837,0,0,0,63.1,71.156Z" fill="#fff"/>
                    <path id="Path_345" data-name="Path 345" d="M60.9,76.587v46.068a5.9,5.9,0,0,0,.253,1.524l25-24.079Z" fill="#fff"/>
                </g>
                </g>
                </svg>
            </span>
            </li>
        </ul>
        <div class="social-open-menu">
        <div id="social-circle-chat" class="circleChatButtonWrap" onclick="azym_open_social()">
        <span class="close-icon">&times;</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.5 306.6c-4.1-10.2-15.8-15.2-26-11 -10.2 4.1-15.2 15.8-11 26L455 379.8l-70-30.8c-5.1-2.2-10.8-2.3-15.9-0.1 -23.9 10.2-49.5 15.4-76.1 15.4 -107.1 0-179-83.8-179-162.1 0-89.4 80.3-162.1 179-162.1s179 72.7 179 162.1c0 7-0.6 15.3-1.8 22.9 -1.6 10.9 5.9 21.1 16.8 22.7 10.9 1.6 21.1-5.9 22.7-16.8 1.4-9.6 2.2-19.8 2.2-28.8 0-54.3-23-105.3-64.8-143.5C405.9 20.8 351.2 0 293 0S180.1 20.8 138.8 58.6c-37.3 34.2-59.7 78.5-64 126.3C27.8 216 0 265.9 0 319.5c0 33.5 10.6 65.3 30.7 92.7L1.5 484.5c-3.1 7.5-1.2 16.2 4.6 21.9 3.8 3.7 8.8 5.6 13.9 5.6 2.7 0 5.5-0.6 8.1-1.7l84.2-37.1c21.2 7.9 43.6 11.9 66.7 11.9 0.5 0 1 0 1.5-0.1 33.4-0.3 65.9-9 94.1-25.5 25.2-14.7 46-35 60.5-58.9 14.2-2.5 28.1-6.4 41.5-11.6l107.3 47.3c2.6 1.1 5.3 1.7 8.1 1.7 5.1 0 10.1-1.9 13.9-5.6 5.8-5.7 7.7-14.3 4.6-21.9L468.5 306.6zM179 445c-0.3 0-0.5 0-0.8 0 -20.4-0.1-40.1-4.1-58.4-11.9 -5.1-2.2-10.9-2.1-15.9 0.1l-46.8 20.6 15.1-37.4c2.8-6.9 1.5-14.8-3.3-20.5 -18.8-22.1-28.8-48.5-28.8-76.5 0-32 13.4-62.2 37-85.2 7.3 39.9 28 78.1 59.2 108.1 38.8 37.3 90.1 59 145.5 61.6C255.6 429.6 218.4 445 179 445z"/><circle cx="292" cy="203" r="20"/><circle cx="372" cy="203" r="20"/><circle cx="212" cy="203" r="20"/></svg>
        </div>
        </div>
    </div>`)

//inserting chat html to body
document.body.insertAdjacentHTML(
    "afterend",
    `<div class="chat-section" id="chat-section" style="display:none; z-index: ${zIndex + 5} !important">
    <div id="header-section" class="header-section">
        <div class="header-title">
        <span class="user-icon"> <img src="${adminPath}/public/img/user.svg"></span>
        <span id="openChat">Agents are online!</span>
    </div>
    <div class="minus-close">
    <img onclick='minimizeChat()' src="${adminPath}/public/img/minus.svg">
    <img onclick='closeChat()' src="${adminPath}/public/img/Close.svg">
        </div>
    </div>
    <div class="co-browsing">
        <p>Share this code with admin <mark id="SessionKey"></mark></p>
    </div>
    <p id="RemoteStatus">
        <span style="display: none">Screen Share Disconnected</span>
    </p>
<div class="chat-section-remove" id="chat-section-remove">
<div id="visitorRating" style="display:none">
    <div class="visitorIcon">
    <div class="visitorRatingTitle">
    <img src="https://storage.googleapis.com/azym_image_upload/avatardefault_92824.png">
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
        <ul id="msgList-client">
            <li>
                <div class="chat-admin">
                    <span class="User">
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
            </li>
            <li>
                <div id="azym-visitor-parent" class="username">
                    <input type="text" name="username" id="azym-visitor" autocomplete="text" placeholder="Your name*">
                    <button onclick="visitorName()" type="button">Start Chat !</button>
                </div>
            <li>
        </ul>
    </div>
    <div class="messages-box" id="message-box-azym">
        <textarea maxlength="1000" id="message-box-visitor" placeholder="Enter your message"></textarea>
        <div id="send-chat-message" class="subadmin-button screen-share-icon" title="send">
            <button onclick="addMessage()">
                <img src="https://cloudchat.azymcloud.com/public/img/send.svg">
            </button>
            <button onclick="showCobrowsingInput()" id="startScreenShare">
                <img src="https://cloudchat.azymcloud.com/public/img/screen-share.png" title="start screen share">
            </button>
            <button onclick="stopSharing()">
                <img src="https://cloudchat.azymcloud.com/public/img/Stop-Screen-Share.png" title="Stop">
            </button>
        </div>
    </div>
    </div>
</div>
</div>
<button type="button" class="LiveChatButton" style="z-index: ${zIndex + 1} !important" onclick="openChat()" id="circuleChatButton">
        <span>Live chat</span>
    </div>
<div id="thank-you-feedback" class="feedback">
Thanks for your feedback !
</div>
<div class="screen-share">
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
    const appCode = Math.floor(100000 + Math.random() * 900000);
    // $('#SessionKey').html(appCode);
    $('#startScreenShare').attr('disabled', true);
    $('#startScreenShare').addClass('disabled');
    socket.emit("new_message", { message: ('Please connect to me with this ' + appCode + ' for screen share') });
    CreateSession(appCode);
    window.setTimeout(() => {
        $('#startScreenShare').removeAttr('disabled');
        $('#startScreenShare').removeClass('disabled');
    }, 30000)
    // $('.co-browsing').show();
    // $('#SessionKey').show('slow');
}

document.getElementById('message-box-visitor').addEventListener('keydown', function (e) {
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
    socket = io.connect(socketUrl,{transports: ['websocket'], upgrade: false});
    let vName = myStorage.getItem('azym-visitor-name') || "Annonymous";

    socket.on("connect", () => {
        socket.emit("authentication", {
            appId: appId,
            chatId: chatId,
            visitorName: vName
        });

        socket.on("authenticated", function () {
            //check initial name
            // if (myStorage.getItem('azym-visitor-name')) {
            //     let visitorName = myStorage.getItem('azym-visitor-name')
            //     socket.emit('visitorName', visitorName)
            // }
            console.log("connected visitor");
        });
    });

    socket.on("unauthorized", reason => {
        console.log("unauthorized visitor disconnected")
        socket.disconnect();
    });

    if (socket) {

        socket.on('disconnect',()=>{
            console.log('disconnected');
        }
                  
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
            let ratingDisplay = document.getElementById('visitorRating').style.display
            console.log('admin status changing', status, ratingDisplay);
            if (status) {
                myStorage.setItem('offline', true)
                document.getElementById('openChat').innerText = 'Agents are offline !'
                if (ratingDisplay == 'none')
                    document.getElementById('chat-contact-form').style.display = 'block'
                document.getElementById('online-chat').style.display = 'none'
            } else {
                myStorage.setItem('offline', false)
                document.getElementById('openChat').innerText = 'Agents are online !'
                document.getElementById('chat-contact-form').style.display = 'none'
                if (ratingDisplay == 'none') {
                    document.getElementById('online-chat').style.display = 'block'
                }
                document.getElementById('chat-contact-form').style.display = 'none'
            }
        })

        //site-admins
        socket.on('site-admins', (adminInfo) => {
            console.log("admin info is here =>", adminInfo)
            adminSocialInfo = JSON.parse(JSON.stringify(adminInfo))
            if (Object.keys(adminInfo).length === 0) {
                document.getElementById('social-circle-chat').style.display = 'none'
            }
            else {
                let temp = {
                    email: 0,
                    whatsapp: 0,
                    snapchat: 0,
                    phone: 0,
                    messenger: 0,
                    telegram: 0
                }
                if (adminInfo['isAllowWhatsapp'])
                    temp['whatsapp'] = 1
                if (adminInfo['isAllowEmail'])
                    temp['email'] = 1
                if (adminInfo['isAllowPhone'])
                    temp['phone'] = 1
                if (adminInfo['isAllowSnapchat'])
                    temp['snapchat'] = 1
                if (adminInfo['isAllowTelegram'])
                    temp['telegram'] = 1
                if (adminInfo['isAllowMessenger'])
                    temp['messenger'] = 1

                for (let key of Object.keys(temp)) {
                    if (!temp[key]) {
                        document.getElementById(`${key}-azym`).style.display = 'none'
                    }
                }
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
            let node = document.getElementById('msgList-client');
            if (data.role == "visitor") {
                addMessage(data.message)
            } else {
                let adminImage = bucketPath + '/' + data.image;
                node.innerHTML += `<li><div class="chat-admin">
                    <span class="User">
                        <img src="${adminImage}" onerror="this.onerror=null; this.src='https://cloudchat.azymcloud.com/public/img/user.svg'" >
                    </span>
                    <div>
                        <span class="title">Admin</span>
                        <div class="messagesPanel">
                        <span class="messages">
                           ${data.message}
                        </span>
                        </div>
                    </div>
                    </div></li>`
            }
            openChat();
            animateMessageDiv();

            // saving chat history to localstorage
            let history = JSON.parse(myStorage.getItem("history"));
            history["chat"].push({ admin: data.message });
            myStorage.setItem("history", JSON.stringify(history));
        });
    }
}

// add message to chat side
function addMessage() {
    let message = document.getElementById('message-box-visitor').value.trim()
    
    console.log('************MESSAGE********************')
    console.log(message)
    console.log('************MESSAGE********************')
    
    if (message && message !== '') {
        document.getElementById('message-box-visitor').value = '';
        let node = document.getElementById('msgList-client');
        node.innerHTML += ` <li><div class="subadmin">
                            <div class="messagesPanel">
                            <span class="messages">${message}</span>
                            </div>
                            <span class="User">
                <img src="https://storage.googleapis.com/azym_image_upload/avatardefault_92824.png">
            </span>
                        </div></li>`;
        socket.emit("new_message", { message: message });
        animateMessageDiv();
    }
}

function animateMessageDiv() {
    const messageList = $('#msgList-client');
    $("#chat-messages").animate({
        scrollTop: messageList[0].offsetHeight
    });
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
    //document.getElementsByClassName('circleChatButtonWrap')[0].style.display = 'block'
}

function closeChat() {
    if (myStorage.getItem('offline') == 'true')
        document.getElementById('rating-text-heading').innerHTML = "We do like some feedback <br/> How do you feel about this page ?"
    else
        document.getElementById('rating-text-heading').innerHTML = 'Please rate your customer service experience :'
    document.getElementById('visitorRating').style.display = 'block'
    changeSessionUI()
}

function changeSessionUI() {
    document.getElementById('online-chat').style.display = 'none';
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
    //document.getElementsByClassName('circleChatButtonWrap')[0].style.display = 'none'
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
let elements = document.getElementsByClassName('visitorRating');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

// set meta tag
let metaTag = document.createElement('meta');
metaTag.setAttribute('name', 'viewport');
metaTag.content = 'width=device-width,initial-scale=1,maximum-scale=1';
document.getElementsByTagName('head')[0].appendChild(metaTag);

function myFunction(e) {
    myStorage.setItem('rating', true)
    minimizeChat()
    document.getElementById('thank-you-feedback').style.display = 'block'
    setTimeout(() => { document.getElementById('thank-you-feedback').style.display = 'none' }, 1000)
    if (myStorage.getItem('offline') == 'true')
        socket.emit('azymRatings', this.value);
    else
        socket.emit('ratings', this.value);
    document.getElementById('visitorRating').style.display = 'none'
}

function offline_box() {
    document.getElementById('openChat').innerText = 'Agents are offline !'
    document.getElementById('chat-contact-form').style.display = 'block'
    document.getElementById('online-chat').style.display = 'none'
}
$(document).on('click', ".close-detailbox", function () {
    // alert(1)
    $("#azym-admin-list").fadeOut("slow");
})
function azym_open_social() {
    console.log('calling onclickkkkk');
    // alert(1)
    if (socialOpen) {
        $("#azym-social-icons").slideToggle("slow");
        $(this).addClass("social-open");
        if (adminShowing) {
            $("#azym-admin-list").fadeOut("slow");
            adminShowing = !adminShowing
        }
    }
    else
        $("#azym-social-icons").slideToggle("slow");
    $("#social-circle-chat").toggleClass("social-open");
    socialOpen = !socialOpen
}

function showAdmins(type) {
    let redirectUrl = ''
    if (type === 'email') {
        window.location.href = `mailto:${adminSocialInfo[type]}?subject=visitor-query`;
        return
    }
    if (type === 'phone') {
        window.open(`tel:${adminSocialInfo['countryCallingCode']}${adminSocialInfo[type]}`, '_self');
        return;
    }
    if (type === 'whatsapp')
        redirectUrl = connectTypes[type] + adminSocialInfo['countryCallingCode'] + adminSocialInfo[type]
    else
        redirectUrl = connectTypes[type] + adminSocialInfo[type]
    window.open(redirectUrl);
    return;
    // let adList = document.getElementById('azym-admin-list')
    // if (adminShowing && (type === activeSocialType)) {
    //     adminShowing = false
    //     adList.style.display = 'none'
    //     return;
    // }
    // activeSocialType = type
    // adList.innerHTML = ""
    // let ul = document.createElement('ul')
    // for (let admin of admins) {
    //     let link = '';
    //     if (type === "phone")
    //         link = "#"
    //     else
    //         link = connectTypes[type] + admin[type]

    //     if (type === "whatsapp") {
    //         link = connectTypes[type] + admin['countryCallingCode'] + admin[type]
    //     }

    //     if (admin[type]) {
    //         let li = document.createElement('li')
    //         let profile = (admin.profilePicture) ? admin.profilePicture : 'public/img/user.svg'
    //         profile = adminPath + '/' + profile
    //         let connect = (type === "phone") ? (admin['countryCallingCode'] + admin['phone']) : "connect"
    //         li.innerHTML = `<div><span><img class="admin-profile-azym" src='${profile}' onerror="this.onerror=null;this.src='https://cloudchat.azymcloud.com/public/img/user.svg'";/></span><span>${admin.name}</span><a href='${link}'>${connect}</a></div>`
    //         ul.appendChild(li)
    //     }
    // }
    // let div = document.createElement('div')
    // div.setAttribute("class", "headerlist")
    // div.style.background = socialColor[type]
    // let span = document.createElement('span')
    // span.innerHTML = type
    // let imageSpan = document.createElement('span')
    // imageSpan.setAttribute("class", "listIcon")
    // let image = document.createElement('img')
    // image.style.height = '38px';
    // image.style.width = '40px';
    // let imgPath = adminPath + '/public/img/' + socialImages[type]
    // image.setAttribute("src", imgPath)
    // imageSpan.appendChild(image)
    // div.appendChild(imageSpan)
    // div.appendChild(span)
    // adList.appendChild(div)
    // adList.appendChild(ul)
    // adList.style.display = 'block'
    // adminShowing = true
    // $("#azym-admin-list .headerlist").append('<span class="close-detailbox">&times;</span>')
}
