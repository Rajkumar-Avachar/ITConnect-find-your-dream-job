import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const EditIntroModal = ({ showIntroModal, setShowIntroModal }) => {
  const handleClose = () => setShowIntroModal(false);

  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: "",
    headline: "",
    location: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (user) {
      setInput({
        fullname: user?.fullname || "",
        headline: user?.profile?.headline || "",
        location: user?.profile?.location || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
      });
    }
  }, [user]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to update your profile.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }
    try {
      const res = await axios.put(`${USER_API}/updateProfile`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Intro Updated successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to Edit Intro.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      setShowIntroModal(true);
      return;
    }
    setShowIntroModal(false);
  };

  return (
    <div>
      <Modal show={showIntroModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} className="fs-14">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Headline</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="headline"
                value={input.headline}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={input.location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleInputChange}
                maxLength={10}
                pattern="[0-9]{10}"
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="fs-14 fw-medium"
              >
                Close
              </Button>

              <Button type="submit" className="btn bg-blue fs-14 fw-medium">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditIntroModal;
