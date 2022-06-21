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

export default function Wedding() {
    return (
        <Grid item lg={9} md={9} sm={11} xs={12} sx={{ height: { lg: "100%", md: "100%", sm: "100%", xs: "90vh" } }}>
            <Box sx={{ width: "100%", height: "100%", padding: { lg: "0 40px 0 140px", sm: "0" }, marginTop: "80px" }}>
                <Box sx={{
                    display: 'flex', backgroundColor: "#FCD5CE"
                    , padding: "5px 10px", borderRadius: "10px"
                }}>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>ข้อมูลเกี่ยวกับงานแต่ง</Typography>
                </Box>
                <Grid container sx={{ width: "100%", padding: "20px 10px", marginTop: "10px" }}>
                    <Grid item lg={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={12}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>ผู้สมรสคนที่ 1</Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>รุดฟาน ไมมะหาด</Typography>
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={12}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>ผู้สมรสคนที่ 2</Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>รุดฟาน ไมมะหาด</Typography>
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={12}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>สถานที่จัดงาน</Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>สตูล</Typography>
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={12}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>วันที่จัดงาน</Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>xx/xx/xxxx</Typography>
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <EditButton>แก้ไข</EditButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} sx={{ display: "flex" ,margin:"10px 0"}}>
                        <Grid item lg={3} md={12}>
                            <Typography variant="a" sx={{ fontSize: "16px", color: "#6D6D64" }}>ลิงค์สำหรับการ์ดและเงินใส่ซอง</Typography>
                        </Grid>
                        <Grid item lg={7}>
                            <Typography variant="a" sx={{ fontSize: "16px", fontWeight: "600" }}>www.google.com</Typography>
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <EditButton>สร้าง</EditButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>

    )
}