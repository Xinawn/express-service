const teachersRepo = require('./teachers.memory.repository');
const examsRepo = require('../exams/exams.memory.repository');

const getAll = () => teachersRepo.getAll();

const getById = (id) => teachersRepo.getById(id);

const createTeacher = ({ id, lastName, firstName, degree }) =>
  teachersRepo.createTeacher({ id, lastName, firstName, degree });

const deleteById = async (id) => {
  const boardDeletable = await getById(id);
  teachersRepo.deleteById(id);
  examsRepo.deleteByExamsId(id);

  return boardDeletable;
};

const updateById = ({ id, lastName, firstName, degree }) =>
  teachersRepo.updateById({ id, lastName, firstName, degree });

module.exports = { getAll, getById, createTeacher, deleteById, updateById };
