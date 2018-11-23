'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_RADIUS = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var TEXT_GAP = 25;
var FONT = '16px PT Mono';
var TEXT_BASELINE = 'hanging';
var TEXT_COLOR = '#000';
var LINE_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, width, height, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.closePath();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var s = Math.floor(Math.random() * 100);
  var l = Math.floor(Math.random() * 100);
  return 'hsl(' + 240 + ',' + s + '%' + ',' + l + '%' + ')';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, CLOUD_COLOR);

  ctx.font = FONT;
  ctx.textBaseline = TEXT_BASELINE;
  ctx.fillStyle = TEXT_COLOR;
  var textLines = ['Ура вы победили!', 'Список результатов:'];

  for (var j = 0; j < textLines.length; j++) {
    ctx.fillText(textLines[j], CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + LINE_HEIGHT * j);
  }

  var maxTime = getMaxElement(times);
  ctx.translate(0, CLOUD_Y + CLOUD_HEIGHT);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    var listX = CLOUD_X + TEXT_GAP * 2 + (BAR_GAP + BAR_WIDTH) * i;
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillText(players[i], listX, 0 - TEXT_GAP);
    ctx.fillText(Math.round(times[i]), listX, 0 - TEXT_GAP * 2 - barHeight);
    if (players[i] === 'Вы') {
      ctx.fillStyle = BAR_COLOR;
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(listX, 0 - TEXT_GAP - GAP, BAR_WIDTH, 0 - barHeight);
  }
};
