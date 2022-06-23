// requerimos express y path
const express = require('express');
const path = require('path');

// guardamos en un constante app la funcionalidad de express()
const app = express();

// definimos el puerto 
const port = 3030;

// definimos las rutas para los archivos estáticos(públicos) y otra para las vistas
const viewsPath = path.resolve(__dirname, 'views');
const publicPath = path.resolve(__dirname, 'public');

// Agregamos el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(publicPath));

// Definimos la ruta que responda a GET "/" con la vista home.html
app.get('/', (req, res) => res.sendFile(path.resolve(viewsPath, 'home.html')));

// Levantamos el servidor
app.listen(port, () => console.log(`Listening on port ${port}!`));