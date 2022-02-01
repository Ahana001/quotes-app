const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;
const staticPath = path.join(__dirname,"/public/");

app.use(express.static(staticPath));
  
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});