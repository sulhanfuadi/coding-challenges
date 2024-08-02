// Student's Final Grade
// August 03, 2024
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4

// Solution #01
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// Solution #02 by Shadow_Cat, KonradHojda, vysocina, slawomirjopek, josh-boychuk, AndreyGorbachev97, Dragonson, hannahgooding, user3466151, Dmitriy Nikolaevich (+ 37)
const finalGrade = (exam, projects) => {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
};

// test: should return 100
console.log(finalGrade(100, 12));
