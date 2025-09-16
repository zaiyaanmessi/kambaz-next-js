import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
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
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/javascript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link></div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/nextjs.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/typscript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/cpp.jpeg" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
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
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/typscript.png" width={200} height={150}  alt="React JS course cover"  />
            <div>
              <h5> CS1234 React JS </h5>
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
    </div>
);}
