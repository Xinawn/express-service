const Exams = require('./task.model');

// const Tasks = [new Task()];
const Examses = [new Exams()];

// const getAll = async () => Tasks;
const getAll = async () => Examses;

// const getById = async (id) => Tasks.find((task) => task.id === id);
const getById = async (id) => Examses.find((exams) => exams.id === id);

// const createTask = async ({
//   id,
//   title,
//   order,
//   description,
//   userId,
//   boardId,
//   columnId,
// }) => {
//   const task = new Task({
//     id,
//     title,
//     order,
//     description,
//     userId,
//     boardId,
//     columnId,
//   });
//   Tasks.push(task);
//   return task;
// };
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

// const deleteById = async (id) => {
//   const boardPosition = Tasks.findIndex((task) => task.id === id);

//   if (boardPosition === -1) return null;

//   const taskDeletable = Tasks[boardPosition];

//   Tasks.splice(boardPosition, 1);
//   return taskDeletable;
// };
const deleteById = async (id) => {
  const boardPosition = Examses.findIndex((exams) => exams.id === id);

  if (boardPosition === -1) return null;

  const taskDeletable = Examses[boardPosition];

  Examses.splice(boardPosition, 1);
  return taskDeletable;
};

const updateById = async ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}) => {
  const boardPosition = Tasks.findIndex((task) => task.id === id);

  if (boardPosition === -1) return null;

  const oldBoard = Tasks[boardPosition];
  const newBoard = {
    ...oldBoard,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  Tasks.splice(boardPosition, 1, newBoard);
  return newBoard;
};

const removeUserById = async (id) => {
  const userTasks = Tasks.filter((task) => task.userId === id);

  await Promise.allSettled(
    userTasks.map(async (task) => updateById({ id: task.id, userId: null }))
  );
};

const deleteByBoardId = async (boardId) => {
  const boardTasks = Tasks.filter((task) => task.boardId === boardId);

  await Promise.allSettled(boardTasks.map(async (task) => deleteById(task.id)));
};

module.exports = {
  Examses,
  getAll,
  getById,
  createExams,
  deleteById,
  updateById,
  removeUserById,
  deleteByBoardId,
};
