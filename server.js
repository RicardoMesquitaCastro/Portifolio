const express = require('express');

const app = express();

const appName = 'Portifolio';

const outputPath = `${__dirname}/dist/${Portifolio}`;

app.use(express.static(outputPath));

app.get('/*',(req,res)=>{
    res.sendFile(`${outputPath}`/index.html);
})

app.listen(process.env.PORT);