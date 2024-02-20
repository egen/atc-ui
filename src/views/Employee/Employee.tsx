import React, { useEffect, useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import EmployeeService from "../../services/Employee/employee.service";

import "./Employee.scss";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [page] = useState(1);
  const [fetch, setFetch] = useState(true);
  const pageSize = 10;

  useEffect(() => {
    if (fetch) {
      const fetchEmployee = async () => {
        const data = await EmployeeService.getEmployees(page, pageSize);
        setEmployee(data.records);
      };
      fetchEmployee();
    }
    return () => {
      setFetch(false);
    };
  }, [page, pageSize, fetch]);

  const handleOnRefresh = () => {
    setFetch(true);
  };

  return (
    <div className="employee-cards-container">
      {employee.map((item: any) => (
        <EmployeeCard details={item} onRefresh={handleOnRefresh} />
      ))}
    </div>
  );
}

export default Employee;
