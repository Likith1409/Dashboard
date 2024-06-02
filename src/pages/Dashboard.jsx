
import React, { useState } from 'react';
import './Dashboard.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import { InputBase, styled, Button, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f2f2f2",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: "10px",
    width: '40%',
  }));
  

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const MessageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  });
  
  const ButtonContainer = styled('div')({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginTop: '10px',
  });
  
  const StyledSelect = styled(Select)(({ theme }) => ({
    height: '40px',
    '.MuiOutlinedInput-input': {
      padding: '10px 14px',
    },
  }));
  
const Dashboard = () => {
    const [sortBy, setSortBy] = useState('');
  const [myTeam, setMyTeam] = useState('');
    return (
        <div className='board'>
           <div className='search'>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           </div>
           <hr className="divider" /> 
           <MessageWrapper>
           <div>
          <div><b>Teams</b></div>
          <div style={{color: '#c7c7c7'}}>Hi, welcome to task management</div>
           </div>
           <ButtonContainer>
        <Button variant="contained" style={{backgroundColor: "#000000",height:'40px'}}>Add Team</Button>
        <StyledSelect
            variant="outlined"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              <em>Sort By</em>
            </MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </StyledSelect>
          <StyledSelect
            variant="outlined"
            value={myTeam}
            onChange={(e) => setMyTeam(e.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              <em>My Team</em>
            </MenuItem>
            <MenuItem value="team1">Team 1</MenuItem>
            <MenuItem value="team2">Team 2</MenuItem>
          </StyledSelect>
        <Button variant="contained" style={{backgroundColor: "black",height:'40px',width:'20px'}}><BarChartIcon></BarChartIcon></Button>
      </ButtonContainer>
      </MessageWrapper>
        </div>
    );
};

export default Dashboard;