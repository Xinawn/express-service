const { v4: uuid } = require('uuid');

// class User {
//   constructor({
//     id = uuid(),
//     name = 'USER',
//     login = 'user',
//     password = 'P@55w0rd',
//   } = {}) {
//     this.id = id;
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }

//   static toResponse(user) {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
// }

class Abiturient {
  constructor({ id = uuid(), lastName = 'vasil', firstName = 'vasil', numCertificate = 'P@55w0rd' } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.numCertificate = numCertificate;
  }

  static toResponse(abiturient) {
    const { id, lastName, firstName } = abiturient;
    return { id, lastName, firstName };
  }
}

module.exports = Abiturient;
