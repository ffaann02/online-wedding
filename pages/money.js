import Head from 'next/head'
import { Box, Grid, Typography, styled, Button } from '@mui/material'
import HomePage from '../components/HomeComponent'

const EditButton = styled(Button)({
    backgroundColor: "#F8EDEB",
    boxShadow: "none",
    fontWeight: "800",
    color: "#0077B6",
    borderRadius: "10px",
    "&:hover": {
        backgroundColor: "#ECE4DB",
        boxShadow: "none",
    }
})

export default function Money() {
    return (
        <Grid item lg={9} md={9} sm={11} xs={12} sx={{ height: { lg: "100%", md: "100%", sm: "100vh", xs: "100vh"}}}>
            <Box sx={{ width: "100%", height: "100%", padding: { lg: "0 40px 0 140px",md:"0 20px 0 40px", sm: "0px 20px",xs:"0 20px" }, marginTop: "80px" }}>
                
                <Box sx={{
                    display: 'flex', backgroundColor: "#FCD5CE"
                    , padding: "5px 10px", borderRadius: "10px"
                }}>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>ข้อมูลเกี่ยวกับเงินใส่ซอง</Typography>
                </Box>
                <Grid container sx={{ width: "100%", padding: "20px 10px", marginTop: "10px" }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>บัญชีธนาคาร</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={6}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>กรุงไทย</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>เลขบัญชี</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={6}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>0000000000</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>ชื่อบัญชี</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={6}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>นายรุดฟาน ไมมะหาด</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>QR CODE</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={6}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>-</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} sx={{ textAlign: "right" }}>
                            <EditButton>เพิ่ม</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>เงินสุทธิ</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={6}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>xxx บาท</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} sx={{ textAlign: "right" }}>
                            <EditButton>ดู</EditButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>

    )
}