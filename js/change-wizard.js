'use strict';

(function () {
  var wizardCoatElement = document.querySelector('.wizard-coat');
  var wizardEyesElement = document.querySelector('.wizard-eyes');
  var wizardCoatInputElement = document.querySelector('[name="coat-color"]');
  var wizardEyesInputElement = document.querySelector('[name="eyes-color"]');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInputElement = document.querySelector('[name="fireball-color"]');

  wizardCoatElement.addEventListener('click', function () {
    var coatColor = window.data.getRandomCoatColor();
    wizardCoatElement.style.fill = coatColor;
    wizardCoatInputElement.value = coatColor;
  });

  wizardEyesElement.addEventListener('click', function () {
    var eyesColor = window.data.getRandomEyesColor();
    wizardEyesElement.style.fill = eyesColor;
    wizardEyesInputElement.value = eyesColor;
  });

  wizardFireballElement.addEventListener('click', function () {
    var fireballColor = window.data.getRandomFireballColor();
    wizardFireballElement.style.backgroundColor = fireballColor;
    wizardFireballInputElement.value = fireballColor;
  });
})();
