const express = require('express');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
const abiturientsRouter = require('./resources/abiturients/abiturients.router');
const teacherRouter = require('./resources/teachers/teachers.router');
const examsRouter = require('./resources/exams/exams.router');

const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/abiturients', abiturientsRouter);
app.use('/teacher', teacherRouter);
app.use('/tasks', examsRouter);

module.exports = app;
