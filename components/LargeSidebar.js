import { Button, Grid, Typography,styled, Divider,Drawer, Select} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles, propsToClassKey } from '@mui/styles'
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
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


export default function LargeSidebar(props){
    useEffect(()=>{
        if(props.selectList==="user"){
            SelectUser();
        }
        if(props.selectList==="list1"){
            SelectList1();
        }
        if(props.selectList==="list2"){
            SelectList2();
        }
        if(props.selectList==="list3"){
            SelectList3();
        }
        if(props.selectList==="history"){
            SelectHistory();
        }
    })
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [DashboardUserInfo,setDashboardUserInfo] = useState(false)
    const [DashboardList1,setDashboardList1] = useState(true)
    const [DashboardList2,setDashboardList2] = useState(false)
    const [DashboardList3,setDashboardList3] = useState(false)
    const [DashboardHistory,setDashboardHistory] = useState(false)
    

    const SelectUser=()=>{
        setDashboardUserInfo(prev=>{
            if(prev==false){
                setDashboardList1(false)
                setDashboardList2(false)
                setDashboardList3(false)
                props.Check("user")
                return true
            }
            else{
                return true
            }
    })
    }
    const SelectList1=()=>{
        setDashboardList1(prev=>{
            if(prev==false){
                setDashboardList2(false)
                setDashboardList3(false)
                setDashboardUserInfo(false)
                props.Check("list1")
                return true
            }
            else{
                return true
            }
        })
    }
    const SelectList2=()=>{
        setDashboardList2(prev=>{
            if(prev==false){
                setDashboardList1(false)
                setDashboardList3(false)
                setDashboardUserInfo(false)
                props.Check("list2")
                return true
            }
            else{
                return true
            }
        })
    }
    const SelectList3=()=>{
        setDashboardList3(prev=>{
            if(prev==false){
                setDashboardList1(false)
                setDashboardList2(false)
                setDashboardUserInfo(false)
                props.Check("list3")
                return true
            }
            else{
                return true
            }
        })
    }
    const SelectHistory=()=>{
        setDashboardList1(false)
        setDashboardList2(false)
        setDashboardList3(false)
        setDashboardUserInfo(false)
    }

    return(
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
                    <Box sx={{width:"100%",height:"100%"}}>
                        <Box sx={{display:{lg:"flex",md:"block"},justifyContent:"space-between"}}>
                            <Typography variant="h6" sx={{fontWeight:"600",marginLeft:{lg:"0",md:"14px"}}}>Username</Typography>
                            <LogoutButton variant="contained">ออกจากระบบ</LogoutButton>
                        </Box>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>บัญชีผู้ใช้งาน</Typography>
                        <Link href="/profile">
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardUserInfo?"":"#FCD5CE"}}
                            onClick={SelectUser}>
                                {DashboardUserInfo? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box>
                                    <img className={classes.dashboardIcon} src="/flatIcon/user (2).png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>ข้อมูลบัญชี</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>รายละเอียดของบัญชีผู้ใช้งาน</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        </Link>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>ข้อมูลงานแต่ง</Typography>
                        <Link href="/wedding-info">
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList1?"":"#FCD5CE"}}
                            onClick={SelectList1}>
                                {DashboardList1? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box>
                                    <img className={classes.dashboardIcon} src="/flatIcon/wedding-rings.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>ข้อมูลทั่วไป</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>รายละเอียดของงาน</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        </Link>
                        <Link href="/money">
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList2?"":"#FCD5CE"}}
                            onClick={SelectList2}>
                                {DashboardList2? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box >
                                    <img className={classes.dashboardIcon} src="/flatIcon/money-bag.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>เงินใส่ซอง</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>รายละเอียดและประวัติการรับเงิน</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        </Link>
                        <Link href="/wish">
                        <Box sx={{marginTop:"10px"}}>
                            <DashboardList sx={{backgroundColor:DashboardList3?"":"#FCD5CE"}} 
                            onClick={SelectList3}>
                                {DashboardList3? <Box sx={{height:"100%",width:"10px",backgroundColor:"#F08080"}}></Box>:""}
                                <Box >
                                    <img className={classes.dashboardIcon} src="/flatIcon/wish-list.png"/>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",marginTop:"8px",marginLeft:"10px"}}>
                                    <Typography variant="h6" sx={{fontWeight:"600",fontSize:"16px"}}>การ์ดอวยพร</Typography>
                                    <Typography variant="a" sx={{fontSize:"12px"}}>รายละเอียดของการ์ดอวยพรที่ได้รับ</Typography>
                                </Box>
                            </DashboardList>
                        </Box>
                        </Link>
                        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginTop:"20px"}}>ประวัติการใช้งาน</Typography>
                        <Box id="userHistory"
                        sx={{height:"200px",width:"100%",backgroundColor:"#FCD5CE",borderRadius:"4px",overflow:"hidden",overflowY:"scroll"}}>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>เข้าสู่ระบบ</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>เมื่อเวลา 00:00 น. บนอุปกรณ์ ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>เข้าสู่ระบบ</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>เมื่อเวลา 00:00 น. บนอุปกรณ์ ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>เข้าสู่ระบบ</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>เมื่อเวลา 00:00 น. บนอุปกรณ์ ######</Typography>
                            </Box>
                            <Box sx={{width:"100%",height:"60px",padding:"10px"}}>
                                <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"600"}}>เข้าสู่ระบบ</Typography>
                                <Typography variant="a" sx={{fontSize:"12px"}}>เมื่อเวลา 00:00 น. บนอุปกรณ์ ######</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
    )
}