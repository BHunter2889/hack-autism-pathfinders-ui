// This component is not used in our current implementation of the UI. The original plan was to recreate what
// we were calling "boards" which represent the colored internal binders of the bigger pathbinder. Upon finding out that there wasn't
// a defined structure to how they should be used, we abandoned this idea. However, if you want to begin storing more user preferences,
// you could start allowing this component to be customized with color and labels. The intent was to put what was on the forms page
// and possibly the documents page into the appropriate binder boards, but with customization this was too much effort for the hackathon
// though significant effort went into creating and styling this component. It is yours to do with as you wish, including deleting this 
// blob of commented text.
// Contains vertical tabs component which holds all board components.
// Tab switch logic is inside this BinderComponent
import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles.js';
import { Paper } from '@material-ui/core/es';
import zIndex from '@material-ui/core/styles/zIndex';
import FormsContainer from '../containers/FormsContainer';


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
          <HomeBoardTab label='Personal & Home' />
          <MedBoardTab label='Medical' />
          <PublicBoardTab label='Public & Social ' />
        </Tabs>

        { activeIndex === 0 && <TabContainer categoryIdx={"cat1"} backgroundColor={backgroundColor}></TabContainer> }
        { activeIndex === 1 && <TabContainer categoryIdx={"cat2"} backgroundColor={backgroundColor}></TabContainer> }
        { activeIndex === 2 && <TabContainer categoryIdx={"cat3"} backgroundColor={backgroundColor}></TabContainer> }
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

const PublicBoardTab = withStyles( theme => ({
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
    const categoryIdx = props.categoryIdx;
  return (
    <div style={{display: "flex", height: "100%", flexFlow:"column"}}>
    <Paper style={{borderRadius: "0 0 5px 5px", flex: "1 1 auto", height: "calc(100vh - 114px)", backgroundColor, boxShadow:'0px -1px 5px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)'}}>
        <FormsContainer categoryIdx={categoryIdx} />
    </Paper>
    </div>
  );
}

export default BinderComponent;
