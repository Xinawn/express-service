const examsRepo = require('./exams.memory.repository');

const getAll = () => examsRepo.getAll();

const getById = (id) => examsRepo.getById(id);

const createExams = ({ id, subject, date, score, abiturientId, teacherId }) =>
  examsRepo.createExams({
    id,
    subject,
    date,
    score,
    abiturientId,
    teacherId,
  });
const deleteById = (id) => examsRepo.deleteById(id);
const updateById = ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}) =>
  examsRepo.updateById({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });

module.exports = { getAll, getById, createExams, deleteById, updateById };
