import { Box } from '@mui/material'
import termTabs from '../core/constants/termTabs.constant'

const StyledLink = ({ name, href }) => {
   return (
      <Box
         sx={{
            color: '#f4eeee',
            textDecoration: 'none',
            fontSize: '15px',
         }}
         href={href}
         component="a"
      >
         {name}
      </Box>
   )
}

const TermsTabs = ({ sx }) => {
   return (
      <Box
         sx={{
            width: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            color: '#fff',
            ...sx,
         }}
      >
         {termTabs.map((tab, index) => (
            <StyledLink key={`tab-term-${index}`} name={tab.name} href={tab.href} />
         ))}
      </Box>
   )
}

export default TermsTabs
