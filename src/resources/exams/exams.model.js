const { v4: uuid } = require('uuid');

class Exams {
  constructor({
    id = uuid(),
    subject = 'ris',
    date = '12 may',
    score = 4,
    abiturientId = null,
    teacherId = null,
  } = {}) {
    this.id = id;
    this.subject = subject;
    this.date = date;
    this.score = score;
    this.abiturientId = abiturientId;
    this.teacherId = teacherId;
  }

  static toResponse(exams) {
    const { id, subject, date, score, abiturientId, teacherId } = exams;
    return { id, subject, date, score, abiturientId, teacherId };
  }
}

module.exports = Exams;
