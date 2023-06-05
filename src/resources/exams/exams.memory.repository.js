const Exams = require('./exams.model');

const Examses = [new Exams()];

const getAll = async () => Examses;

const getById = async (id) => Examses.find((exams) => exams.id === id);

const createExams = async ({
  id,
  subject,
  date,
  score,
  abiturientId,
  teacherId,
}) => {
  const exams = new Exams({
    id,
    subject,
    date,
    score,
    abiturientId,
    teacherId,
  });
  Examses.push(exams);
  return exams;
};

const deleteById = async (id) => {
  const examsPosition = Examses.findIndex((exams) => exams.id === id);

  if (examsPosition === -1) return null;

  const taskDeletable = Examses[examsPosition];

  Examses.splice(examsPosition, 1);
  return taskDeletable;
};

const updateById = async ({
  id,
  subject,
  date,
  score,
  abiturientId,
  teacherId,
}) => {
  const examsPosition = Examses.findIndex((task) => task.id === id);

  if (examsPosition === -1) return null;

  const oldExams = Examses[examsPosition];
  const newExams = {
    ...oldExams,
    id,
    subject,
    date,
    score,
    abiturientId,
    teacherId,
  };

  Examses.splice(examsPosition, 1, newExams);
  return newExams;
};

module.exports = {
  Examses,
  getAll,
  getById,
  createExams,
  deleteById,
  updateById,
};
