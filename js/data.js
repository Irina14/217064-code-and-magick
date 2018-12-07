'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomFireballColor = function () {
    return getRandomElement(FIREBALL_COLOR);
  };

  var getRandomName = function () {
    return getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  };

  var getRandomCoatColor = function () {
    return getRandomElement(COAT_COLORS);
  };

  var getRandomEyesColor = function () {
    return getRandomElement(EYES_COLORS);
  };

  var createRandomWizard = function () {
    var randomWizard = {
      name: getRandomName(),
      coatColor: getRandomCoatColor(),
      eyesColor: getRandomEyesColor()
    };
    return randomWizard;
  };

  window.data = {
    getRandomFireballColor: getRandomFireballColor,
    getRandomCoatColor: getRandomCoatColor,
    getRandomEyesColor: getRandomEyesColor,
    createRandomWizard: createRandomWizard
  };
})();
