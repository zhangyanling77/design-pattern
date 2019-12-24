let express = require('express');
let app = express();
app.get('/api/user', function (req, res) {
    res.json({ id: req.query.id, name: 'zhangyanling' });
});
app.listen(8080);