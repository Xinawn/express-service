const { v4: uuid } = require('uuid');

// class Board {
//   constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }

//   static toResponse(board) {
//     const { id, title, columns } = board;
//     return { id, title, columns };
//   }
// }
class Teacher {
  constructor({
    id = uuid(),
    lastName = 'maksim',
    firstName = 'Kalinin',
    degree = 'teacher',
  } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }

  static toResponse(teacher) {
    const { id, lastName, firstName, degree } = teacher;
    return { id, lastName, firstName, degree };
  }
}

module.exports = Teacher;
