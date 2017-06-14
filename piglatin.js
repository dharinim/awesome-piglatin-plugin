
function PiglatinTranslator() {
  this.vowels = ['a','e','i','o','u'];
}

/* Start piglatin translations split index locations */
PiglatinTranslator.prototype.beginWithVowel = function(word) {
  if (this.vowels.includes(word[0])){
      return 0;
    }
};

PiglatinTranslator.prototype.schSinglePhoneme = function(word) {
  if (word.slice(0, 3) == 'sch'){
      return 3;
  }
};

PiglatinTranslator.prototype.quSinglePhoneme = function(word) {
  if (word.slice(0,2) == "qu"){
      return 2;
    }
};

PiglatinTranslator.prototype.beginWithConsonants = function(word) {
  var words = word.split('');
  for (i=0; i < words.length; i++){
    if (this.vowels.includes(words[i])){
      return i;
    }
  }
};

PiglatinTranslator.prototype.quAsConsonant = function(word) {
  var splits = word.split('qu');
  if (!this.vowels.includes(splits[0]) && splits[0].length == 1) {
    return 3;
  }
};

/* end */


PiglatinTranslator.prototype.capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

PiglatinTranslator.prototype.constructPiglatinFromIndex = function(word, index) {
  var left = word.slice(0, index);
  var right = word.slice(index, word.length);
  var rightPunctDel = 0;
  var count = 0;
  var pig_latin_word;

  for (var i=right.length-1; i>0; i--){
    if (right[i].charCodeAt(0) < 65 || right[i].charCodeAt(0) >122){
      count +=1;
    } else {
      break;
    }
  }

  rightPunctDel = count;

  if (word == this.capitalize(word) && rightPunctDel > 0) {
    pig_latin_word = right[0].toUpperCase() +
                      right.slice(1,(right.length) - rightPunctDel) +
                      left[0].toLowerCase() + left.slice(1,(left.length-1)) +
                      "ay" + right.slice((right.length - rightPunctDel), right.length);
  }
  else if (word == this.capitalize(word)){
    pig_latin_word = right[0].toUpperCase() +
                      right.slice(1, ((right.length) - rightPunctDel)) +
                      left[0].toLowerCase() + left.slice(1,(left.length-1)) +
                      "ay" ;
  } else if (rightPunctDel > 0) {
    pig_latin_word = right.slice(0,(right.length) - rightPunctDel) +
                      left +
                      "ay" + right.slice((right.length - rightPunctDel), right.length);
  } else {
    pig_latin_word = right + left + "ay";
  }

  return pig_latin_word;
};

PiglatinTranslator.prototype.translate = function(words) {
  var piglatinWords = [];
  var wordsList = words.split(' ');
  for (var i = 0; i <= wordsList.length-1; i++){
    var pivotIndex = null;
    var word = wordsList[i];

    if (this.quAsConsonant(word)) {
      pivotIndex = this.quAsConsonant(word);
    }
    else if (this.quSinglePhoneme(word)) {
      pivotIndex = this.quSinglePhoneme(word);
    }
    else if (this.schSinglePhoneme(word)) {
      pivotIndex = this.schSinglePhoneme(word);
    }
    else if (this.beginWithVowel(word)) {
      pivotIndex = this.beginWithVowel(word);
    }
    else if (this.beginWithConsonants(word)) {
      pivotIndex = this.beginWithConsonants(word);
    }


    piglatinWords.push(this.constructPiglatinFromIndex(word, pivotIndex));
  }

  var result =  piglatinWords.join(' ');
  return result;
};

function convertToPiglation(word) {
  translator = new PiglatinTranslator();
  result = translator.translate(word);
}

convertToPiglation("Hello, world!!");
convertToPiglation("Hello");
convertToPiglation("the");
convertToPiglation("apple");
convertToPiglation("banana");
convertToPiglation("cherry");
convertToPiglation("eat pie");
convertToPiglation("three");
convertToPiglation("school");
convertToPiglation("quiet");
convertToPiglation("square");
convertToPiglation("the quick brown fox");
convertToPiglation("Square!");
convertToPiglation("hello");
convertToPiglation("hello world");
convertToPiglation("Hello world");
convertToPiglation("Hello, world!!");
convertToPiglation("eat apples");
convertToPiglation("quick brown fox");

