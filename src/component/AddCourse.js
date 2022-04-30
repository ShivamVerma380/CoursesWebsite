import { Button } from "reactstrap";
import React, { Fragment } from "react";
import { Form, FormGroup,Label,Input, Container } from "reactstrap";

const AddCourse = () => {

    return(
        <div>
            <Form>
                <h1 className="text-center my-3">Fill Course detail</h1>
                <FormGroup>
                    <Label>Course Id</Label>
                    <Input className="ml-3 mr-3"
                        type="text" 
                        placeholder="Enter here" 
                        id="courseId">
                    </Input>
                    <Label>Course Name</Label>
                    <Input 
                        type="textarea"
                        placeholder="Enter course name here"
                        id="courseDescription">
                    </Input>
                    <Label>Course Description</Label>
                    <Input 
                        type="textarea"
                        placeholder="Enter course description here"
                        id="courseDescription"
                        style={{height:150}}>
                    </Input>
                    
                    {/* <Button>Add</Button> */}
                    
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" style={{marginRight:10}}>Add</Button>
                    <Button color="warning">Clear</Button>
                </Container>
                
            </Form>
            
            
        </div>
    );
} 

export default AddCourse;