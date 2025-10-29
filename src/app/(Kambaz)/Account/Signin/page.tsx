/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");  // Changed from "/Dashboard"
  };

  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
      <Form>
        <FormControl
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          placeholder="username"
          className="wd-username mb-2"
          id="wd-username"
          autoComplete="off"
        />
        <FormControl
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          placeholder="password"
          type="password"
          className="wd-password mb-2"
          id="wd-password"
          autoComplete="new-password"
        />
        <Button 
          onClick={signin} 
          variant="primary" 
          className="w-100 mb-2"
          id="wd-signin-btn"
        >
          Sign in
        </Button>
        <Link href="/Account/Signup" id="wd-signup-link">
          Sign up
        </Link>
      </Form>
    </div>
  );
}