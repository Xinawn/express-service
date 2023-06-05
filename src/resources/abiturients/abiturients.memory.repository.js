const Abiturient = require('./abiturients.model');

const Abiturients = [
  new Abiturient({
    lastName: 'valera',
    firstName: 'valera',
    numCertificate: '12345qwerty',
  }),
];

const getAll = async () => Abiturients;

const getById = async (id) =>
  Abiturients.find((abiturient) => abiturient.id === id);

const createAbiturient = async ({ lastName, firstName, numCertificate }) => {
  const abiturient = new Abiturient({ lastName, firstName, numCertificate });
  Abiturients.push(abiturient);
  return abiturient;
};

const deleteById = async (id) => {
  const abiturientPosition = Abiturients.findIndex(
    (abiturient) => abiturient.id === id
  );

  if (abiturientPosition === -1) return null;

  const abiturientDeletable = Abiturients[abiturientPosition];

  Abiturients.splice(abiturientPosition, 1);
  return abiturientDeletable;
};

const updateById = async ({ id, lastName, firstName, numCertificate }) => {
  const abiturientPosition = Abiturients.findIndex(
    (abiturient) => abiturient.id === id
  );

  if (abiturientPosition === -1) return null;

  const oldAbiturient = Abiturients[abiturientPosition];
  const newAbiturient = {
    ...oldAbiturient,
    lastName,
    firstName,
    numCertificate,
  };

  Abiturients.splice(abiturientPosition, 1, newAbiturient);
  return newAbiturient;
};

module.exports = {
  Abiturients,
  getAll,
  getById,
  createAbiturient,
  deleteById,
  updateById,
};
