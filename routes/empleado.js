const express= require('express');

function empleadoAPI(app) {
    const router = express.Router();
    app.use("/empleado", router);

    router.get('/',async (req,res, next)=>{
        try{
            const empleado= await Promise.resolve({nombre:'Rusel', edad:36});          
        }
        catch(err){
            next(err);
        }
    }); //get
        
}

module.exports =
{
    empleadoAPI
}