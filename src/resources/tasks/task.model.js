const { v4: uuid } = require('uuid');

// class Task {
//   constructor({
//     id = uuid(),
//     title = 'BOARD',
//     order = 0,
//     description = 'description',
//     teacherId = null,
//     abiturientId = null,
//     columnId = null,
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.description = description;
//     this.abiturientId = abiturientId;
//     this.teacherId = boardId;
//     this.columnId = columnId;
//   }

class Exams {
  constructor({
    id = uuid(),
    subject='ris',
    date='12 may',
    score= 4,
    abiturientId=null,
    teacherId=null,
  } ={}) {
    this.id=id;
    this.subject=subject;
    this.date=date;
    this.score=score;
    this.abiturientId=abiturientId;
    this.teacherId=teacherId;
  }

  static toResponse(exams) {
    const { id, subject,date, score, abiturientId,teacherId} = exams;
    return{id, subject,date, score, abiturientId,teacherId} ;
  }
}

  // static toResponse(task) {
  //   const { id, title, order, description, userId, boardId, columnId } = task;
  //   return { id, title, order, description, userId, boardId, columnId };
  // }


module.exports = Exams;
