import React, {Component} from 'react';

class TeamMemberProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //Open a modal
    }

    render() {
        const btnImg = "https://cdn2.iconfinder.com/data/icons/buildings-places-2/48/v-10-512.png";

        return (
            <a className="btn-floating waves-effect waves-light profile-image-circle-mini" onClick={this.handleClick}>
                <img
                    aria-label="Click to view this team member"
                    alt="Organization Profile Button"
                    style={{width: "100%"}}
                    src={btnImg}
                />
            </a>
        );
    }
}

export default TeamMemberProfileComponent;
