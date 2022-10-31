import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const Clock = ({ sx }) => {
   const [date, setDate] = useState(dayjs())
   useEffect(() => {
      setInterval(() => {
         setDate(dayjs())
      }, 1000)
   }, [])

   return (
      <Box
         sx={{
            width: '205px',
            height: '80px',
            borderRadius: '5%',
            backgroundColor: '#484141',
            color: '#fff',
            padding: '10px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...sx,
         }}
      >
         <Box sx={{ fontSize: '35px', textAlign: 'center' }}>{date.format('hh : mm A')}</Box>
         <Box sx={{ fontSize: '18px', textAlign: 'center' }}>{date.format('dddd, MMMM D')}</Box>
      </Box>
   )
}

export default Clock
