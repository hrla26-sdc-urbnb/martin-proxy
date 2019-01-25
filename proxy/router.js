const router = require('express').Router();
const axios = require('axios');

router.route('/units/:id')
  .get((req, res) => {
    const { id } = req.params;
    // axios.get(`http://54.211.210.36:2100/api/units/${id}`) // microservice instance
    axios.get(`http://52.91.115.63:80/api/units/${id}`) // load balancer
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
