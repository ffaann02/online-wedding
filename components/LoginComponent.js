import { ClassNames } from "@emotion/react";
import { Box, Button, Grid, TextField, Typography,styled,InputBase } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    banner:{
        width:"100%",
        height:"100%",
        borderRadius:"20px 0 0 20px",
        boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",
        ['@media (max-width:900px)']:{
            borderRadius:"0 0 20px 20px",
        }
    },
    logoBanner:{
        position:"absolute",
        width:"40px",
        top:"20px",
        left:"20px"
    },
    logoForm:{
        width:"100px",
        marginTop:"10px",
        marginBottom:"10px"
    },
    miniHeart:{
        width:"200px",
        position:"absolute",
        left:"10px",
        top:"10px",
        opacity:"25%",
        zIndex:"1"
    },
    blob:{
        transform:"scale(1.25) translate(-100px, -200px)",
        position:"absolute",
        ['@media (max-width:900px)']:{
            width:"400px",
            transform:"scale(2) translate(-40px, -40px)"
        }
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
    padding:"10px 16px",
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
        <Box sx={{position:"relative",zIndex:"2",background:{md:"linear-gradient(to right, #fae1dd 0%, #ff99cc 100%)",sm:"linear-gradient(to bottom, #fae1dd 0%, #ff99cc 100%)",xs:"linear-gradient(to bottom, #fae1dd 0%, #ff99cc 100%)"},overflow: "hidden",padding:{sm:"0px",xs:"20px"}}}>
            <Grid container sx={{padding:{lg:"calc((100vh - 600px) / 2) calc((100vw - 1024px) / 2)",sm:"50px",xs:"0"},minHeight:"100vh"}}>
                <Grid order={{md:1,xs:2}} item md={6} xs={12} sm={12} sx={{border:"none",zIndex:"2",position:"relative",boxShadow:"0 12px 10px rgb(0 0 0 / 0.125)",borderRadius:"20px"}}>
                    <img src={"/flatIcon/wedding-ring.png"} className={classes.logoBanner}/>
                    <img className={classes.banner} src={"/banner-wedding-text.png"}/>
                </Grid>
                <Grid order={{md:2,xs:1}} item lg={6} md={6} xs={12} sm={12} sx={{zIndex:"2"}}>
                    <Box sx={{width:"100%",height:"100%"}}>
                        <Box sx={{width:"100%",height:"100%"}}>
                            <Box sx={{backgroundColor:"white",width:"100%",height:"100%",border:"solid 1px rgb(0 0 0 / 0.15)",borderRadius:{md:"0 20px 20px 0",sm:"20px 20px 0 0",xs:"20px 20px 0 0"}
                            ,boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",padding:{sm:"20px 60px",xs:"20px"},textAlign:"center"}}>
                                <Box>
                                    <img className={classes.logoForm} src={"/flatIcon/wedding-ring.png"}/>
                                </Box>
                                <Typography variant="a" sx={{color:"rgb(0 0 0 / 0.75)"}}>เว็บไซต์บริการการ์ดอวยพรและซองงานแต่ง ผ่านระบบออนไลน์ สมัครใช้งานได้ฟรี ไม่มีค่าธรรมเนียม</Typography>
                                <LoginTextField id="username" placeholder="Username" sx={{width:"100%",marginTop:"20px"}} variant="outlined" type="text"/>
                                <LoginTextField id="password" placeholder="Password" sx={{width:"100%",marginTop:"20px"}} variant="outlined" type="password"/>
                                <LoginButton variant="contained" sx={{marginTop:"20px",width:"100%",fontSize:"20px"}}>เข้าสู่ระบบ</LoginButton>
                                <Box sx={{textAlign:"right",marginTop:"10px"}}>
                                <Typography variant="a" sx={{cursor:"pointer",color:"rgb(0 0 0 / 0.5)","&:hover":{color:"rgb(0 0 0 / 0.75)"}}}>ลืมรหัสผ่าน</Typography>
                                </Box>
                                <Typography variant="h6" sx={{fontSize:"20px",marginTop:"10px"}}></Typography>
                                <Box sx={{marginTop:"20px"}}>
                                    <Typography variant="a" sx={{color:"rgb(0 0 0 / 0.75)"}}>ยังไม่มีบัญชีผู้ใช้งาน ? </Typography>
                                    <Typography variant="a" sx={{marginLeft:"10px",color:"blue",padding:"10px",cursor:'pointer'
                                    ,"&:hover":{backgroundColor:"#F8EDEB"},borderRadius:"10px"}}>
                                        สมัครสมาชิก</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
           {/*<img src={"/flatIcon/heart.png"} className={classes.miniHeart}/>*/}
           <img className={classes.blob} src={"/blob.svg"}/>
        </Box>
    )
}