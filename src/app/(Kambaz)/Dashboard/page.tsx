// app/(Kambaz)/Dashboard/page.tsx
"use client";
import * as db from "../Database";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>
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



{/* <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.webp" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/css.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 CSS JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/javascript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 Java script </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link></div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/nextjs.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 Next JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/typscript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 TypeScript JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/cpp.jpeg" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 C++ </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/css.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/python.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 Express JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/typscript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 Typescript </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.webp" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
      </div>
    </div> */}