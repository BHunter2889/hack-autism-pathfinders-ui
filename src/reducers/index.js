import {combineReducers}        from 'redux';
import Forms                    from './Forms';
import Contacts from "./Contacts";
import Docs from "./Docs";
import Team from "./Team";
import UpcomingEvents from "./UpcomingEvents";
import IsMemberModalShowing from "./IsMemberModalShowing";
import IsFormModalShowing from "./IsFormModalShowing";
import MemberModalDetails from "./MemberModalDetails";
import ScreenDimensions from "./ScreenDimensions";


export default () => combineReducers({
    Contacts,
    Docs,
    Forms,
    IsMemberModalShowing,
    IsFormModalShowing,
    MemberModalDetails,
    ScreenDimensions,
    Team,
    UpcomingEvents
});
