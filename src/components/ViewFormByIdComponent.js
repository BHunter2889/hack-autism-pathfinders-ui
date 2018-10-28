import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import htmlFormMap from "../html_forms/htmlFormMap";
import history from "../utils/history";
import {ROUTE_FORM_EDIT, ROUTE_FORMS, ROUTE_HOME} from "./AppComponent";

// const html = require('../html_forms/teammemberform.html');

const testData = {
    generalComments: "We have always had a good experience with them.",
    contactName: "Stu",
    agencyName: "Easter Seals",
    agencyType: ["jobTraining", "housing", "medicaid", "socialActivities"],
    agencyPhoneNumber: "123-456-0099",
    agencyOfficeHours: "M-F 09:00 am - 4:30 pm",
    agencyAddress: "123 Main St., Anywhere US 33669",
    transportation: "Usually Call-A-Ride, sometimes mom needs to take me.",
    ispDueDate: "November 23, 2018",
    invitedCaseManager1: "yes",
    dateCaseManagerInvited1: "October 24, 2018",
    iepDate: "June 10, 2018",
    invitedCaseManager2: "no",
    dateCaseManagerInvited2: "September",
    submitDocs: ["submitFax", "submitEmail"],
    emailSubmitAddress: "stu@bigdogs.com",
    faxSubmitNumber: "332-335-6632",
    printSubmitAddress: "See address above",
    referredBy: "Ms. Jones",
    finalNotes: "Stu is due to retire early next year, so we will want to get to know the person."
};

const iframeId = 'forms-iframe';
class ViewFormByIdComponent extends Component {
    constructor(props){
        super(props);
        this.renderOrWait = this.renderOrWait.bind(this);
    }
    componentDidMount() {
        const {id, data} = this.props;
        const form = htmlFormMap[id];
        this.renderOrWait(id, form, data, this.renderOrWait);
    }

    renderOrWait(id, form, data, waitMore) {
        setTimeout(function () {
            const iFrame = document.getElementById('forms-iframe');
            if (form && form.printableHtml && iFrame && iFrame.contentWindow && iFrame.contentWindow.document
                && iFrame.contentWindow.document.getElementById("generalComments")) {
                console.log("setting data now");
                form.injectDataIntoPrintable(iFrame.contentWindow.document, data || testData);
            } else {
                console.log("waiting a little longer for page to load");
                waitMore(id, form, data, waitMore);
            }
        }, 200);
    }

    render() {

        const {id} = this.props;

        const form = htmlFormMap[id];

        return (
            <div>
                {form && form.printableHtml &&
                    <div>
                        <div style={{width: "100%", textAlign:"right", padding: "8px"}}>
                            <span style={{float: "left", fontSize: '2em', marginLeft: "10px"}}><strong>Viewing: {form.title}</strong></span>
                            <Button style={{fontSize: "1.2em"}} onClick={()=> history.push(ROUTE_FORMS)}> Close </Button>
                            <Button style={{fontSize: "1.2em"}} onClick={()=> {
                                window.frames[iframeId].focus();
                                window.frames[iframeId].print();
                            }}> Print Form </Button>
                            <Button style={{fontSize: "1.2em"}} onClick={()=> history.push(`${ROUTE_FORM_EDIT}/${id}`)}> Edit </Button>
                        </div>
                        <iframe id={iframeId} name={iframeId} style={{width: "100%", height: "85vh"}} srcdoc={form.printableHtml} />
                    </div>
                }
                <h3>This is not the form you're looking for...</h3>
            </div>
        );
    }
}

export default ViewFormByIdComponent;
