const { v4: uuid } = require('uuid');

class Abiturient {
  constructor({
    id = uuid(),
    lastName = 'vasil',
    firstName = 'vasil',
    numCertificate = 'P@55w0rd',
  } = {}) {
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
