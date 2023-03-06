const express = require('express');

const app = express();

const appName = 'portifolio';

const outputPath = `${__dirname}/dist/${portifolio}`;

app.use(express.static(outputPath));

app.get('/*',(req,res)=>{
    res.sendFile(`${outputPath}`/index.html);
})

app.listen(process.env.PORT);