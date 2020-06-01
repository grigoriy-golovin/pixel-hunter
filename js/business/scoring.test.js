import {assert} from "chai";
import scoring from "./scoring";

describe(`scoring test`, () => {
  it(`должен вернуть -1 когда больше 3 неверных ответов`, () => {
    let answers = [
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
    ];

    assert.equal(scoring(answers, 3), -1);
  });

  it(`должен вернуть -1 когда количество ответов не равно 10`, () => {
    let answers = [
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
    ];

    assert.equal(scoring(answers, 3), -1);

    let answers1 = [
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: false, timeSec: 10},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 10},
    ];

    assert.equal(scoring(answers1, 3), -1);
  });

  it(`должен вернуть 1150 когда все ответы верны и нет поправок за время`, () => {
    let answers = [
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
      {isCorrect: true, timeSec: 15},
    ];

    assert.equal(scoring(answers, 3), 1150);
  });

  it(`должен вернуть 650 когда все ответы верны и все медленные`, () => {
    let answers = [
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
      {isCorrect: true, timeSec: 21},
    ];

    assert.equal(scoring(answers, 3), 650);
  });

  it(`должен вернуть 1650 когда все ответы верны и все быстые`, () => {
    let answers = [
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
    ];

    assert.equal(scoring(answers, 3), 1650);
  });

  it(`должен вернуть 1200 сложная комбинация`, () => {
    let answers = [
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 25},
      {isCorrect: true, timeSec: 9},
      {isCorrect: false, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 11},
      {isCorrect: true, timeSec: 10},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 15},
    ];

    assert.equal(scoring(answers, 3), 1200);
  });

  it(`должен вернуть -1 когда все ответы быстые но больше 3 ошибок`, () => {
    let answers = [
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: false, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: false, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: false, timeSec: 9},
      {isCorrect: true, timeSec: 9},
      {isCorrect: false, timeSec: 9},
    ];

    assert.equal(scoring(answers, 3), -1);
  });
});
