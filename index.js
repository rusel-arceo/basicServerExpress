/**
 *  git remote add origin https://github.com/rusel-arceo/basicServerExpress.git
    git branch -M main
    git push -u origin main 
*/
const express= require ('express');
const {config} = require('./config/index.js');
app= express(); //ejecutamos express y crea la app

//Requerimientos de rutas
const {empleadoAPI} = require ('./routes/empleado');

//Llamado a las rutas
empleadoAPI(app);

app.listen(config.port,(err)=>{
    if(err)
        throw err;
    console.log(`Servidor corriendo en el puerto ${config.port}`);
});