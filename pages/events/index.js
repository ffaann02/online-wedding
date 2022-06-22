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
        transform:"scale(1.25) translate(-600px, -1200px)",
        position:"absolute",
        ['@media (max-width:900px)']:{
            width:"400px",
            transform:"scale(2) translate(-40px, -700px)"
        },
        ['@media (max-width:500px)']:{
            transform:"scale(2) translate(-40px, -600px)"
        }
    }
},{ name: "MuiExample_Component" })

const LoginButton = styled(Button)({
    backgroundColor:"#F8AD9D",
    color:"white",
    fontSize:"20px",
    borderRadius:"0 6px 6px 0",
    boxShadow:"none",
    "&:hover":{
        backgroundColor:"#F4978E",
        boxShadow:"none"
    }
})

const LoginTextField = styled(InputBase)({
    border:"1px solid #fbc4ab",
    borderRadius:"4px 0 0 4px",
    width:"100%",
    padding:"10px 16px",
    "&:hover":{
        border:"1px solid #da627d",
    },
    "&::placeholder":{
        color:"red"
    }
})

export default function EventSearch(){
    const classes = useStyles();
    return(
        <Box sx={{position:"relative",zIndex:"2",overflow: "hidden",padding:{sm:"0px",xs:"20px"},width:"100%"}}>
            <Grid container sx={{padding:{lg:"calc((100vh - 600px) / 2) calc((100vw - 1024px) / 2)",sm:"50px",xs:"0"},minHeight:"100vh"
            ,textAlign:"center"}}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h6" sx={{fontSize:"30px",fontWeight:"900"}}>ค้นหางานแต่งที่คุณได้รับเชิญ</Typography>
                    <Typography variant="h6" sx={{fontSize:"20px",fontWeight:"400",color:"#888888"}}>กรอกลิงก์งานแต่งที่ได้รับ เพื่อเขียนการ์ดอวยพร</Typography>
                    <Typography variant="h6" sx={{fontSize:"20px",fontWeight:"400",color:"#888888"}}>และช่วยค่าซอง แก่คู่สมรส</Typography>                    
                    <Box sx={{width:"75%",display:"flex",marginLeft:"auto",marginRight:"auto",justifySelf:"center",marginTop:"20px"
                    ,borderRadius:"6px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"40px"}}>
                    <LoginTextField/>
                    <LoginButton variant="contained">ค้นหา</LoginButton>
                    </Box>
                    
                </Grid>
            </Grid>
        </Box>
    )
}