'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_RADIUS = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 30;
var LINE_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

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

window.renderStatistics = function (ctx, players) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  var textLines = ['Ура вы победили!', 'Список результатов:'];

  for (var j = 0; j < textLines.length; j++) {
    ctx.fillText(textLines[j], CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + LINE_HEIGHT * j);
  }

  ctx.translate(0, CLOUD_Y + CLOUD_HEIGHT);
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + TEXT_GAP + GAP + (BAR_GAP + BAR_WIDTH) * i, 0 - TEXT_GAP);
    ctx.fillRect(CLOUD_X + TEXT_GAP + GAP + (BAR_GAP + BAR_WIDTH) * i, 0 - TEXT_GAP - GAP, BAR_WIDTH, 0 - BAR_HEIGHT);
  }
};
