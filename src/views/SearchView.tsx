import React from "react";
import { useNavigate } from "react-router-dom";

const SearchView: React.FC = () => {

  const navigate = useNavigate();

  return (
      <div>
        <button onClick={() => navigate("/information")}>Go to Information</button>
      </div>
  );
};

export default SearchView;
