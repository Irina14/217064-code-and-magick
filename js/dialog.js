'use strict';

(function () {
  var userPicElement = document.querySelector('.upload');

  userPicElement.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();

    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    var dragged = false;

    var documentMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      if (shift.x !== 0 && shift.y !== 0) {
        dragged = true;
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.userDialogElement.style.top = (window.setup.userDialogElement.offsetTop - shift.y) + 'px';
      window.setup.userDialogElement.style.left = (window.setup.userDialogElement.offsetLeft - shift.x) + 'px';
    };

    var documentMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', documentMouseMoveHandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);

      if (dragged) {
        var userPicClickHandler = function (evt) {
          evt.preventDefault();
          userPicElement.removeEventListener('click', userPicClickHandler);
        };
        userPicElement.addEventListener('click', userPicClickHandler);
      }
    };

    document.addEventListener('mousemove', documentMouseMoveHandler);
    document.addEventListener('mouseup', documentMouseUpHandler);
  });
})();
