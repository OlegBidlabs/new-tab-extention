import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { getRecentSites } from '../core/utiles'

const TopSite = ({ title, url, icon }) => {
   return (
      <Box
         component="a"
         href={url}
         sx={{
            textDecoration: 'none',
         }}
      >
         <Box
            sx={{
               height: '45px',
               width: '45px',
               borderRadius: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: '#fff',
               margin: 'auto',
            }}
         >
            <Box component="img" src={icon} sx={{ height: '24px', width: '24px', borderRadius: '100%' }} />
         </Box>
         <Box
            sx={{
               color: '#fff',
               fontSize: '14px',
               width: '100px',
               textAlign: 'center',
               overflow: 'hidden',
               whiteSpace: 'nowrap',
               textOverflow: 'ellipsis',
            }}
         >
            {title}
         </Box>
      </Box>
   )
}

const RecentSites = () => {
   const [topSites, setTopSites] = useState([])

   useEffect(() => {
      getRecentSites().then((data) => {
         setTopSites(data.slice(0, 10))
      })
   }, [])

   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: '500px',
            rowGap: '20px',
         }}
      >
         {topSites.map((props) => (
            <TopSite {...props} />
         ))}
      </Box>
   )
}

export default RecentSites
