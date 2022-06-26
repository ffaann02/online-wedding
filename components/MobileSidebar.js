import { Button, Grid, Typography,styled, Divider,Drawer, Card} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import React,{ useState,useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faHistory } from '@fortawesome/free-solid-svg-icons'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SourceIcon from '@mui/icons-material/Source';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Link from 'next/link'
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
    mobileSidebarIcon:{
        width:"20px",
        height:"20px",
        marginTop:"17px",
        color:"#f55c7a"
    },
    mobileSidebarIconToggle:{
        width:"20px",
        height:"20px",
        marginLeft:"20px",
        marginTop:"2px",
    },
    box:{
        width:"80%",
        background:"linear-gradient(to top, #ffffff 57%, #fcd5ce 100%)"
    },
    weddingCake:{
        width:"100%",
        position:"absolute",
        bottom:"20px",
        zIndex:"1",
        opacity:"50%"
    }
},{ name: "MuiExample_Component" })

const LogoutButton = styled(Button)({
    backgroundColor:"#F08080",
    boxShadow:"none",
    fontWeight:"800",
    color:"white",
    marginTop:"10px",
    "&:hover":{
        backgroundColor:"#F4978E",
        boxShadow:"none",
        color:"white"
    }
})

export default function MobileSidebar(props){
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [DashboardUserInfo,setDashboardUserInfo] = useState(false)
    const [DashboardList1,setDashboardList1] = useState(true)
    const [DashboardList2,setDashboardList2] = useState(false)
    const [DashboardList3,setDashboardList3] = useState(false)
    const [DashboardHistory,setDashboardHistory] = useState(false)
    const [weddingListToggle,setWeddingListToggle] = useState(false)
    return(
        <Box sx={{width:"100%",height:"50px",display:{lg:"none",md:"none",sm:"none",xs:"block"},backgroundColor:"#FEC5BB"}}>
            <MenuIcon sx={{fontSize:"40px",marginTop:"4px",marginLeft:"10px",color:"#F08080",cursor:"pointer"}}
            onClick={()=>setIsOpen(prev=>!prev)}
            />
        <Drawer variant='temporary' open={isOpen} classes={{paper: classes.box}} onBackdropClick={()=>{setIsOpen(false)}}>
            <Box onClick={()=>{setIsOpen(false)}} sx={{borderRadius:"30px",padding:"4px 7px",border:"1px solid white"
            ,position:"absolute",right:"15px",top:"20px",backgroundColor:"white"
            ,textAlign:"center",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",cursor:"pointer"}}>
                <CloseIcon sx={{fontSize:"14px",color:"black",marginTop:"2px"}}/>
            </Box>
            <Box sx={{padding:"20px 30px",borderBottom:"2px solid #F08080",boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 4px"}}>
                <Typography variant="h6" sx={{fontWeight:"600"}}>Username</Typography>
                <LogoutButton variant="contained">ออกจากระบบ</LogoutButton>
            </Box>
            <Box sx={{padding:"10px 10px 0 20px"}}>
                <Link href="/profile">
                <Box sx={{display:"flex",width:"100%",height:"60px",cursor:"pointer"}} onClick={()=>{setIsOpen(false)}}>
                    <FontAwesomeIcon icon={faUser} className={classes.mobileSidebarIcon}/>
                    <Typography variant="h6" sx={{fontSize:"20px",fontWeight:"300",marginTop:"12px",marginLeft:"20px"}}>บัญชีผู้ใช้งาน</Typography>
                </Box>
                </Link>
                <Box sx={{display:"flex",width:"100%",height:"60px",cursor:"pointer"}} onClick={()=>{setWeddingListToggle(prev=>!prev)}}>
                    <FontAwesomeIcon icon={faHeart} className={classes.mobileSidebarIcon}/>
                    <Typography variant="h6" sx={{fontSize:"20px",fontWeight:"300",marginTop:"12px",marginLeft:"20px",display:"flex"}}>
                        ข้อมูลงานแต่ง{weddingListToggle==false?<KeyboardArrowDownIcon sx={{marginTop:"4px",marginLeft:"10px"}}/>:
                        <KeyboardArrowUpIcon sx={{marginTop:"4px",marginLeft:"10px"}}/>}
                        </Typography>
                </Box>
                {weddingListToggle?
                <Box>
                    <Link href="/wedding-info">
                    <Box sx={{display:"flex",width:"100%",height:"40px",padding:"0 40px",cursor:"pointer"}} onClick={()=>{
                        setIsOpen(false)
                        setWeddingListToggle(false)
                        }}>
                        <SourceIcon sx={{color:"#f55c7a"}}/>
                        <Typography variant="a"sx={{marginLeft:"10px",marginTop:"2px"}}>ข้อมูลทั่วไป</Typography>
                    </Box>
                    </Link>
                    <Link href="/money">
                    <Box sx={{display:"flex",width:"100%",height:"40px",padding:"0 40px",cursor:"pointer"}} onClick={()=>{
                        setIsOpen(false)
                        setWeddingListToggle(false)
                        }}>
                        <MonetizationOnIcon sx={{color:"#f55c7a"}}/>
                        <Typography variant="a"sx={{marginLeft:"10px",marginTop:"2px"}}>เงินใส่ซอง</Typography>
                    </Box>
                    </Link>
                    <Link href="/wish">
                    <Box sx={{display:"flex",width:"100%",height:"40px",padding:"0 40px",cursor:"pointer"}} onClick={()=>{
                        setIsOpen(false)
                        setWeddingListToggle(false)
                        }}>
                        <CardGiftcardIcon sx={{color:"#f55c7a"}}/>
                        <Typography variant="a"sx={{marginLeft:"10px",marginTop:"2px"}}>การ์ดอวยพร</Typography>
                    </Box>
                    </Link>
                </Box>
                
                :""}
                <Link href="/history">
                <Box sx={{display:"flex",width:"100%",height:"60px",cursor:"pointer",zIndex:"3",position:"relative"}} onClick={()=>{
                        setIsOpen(false)
                        setWeddingListToggle(false)
                        }}>
                    <FontAwesomeIcon icon={faHistory} className={classes.mobileSidebarIcon}/>
                    <Typography variant="h6" sx={{fontSize:"20px",fontWeight:"300",marginTop:"12px",marginLeft:"20px"}}>ประวัติการใช้งาน</Typography>
                </Box>
                </Link>
            </Box>
            <img src="/wedding-cake.jpg" className={classes.weddingCake}/>
        </Drawer>
        </Box>
    )
}