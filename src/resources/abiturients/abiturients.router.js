const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const Abiturient = require('./abiturients.model');

// const usersService = require('./user.service');
const abiturientsService = require('./abiturients.service')
const catchErrors = require('../../common/catchErrors');

// router.route('/').get(
//   catchErrors(async (req, res) => {
//     const users = await usersService.getAll();

//     res.json(users.map(User.toResponse));
//   })
// );
router.route('/').get(
  catchErrors(async (req, res) => {
    const abiturients = await abiturientsService.getAll();

    res.json(abiturients.map(Abiturient.toResponse));
  })
);

// router.route('/').post(
//   catchErrors(async (req, res) => {
//     const { name, login, password } = req.body;

//     const user = await usersService.createUser({ name, login, password });

//     if (user) {
//       res.status(StatusCodes.CREATED).json(User.toResponse(user));
//     } else {
//       res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ code: 'USER_NOT_CREATE', msg: 'User not create' });
//     }
//   })
// );
router.route('/').post(async (req, res) => {
  const { lastName, firstName, numCertificate } = req.body;

  const abiturient = await abiturientsService.createAbiturient({
    lastName,
    firstName,
    numCertificate,
  });

  if (abiturient) {
    res.status(StatusCodes.CREATED).json(Abiturient.toResponse(abiturient));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'abiturient_NOT_CREATE', msg: 'abiturient not create' });
  }
});

// router.route('/:id').get(
//   catchErrors(async (req, res) => {
//     const { id } = req.params;

//     const user = await usersService.getById(id);

//     if (user) {
//       res.json(User.toResponse(user));
//     } else {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
//     }
//   })
// );
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const abiturient = await abiturientsService.getById(id);

    if (abiturient) {
      res.json(Abiturient.toResponse(abiturient));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'abiturient_NOT_FOUND', msg: 'abiturient not found' });
    }
  })
);

// router.route('/:id').put(
//   catchErrors(async (req, res) => {
//     const { id } = req.params;
//     const { name, login, password } = req.body;

//     const user = await usersService.updateById({ id, name, login, password });

//     if (user) {
//       res.status(StatusCodes.OK).json(User.toResponse(user));
//     } else {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
//     }
//   })
// );
router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, numCertificate } = req.body;

    const abiturient = await abiturientsService.updateById({
      id,
      lastName,
      firstName,
      numCertificate,
    });

    if (abiturient) {
      res.status(StatusCodes.OK).json(Abiturient.toResponse(abiturient));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'Abiturient_NOT_FOUND', msg: 'Abiturient not found' });
    }
  })
);

// router.route('/:id').delete(
//   catchErrors(async (req, res) => {
//     const { id } = req.params;

//     const user = await usersService.deleteById(id);

//     if (!user) {
//       return res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
//     }

//     return res
//       .status(StatusCodes.NO_CONTENT)
//       .json({ code: 'USER_DELETED', msg: 'The user has been deleted' });
//   })
// );
router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const abiturient = await abiturientsService.deleteById(id);

    if (!abiturient) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'Abiturient_NOT_FOUND', msg: 'Abiturient not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'Abiturient_DELETED', msg: 'The Abiturient has been deleted' });
  })
);

module.exports = router;
