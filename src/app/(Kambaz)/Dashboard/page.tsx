/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Account/enrollmentsReducer";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from "react-bootstrap";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  const enrolledCourses = courses.filter((course: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === course._id
    )
  );

  const displayedCourses = showAllCourses ? courses : enrolledCourses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      {/* Course Management - Only show when NOT showing all courses */}
      {!showAllCourses && currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
              Update </button>
          </h5><br />
          <FormControl defaultValue={course.name} className="mb-2" 
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl defaultValue={course.description}      
                       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}
      
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published">
          {showAllCourses ? `All Courses (${courses.length})` : `Published Courses (${enrolledCourses.length})`}
        </h2>
        <Button 
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-btn"
        >
          {showAllCourses ? "Show My Courses" : "Enrollments"}
        </Button>
      </div>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="images/nextjs.png" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    
                    {/* Show different buttons based on view mode */}
                    {showAllCourses ? (
                      // Enrollment view - show Enroll/Unenroll buttons
                      <>
                        <Button variant="primary"> Go </Button>
                        {isEnrolled(course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            className="btn btn-danger float-end"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                            className="btn btn-success float-end"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    ) : (
                      // Regular view - show Go and management buttons
                      <>
                        <Button variant="primary"> Go </Button>
                        {currentUser?.role === "FACULTY" && (
                          <>
                            <button onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                              Delete
                            </button>
                            <button id="wd-edit-course-click"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      setCourse(course);
                                    }}
                                    className="btn btn-warning me-2 float-end" >
                              Edit
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}