import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import htmlFormMap from "../html_forms/htmlFormMap";
import history from "../utils/history";
import {ROUTE_HOME} from "./AppComponent";

// const html = require('../html_forms/teammemberform.html');

class FormByIdComponent extends Component {
    render() {

        const {id} = this.props;

        return (
            <div>
                {htmlFormMap[id] && htmlFormMap[id].html &&
                    <div>
                        <div style={{width: "100%", textAlign:"right", padding: "8px"}}>
                            <span style={{float: "left", fontSize: '2em', marginLeft: "10px"}}><strong>{htmlFormMap[id].title}</strong></span>
                            <Button style={{fontSize: "1.2em"}} onClick={()=> history.push(ROUTE_HOME)}> Cancel </Button>
                            <Button variant="contained" color="primary" style={{fontSize: "1.2em"}} onClick={()=> history.push(ROUTE_HOME)}> Save </Button>
                        </div>
                        <iframe style={{width: "100%", height: "90vh"}} srcdoc={htmlFormMap[id].html} />
                    </div>
                }
                <h3>This is not the form you're looking for...</h3>
            </div>
        );
    }
}

export default FormByIdComponent;
