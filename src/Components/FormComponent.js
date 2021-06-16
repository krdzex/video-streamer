import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux'



const FormComponent = ({ handleSubmit }) => {

    const title = useSelector(state => state.creatingStreamErr.title);
    const description = useSelector(state => state.creatingStreamErr.description);




    return (
        <div>
            <Form onSubmit={handleSubmit} className="form-control">
                < h3 > Enter title</h3 >
                <Field name="title" component="input"></Field>
                {title && (<h5 style={{ color: "red" }}>This input is required and cant be empty</h5>)}
                <h3>Enter description</h3>
                <Field name="description" component="input" type="text"></Field>
                {description && (<h5 style={{ color: "red" }}>This input is required and cant be empty</h5>)}
                < Button floated="left" type='submit' primary>Submit</Button>
            </Form >
        </div >
    );
};

const mapStateToProps = (state) => ({
    initialValues: {
        title: state.currentStream.title,
        description: state.currentStream.description,
    }
})

export default connect(mapStateToProps)(reduxForm({
    form: "form",
    enableReinitialize: true
})(FormComponent));
