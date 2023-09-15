const router = require('express').Router();
const { Activities } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newActivities = await Activities.create({
      ...req.body,
    });
    console.log(newActivities);
    res.status(200).json(newActivities);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const activitiesData = await Activities.destroy({
      where: {
        id: req.params.id,
        trip_id: req.session.trip_id,
      },
    });

    if (!activitiesData) {
      res.status(404).json({ message: 'No activity found !' });
      return;
    }

    res.status(200).json(activitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;