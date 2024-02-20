import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./EmployeeCard.scss";
import { useState } from "react";
import EmployeeDialog from "./EmployeeDialog/EmployeeDialog";

function EmployeeCard(props: {
  details: { id: string; name: string; description: string; user: string };
  onRefresh: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { details, onRefresh } = props;

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className="card-container" onClick={handleCardClick}>
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
    </>
  );
}

export default EmployeeCard;
