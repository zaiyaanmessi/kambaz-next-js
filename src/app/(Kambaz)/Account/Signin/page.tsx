import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
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
        <Link href="/Dashboard" id="wd-signin-btn">
          <Button variant="primary" className="w-100 mb-2">
            Sign in
          </Button>
        </Link>
        <Link href="/Account/Signup" id="wd-signup-link">
          Sign up
        </Link>
      </Form>
    </div>
  );
}