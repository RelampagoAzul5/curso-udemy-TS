/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0035-exercicio-video/A0035-exercicio-video.ts":
/*!************************************************************!*\
  !*** ./src/A0035-exercicio-video/A0035-exercicio-video.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPLayer {
    constructor(videoPlayerElemtens) {
        this.videoPlayer = videoPlayerElemtens.videoPlayer;
        this.playButton = videoPlayerElemtens.playButton;
        this.stopButton = videoPlayerElemtens.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = 'Play';
        });
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() { }
}
exports["default"] = VideoPLayer;
const videoPlayer = new VideoPLayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./src/A0019-exercicio/index.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-control';
__webpack_require__(/*! ../A0035-exercicio-video/A0035-exercicio-video */ "./src/A0035-exercicio-video/A0035-exercicio-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map