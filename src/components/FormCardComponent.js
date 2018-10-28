import React, {Component, Button} from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

class FormCardComponent extends Component {
    constructor(props) {
        super(props);
        console.log("Form Card Under Construction... ")
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("trying to click form card");
        this.props.showFormModal(this.props.form);
    }

    render() {
        console.log("Rendering Form Card for: ", this.props.form)
        const {form} = this.props;

        const btnImg = form.imgUrl || "fa-icon";

        return (
            <Card  className="form-card">
                <CardActionArea onClick={this.handleClick}>
                    <CardMedia 
                        className="form-card-img"
                        image={btnImg}
                        title={form.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {form.title}
                        </Typography>
                        <Typography component="p">
                            This Form helps you keep track of... 
                            Whatever it's supposed to help you keep track of!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Print
                    </Button>
                    <Button size="small" color="primary">
                        Save PDF
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default FormCardComponent;
