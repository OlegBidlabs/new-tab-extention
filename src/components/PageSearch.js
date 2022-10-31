import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.8),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   height: '52px',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '42ch',
         '&:focus': {
            width: '50ch',
         },
      },
   },
}))

const PageSearch = ({ inputChange, inputValue, onSearch }) => {
   const enterPress = (e) => {
      if (e.code === 'Enter') {
         onSearch(inputValue)
      }
   }

   return (
      <Box sx={{ flexGrow: 1 }} onKeyUp={enterPress}>
         <Search>
            <StyledInputBase
               onChange={inputChange}
               value={inputValue}
               inputProps={{ 'aria-label': 'search' }}
               autoFocus={true}
            />
            <Button onClick={() => onSearch(inputValue)}>
               <SearchIcon />
            </Button>
         </Search>
      </Box>
   )
}

export default PageSearch
