const Abiturient = require('./abiturients.model');

// const Users = [
//   new User({ name: 'maxim', login: 'maxim', password: '12345qwerty' }),
// ];
const Abiturients = [new Abiturient({ lastName: 'valera', firstName: 'valera', numCertificate: '12345qwerty' })];


// const getAll = async () => Users;
const getAll = async () => Abiturients;

// const getById = async (id) => Users.find((user) => user.id === id);
const getById = async (id) => Abiturients.find((abiturient) => abiturient.id === id);

// const createUser = async ({ name, login, password }) => {
//   const user = new User({ name, login, password });
//   Users.push(user);
//   return user;
// };
const createAbiturient = async ({ lastName, firstName, numCertificate }) => {
  const abiturient = new Abiturient({ lastName, firstName, numCertificate });
  Abiturients.push(abiturient);
  return abiturient;
}

// const deleteById = async (id) => {
//   const userPosition = Users.findIndex((user) => user.id === id);

//   if (userPosition === -1) return null;

//   const userDeletable = Users[userPosition];

//   Users.splice(userPosition, 1);
//   return userDeletable;
// };
const deleteById = async (id) => {
  const abiturientPosition = Abiturients.findIndex((abiturient) => abiturient.id === id);

  if (abiturientPosition === -1) return null;

  const abiturientDeletable = Abiturients[abiturientPosition];

  Abiturients.splice(abiturientPosition, 1);
  return abiturientDeletable;
};

// const updateById = async ({ id, name, login, password }) => {
//   const userPosition = Users.findIndex((user) => user.id === id);

//   if (userPosition === -1) return null;

//   const oldUser = Users[userPosition];
//   const newUser = { ...oldUser, name, login, password };

//   Users.splice(userPosition, 1, newUser);
//   return newUser;
// };
const updateById = async ({ id, lastName, firstName, numCertificate }) => {
  const abiturientPosition = Abiturients.findIndex((abiturient) => abiturient.id === id);

  if (abiturientPosition === -1) return null;

  const oldAbiturient = Abiturients[abiturientPosition];
  const newAbiturient = { ...oldAbiturient, lastName, firstName, numCertificate };

  Abiturients.splice(abiturientPosition, 1, newAbiturient);
  return newAbiturient;
};

module.exports = {
  Abiturients,
  getAll,
  getById,
  // createUser,
  createAbiturient,
  deleteById,
  updateById,
};
