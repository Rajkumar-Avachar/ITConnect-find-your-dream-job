import React, { use } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MapPin } from "lucide-react";
import JobPostingActions from "./components/JobPostingActions";
import { JOBS_API } from "../../utils/apis";
import useEmployerJobs from "../../hooks/useEmployerJobs";
import { useSelector } from "react-redux";

const JobPostings = () => {
  useEmployerJobs();
  const { employerJobs } = useSelector((store) => store.job);
  console.log("Employer Jobs:", employerJobs);

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
                Work Mode
              </TableCell>
              <TableCell align="left" className="text-muted fw-medium">
                Job Type
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
            {employerJobs?.map((job) => (
              <TableRow
                key={job._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {job.title}
                </TableCell>
                <TableCell align="left" className="">
                  <MapPin size={14} className="me-1" />
                  {job.location}
                </TableCell>
                <TableCell align="left">{job.workMode}</TableCell>
                <TableCell align="left">{job.jobType}</TableCell>
                <TableCell align="left">&#8377;{job.salary}</TableCell>
                <TableCell align="left">
                  <span className="badge text-dark fw-semibold bg-light fs-14">
                    {job.applications?.length || 0}
                  </span>
                </TableCell>
                <TableCell align="left">
                  <JobPostingActions job={job} />
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
