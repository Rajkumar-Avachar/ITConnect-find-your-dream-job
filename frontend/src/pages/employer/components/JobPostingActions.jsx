import React from "react";
import { Ellipsis, Eye } from "lucide-react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Link } from "react-router-dom";
import { JOBS_API } from "../../../utils/apis";
import { toast } from "react-toastify";
import axios from "axios";
import { setEmployerJobs } from "../../../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles("dark", {
          color: "inherit",
        }),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

const JobPostingActions = ({ job }) => {
  const dispatch = useDispatch();
  const { employerJobs } = useSelector((store) => store.job);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteJob = async () => {
    try {
      const res = await axios.delete(`${JOBS_API}/${job._id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message || "Job deleted successfully", {
          position: "bottom-right",
          autoClose: 1000,
        });
      }
      dispatch(setEmployerJobs(employerJobs.filter((j) => j._id !== job._id)));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete job", {
        position: "bottom-right",
        autoClose: 1000,
      });
    } finally {
      handleClose();
    }
  };
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
      >
        <Ellipsis size={16} className="text-black" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            "aria-labelledby": "demo-customized-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          component={Link}
          to={`/employer/job-postings/${job._id}`}
          onClick={handleClose}
          disableRipple
          className="text-black fs-14"
        >
          <VisibilityOutlinedIcon className="text-black me-2" />
          View Details
        </MenuItem>
        <MenuItem
          component={Link}
          to={`/employer/job-postings/${job._id}/edit`}
          onClick={handleClose}
          disableRipple
          className="text-black fs-14"
        >
          <EditIcon className="text-black" />
          Edit Job
        </MenuItem>
        <MenuItem
          component={Link}
          to={`/employer/applications`}
          onClick={handleClose}
          disableRipple
          className="text-black fs-14"
        >
          <PeopleOutlinedIcon className="text-black" />
          View Applications
        </MenuItem>
        <MenuItem
          onClick={deleteJob}
          disableRipple
          className="text-danger fs-14"
        >
          <DeleteForeverOutlinedIcon className="text-danger" />
          Delete Job
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default JobPostingActions;
