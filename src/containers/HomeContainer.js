import {connect}        from 'react-redux';
import HomeComponent   from '../components/HomeComponent';

const mapStateToProps = (state) => ({
    team: state.Team
});

export default connect(mapStateToProps, null)(HomeComponent);
