const router = require('express').Router();
const axios = require('axios');

router.route('/units/:id')
  .get((req, res) => {
    const { id } = req.params;
    axios.get(`http://52.91.115.63:80/api/units/${id}`)
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
