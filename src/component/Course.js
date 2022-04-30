import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap"

const Course=({course})=>{
    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                <Button color="danger" outline style={{"margin-right":20}}>Delete</Button>
                    <Button color="primary" outline>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}
export default Course;
