import * as React from "react";
import { useNavigate } from "react-router-dom";

import debounce from "../../helpers/debounce";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// Styled components START
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "39ch",
    },
  },
}));

// Styled components END

function SearchBar() {
  const navigate = useNavigate();

  const debouncedSearchHandler = React.useMemo(() => {
    return debounce(({ target: { value } }) => {
      if (value.trim() === "") {
        navigate("/");
      } else {
        navigate(`/search/${value}`);
      }
    }, 600);
  }, []);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Searching..."
        inputProps={{ "aria-label": "search", maxLength: 50 }}
        onChange={debouncedSearchHandler}
      />
    </Search>
  );
}

export default SearchBar;
