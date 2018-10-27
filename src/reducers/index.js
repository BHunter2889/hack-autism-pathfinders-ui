import {combineReducers}        from 'redux';
import Forms                    from './Forms';
import Contacts from "./Contacts";
import Docs from "./Docs";
import Team from "./Team";


export default () => combineReducers({
    Forms,
    Team,
    Docs,
    Contacts
});
