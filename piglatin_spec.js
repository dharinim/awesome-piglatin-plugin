describe("PiglatinTranslator", function() {
  beforeEach(function() {
    piglatinTranslator = new PiglatinTranslator();
  });

  // Test cases from question
  it("translates a word begining with consonant", function() {
    var testcase = {
      input: "hello",
      output: "ellohay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates two words", function() {
    var testcase = {
      input: "hello world",
      output: "ellohay orldway"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates two words with capital", function() {
    var testcase = {
      input: "Hello world",
      output: "Ellohay orldway"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates two words with exclamation", function() {
    var testcase = {
      input: "Hello, world!!",
      output: "Ellohay, orldway!!"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates two words with vowels", function() {
    var testcase = {
      input: "eat apples",
      output: "eatay applesay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates three words", function() {
    var testcase = {
      input: "quick brown fox",
      output: "ickquay ownbray oxfay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });


  // More tests
  it("translates a word beginning with a vowel", function() {
    var testcase = {
      input: "apple",
      output: "appleay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates a word beginning with a consonant", function() {
    var testcase = {
      input: "banana",
      output: "ananabay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates a word beginning with two consonants", function() {
    var testcase = {
      input: "cherry",
      output: "errychay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates two words", function() {
    var testcase = {
      input: "eat pie",
      output: "eatay iepay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("translates a word beginning with three consonants", function() {
    var testcase = {
      input: "three",
      output: "eethray"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("counts 'sch' as a single phoneme", function() {
    var testcase = {
      input: "school",
      output: "oolschay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("counts 'qu' as a single phoneme", function() {
    var testcase = {
      input: "quiet",
      output: "ietquay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

  it("counts 'qu' as a consonant even when it's preceded by a consonant", function() {
    var testcase = {
      input: "square",
      output: "aresquay"
    };
    var result = piglatinTranslator.translate(testcase.input);
    expect(result).toEqual(testcase.output);
  });

});