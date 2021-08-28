import React from "react";
import "./IdCard.css";


export default class IdCard extends React.Component{
    render(){
        return(
            <div className="card">
                <div>
                    <img src={this.props.picture} alt="img profile"/>
                </div>
                <div>
                    <p>
                        <b>First Name: </b>{this.props.firstName}
                    </p>
                </div>
                <div>
                    <p>
                        <b>Last Name: </b>{this.props.lastName}
                    </p>
                </div>
                <div>
                    <p>
                        <b>Gender: </b>{this.props.gender}
                    </p>
                </div>
                <div>
                    <p>
                        <b>Height: </b>{this.props.height}
                    </p>
                </div>
                <div>
                    <p>
                        <b>Birth: </b>{this.props.birth.toDateString()}
                    </p>
                </div>
            </div>
           
        )
    }
}