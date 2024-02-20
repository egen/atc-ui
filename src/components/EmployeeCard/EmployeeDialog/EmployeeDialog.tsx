import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import "./EmployeeDialog.scss";
import { useState } from "react";
import EmployeeService from "../../../services/Employee/employee.service";

function EmployeeDialog(props: {
  openDialog: boolean;
  employeeDetails: {
    id: string;
    name: string;
    description: string;
    user: string;
  };
  onClose: () => void;
  onUpdate: () => void;
}) {
  const { openDialog, employeeDetails, onClose, onUpdate } = props;

  const [name, setName] = useState(employeeDetails.name);
  const [email, setEmail] = useState(employeeDetails.user);
  const [description, setDescription] = useState(employeeDetails.description);

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event: { target: { value: string } }) => {
    setDescription(event.target.value);
  };

  const onSaveClick = async () => {
    await EmployeeService.updateEmployees(employeeDetails.id, {
      name,
      description,
      user: email,
    });

    onClose();
    onUpdate();
  };

  return (
    <Dialog open={openDialog} onClose={onClose}>
      <div className="dialog-container">
        <DialogTitle className="title">Edit Employee</DialogTitle>
        <div className="details">
          <p>Name</p>
          <TextField
            name="name"
            label="Name"
            value={name}
            type="text"
            fullWidth
            onChange={handleNameChange}
          />
        </div>
        <div className="details">
          <p>Email</p>
          <TextField
            value={email}
            name="email"
            label="Email"
            type="email"
            fullWidth
            onChange={handleEmailChange}
          />
        </div>
        <div className="details">
          <p>Description</p>
          <TextareaAutosize
            value={description}
            name="description"
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className="dialog-buttons">
        <DialogActions>
          <Button onClick={onSaveClick}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default EmployeeDialog;
