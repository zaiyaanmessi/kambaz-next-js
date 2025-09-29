import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h3>Sign up</h3>
      <Form>
        <Form.Control
          placeholder="username"
          className="wd-username mb-2"
          autoComplete="off"
        />
        <Form.Control
          placeholder="password"
          type="password"
          className="wd-password mb-2"
          autoComplete="new-password"
        />
        <Link href="/Account/Profile" id="wd-signup-btn">
          <Button variant="primary" className="w-100 mb-2">
            Sign up
          </Button>
        </Link>
        <Link href="/Account/Signin" id="wd-signin-link">
          Sign in
        </Link>
      </Form>
    </div>
  );
}