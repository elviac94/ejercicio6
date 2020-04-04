import React from 'react';
import Ejercicio3 from './Ejercicio3';

class MediaList extends React.Component{

    render(){
        return(
            <div>
                <Ejercicio3 
                name ="Rodolfo"
                likes='20'/>
                <Ejercicio3
                name ="Ana"
                likes='10'/>
                <Ejercicio3
                name ="Pepe"
                likes='93'/>
            </div>
        )
    }
}
export default MediaList;
