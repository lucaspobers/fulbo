import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export function createAccesToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign({
            payload,
        }, TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
    })
}

/*
    Token - Es un string que se genera a partir de un algoritmo de encriptacion. Es una especie
    de autorizacion que se le da a un usuario para que pueda acceder a ciertos recursos de la
    aplicacion. El token se genera cuando el usuario se loguea en la aplicacion.(jsonwebtoken)

*/


