import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import htmlFormMap from "../html_forms/htmlFormMap";
import history from "../utils/history";
import {ROUTE_FORMS, ROUTE_HOME, ROUTE_VIEW_FORM} from "./AppComponent";

// const html = require('../html_forms/teammemberform.blankHtml');
const iframeId = 'forms-iframe';
class FormByIdComponent extends Component {
    render() {

        const {id, saveData} = this.props;

        const form = htmlFormMap[id];

        return (
            <div>
                {form && form.blankHtml &&
                    <div>
                        <div style={{width: "100%", textAlign:"right", padding: "8px"}}>
                            <span style={{float: "left", fontSize: '2em', marginLeft: "10px"}}><strong>Create New Form: {form.title}</strong></span>
                            <Button style={{fontSize: "1.2em"}} onClick={()=> history.push(ROUTE_FORMS)}> Cancel </Button>
                            <Button
                                variant="contained" color="primary"
                                style={{fontSize: "1.2em"}}
                                onClick={() => {
                                    const data = form.getDataFromForm(document.getElementById('forms-iframe').contentWindow.document);
                                    saveData(data);
                                    fetch('/api/addForm', {
                                        method: "POST",
                                        body: JSON.stringify({title: form.title, data}),
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        credentials: "same-origin"
                                    }).then((response) => {
                                        console.log("Status:", response.statusText);
                                        return response.text()
                                    }, function(error) {
                                        console.error("Something went wrong: ", error.message);
                                    });

                                    history.push(`${ROUTE_VIEW_FORM}/${id}`);
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                        <iframe id={iframeId} name={iframeId} style={{width: "100%", height: "85vh", backgroundColor: "white"}} srcdoc={form.blankHtml} />
                    </div>
                }
                <h3>This is not the form you're looking for...</h3>
            </div>
        );
    }
}

export default FormByIdComponent;
