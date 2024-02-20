import * as React from "react";
import { DialogActions, Button, Dialog, DialogTitle } from "@mui/material";
import EmployeeService from "../../../services/Employee/employee.service";
import "./EmployeeDeleteDialog.scss";

function DeleteDialog(props: {
  onDelete: boolean;
  employeeDetails: {
    id: string;
    name: string;
    description: string;
    user: string;
  };
  onUpdate: () => void;
  onClose: () => void;
}) {
  const { onDelete, employeeDetails, onUpdate, onClose } = props;

  const handleDelete = async () => {
    await EmployeeService.deleteEmployees(employeeDetails.id);
    onClose();
    onUpdate();
  };

  return (
    <Dialog open={onDelete} onClose={onClose}>
      <div className="dialog-container">
        <DialogTitle className="title">Delete Employee</DialogTitle>
        <p>Do you want to delete employee {employeeDetails.name} ?</p>
        <div>
          <DialogActions>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
}

export default DeleteDialog;
