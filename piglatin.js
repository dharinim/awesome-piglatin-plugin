
function PiglatinTranslator() {
  this.vowels = ['a','e','i','o','u'];
}

PiglatinTranslator.prototype.process = function(word) {
  return word;
};

PiglatinTranslator.prototype.beginWithVowel = function(word) {
  return null;
};

PiglatinTranslator.prototype.schSinglePhoneme = function(word) {
  return null;
};

PiglatinTranslator.prototype.quSinglePhoneme = function(word) {
  return null;
};

PiglatinTranslator.prototype.beginWithConsonants = function(word) {
  return null;
};

PiglatinTranslator.prototype.capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

PiglatinTranslator.prototype.quAsConsonant = function(word) {
  var splits = word.split('qu');
  console.log(splits);
  if (!this.vowels.includes(splits[0]) && splits[0].length == 1) {
    return 3;
  }
};

PiglatinTranslator.prototype.get_piglatin_by_index = function(word, index) {
  return word;
};

PiglatinTranslator.prototype.translate = function(words) {
  return words;
};

function convertToPiglatin(word) {
  console.log("converting to piglatin")
  translator = new PiglatinTranslator();
  result = translator.translate(word);
}

convertToPiglatin("aquiet");

