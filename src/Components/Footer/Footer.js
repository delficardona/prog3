import React, {Component} from 'react'
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="footer">
                <p className="nombres">Lola Romano, Luisa Nazar Anchorena, Delfina Cardona</p>
                <p className="nombres1">Nuestros datos © 2021 LD Movies Argentina Defensa de las y los Consumidores</p>
                </div>
            </React.Fragment>
   );
}
}

export default Footer;