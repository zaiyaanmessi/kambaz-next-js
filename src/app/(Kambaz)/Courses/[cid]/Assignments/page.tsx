"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <CiSearch className="fs-5" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search for Assignments"
            id="wd-search-input"
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2" id="wd-group-add">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger" id="wd-assignment-add">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <div className="border rounded">
        <div className="bg-light p-3 d-flex align-items-center justify-content-between border-bottom">
          <div className="d-flex align-items-center">
            <BsGripVertical className="fs-5 me-2 text-muted" />
            <span className="fw-bold">▼ ASSIGNMENTS</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="border rounded-pill px-2 py-1 me-3" style={{ fontSize: "0.85rem" }}>
              40% of Total
            </span>
            <FaPlus className="me-3" />
            <IoEllipsisVertical />
          </div>
        </div>

        <ul className="list-group list-group-flush" id="wd-assignment-list">
          {assignments
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((assignment: any) => assignment.course === cid)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((assignment: any) => (
              <li
                key={assignment._id}
                className="list-group-item py-3 wd-assignment-list-item"
                style={{ borderLeft: "4px solid #28a745" }}
              >
                <div className="d-flex align-items-start">
                  <BsGripVertical className="fs-5 me-2 text-muted mt-1" />
                  <MdOutlineAssignment className="fs-4 text-success me-3 mt-1" />
                  <div className="flex-grow-1">
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-bold text-dark text-decoration-none wd-assignment-link"
                    >
                      {assignment.title}
                    </Link>
                    <div className="mt-1" style={{ fontSize: "0.85rem", color: "#6c757d" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span className="fw-normal">Not available until</span> May 6 at 12:00am |
                      <br />
                      <span className="fw-normal">Due</span> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="text-success fs-5 me-3 mt-1" />
                    <IoEllipsisVertical className="fs-5 mt-1" />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}