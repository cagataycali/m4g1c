var _ = require('underscore');
var async = require('async');

var keys = [
  {
    word: 'Initial Commit Init',
    moji: ':tada:'
  },
  {
    word: 'Version Tag',
    moji: ':bookmark:'
  },
  {
    word: 'New Feature done fixed',
    moji: ':sparkles:'
  },
  {
    word: 'Bugfix bug fix',
    moji: ':bug:'
  },
  {
    word: 'Metadata',
    moji: ':card_index:'
  },
  {
    word: 'Refactoring improve improved',
    moji: ':package:'
  },
  {
    word: 'Documentation',
    moji: ':books:'
  },
  {
    word: 'Performance',
    moji: ':racehorse:'
  },
  {
    word: 'Cosmetic',
    moji: ':lipstick:'
  },
  {
    word: 'Tooling',
    moji: ':wrench:'
  },
  {
    word: 'Tests',
    moji: ':rotating_light:'
  },
  {
    word: 'Deprecation',
    moji: ':poop:'
  },
  {
    word: 'Work In Progress (WIP)',
    moji: ':construction:'
  },
];

module.exports = function(text, obj = true) {
  return new Promise(function(resolve, reject) {
    var emoji = [];
    keys.forEach(function (key) {
      key.word.split(' ').forEach(function (word) {
        text.split(' ').forEach(function (piece) {
          if (piece.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
            emoji.push(key.moji)
          }
        });
      });
    });
    emoji.length !== 0 ? resolve(obj ? _.uniq(emoji):_.uniq(emoji).join(' ')) : reject('I couldn\'t finded dude.')
  });
}
