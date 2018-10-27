import {connect}        from 'react-redux';
import SideMenuPanelComponent   from '../components/SideMenuPanelComponent';

const mapStateToProps = (state) => ({
    isCollapsed: state.isSidePanelCollapsed
});

export default connect(mapStateToProps, null)(SideMenuPanelComponent);
