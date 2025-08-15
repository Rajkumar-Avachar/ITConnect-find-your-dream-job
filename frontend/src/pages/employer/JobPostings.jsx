import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MapPin } from "lucide-react";
import JobPostingActions from "./components/JobPostingActions";

function createData(title, location, type, salary, applications) {
  return { title, location, type, salary, applications };
}

const rows = [
  createData("Senior Developer", "Pune, India", "Full-Time", "7 LPA", 20),
  createData(
    "Junior Java Developer",
    "Mumbai, India",
    "Part-Time",
    "3.5 LPA",
    35
  ),
  createData("Data Scientist", "Banglore, India", "Full-Time", "5-10 LPA", 10),
  createData("AI Engineer", "Hyderabad, India", "Internship", "15k/month", 25),
  createData("React.js Developer", "Pune, India", "Full-Time", "3-4 LPA", 30),
];

const JobPostings = () => {
  return (
    <div className="p-4 bg-light h-100">
      <h3 className="fw-bold mb-1">Job Postings</h3>
      <p className="text-muted">
        Manage your job listings and track applications
      </p>
      <TableContainer component={Paper} className="border rounded-3 p-3 my-5">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="text-muted fw-medium">
                Job Title
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Location
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Type
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Salary
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Applications
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left" className="">
                  <MapPin size={14} className="me-1" />
                  {row.location}
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">&#8377;{row.salary}</TableCell>
                <TableCell align="left">
                  <span className="badge text-dark fw-semibold bg-light fs-14">
                    {row.applications}
                  </span>
                </TableCell>
                <TableCell align="left">
                  {/* <button className="btn btn-light">
                    <Ellipsis size={16} />
                  </button> */}
                  <JobPostingActions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JobPostings;
