import { ClassNames } from "@emotion/react";
import { Box, Button, Grid, TextField, Typography,styled,InputBase } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    banner:{
        width:"100%",
        height:"100%"
    },
    logo:{
        position:"absolute",
        width:"40px",
        top:"20px",
        left:"20px"
    }
},{ name: "MuiExample_Component" })

const LoginButton = styled(Button)({
    backgroundColor:"#F8AD9D",
    boxShadow:"none",
    "&:hover":{
        backgroundColor:"#F4978E",
        boxShadow:"none"
    }
})

const LoginTextField = styled(InputBase)({
    border:"1px solid #fbc4ab",
    borderRadius:"4px",
    width:"100%",
    padding:"10px 20px",
    "&:hover":{
        border:"1px solid #da627d",
    },
    "&::placeholder":{
        color:"red"
    }
})

export default function Login(){
    const classes = useStyles();
    return(
        <Box sx={{backgroundColor:"#F8EDEB",overflow: "hidden",padding:{sm:"0px",xs:"20px"}}}>
            <Grid container sx={{padding:{sm:"calc((100vh - 520px) / 2) calc((100vw - 960px) / 2)",xs:"0"},minHeight:"100vh"}}>
                <Grid item xs={12} sm={6} sx={{border:"none",position:"relative"}}>
                    <img src={"/flatIcon/wedding-ring.png"} className={classes.logo}/>
                    <img className={classes.banner} src={"/banner-wedding.jpg"}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{width:"100%",height:"100%"}}>
                        <Box sx={{width:"100%",height:"100%"}}>
                            <Box sx={{backgroundColor:"white",width:"100%",height:"100%",border:"solid 1px rgb(0 0 0 / 0.15)"
                            ,padding:{sm:"20px 60px",xs:"20px"},textAlign:"center"}}>
                                <Typography variant="h6" sx={{fontSize:"36px",marginTop:"10px",fontWeight:"600",color:"rgb(0 0 0 / 0.5)"}}>eWedding</Typography>
                                <Typography variant="a" sx={{color:"rgb(0 0 0 / 0.75)"}}>เว็บไซต์บริการการ์ดอวยพรและซองงานแต่ง ผ่านระบบออนไลน์ สมัครใช้งานได้ฟรี ไม่มีค่าธรรมเนียม</Typography>
                                <LoginTextField id="username" placeholder="Username" sx={{width:"100%",marginTop:"20px"}} variant="outlined" type="text"/>
                                <LoginTextField id="password" placeholder="Password" sx={{width:"100%",marginTop:"20px"}} variant="outlined" type="password"/>
                                <LoginButton variant="contained" sx={{marginTop:"20px",width:"100%",fontSize:"20px"}}>เข้าสู่ระบบ</LoginButton>
                                <Box sx={{textAlign:"right",marginTop:"10px"}}>
                                <Typography variant="a" sx={{cursor:"pointer",color:"rgb(0 0 0 / 0.5)"}}>ลืมรหัสผ่าน</Typography>
                                </Box>
                                <Typography variant="h6" sx={{fontSize:"20px",marginTop:"10px"}}></Typography>
                                <Box sx={{marginTop:"20px"}}>
                                    <Typography variant="a" sx={{color:"rgb(0 0 0 / 0.75)"}}>ยังไม่มีบัญชีผู้ใช้งาน ? </Typography>
                                    <Typography variant="a" sx={{marginLeft:"10px",color:"blue",cursor:'pointer'}}>สมัครสมาชิก</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}