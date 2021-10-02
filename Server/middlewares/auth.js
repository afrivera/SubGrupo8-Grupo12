const jwt = require('jsonwebtoken')

const verificarAuth =(req, res, next)=>{
    /* res.json({
        msg:'Dentro del middleware'
    }) */

    const token = req.get('token');

    jwt.verify(token, 'tomaTuPass',(err, decoded)=>{
        
        if(err){
            return res.status(401).json({
                msg: 'Usuario no válido'
            })  
        }

        req.user = decoded.data;

        next()
    });
}

const verificarAdmin = (req, res,next)=>{
    const rol = req.user.rol

    if(rol=== 'Admin'){
        next();
    }else{
        return res.status(401).json({
            msg: 'Usuario no válido'
        })
    }

}


module.exports= {verificarAuth,verificarAdmin}