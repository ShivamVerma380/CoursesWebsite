import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

const About=() => {

    const[rating,setRating] = useState(4);

    return(
        <div>
            <ToastContainer/>
            <Container>
                <p style={{fontFamily:"cursive"}}>Rating:
                <Rating ratingValue={4}/>
                </p>
                <p style={{fontFamily:"sans-serif"}}>
                    Service options: In-store shopping · Delivery
                </p>
                <p>
                    Address: opp. Post Office, nr. Sahyadri Hospital, Vasant Baug, Ramyanagari Housing Society, Bibwewadi, Pune, Maharashtra 411037
                </p>
                <p>
                    Hours: 10:30 AM - 09:00PM
                </p>

            </Container>
            
            
        </div>
    );

}

export default About;