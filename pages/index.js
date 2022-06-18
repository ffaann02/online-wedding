import Head from 'next/head'
import { Box, Grid } from '@mui/material'
import HomePage from '../components/HomeComponent'
export default function Home() {
  
  return (
    <Grid item lg={9} md={9} sm={11} xs={12} sx={{height:{lg:"none",md:"none",sm:"none",xs:"90vh"}}}>
    <Box sx={{width:"100%",height:"100%",padding:{lg:"0 40px 0 140px",sm:"0"}}}>
        <Box sx={{display:'flex',justifyContent:"space-between"}}>
            Detail
        </Box>
    </Box>
</Grid>
    
  )
}
