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
                <li>Delfina Cardona</li>
                <li>Lola Romano</li>
                <li>Luisa Nazar Anchorena</li>
                </ul>
            </React.Fragment>
   );
}
}

export default Footer;