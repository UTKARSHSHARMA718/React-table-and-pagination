import React from "react";
import {
  Container,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    // marginRight: theme.spacing(1),
  },
  button: {
    // margin: theme.spacing(1),
  },
}));
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = () => {};
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 20 }}>
        {/* <TextField
          id="search"
          type="search"
          label="Type to Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        /> */}

        <TextField
          className={classes.searchInput}
          variant="outlined"
          placeholder="Type to Search"
          sx={{ width: 400,height:200 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FilterAltIcon />
        <Button variant="contained" color="primary" className={classes.button}>
          Click Me
        </Button>
      </Container>
    </>
  );
};

export default SearchBar;
