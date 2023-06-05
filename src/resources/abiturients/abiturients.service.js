// const usersRepo = require('./user.memory.repository');
const abiturientsRepo = require('./abiturients.memory.repository')
// const tasksRepo = require('../tasks/task.memory.repository');

// const getAll = () => usersRepo.getAll();
const getAll = () => abiturientsRepo.getAll();
// const getById = (id) => usersRepo.getById(id);
const getById = (id) => abiturientsRepo.getById(id);
// const createUser = ({ name, login, password }) =>
//   usersRepo.createUser({ name, login, password });
const createAbiturient = ({ lastName, firstName, numCertificate }) =>
  abiturientsRepo.createAbiturient({ lastName, firstName, numCertificate });
// const deleteById = async (id) => {
//   const userDeletable = await getById(id);
//   usersRepo.deleteById(id);
//   tasksRepo.removeUserById(id);

//   return userDeletable;
// };
const deleteById = async (id) => {
  const abiturientDeletable = await getById(id);
  abiturientsRepo.deleteById(id);

  return abiturientDeletable;
};
// const updateById = ({ id, name, login, password }) =>
//   usersRepo.updateById({ id, name, login, password });
const updateById = ({ id, lastName, firstName, numCertificate }) =>
  abiturientsRepo.updateById({ id, lastName, firstName, numCertificate });

module.exports = { getAll, getById, createAbiturient, deleteById, updateById };
