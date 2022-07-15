import React, { useEffect } from 'react';
import { View } from 'react-native';

interface RefreshTokenProps {
    expirationTime: number,
    refreshTokenRequest: Function
}


// Este componente se va a encargar de hacer la request del refresh del token
// Esto puede ser cuando el token esta vencido o 5 minutos antes de vencerse


const RefreshToken = ({ expirationTime, refreshTokenRequest }: RefreshTokenProps) => {

    useEffect(() => {
        let timer: any = null;
        console.log("Expiration of token", expirationTime)
        if (expirationTime) {
            // Cada vez que se abre la app se calcula la fecha fiveMinutesBeforeExp en base al expiration time del token
            const fiveMinutesBeforeExp = new Date(1000 * (expirationTime - 60 * 5));

            // Checkeo si esta vencido el token
            if (new Date < fiveMinutesBeforeExp) {
                // Si el token no esta vencido, espera un waitingTimeForTokenExpiration para hacer la request
                console.log("No vencido")

                const  waitingTimeForTokenExpiration = fiveMinutesBeforeExp.getTime() - new Date().getTime();
                console.log("Esperar", waitingTimeForTokenExpiration, "ms para refresh")
                
                timer = setTimeout(() => { 
                    refreshTokenRequest();
                }, waitingTimeForTokenExpiration)

            } else {
                // Si esta vencido hay que hacer la request de refresh
                console.log("Vencido")
                refreshTokenRequest();
            }
        }
        return () => timer && clearTimeout(timer);
    }, [expirationTime])


    return(
        <View/>
    )
}

export default RefreshToken;