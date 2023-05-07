import React from 'react';
import { useState, useEffect } from "react";
import { getAll } from "./service/base_service.js";
import * as styled from "./styles/stylesApp.js";
import GlobalStyles from "./styles/globalStyles.js";
import Navbar from "./defultComponent/navber.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isReadyStudents, setIsReadyStudents] = useState(false);
  const [students, setStudents] = useState([]);
  const [isReadyGroups, setIsReadyGroups] = useState(false);
  const [groups, setGroups] = useState([]);
  const [isReadyStudentGroupRelationship, setIsReadyStudentGroupRelationship] =
    useState(false);
  const [studentGroupRelationship, setStudentGroupRelationship] = useState([]);

  useEffect(() => {
    const newStudent = async () => {
      const response = await getAll("/students");
      setStudents(response);
      setIsReadyStudents(true);
    };
    newStudent();
  }, []);

  useEffect(() => {
    const newGroups = async () => {
      const response = await getAll("/groups");
      setGroups(response);
      setIsReadyGroups(true);
    };
    newGroups();
  }, []);

  useEffect(() => {
    const newStudentGroupRelationship = async () => {
      const response = await getAll("/student-group-relationship");
      setStudentGroupRelationship(response);
      setIsReadyStudentGroupRelationship(true);
    };
    newStudentGroupRelationship();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <styled.App>
      <Navbar/>
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/groups" element={"groups"} />
          <Route path="/students" element={"students"} />
        </Routes>
      </styled.App>
    </BrowserRouter>
  );
}

export default App;
