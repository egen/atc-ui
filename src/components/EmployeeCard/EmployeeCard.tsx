import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";

import "./EmployeeCard.scss";
import { useState } from "react";
import EmployeeDialog from "./EmployeeDialog/EmployeeDialog";
import DeleteDialog from "./EmployeeDeleteDialog/EmployeeDeleteDialog";

function EmployeeCard(props: {
  details: { id: string; name: string; description: string; user: string };
  onRefresh: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { details, onRefresh } = props;

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDelete = async (event: any) => {
    event.stopPropagation();
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = async () => {
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <Card className="card-container" onClick={handleCardClick}>
        <div className="delete">
          <DeleteIcon onClick={handleDelete} />
        </div>
        <CardContent>
          <h2>{details.name}</h2>
        </CardContent>
      </Card>
      <EmployeeDialog
        openDialog={open}
        employeeDetails={details}
        onClose={handleDialogClose}
        onUpdate={onRefresh}
      />
      <DeleteDialog
        onDelete={openDeleteDialog}
        employeeDetails={details}
        onUpdate={onRefresh}
        onClose={handleDeleteDialogClose}
      />
    </>
  );
}

export default EmployeeCard;
