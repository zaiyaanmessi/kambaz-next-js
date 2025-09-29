import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: "500px" }}>
      <h3>Profile</h3>
      <Form>
        <div className="mb-3">
          <Form.Label htmlFor="wd-username">Username</Form.Label>
          <Form.Control
            id="wd-username"
            defaultValue="alice"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-password">Password</Form.Label>
          <Form.Control
            id="wd-password"
            type="password"
            defaultValue="123"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-firstname">First Name</Form.Label>
          <Form.Control
            id="wd-firstname"
            defaultValue="Alice"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-lastname">Last Name</Form.Label>
          <Form.Control
            id="wd-lastname"
            defaultValue="Wonderland"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-dob">Date of Birth</Form.Label>
          <Form.Control
            id="wd-dob"
            type="date"
            defaultValue="2000-01-01"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-email">Email</Form.Label>
          <Form.Control
            id="wd-email"
            type="email"
            defaultValue="alice@wonderland.com"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-role">Role</Form.Label>
          <Form.Select id="wd-role" defaultValue="USER">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </div>

        <Link id="wd-signout-btn" href="/Account/Signin">
          <Button variant="danger" className="w-100">
            Sign out
          </Button>
        </Link>
      </Form>
    </div>
  );
}