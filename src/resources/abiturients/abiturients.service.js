const abiturientsRepo = require('./abiturients.memory.repository');

const getAll = () => abiturientsRepo.getAll();

const getById = (id) => abiturientsRepo.getById(id);

const createAbiturient = ({ lastName, firstName, numCertificate }) =>
  abiturientsRepo.createAbiturient({ lastName, firstName, numCertificate });

const deleteById = async (id) => {
  const abiturientDeletable = await getById(id);
  abiturientsRepo.deleteById(id);

  return abiturientDeletable;
};

const updateById = ({ id, lastName, firstName, numCertificate }) =>
  abiturientsRepo.updateById({ id, lastName, firstName, numCertificate });

module.exports = { getAll, getById, createAbiturient, deleteById, updateById };
