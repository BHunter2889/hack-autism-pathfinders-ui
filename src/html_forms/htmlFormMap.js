import teamMemberForm from './teammember';
import communicationLog from './teammembercommlog';

export default {
    0: {
        title: "Support Team Member",
        html: teamMemberForm,
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

        }
    },

    1: {
        title: "Team Member Communications Log",
        html: communicationLog,
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


