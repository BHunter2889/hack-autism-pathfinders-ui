import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from "../utils/history";
import {ROUTE_FORM_FROM_TEMPLATE, ROUTE_VIEW_FORM} from "./AppComponent";


class FormCardComponent extends Component {
    constructor(props) {
        super(props);
        console.log("Form Card Under Construction... ")
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("trying to click form card");
        // this.props.showFormModal(this.props.form);
        history.push(`${ROUTE_VIEW_FORM}/0`);
        // history.push(`${ROUTE_FORM_FROM_TEMPLATE}/${this.props.form.id}`);

    }

    render() {
        console.log("Rendering Form Card for: ", this.props.form)
        const {form} = this.props;
        
        const btnImg ="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        return (
            <Card  className="form-card">
                <div>
                <CardActionArea  onClick={this.handleClick}>
                    <div>
                    <CardMedia 
                        className="form-card-img"
                        image={btnImg}
                        title={form.title}
                    />
                    <CardContent>
                        <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {form.title}
                        </Typography>
                        <Typography component="p">
                            This Form helps you keep track of... 
                            Whatever it's supposed to help you keep track of!
                        </Typography>
                        </div>
                    </CardContent>
                    </div>
                </CardActionArea>
                <CardActions>
                    <div>
                    <Button size="small" color="primary">
                        Print
                    </Button>
                    <Button size="small" color="primary">
                        Save PDF
                    </Button>
                    </div>
                </CardActions>
                </div>
            </Card>
        );
    }
}

export default FormCardComponent;
