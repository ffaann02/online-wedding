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

export default function MobileTopbar(){
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [DashboardUserInfo,setDashboardUserInfo] = useState(false)
    const [DashboardList1,setDashboardList1] = useState(true)
    const [DashboardList2,setDashboardList2] = useState(false)
    const [DashboardList3,setDashboardList3] = useState(false)
    const [DashboardHistory,setDashboardHistory] = useState(false)
    return(
        <Box sx={{width:"100%",height:"50px",display:{lg:"none",md:"none",sm:"none",xs:"block"},backgroundColor:"#FEC5BB"}}>
            <MenuIcon sx={{fontSize:"40px",marginTop:"4px",marginLeft:"10px",color:"#F08080",cursor:"pointer"}}
            onClick={()=>setIsOpen(prev=>!prev)}
            />
        <Drawer variant='temporary' open={isOpen} classes={{paper: classes.box}} onBackdropClick={()=>{setIsOpen(false)}}></Drawer>
        </Box>
    )
}