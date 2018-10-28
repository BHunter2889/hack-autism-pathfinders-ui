import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class CalendarComponent extends Component {
  render() {

    const {events} = this.props;
    const eventItems = events ? events.items : [];

    return (
        <div style={{height: "90vh"}}>
            <BigCalendar
                events={eventItems}
                startAccessor='startDate'
                endAccessor='endDate'
            />
        </div>
    );
  }
}

export default CalendarComponent;
