class empleadoService
{
    async getEmpleado()
    {
    const empleado= {nombre:'Rusel', edad:36};
        
        
    return  (
        {
            data:empleado,
            message:"employees listed",
            status:true
        });
    }
}
