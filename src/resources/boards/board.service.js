const teachersRepo = require('./board.memory.repository');
const examsRepo = require('../exams/exams.memory.repository');

// const getAll = () => boardsRepo.getAll();
const getAll = () => teachersRepo.getAll();
// const getById = (id) => boardsRepo.getById(id);
const getById = (id) => teachersRepo.getById(id);
// const createBoard = ({ id, title, columns }) =>
//   boardsRepo.createBoard({ id, title, columns });
const createTeacher = ({ id, lastName, firstName, degree }) =>
teachersRepo.createTeacher({ id, lastName, firstName, degree });
// const deleteById = async (id) => {
//   const boardDeletable = await getById(id);
//   boardsRepo.deleteById(id);
//   examsRepo.deleteByBoardId(id);

//   return boardDeletable;
// };
const deleteById = async (id) => {
  const boardDeletable = await getById(id);
  teachersRepo.deleteById(id);
  examsRepo.deleteByExamsId(id);

  return boardDeletable;
};
const updateById = ({ id, title, columns }) =>
  boardsRepo.updateById({ id, title, columns });

module.exports = { getAll, getById, createTeacher, deleteById, updateById };
