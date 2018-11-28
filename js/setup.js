'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialogElement = document.querySelector('.setup');
var userDialogOpenElement = document.querySelector('.setup-open');
var userDialogCloseElement = userDialogElement.querySelector('.setup-close');
var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
var similarListElement = userDialogElement.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var openPopup = function () {
  userDialogElement.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
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

var getRandomName = function () {
  return WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};

var getRandomCoatColor = function () {
  return COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
};

var getRandomEyesColor = function () {
  return EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];
};

var createRandomWizard = function () {
  var randomWizard = {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };
  return randomWizard;
};

var createArrayRandomWizards = function (length) {
  var randomWizards = [];
  for (i = 0; i < length; i++) {
    randomWizards.push(createRandomWizard());
  }
  return randomWizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var wizards = createArrayRandomWizards(4);
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

var similarWizards = userDialogElement.querySelector('.setup-similar');
similarWizards.classList.remove('hidden');
