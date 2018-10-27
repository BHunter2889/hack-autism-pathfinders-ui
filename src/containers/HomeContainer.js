import {connect}        from 'react-redux';
import HomeComponent   from '../components/HomeComponent';

const mapStateToProps = (state) => ({
    team: state.Team,
    upcomingEvents: state.UpcomingEvents
});

export default connect(mapStateToProps, null)(HomeComponent);
