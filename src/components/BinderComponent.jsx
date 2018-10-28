// Contains vertical tabs component which holds all board components.
// Tab switch logic is inside this BinderComponent
import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles.js';
import { Paper } from '@material-ui/core/es';
import zIndex from '@material-ui/core/styles/zIndex';


class BinderComponent extends React.Component {
  state = { activeIndex: 0, backgroundColor: "deepskyblue" }

  handleChange = (_, activeIndex) => {
      let backgroundColor = null;
      switch(activeIndex) {
          case 0:
            backgroundColor= "deepskyblue"
            break;
          case 1:
            backgroundColor= "orange" 
            break;           
          case 2:
            backgroundColor= "blueviolet"
            break;
          default:
            backgroundColor=null
            break;
      }
      console.log(backgroundColor)
      this.setState({ activeIndex, backgroundColor })
  }

  
  render() {
    const { activeIndex, backgroundColor } = this.state;
      let styles = {
      homeTab: {
          backgroundColor: "deepskyblue"
      },
      medTab: {
        backgroundColor: "orange"
      },
      teamTab: {
          backgroundColor: "blueviolet"
      }
  };
  console.log(backgroundColor)
    return (
        <div>
        <Tabs
          value={activeIndex}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <HomeBoardTab label='Home' />
          <MedBoardTab label='Medical' />
          <TeamBoardTab label='Support Team' />
        </Tabs>

        { activeIndex === 0 && <TabContainer backgroundColor={backgroundColor}>Item One</TabContainer> }
        { activeIndex === 1 && <TabContainer backgroundColor={backgroundColor}>Item Two</TabContainer> }
        { activeIndex === 2 && <TabContainer backgroundColor={backgroundColor}>Item Three</TabContainer> }
        </div>
    )
  }
}

// const VerticalTabs = withStyles(theme => ({
// //   flexContainer: {
// //     flexDirection: 'column'
// //   },
//   indicator: {
//     display: 'none',
//   }
// }))(Tabs)

const HomeBoardTab = withStyles( theme => ({
    root:{
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        backgroundColor: "deepskyblue",
        fontSize: "2.4rem",
        fontWeight: "500"
    },
    selected: {
        fontSize: "2.5rem",
        fontWeight: "600",
        color: 'tomato',
        borderBottom: '3px solid tomato',
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'        
    }
}))(Tab);

const MedBoardTab = withStyles( theme => ({
    root:{
        fontSize: "2.4rem",
        fontWeight: "500",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        backgroundColor: "orange",
    },
    selected: {
        fontSize: "2.5rem",        
        fontWeight: "600",
        color: 'tomato',
        borderBottom: '3px solid tomato',
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'        
    }
}))(Tab);

const TeamBoardTab = withStyles( theme => ({
    root:{
        fontSize: "2.4rem",
        fontWeight: "500",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        backgroundColor: "blueviolet"
    },
    selected: {
        fontSize: "2.5rem",        
        fontWeight: "600",
        color: 'tomato',
        borderBottom: '3px solid tomato',
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    }
}))(Tab);

function TabContainer(props) {
    const backgroundColor = props.backgroundColor;
  return (
    <div style={{display: "flex", height: "100%", flexFlow:"column"}}>
    <Paper style={{borderRadius: "0 0 5px 5px", flex: "1 1 auto", height: "calc(100vh - 114px)", backgroundColor, boxShadow:'0px -1px 5px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)'}}>
        <Typography component="div" >
            {props.children}
        </Typography>
    </Paper>
    </div>
  );
}

export default BinderComponent;