'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var USER_DIALOG_LEFT = 50;
  var USER_DIALOG_TOP = 80;

  var userDialogElement = document.querySelector('.setup');
  var userDialogOpenElement = document.querySelector('.setup-open');
  var userDialogCloseElement = userDialogElement.querySelector('.setup-close');
  var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardsElement = userDialogElement.querySelector('.setup-similar');

  var openPopup = function () {
    userDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    userDialogElement.style.top = USER_DIALOG_TOP + 'px';
    userDialogElement.style.left = USER_DIALOG_LEFT + '%';
  };

  var closePopup = function () {
    userDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  userDialogOpenElement.addEventListener('click', function () {
    openPopup();
  });

  userDialogCloseElement.addEventListener('click', function () {
    closePopup();
  });

  userDialogOpenElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogCloseElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userNameInputElement.addEventListener('focus', function () {
    document.removeEventListener('keydown', popupEscPressHandler);
  });

  userNameInputElement.addEventListener('blur', function () {
    document.addEventListener('keydown', popupEscPressHandler);
  });

  var createArrayRandomWizards = function (length) {
    var randomWizards = [];
    for (i = 0; i < length; i++) {
      randomWizards.push(window.data.createRandomWizard());
    }
    return randomWizards;
  };

  var wizards = createArrayRandomWizards(4);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(window.renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  similarWizardsElement.classList.remove('hidden');

  window.setup = {
    userDialogElement: userDialogElement
  };
})();
