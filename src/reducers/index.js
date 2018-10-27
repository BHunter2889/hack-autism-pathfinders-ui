import {combineReducers}        from 'redux';
import Forms                    from './Forms';
import Contacts from "./Contacts";
import Docs from "./Docs";
import Team from "./Team";
import UpcomingEvents from "./UpcomingEvents";


export default () => combineReducers({
    Contacts,
    Docs,
    Forms,
    Team,
    UpcomingEvents
});
