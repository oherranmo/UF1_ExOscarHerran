const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require("path");
app.use(cors());
app.use(express.json());

port = 3020;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
app.post('/imatge1', (req, res)=> {
  const readableStream = fs.createReadStream('../UF1_ExamenAaD/Imatges/Imatge1.jpg', {highWaterMark: 16384});
  console.log(`${path.basename('../UF1_ExamenAaD/Imatges/Imatge1.jpg')}`);

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );
});

app.post('/imatge1errmsg', (req, res)=> {
  const readableStream = fs.createReadStream('../UF1_ExamenAaD/Imatges/Imatge1.jpg', {highWaterMark: 16384});
  console.log(`${path.basename('../UF1_ExamenAaD/Imatges/Imatge1.jpg')}`);

  readableStream.on('error', (err) => {
    console.error('Al loro, no hi ha res per llegir!');
  });

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );
});



app.post('/fitxerorigendesti', (req, res)=> {
  const rutaCarpeta = '../UF1_ExamenAaD/Documents/Docs1';
  const fitxerOrigen = '../UF1_ExamenAaD/Documents/FitxerOrigen.txt';
  const fitxerDesti = path.join(rutaCarpeta, 'FitxerDesti.txt');
  if (!fs.existsSync(rutaCarpeta)) {
    fs.mkdirSync(rutaCarpeta);
  }
  const contingutOrigen = fs.readFileSync(fitxerOrigen, 'utf-8');

  if (fs.existsSync(fitxerDesti)) {
    const contingutDesti = fs.readFileSync(fitxerDesti, 'utf-8');
    fs.writeFileSync(fitxerDesti, contingutDesti +'\n'+ contingutOrigen);
  } else {
    fs.writeFileSync(fitxerDesti, contingutOrigen);
  }
});

app.post('/mostarnomsifitxers', (req, res)=> {
  const path_carpeta = '../UF1_ExamenAaD';
  function fitxersicarpetes(directori) {
    const files = fs.readdirSync(directori);
    files.forEach((file) => {
      const rutarel = directori + '/' + file;
      const ruta = path.resolve(rutarel);
      const stats = fs.statSync(ruta);
      if (stats.isDirectory()) {
        console.log(ruta);
        fitxersicarpetes(ruta);
      } else {
        console.log(ruta);
      }
    });
  }
  console.log(path.resolve(path_carpeta));
  fitxersicarpetes(path_carpeta);
});

