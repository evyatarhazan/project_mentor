import React, { useState, useEffect } from "react";
import MiniNavbar from "./miniNavbar";
import * as styled from "../../styles/stylesTable.js";

const TableHeader = () => (
  <styled.Thead>
    <styled.Tr>
      <styled.Th>First Name</styled.Th>
      <styled.Th>Last Name</styled.Th>
      <styled.Th>ID</styled.Th>
      <styled.Th>Phone</styled.Th>
      <styled.Th>Email</styled.Th>
      <styled.Th>Class</styled.Th>
      <styled.Th>Action</styled.Th>
    </styled.Tr>
  </styled.Thead>
);

const TableRow = ({ student }) => (
  <styled.Tr>
    <styled.Td data-label="First Name">{student.firstName}</styled.Td>
    <styled.Td data-label="Last Name">{student.lastName}</styled.Td>
    <styled.Td data-label="ID">{student.id}</styled.Td>
    <styled.Td data-label="Phone">{student.phone}</styled.Td>
    <styled.Td data-label="Email">{student.email}</styled.Td>
    <styled.Td data-label="Class">{student.className}</styled.Td>
    <styled.Td data-label="Action">
      <ActionButtons />
    </styled.Td>
  </styled.Tr>
);

const ActionButtons = () => (
  <styled.Action>
    <styled.Button onClick={() => console.log("delete")}>
      <styled.P>delete</styled.P>
    </styled.Button>
    <styled.Button onClick={() => console.log("add comment")}>
      <styled.P>add comment</styled.P>
    </styled.Button>
    <styled.Button onClick={() => console.log("update")}>
      <styled.P>update</styled.P>
    </styled.Button>
  </styled.Action>
);

const StudentTable = ({ tabelData }) => (
  <styled.Table>
    <TableHeader />
    <styled.Tbody>
      {tabelData.map((student, i) => (
        <TableRow key={i} student={student} />
      ))}
    </styled.Tbody>
  </styled.Table>
);

const StudentPage = (props) => {
  const { students, studentGroupRelationship, groups } = props;
  const [tabelData, setTabelData] = useState([]);

  useEffect(() => {
    const newTableData = students.map((student) => {
      const className = studentGroupRelationship
        .filter((obj) => obj.student_id === student.id)
        .map((obj) =>
          groups.find((g) => g.id === obj.group_id && g.type === "class")
        );
      return {
        ...student,
        className: className.length ? className[0].name : "",
      };
    });
    setTabelData(newTableData);
  }, [students, studentGroupRelationship, groups]);

  return (
    <>
      <MiniNavbar />
      <StudentTable tabelData={tabelData} />
    </>
  );
};

export default StudentPage;
