import {blank, printable, editable} from './teammember';
import communicationLog from './teammembercommlog';

export default {
    0: {
        title: "Support Team Member",
        blankHtml: blank,
        printableHtml: printable,
        editableHtml: editable,
        getDataFromForm: (document) => {

            let generalComments = "";
            let contactName = "";
            let agencyName = "";
            let  agencyType = [];
            let agencyPhoneNumber = "";
            let agencyOfficeHours = "";
            let agencyAddress = "";
            let transportation = "";
            let  ispDueDate = "";
            let  invitedCaseManager1 = "";
            let dateCaseManagerInvited1 = "";
            let iepDate = "";
            let invitedCaseManager2 = "";
            let submitDocs = [];
            let referredBy = "";
            let finalNotes = "";

            generalComments = document.getElementById("generalComments").value;

            contactName = document.getElementById("contactName").value;
            agencyName = document.getElementById("agencyName").value;

            agencyType = (Array.from(document.querySelectorAll('input[name="agencyType"]')).filter(e=>e.checked).map(e=>(e.value)))
            agencyPhoneNumber = document.getElementById("agencyPhoneNumber").value;
            agencyOfficeHours = document.getElementById("agencyOfficeHours").value;
            agencyAddress = document.getElementById("agencyAddress").value;
            transportation = document.getElementById("transportation").value;
            ispDueDate = document.getElementById("ispDueDate").value;

            let options1 = document.getElementsByName("invitedCaseManager1");
            for(let i = 0; i < options1.length; i++){
                if(options1[i].checked){
                    invitedCaseManager1 = options1[i].value;
                }
            }

            dateCaseManagerInvited1 = document.getElementById("dateCaseManagerInvited1").value;
            iepDate = document.getElementById("iepDate").value;

            let options2 = document.getElementsByName("invitedCaseManager2");
            for(let i = 0; i < options2.length; i++){
                if(options2[i].checked){
                    invitedCaseManager1 = options2[i].value;

                }
            }
            submitDocs = (Array.from(document.querySelectorAll('input[name="submitDocs"]')).filter(e=>e.checked).map(e=>(e.value)));
            referredBy = document.getElementById("referredBy").value;
            finalNotes = document.getElementById("finalNotes").value;

            return {
                generalComments,
                contactName,
                agencyName,
                agencyType,
                agencyPhoneNumber,
                agencyOfficeHours,
                agencyAddress,
                transportation,
                ispDueDate,
                invitedCaseManager1,
                dateCaseManagerInvited1,
                iepDate,
                invitedCaseManager2,
                submitDocs,
                referredBy,
                finalNotes
            };

        },
        injectDataIntoPrintable: (document, data) => {
            document.getElementById("generalComments").innerHTML = data.generalComments || '';
            document.getElementById("contactName").innerHTML = data.contactName || '';
            document.getElementById("agencyName").innerHTML = data.agencyName || '';

            const agencyTypeArray = (Array.from(document.querySelectorAll('input[name="agencyType"]')).map(e=>(e.value)));
            if (data.agencyType) {
                for (let i = 0; i < data.agencyType.length; i++) {
                    if (agencyTypeArray.indexOf(data.agencyType[i]) > -1) {
                        document.getElementById(data.agencyType[i]).checked = true;
                    }
                }
            }

            document.getElementById("agencyPhoneNumber").innerHTML = data.agencyPhoneNumber || '';
            document.getElementById("agencyOfficeHours").innerHTML = data.agencyOfficeHours || '';
            document.getElementById("agencyAddress").innerHTML = data.agencyAddress || '';
            document.getElementById("transportation").innerHTML = data.transportation || '';

            document.getElementById("ispDueDate").innerHTML = data.ispDueDate || '';
            if (data.invitedCaseManager1 === "yes") {
                document.getElementById("yes1").checked = true;
            } else if (data.invitedCaseManager1 === "no") {
                document.getElementById("no1").checked = true;
            }
            document.getElementById("dateCaseManagerInvited1").innerHTML = data.dateCaseManagerInvited1 || '';

            document.getElementById("iepDate").innerHTML = data.iepDate || '';
            if (data.invitedCaseManager2 === "yes") {
                document.getElementById("yes2").checked = true;
            } else if (data.invitedCaseManager2 === "no") {
                document.getElementById("no2").checked = true;
            }
            document.getElementById("dateCaseManagerInvited2").innerHTML = data.dateCaseManagerInvited2 || '';

            const submitDocsArray = (Array.from(document.querySelectorAll('input[name="submitDocs"]')).map(e=>(e.value)));

            if (data.submitDocs) {
                for (let i = 0; i < data.submitDocs.length; i++) {
                    if (submitDocsArray.indexOf(data.submitDocs[i]) > -1) {
                        document.getElementById(data.submitDocs[i]).checked = true;
                    }
                }
            }

            document.getElementById("emailSubmitAddress").innerHTML = data.emailSubmitAddress || '';
            document.getElementById("faxSubmitNumber").innerHTML = data.faxSubmitNumber || '';
            document.getElementById("printSubmitAddress").innerHTML = data.printSubmitAddress || '';

            document.getElementById("referredBy").innerHTML = data.referredBy || '';
            document.getElementById("finalNotes").innerHTML = data.finalNotes || '';
        },
        injectDataIntoEditable: (document, data) => {

            document.getElementById("generalComments").value = data.generalComments || '';
            document.getElementById("contactName").value = data.contactName || '';
            document.getElementById("agencyName").value = data.agencyName || '';

            if (data.agencyType) {
                const agencyTypeArray = (Array.from(document.querySelectorAll('input[name="agencyType"]')).map(e => (e.value)))
                for (let i = 0; i < data.agencyType.length; i++) {
                    if (agencyTypeArray.indexOf(data.agencyType[i]) > -1) {
                        document.getElementById(data.agencyType[i]).checked = true;
                    }
                }
            }

            document.getElementById("agencyPhoneNumber").value = data.agencyPhoneNumber || '';
            document.getElementById("agencyOfficeHours").value = data.agencyOfficeHours || '';
            document.getElementById("agencyAddress").value = data.agencyAddress || '';
            document.getElementById("transportation").value = data.transportation || '';

            document.getElementById("ispDueDate").value = data.ispDueDate || '';
            if (data.invitedCaseManager1 === "yes") {
                document.getElementById("yes1").checked = true;
            } else if (data.invitedCaseManager1 === "no") {
                document.getElementById("no1").checked = true;
            }
            document.getElementById("dateCaseManagerInvited1").value = data.dateCaseManagerInvited1 || '';

            document.getElementById("iepDate").value = data.iepDate || '';
            if (data.invitedCaseManager2 === "yes") {
                document.getElementById("yes2").checked = true;
            } else if (data.invitedCaseManager2 === "no") {
                document.getElementById("no2").checked = true;
            }
            document.getElementById("dateCaseManagerInvited2").value = data.dateCaseManagerInvited2 || '';

            if (data.submitDocs) {
                const submitDocsArray = (Array.from(document.querySelectorAll('input[name="submitDocs"]')).map(e => (e.value)));
                for (let i = 0; i < data.submitDocs.length; i++) {
                    if (submitDocsArray.indexOf(data.submitDocs[i]) > -1) {
                        document.getElementById(data.submitDocs[i]).checked = true;
                    }
                }
            }

            document.getElementById("emailSubmitAddress").value = data.emailSubmitAddress || '';
            document.getElementById("faxSubmitNumber").value = data.faxSubmitNumber || '';
            document.getElementById("printSubmitAddress").value = data.printSubmitAddress || '';

            document.getElementById("referredBy").value = data.referredBy || '';
            document.getElementById("finalNotes").value = data.finalNotes || '';
        }
    },

    1: {
        title: "Team Member Communications Log",
        blankHtml: communicationLog,
        getDataFromForm: (document) => {

            const data = {
                contactDate: "",
                typeOfContact: "",
                reasonForVisit: "",
                contactNotes: "",
                actionItems: "",
                nextMeetingDate: ""
            };

            data.contactDate = document.getElementById("contactDate").value;
            data.typeOfContact = document.getElementById("typeOfContact").value;
            data.reasonForVisit = document.getElementById("reasonForVisit").value;
            data.contactNotes = document.getElementById("contactNotes").value;
            data.actionItems = document.getElementById("actionItems").value;
            data.nextMeetingDate = document.getElementById("nextMeetingDate").value;

            return data;

        }
    }
};


