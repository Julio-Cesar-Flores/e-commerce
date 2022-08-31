/**
 * Crear un míddleware que le puedas pasar un arreglo de roles 
 * (ver modelo User) y dependiendo de los roles pasados como 
 * parámetros dejará o no pasar al usuario que mandó el token
 */
 
 export default (...allRoles)=>{
    return (req,res,next)=>{
        if(!req.role) 
        {
            return res.status(401).json(
                {
                    msg: 'Error de autenticacion',
                    error
                }
            )
        }

        if (!allRoles.includes(req.role))
        {
            return res.status(401).json(
                {
                    msg: "El usuario no tiene los permisos suficientes",
                    error
                }
            )
        }
        next()
    }
}