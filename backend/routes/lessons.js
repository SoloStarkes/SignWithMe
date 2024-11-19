const path = require('path');


app.get('/lesson', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/src/index.js"));
});

app.get('/lesson/{lessonID}', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/src/index.js"));
});
