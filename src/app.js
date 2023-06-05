const express = require('express');
const abiturientsRouter = require('./resources/abiturients/abiturients.router');
const teacherRouter = require('./resources/teachers/teachers.router');
const examsRouter = require('./resources/exams/exams.router');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/abiturients', abiturientsRouter);
app.use('/teacher', teacherRouter);
app.use('/exams', examsRouter);

module.exports = app;
