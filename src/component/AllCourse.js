import React, { useState }  from "react";
import Course from "./Course";

const AllCourse = () => {
    const [course,setCourse] = useState([
        {title:"Java Course",description:"This is Java course"},
        {title:"Django Course",description:"This is Django course"},
        {title:"Spring Course",description:"This is Spring course"},
        {title:"Flask Course",description:"This is Flask course"},
    ])
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of all courses</p>
            
            {
                course.length>0? course.map((item)=> <Course course={item}/>
                ):"No courses available"
            }
        </div>

    );
}


export default AllCourse;