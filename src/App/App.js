import classes from './App.module.css'
import { Box } from '@mui/material'
import PageSearch from '../components/PageSearch'
import { useEffect, useState } from 'react'
import Clock from '../components/Clock'
import TermsTabs from '../containers/TermsTabs'
import RecentSites from '../components/RecentSites'
import { getRandomFloat } from '../core/utiles'

const App = () => {
   const [searchValue, setSearchValue] = useState('')
   const [randomNum, setRandomNum] = useState(getRandomFloat(1, 6))

   const onSearch = (searchValue) => {
      if (searchValue) {
         window.location = `https://www.bing.com/search?q=${searchValue}`
      }
   }

   useEffect(() => {
      setInterval(() => {
         setRandomNum(getRandomFloat(1, 6))
      }, 9000)
   }, [])

   return (
      <Box className={classes.root} sx={{ backgroundImage: `url("/cars/car-photo[${randomNum}].jpg")` }}>
         <Box
            sx={{
               width: '100%',
               height: '35%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Box>
               <PageSearch
                  inputChange={(e) => setSearchValue(e.target.value)}
                  inputValue={searchValue}
                  onSearch={onSearch}
               />
            </Box>
         </Box>

         <Box
            sx={{
               width: '100%',
               height: '45%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <RecentSites />
         </Box>

         <Box sx={{ height: '15%', display: 'flex', alignItems: 'end' }}>
            <Clock sx={{ margin: '0 10px 0 auto' }} />
         </Box>

         <TermsTabs sx={{ height: '4%', alignItems: 'end' }} />
      </Box>
   )
}

export default App
