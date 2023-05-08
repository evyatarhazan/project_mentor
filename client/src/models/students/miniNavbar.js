import * as styled from "../../styles/stylesMiniNavbar.js";
import React, { useState, useCallback } from "react";

const MiniNavbar = (props) => {
  const { allData, setTabelData, setIsExist } = props;
  const [searchTerm, setSearchTerm] = useState("");

  
  const handleSetSearch = useCallback(
    (event) => {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
      const filteredData = allData.filter((obj) => {
        return Object.values(obj).some((val) => {
          if (typeof val === "string") {
            return val.includes(searchTerm);
          } else {
            return val.toString().includes(searchTerm);
          }
        });
      });
      setTabelData(filteredData);
      setIsExist(filteredData.length === 0);
    },
    [allData, setTabelData]
  );

  return (
    <styled.MiniNavbarContainer>
      <styled.Input
        type="text"
        value={searchTerm}
        onChange={handleSetSearch}
        placeholder="Search"
      />
    </styled.MiniNavbarContainer>
  );
};

export default MiniNavbar;
