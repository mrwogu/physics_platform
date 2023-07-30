const express = require('express');
const physicsRoutes = require('./src/restapi/routes')

const app = express();
const port = 8000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use('/api', physicsRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));