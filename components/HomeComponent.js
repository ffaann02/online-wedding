import { Button, Grid, Typography,styled, Divider,Drawer} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles({
    dashboardIcon:{
        width:"50px",
        height:"50px",
        marginTop:"5px",
        marginLeft:"6px"
    },
    logoIcon:{
        width:"40px",
        marginTop:"10px"
    },
    smalSidebarIcon:{
        width:"40px",
        cursor:"pointer"
    },
    box:{
        backgroundColor:"#FCD5CE",
        width:"80%",
    }
},{ name: "MuiExample_Component" })

const LogoutButton = styled(Button)({
    backgroundColor:"#F8EDEB",
    boxShadow:"none",
    fontWeight:"800",
    color:"#F08080",
    "&:hover":{
        backgroundColor:"#F4978E",
        boxShadow:"none",
        color:"white"
    }
})

const DashboardList = styled(Box)({
    height:"60px",
    width:"100%",
    display:'flex',
    backgroundColor:"#FBC4AB",
    borderRadius:"4px",
    cursor:"pointer"
})

export default function HomeComponent(){
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [DashboardUserInfo,setDashboardUserInfo] = useState(false)
    const [DashboardList1,setDashboardList1] = useState(true)
    const [DashboardList2,setDashboardList2] = useState(false)
    const [DashboardList3,setDashboardList3] = useState(false)
    const [DashboardHistory,setDashboardHistory] = useState(false)
    return(
        <Box sx={{overflow: "hidden",backgroundColor:"#F8EDEB"}}>
            <Drawer variant='temporary' open={isOpen} classes={{paper: classes.box}} onBackdropClick={()=>{setIsOpen(false)}}></Drawer>
            <Grid container sx={{padding:{lg:"calc((100vh - 640px) / 2) calc((100vw - 1300px) / 2)",
            md:"calc((100vh - 640px) / 2) calc((100vw - 1024px) / 2)",sm:"0",xs:"0"},minHeight:"100vh"}}>
                <Grid item lg={3} md={3} sm={3} xs={12} sx={{display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
                    <Box sx={{width:"100%",height:"100%"}}>
                        <Box sx={{display:{lg:"flex",md:"block"},justifyContent:"space-between"}}>
                            <Typography variant="h6" sx={{fontWeight:"600",marginLeft:{lg:"0",md:"14px"}}}>Username</Typography>
                            <LogoutButton variant="contained">??????????????????????????????</LogoutButton>
                        </Box>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>??????????????????????????????????????????</Typography>
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardUserInfo?"":"#FCD5CE"}}
                            onClick={()=>setDashboardUserInfo(prev=>{
                                if(prev==false){
                                    setDashboardList1(false)
                                    setDashboardList2(false)
                                    setDashboardList3(false)
                                    return true
                                }
                                else{
                                    return "HELLO"
                                }
                            })}>
                                {DashboardUserInfo? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box>
                                    <img className={classes.dashboardIcon} src="/flatIcon/user (2).png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>?????????????????????????????????</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>?????????????????????????????????????????????????????????????????????????????????</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>???????????????????????????????????????</Typography>
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList1?"":"#FCD5CE"}}
                            onClick={()=>setDashboardList1(prev=>{
                                if(prev==false){
                                    setDashboardList2(false)
                                    setDashboardList3(false)
                                    setDashboardUserInfo(false)
                                    return true
                                }
                                else{
                                    return "HELLO"
                                }
                            })}>
                                {DashboardList1? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box >
                                    <img className={classes.dashboardIcon} src="/flatIcon/wedding-rings.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>????????????????????????????????????</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>????????????????????????????????????????????????</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList2?"":"#FCD5CE"}}
                            onClick={()=>setDashboardList2(prev=>{
                                if(prev==false){
                                    setDashboardList1(false)
                                    setDashboardList3(false)
                                    setDashboardUserInfo(false)
                                    return true
                                }
                                else{
                                    return "HELLO"
                                }
                            })}>
                                {DashboardList2? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box >
                                    <img className={classes.dashboardIcon} src="/flatIcon/money-bag.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>??????????????????????????????</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>??????????????????????????????????????????????????????????????????????????????????????????</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList3?"":"#FCD5CE"}} 
                            onClick={()=>setDashboardList3(prev=>{
                                if(prev==false){
                                    setDashboardList1(false)
                                    setDashboardList2(false)
                                    setDashboardUserInfo(false)
                                    return true
                                }
                                else{
                                    return "HELLO"
                                }
                            })}>
                                {DashboardList3? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box >
                                    <img className={classes.dashboardIcon} src="/flatIcon/wish-list.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>??????????????????????????????</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>????????????????????????????????????????????????????????????????????????????????????????????????</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>????????????????????????????????????????????????</Typography>
                        <Box id="userHistory"
                        sx={{height:"200px",width:"100%",backgroundColor:"#FCD5CE",borderRadius:"4px",overflow:"hidden",overflowY:"scroll"}}>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>?????????????????????????????????</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>??????????????????????????? 00:00 ???. ??????????????????????????? ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>?????????????????????????????????</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>??????????????????????????? 00:00 ???. ??????????????????????????? ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>?????????????????????????????????</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>??????????????????????????? 00:00 ???. ??????????????????????????? ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>?????????????????????????????????</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>??????????????????????????? 00:00 ???. ??????????????????????????? ######</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Box sx={{width:"100%",height:"50px",display:{lg:"none",md:"none",sm:"none",xs:"block"},backgroundColor:"#FEC5BB"}}>
                    <MenuIcon sx={{fontSize:"40px",marginTop:"4px",marginLeft:"10px",color:"#F08080",cursor:"pointer"}}
                    onClick={()=>setIsOpen(prev=>!prev)}
                    />
                </Box>
            </Grid>
        </Box>
    )
}