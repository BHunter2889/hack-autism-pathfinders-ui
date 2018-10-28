import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css"
import moment from 'moment';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class CalendarComponent extends Component {
    render() {
        const {events} = this.props;
        const eventItems = events ? events.items.map(item => {
            // console.log("each event item:", item);
            return {
                title: item.summary,
                start: item.start ? new Date(item.start.dateTime) : null,
                end: item.end ? new Date(item.end.dateTime) : null
            }
        }) : [];

        return (
            <div style={{height: "90vh", backgroundColor: "white"}}>
                <BigCalendar
                    events={[]}
                    views={allViews}
                    step={60}
                    defaultDate={new Date(2015, 3, 1)}
                />
            </div>
        )
    }
}

export default CalendarComponent;
