'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialogElement = document.querySelector('.setup');
var userDialogOpenElement = document.querySelector('.setup-open');
var userDialogCloseElement = userDialogElement.querySelector('.setup-close');
var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
var wizardCoatElement = userDialogElement.querySelector('.wizard-coat');
var wizardEyesElement = userDialogElement.querySelector('.wizard-eyes');
var wizardCoatInputElement = userDialogElement.querySelector('[name="coat-color"]');
var wizardEyesInputElement = userDialogElement.querySelector('[name="eyes-color"]');
var wizardFireballElement = userDialogElement.querySelector('.setup-fireball-wrap');
var wizardFireballInputElement = wizardFireballElement.querySelector('[name="fireball-color"]');
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

wizardCoatElement.addEventListener('click', function () {
  var coatColor = getRandomCoatColor();
  wizardCoatElement.style.fill = coatColor;
  wizardCoatInputElement.value = coatColor;
});

wizardEyesElement.addEventListener('click', function () {
  var eyesColor = getRandomEyesColor();
  wizardEyesElement.style.fill = eyesColor;
  wizardEyesInputElement.value = eyesColor;
});

wizardFireballElement.addEventListener('click', function () {
  var fireballColor = getRandomFireballColor();
  wizardFireballElement.style.backgroundColor = fireballColor;
  wizardFireballInputElement.value = fireballColor;
});

var getRandomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomFireballColor = function () {
  return FIREBALL_COLOR[getRandomIndex(FIREBALL_COLOR)];
};

var getRandomName = function () {
  return WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES)];
};

var getRandomCoatColor = function () {
  return COAT_COLORS[getRandomIndex(COAT_COLORS)];
};

var getRandomEyesColor = function () {
  return EYES_COLORS[getRandomIndex(EYES_COLORS)];
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
