import React, {Component} from 'react'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <ul class="team">
                <li>Nombre integrante 1</li>
                <li>Nombre integrante 2</li>
                <li>Nombre integrante 3</li>
                </ul>
            </React.Fragment>
   );
}
}

export default Footer;