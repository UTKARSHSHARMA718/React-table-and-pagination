import React from "react";
import {
  Container,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import './SearchBar.css'
import { flushSync } from 'react-dom';


const SearchBar = ({ onHandleUserSearch, search }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleChange = () => {};

  // const onHandleChange = (event) => {
  //     setSearch(event.target.value)
  //     // onHandleUserSearch();
  // }

  return (
    <>
      <div className="searchbar-container">
        <TextField
          variant="outlined"
          placeholder="Type to Search"
          sx={{ width: 400 }}
          inputProps={{ style: { height: '5px' } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(event)=>onHandleUserSearch(event)} 
        />
        <div>
          <FilterAltIcon className="filter-btn" />
        </div>
        <Button variant="contained" color="primary" >
          Create User
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
