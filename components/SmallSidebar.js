import { Button, Grid, Typography,styled, Divider,Drawer} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { useState } from "react";

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

export default function SmallSidebar(){
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [DashboardUserInfo,setDashboardUserInfo] = useState(false)
    const [DashboardList1,setDashboardList1] = useState(true)
    const [DashboardList2,setDashboardList2] = useState(false)
    const [DashboardList3,setDashboardList3] = useState(false)
    const [DashboardHistory,setDashboardHistory] = useState(false)
    return(
        <Grid item sm={1} xs={1} sx={{display:{lg:"none",md:"none",sm:"block",xs:"none"}
                ,backgroundColor:"#FEC5BB",width:"100%",textAlign:"center"}}>
                    <img src="/flatIcon/wedding-ring (1).png" className={classes.logoIcon}/>
                    <Divider sx={{marginTop:"10px"}}/>
                    <Box sx={{height:"50vh",marginTop:"20px"}}>
                        <Box sx={{padding:"10px",backgroundColor:DashboardUserInfo?"#F8AD9D":""}}
                        onClick={()=>setDashboardUserInfo(prev=>{
                            if(prev==false){
                                setDashboardList1(false)
                                setDashboardList2(false)
                                setDashboardList3(false)
                                setDashboardHistory(false)
                                return true
                            }
                            else{
                                return "HELLO"
                            }
                        })}>
                            <img src="/flatIcon/user (2).png" className={classes.smalSidebarIcon}/>
                        </Box>
                        <Box sx={{padding:"10px",backgroundColor:DashboardList1?"#F8AD9D":""}}
                        onClick={()=>setDashboardList1(prev=>{
                            if(prev==false){
                                setDashboardList2(false)
                                setDashboardList3(false)
                                setDashboardUserInfo(false)
                                setDashboardHistory(false)
                                return true
                            }
                            else{
                                return "HELLO"
                            }
                        })}>
                            <img src="/flatIcon/wedding-rings.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        <Box sx={{padding:"10px",backgroundColor:DashboardList2?"#F8AD9D":""}}
                        onClick={()=>setDashboardList2(prev=>{
                            if(prev==false){
                                setDashboardList1(false)
                                setDashboardList3(false)
                                setDashboardUserInfo(false)
                                setDashboardHistory(false)
                                return true
                            }
                            else{
                                return "HELLO"
                            }
                        })}>
                            <img src="/flatIcon/money-bag.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        <Box sx={{padding:"10px",backgroundColor:DashboardList3?"#F8AD9D":""}}
                        onClick={()=>setDashboardList3(prev=>{
                            if(prev==false){
                                setDashboardList1(false)
                                setDashboardList2(false)
                                setDashboardUserInfo(false)
                                setDashboardHistory(false)
                                return true
                            }
                            else{
                                return "HELLO"
                            }
                        })}>
                            <img src="/flatIcon/wish-list.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        <Box sx={{padding:"10px",backgroundColor:DashboardHistory?"#F8AD9D":""}}
                        onClick={()=>setDashboardHistory(prev=>{
                            if(prev==false){
                                setDashboardList1(false)
                                setDashboardList2(false)
                                setDashboardList3(false)
                                setDashboardUserInfo(false)
                                return true
                            }
                            else{
                                return "HELLO"
                            }
                        })}>
                            <img src="/flatIcon/stopwatch.png" className={classes.smalSidebarIcon}/>
                        </Box>
                    </Box>
                </Grid>
    )
}