'use strict';
(function () {

  var userDialogElement = document.querySelector('.setup');
  var userPicElement = userDialogElement.querySelector('.upload');

  userPicElement.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();

    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    var dragged = false;

    var userPicMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialogElement.style.top = (userDialogElement.offsetTop - shift.y) + 'px';
      userDialogElement.style.left = (userDialogElement.offsetLeft - shift.x) + 'px';
    };

    var userPicMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', userPicMouseMoveHandler);
      document.removeEventListener('mouseup', userPicMouseUpHandler);

      if (dragged) {
        var userPicClickHandler = function (evt) {
          evt.preventDefault();
          userPicElement.removeEventListener('click', userPicClickHandler);
        };
        userPicElement.addEventListener('click', userPicClickHandler);
      }
    };

    document.addEventListener('mousemove', userPicMouseMoveHandler);
    document.addEventListener('mouseup', userPicMouseUpHandler);
  });
})();
