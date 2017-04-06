'use strict';

sliderId.counter = 0;
function sliderId() {
  return sliderId.counter++;
}

function Slider(containerId) {
  // Init
  this.id = sliderId();
  this.rootElement = document.getElementById(containerId);
  var panel = this.rootElement.getElementsByClassName('panel')[0],
      modalBody = this.rootElement.firstElementChild,
      controls = this.rootElement.getElementsByClassName('controls')[0],
      scene = this.rootElement.getElementsByClassName('scene')[0],
      imageContainer = panel.getElementsByClassName('mouseslider')[0],
      currentImage = void 0,
      containerNaturalHeight = modalBody.clientHeight + 'px',
      containerNaturalTop = modalBody.offsetTop + 'px',
      timeStamp = 0; // False animation action prevent

  // Linkback
  panel.linkback = controls.linkback = window['slider_' + this.id] = this;

  // Crutches
  imageContainer.style.width = Array.from(imageContainer.children).reduce(function (sum, x) {
    return sum += x.clientWidth;
  }, 0) + 'px';

  // Actions
  this.activate = function () {
    modalBody.style.height = this.rootElement.style.height = containerNaturalHeight;
    modalBody.style.top = containerNaturalTop;
    eval('setTimeout(function(){ let block = window.slider_' + this.id + '.rootElement; block.classList.add("active"); block.firstElementChild.style.top = 0+"px"; block.firstElementChild.style.height = 100+"vh" }, 10);');
  };
  this.deactivate = function () {
    modalBody.style.height = this.rootElement.style.height = containerNaturalHeight;
    modalBody.style.top = containerNaturalTop;
    this.rootElement.classList.remove('active');
  };
  this.setSceneImage = function (targetImage) {
    if (timeStamp + 301 > UnixTimeStamp() || scene.firstElementChild && targetImage.src == scene.firstElementChild.src || targetImage.localName != 'img') return;
    timeStamp = UnixTimeStamp();
    currentImage = targetImage;
    Array.from(imageContainer.children).forEach(function (item) {
      item.className = item.src == targetImage.src ? 'selected' : '';
    });
    var image = createExtendedElement('img', {
      classList: 'new',
      src: targetImage.src
    });
    if (scene.firstElementChild) {
      scene.firstElementChild.className = 'old';
      window.removeElement = scene.firstElementChild;
      setTimeout(function () {
        window.removeElement.remove();
      }, 300);
    }
    scene.appendChild(image);
  };
  this.nextSceneImage = function (e) {
    this.setSceneImage(currentImage.nextElementSibling || currentImage.parentElement.firstElementChild);
  };
  this.prevSceneImage = function (e) {
    this.setSceneImage(currentImage.previousElementSibling || currentImage.parentElement.lastElementChild);
  };

  // Creating eventcontrollers
  panel.onmousemove = function (e) {
    var move = imageContainer.clientWidth > this.clientWidth ? (imageContainer.clientWidth - this.clientWidth) * e.pageX / this.clientWidth * -1 : (this.clientWidth - imageContainer.clientWidth) / 2;
    imageContainer.style.transform = 'translateX(' + move + 'px)';
  };
  panel.onclick = function (e) {
    // ModalMode off
    if (!this.linkback.rootElement.classList.contains('active')) {
      this.linkback.activate();
    }
    this.linkback.setSceneImage(e.target);
  };
  // ControlPanel events
  controls.getElementsByClassName('prev')[0].onclick = function () {
    this.parentElement.linkback.prevSceneImage();
  };
  controls.getElementsByClassName('next')[0].onclick = function () {
    this.parentElement.linkback.nextSceneImage();
  };
  controls.getElementsByClassName('close')[0].onclick = function () {
    this.parentElement.linkback.deactivate();
  };
}
"use strict";

function createExtendedElement(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var element = document.createElement(name);
  if (options) for (var key in options) {
    element[key] = options[key];
  }return element;
}
function UnixTimeStamp() {
  return Math.round(new Date().getTime());
};
"use strict";

var __nativeST__ = window.setTimeout;
window.setTimeout = function (vCallback, nDelay, argumentToPass1) /*argumentToPass2, etc. */{
  var oThis = this,
      aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zbGlkZXIuanMiLCJtb2R1bGVzL2NyZWF0ZS1leHRlbmQtZWxlbWVudC5qcyIsIm1vZHVsZXMvc2V0LXRpbWVvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuc2xpZGVySWQuY291bnRlciA9IDA7XHJcbmZ1bmN0aW9uIHNsaWRlcklkKCkge1xyXG4gIHJldHVybiBzbGlkZXJJZC5jb3VudGVyKys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNsaWRlcihjb250YWluZXJJZCkge1xyXG4gIC8vIEluaXRcclxuICB0aGlzLmlkID0gc2xpZGVySWQoKTtcclxuICB0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xyXG4gIHZhciBwYW5lbCA9IHRoaXMucm9vdEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFuZWwnKVswXSxcclxuICAgICAgbW9kYWxCb2R5ID0gdGhpcy5yb290RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCxcclxuICAgICAgY29udHJvbHMgPSB0aGlzLnJvb3RFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRyb2xzJylbMF0sXHJcbiAgICAgIHNjZW5lID0gdGhpcy5yb290RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY2VuZScpWzBdLFxyXG4gICAgICBpbWFnZUNvbnRhaW5lciA9IHBhbmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vdXNlc2xpZGVyJylbMF0sXHJcbiAgICAgIGN1cnJlbnRJbWFnZSA9IHZvaWQgMCxcclxuICAgICAgY29udGFpbmVyTmF0dXJhbEhlaWdodCA9IG1vZGFsQm9keS5jbGllbnRIZWlnaHQgKyAncHgnLFxyXG4gICAgICBjb250YWluZXJOYXR1cmFsVG9wID0gbW9kYWxCb2R5Lm9mZnNldFRvcCArICdweCcsXHJcbiAgICAgIHRpbWVTdGFtcCA9IDA7IC8vIEZhbHNlIGFuaW1hdGlvbiBhY3Rpb24gcHJldmVudFxyXG5cclxuICAvLyBMaW5rYmFja1xyXG4gIHBhbmVsLmxpbmtiYWNrID0gY29udHJvbHMubGlua2JhY2sgPSB3aW5kb3dbJ3NsaWRlcl8nICsgdGhpcy5pZF0gPSB0aGlzO1xyXG5cclxuICAvLyBDcnV0Y2hlc1xyXG4gIGltYWdlQ29udGFpbmVyLnN0eWxlLndpZHRoID0gQXJyYXkuZnJvbShpbWFnZUNvbnRhaW5lci5jaGlsZHJlbikucmVkdWNlKGZ1bmN0aW9uIChzdW0sIHgpIHtcclxuICAgIHJldHVybiBzdW0gKz0geC5jbGllbnRXaWR0aDtcclxuICB9LCAwKSArICdweCc7XHJcblxyXG4gIC8vIEFjdGlvbnNcclxuICB0aGlzLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWxCb2R5LnN0eWxlLmhlaWdodCA9IHRoaXMucm9vdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY29udGFpbmVyTmF0dXJhbEhlaWdodDtcclxuICAgIG1vZGFsQm9keS5zdHlsZS50b3AgPSBjb250YWluZXJOYXR1cmFsVG9wO1xyXG4gICAgZXZhbCgnc2V0VGltZW91dChmdW5jdGlvbigpeyBsZXQgYmxvY2sgPSB3aW5kb3cuc2xpZGVyXycgKyB0aGlzLmlkICsgJy5yb290RWxlbWVudDsgYmxvY2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgYmxvY2suZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUudG9wID0gMCtcInB4XCI7IGJsb2NrLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmhlaWdodCA9IDEwMCtcInZoXCIgfSwgMTApOycpO1xyXG4gIH07XHJcbiAgdGhpcy5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWxCb2R5LnN0eWxlLmhlaWdodCA9IHRoaXMucm9vdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY29udGFpbmVyTmF0dXJhbEhlaWdodDtcclxuICAgIG1vZGFsQm9keS5zdHlsZS50b3AgPSBjb250YWluZXJOYXR1cmFsVG9wO1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9O1xyXG4gIHRoaXMuc2V0U2NlbmVJbWFnZSA9IGZ1bmN0aW9uICh0YXJnZXRJbWFnZSkge1xyXG4gICAgaWYgKHRpbWVTdGFtcCArIDMwMSA+IFVuaXhUaW1lU3RhbXAoKSB8fCBzY2VuZS5maXJzdEVsZW1lbnRDaGlsZCAmJiB0YXJnZXRJbWFnZS5zcmMgPT0gc2NlbmUuZmlyc3RFbGVtZW50Q2hpbGQuc3JjIHx8IHRhcmdldEltYWdlLmxvY2FsTmFtZSAhPSAnaW1nJykgcmV0dXJuO1xyXG4gICAgdGltZVN0YW1wID0gVW5peFRpbWVTdGFtcCgpO1xyXG4gICAgY3VycmVudEltYWdlID0gdGFyZ2V0SW1hZ2U7XHJcbiAgICBBcnJheS5mcm9tKGltYWdlQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gaXRlbS5zcmMgPT0gdGFyZ2V0SW1hZ2Uuc3JjID8gJ3NlbGVjdGVkJyA6ICcnO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgaW1hZ2UgPSBjcmVhdGVFeHRlbmRlZEVsZW1lbnQoJ2ltZycsIHtcclxuICAgICAgY2xhc3NMaXN0OiAnbmV3JyxcclxuICAgICAgc3JjOiB0YXJnZXRJbWFnZS5zcmNcclxuICAgIH0pO1xyXG4gICAgaWYgKHNjZW5lLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgIHNjZW5lLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSA9ICdvbGQnO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRWxlbWVudCA9IHNjZW5lLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuICAgIHNjZW5lLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICB9O1xyXG4gIHRoaXMubmV4dFNjZW5lSW1hZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdGhpcy5zZXRTY2VuZUltYWdlKGN1cnJlbnRJbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY3VycmVudEltYWdlLnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gIH07XHJcbiAgdGhpcy5wcmV2U2NlbmVJbWFnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnNldFNjZW5lSW1hZ2UoY3VycmVudEltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHwgY3VycmVudEltYWdlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRpbmcgZXZlbnRjb250cm9sbGVyc1xyXG4gIHBhbmVsLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBtb3ZlID0gaW1hZ2VDb250YWluZXIuY2xpZW50V2lkdGggPiB0aGlzLmNsaWVudFdpZHRoID8gKGltYWdlQ29udGFpbmVyLmNsaWVudFdpZHRoIC0gdGhpcy5jbGllbnRXaWR0aCkgKiBlLnBhZ2VYIC8gdGhpcy5jbGllbnRXaWR0aCAqIC0xIDogKHRoaXMuY2xpZW50V2lkdGggLSBpbWFnZUNvbnRhaW5lci5jbGllbnRXaWR0aCkgLyAyO1xyXG4gICAgaW1hZ2VDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIG1vdmUgKyAncHgpJztcclxuICB9O1xyXG4gIHBhbmVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gTW9kYWxNb2RlIG9mZlxyXG4gICAgaWYgKCF0aGlzLmxpbmtiYWNrLnJvb3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgdGhpcy5saW5rYmFjay5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saW5rYmFjay5zZXRTY2VuZUltYWdlKGUudGFyZ2V0KTtcclxuICB9O1xyXG4gIC8vIENvbnRyb2xQYW5lbCBldmVudHNcclxuICBjb250cm9scy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5saW5rYmFjay5wcmV2U2NlbmVJbWFnZSgpO1xyXG4gIH07XHJcbiAgY29udHJvbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQubGlua2JhY2submV4dFNjZW5lSW1hZ2UoKTtcclxuICB9O1xyXG4gIGNvbnRyb2xzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5saW5rYmFjay5kZWFjdGl2YXRlKCk7XHJcbiAgfTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXh0ZW5kZWRFbGVtZW50KG5hbWUpIHtcclxuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XHJcblxyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuICBpZiAob3B0aW9ucykgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnRba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICB9cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gVW5peFRpbWVTdGFtcCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgX19uYXRpdmVTVF9fID0gd2luZG93LnNldFRpbWVvdXQ7XHJcbndpbmRvdy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24gKHZDYWxsYmFjaywgbkRlbGF5LCBhcmd1bWVudFRvUGFzczEpIC8qYXJndW1lbnRUb1Bhc3MyLCBldGMuICove1xyXG4gIHZhciBvVGhpcyA9IHRoaXMsXHJcbiAgICAgIGFBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcclxuICByZXR1cm4gX19uYXRpdmVTVF9fKHZDYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gZnVuY3Rpb24gKCkge1xyXG4gICAgdkNhbGxiYWNrLmFwcGx5KG9UaGlzLCBhQXJncyk7XHJcbiAgfSA6IHZDYWxsYmFjaywgbkRlbGF5KTtcclxufTsiXX0=
