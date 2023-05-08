import * as styled from "../../styles/stylesMiniNavbar.js";
import React, { useState, useCallback } from "react";

const MiniNavbar = (props) => {
  const { allData, setTabelData } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [isExist, setIsExist] = useState(false);

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
      <styled.Flex>
        <styled.Input
          type="text"
          value={searchTerm}
          onChange={handleSetSearch}
          placeholder="Search"
        />
        {isExist && (
          <styled.Warning className="warning">
            No value matched your search
          </styled.Warning>
        )}
      </styled.Flex>
    </styled.MiniNavbarContainer>
  );
};

export default MiniNavbar;
