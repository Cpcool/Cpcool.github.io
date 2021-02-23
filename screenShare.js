var SessionKey;
var oDOM;
var CDN = 'https://cloudchat.azymcloud.com/';
var PublicCDN = 'https://cloudchat.azymcloud.com/public/javascripts/';
var CssPublicCDN = 'https://cloudchat.azymcloud.com/public/stylesheets/';
var SocketCDN = '//azym-chatbackend-ukjr2sq55q-uc.a.run.app';

function loadScript(sScriptSrc, oCallback) {
  var oHead = document.getElementsByTagName('head')[0];
  var oScript = document.createElement('script');
  oScript.type = 'text/javascript';
  oScript.src = sScriptSrc;
  oScript.onload = oCallback;
  oScript.onreadystatechange = function () {
    if (this.readyState == 'loaded' || this.readyState == 'complete') {
      oCallback();
    }
  };
  oHead.appendChild(oScript);
}

function LoadAllScripts() {
  if (typeof jQuery == 'undefined') {
    loadScript(CDN + 'libs/js/jquery.js', function () {
      loadScript(CDN + 'libs/bower_components/mutation-summary/src/mutation-summary.js', function () {
        loadScript(CDN + 'libs/bower_components/mutation-summary/util/tree-mirror.js', function () {
          init();
        })
      });
    })
  }
  else {
    loadScript(CDN + 'libs/bower_components/mutation-summary/src/mutation-summary.js', function () {
      loadScript(CDN + 'libs/bower_components/mutation-summary/util/tree-mirror.js', function () {
        startMirroring();
        // document.body.addEventListener('change', function () {
        //   const listOfElement = ['*'];
        //   listOfElement.forEach(ele => {
        //     zIndex = findHighestZIndex(ele, zIndex)
        //   })
        //   $('#circuleChatButton').css('z-index', (zIndex + 2) + ' !important')
        //   $('#chat-section').css('z-index', (zIndex + 5) + ' !important')
        //   $('#social-share-azym').css('z-index', (zIndex + 4) + ' !important')
        // });
        init();
      })
    });
  }
}


function CheckChromeFrame() {
}

function BrowserCheck() {
  var isIE = /*@cc_on!@*/false;
  if (isIE) {
    CheckChromeFrame();
  }
  else {
    loadScript(PublicCDN + 'loader.js', function () {
      LoadAllScripts();
    });
  }
}

BrowserCheck();

function init() {
  yepnope({
    load: [
      PublicCDN + 'session.js',
      CssPublicCDN + 'screenshare.css'
    ],
    complete: function () {
      if (typeof sessvars !== 'undefined' && sessvars.Session) {
        ContinueSession();
      }
      //AddMenu();
      $(window).resize(function () {
        if (socket != undefined) {
          socketSend({ height: $(window).height(), width: $(window).width() });
        }
        $('#MenuTable').css({ left: ($(window).width() - 30), top: ($(window).height() / 2) - 150 });
      });
    }
  });
}

function socketSend(msg) {
  if (typeof sessvars !== 'undefined') {
    socket.emit('changeHappened', { change: msg, room: sessvars.Session });
  }
}

function startMirroring() {
  console.log('startMirroring===screenshare===');
  var mirrorClient;
  mirrorClient = new TreeMirrorClient(document, {
    initialize: function (rootId, children) {
      oDOM = {
        f: 'initialize',
        args: [rootId, children]
      }
    },

    applyChanged: function (removed, addedOrMoved, attributes, text) {
      if (socket != undefined) {
        socketSend({
          f: 'applyChanged',
          args: [removed, addedOrMoved, attributes, text]
        });
      }
    }
  });
}
function ContinueSession() {
  // socket = io.connect(SocketCDN);
  socket.on('connect', function () {
    socket.emit('PageChange', sessvars.Session);
    $('#RemoteStatus').text('Status: Waiting for connection.');
    socket.on('SessionStarted', function () {
      $('#RemoteStatus').text('Status: Connected!');
      socketSend({ height: $(window).height(), width: $(window).width() });
      socketSend({ base: location.href.match(/^(.*\/)[^\/]*$/)[1] });
      socketSend(oDOM);
      SendMouse();
      if (!$('#AdminPointer').length) {
        $('body').append('<div id="AdminPointer" class="AdminPointer"></div> ');
      }
      $(window).scroll(function () {
        socketSend({ scroll: $(window).scrollTop() });
      });
    });
    socket.on('AdminMousePosition', function (msg) {
      $('#AdminPointer').css({ 'left': msg.PositionLeft - 15, 'top': msg.PositionTop });
    });
    socket.on('DOMLoaded', function () {
      BindEverything();
    })
  });
}
function CreateSession(appCode) {
  //socket = io.connect(SocketCDN);
  SessionKey = appCode;
  socket.emit('CreateSession', SessionKey);
  $('#RemoteStatus').text('Waiting for connection...');
  socket.on('SessionStarted', function () {
    changeSessionUI();
    sessvars.Session = SessionKey;
    $('.AdminPointer').fadeIn();
    $('#RemoteStatus').text('Connected to ' + SessionKey);
    $('#chat-section').hide('fast');
    $('#circuleChatButton').fadeIn();
    socketSend({ height: $(window).height(), width: $(window).width() });
    socketSend({ base: location.href.match(/^(.*\/)[^\/]*$/)[1] });
    socketSend(oDOM);
    SendMouse();
    if (!$('#AdminPointer').length) {
      $('body').append('<div id="AdminPointer" class="AdminPointer"></div> ');
    }
    $(window).scroll(function () {
      socketSend({ scroll: $(window).scrollTop() });
    });
  });
  socket.on('AdminMousePosition', function (msg) {
    $('#AdminPointer').css({ 'left': msg.PositionLeft - 15, 'top': msg.PositionTop });
  });
  socket.on('DOMLoaded', function () {
    console.log('DOMLoaded on from call bind method: ');
    BindEverything();
  })

}

function stopSharing() {
  localStorage.removeItem('appCode')
  /*socket.emit('data_received', null);
  streamObj.getTracks().forEach(function (track) {
      track.stop();
  });
  clearInterval(interval);*/
  socket.emit('leave-room', document.getElementById('SessionKey').innerHTML);
  $('#RemoteStatus').text('Disconnected');
  $('#RemoteStatus span').show();
  $('.co-browsing').hide('slow');
  $('.AdminPointer').fadeOut();
  /*$('#BtnSessionKey').show('slow');*/
}

function BindEverything() {
  $(':input').each(function () {
    $(this).attr('value', this.value);
  });
  $('select').each(function () {
    var Selected = $(this).children('option:selected');
    $(this).children('option').removeAttr('selected', false);
    Selected.attr('selected', true);
    $(this).replaceWith($(this)[0].outerHTML);
  });
  $(':input').bind('keyup', function () {
    $(this).attr('value', this.value);
  });
  $('select').change(function () {
    var Selected = $(this).children('option:selected');
    $(this).children('option').removeAttr('selected', false);
    Selected.attr('selected', true);
    $(this).replaceWith($(this)[0].outerHTML);
    $('select').unbind('change');
    $('select').change(function () {
      var Selected = $(this).children('option:selected');
      $(this).children('option').removeAttr('selected', false);
      Selected.attr('selected', true);
      $(this).replaceWith($(this)[0].outerHTML);
      $('select').unbind('change');
    });
  });
}


function SendMouse() {
  document.onmousemove = function (e) {
    if (!e) e = window.event;

    if (e.pageX == null && e.clientX != null) {
      var doc = document.documentElement, body = document.body;

      e.pageX = e.clientX
        + (doc && doc.scrollLeft || body && body.scrollLeft || 0)
        - (doc.clientLeft || 0);

      e.pageY = e.clientY
        + (doc && doc.scrollTop || body && body.scrollTop || 0)
        - (doc.clientTop || 0);
    }
    socket.emit('ClientMousePosition', { room: SessionKey, PositionLeft: e.pageX, PositionTop: e.pageY - 5 });
  }
}

/*function AddMenu() {
  $('body').append(
    '<table id="MenuTable" cellpadding="0">' +
    '<td><div id="SlideMenu"><p class="rotate">HELP</p></div></td>' +
    '<td id="MainMenuTD"><h3>Azym CloudChat</h3>' +
    '<p id="RemoteAssistMessage">Please create a key to start a session.</p>' +
    '<input id="SessionKey"><p id="RemoteStatus">Status: Disconnected</p>' +
    '<button class="btn" style="width: 70%" onclick="CreateSession();">Create Key</button>' +
    '</table>' +
    '');
  $('#MenuTable').css({left: $(window).width() - 30, top: ($(window).height() / 2) - 150});
  $('#SlideMenu').mouseenter(function () {
    if ($('#MenuTable').offset().left == $(window).width() - 30) {
      $('#MenuTable').animate({left: '-=' + ($('#MenuTable').width() - 30)}, 'fast');
    }
  });
  $('#MenuTable').mouseleave(function () {
    if ($(this).offset().left == $(window).width() - $('#MenuTable').width()) {
      $(this).animate({left: '+=' + ($('#MenuTable').width() - 30)}, 'fast');
    }
  });
}*/
