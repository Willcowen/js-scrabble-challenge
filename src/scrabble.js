const letterScores = {
  onePoint: ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'l', 'L', 'n', 'N', 'r', 'R', 's', 'S', 't','T'],
  twoPoints: ['d', 'D', 'g', 'G'],
  threePoints: ['b', 'B', 'c', 'C', 'm', 'M', 'p', 'P'],
  fourPoints: ['f', 'F', 'h', 'H', 'v', 'V', 'w', 'W', 'y', 'Y'],
  fivePoints: ['k', 'K'],
  eightPoints: ['j', 'J', 'x', 'X'],
  tenPoints: ['q', 'Q', 'z', 'Z']
}

class Scrabble {
  constructor(word) {
    this.word = word
  }
  score () {
    let count = 0
    if (this.word === null || this.word.length === 0 || this.word === " \t\n") {
      return count
    }
    for (let i = 0; i < this.word.length; i++) {
      if (letterScores.onePoint.includes(this.word[i])) {
        count += 1
      }
      if (letterScores.twoPoints.includes(this.word[i])) {
        count += 2
      }
      if (letterScores.threePoints.includes(this.word[i])) {
        count += 3
      }
      if (letterScores.fourPoints.includes(this.word[i])) {
        count += 4
      }
      if (letterScores.fivePoints.includes(this.word[i])) {
        count += 5
      }
      if (letterScores.eightPoints.includes(this.word[i])) {
        count += 8
      }
      if (letterScores.tenPoints.includes(this.word[i])) {
        count += 10
      }
    }
    return count
    }

  }

    
module.exports = Scrabble
