import { Button, Grid, Typography,styled, Divider,Drawer} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import React,{ useState,useEffect } from "react";
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
        backgroundColor:"white",
        width:"80%",
    }
},{ name: "MuiExample_Component" })

export default function SmallSidebar(props){
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
                setDashboardHistory(false)
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
                setDashboardHistory(false)
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
                setDashboardHistory(false)
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
                setDashboardHistory(false)
                props.Check("list3")
                return true
            }
            else{
                return true
            }
        })
    }
    const SelectHistory=()=>{
        setDashboardHistory(prev=>{
            if(prev==false){
                setDashboardList1(false)
                setDashboardList2(false)
                setDashboardList3(false)
                setDashboardUserInfo(false)
                props.Check("history")
                return true
            }
            else{
                return true
            }
        })
    }


    return(
        <Grid item sm={1} xs={1} sx={{display:{lg:"none",md:"none",sm:"block",xs:"none"}
                ,backgroundColor:"#FEC5BB",width:"100%",textAlign:"center"}}>
                    <img src="/flatIcon/wedding-ring (1).png" className={classes.logoIcon}/>
                    <Divider sx={{marginTop:"10px"}}/>
                    <Box sx={{height:"50vh",marginTop:"20px"}}>
                        <Link href="/profile">
                        <Box sx={{padding:"10px",backgroundColor:DashboardUserInfo?"#F8AD9D":""}}
                        onClick={SelectUser}>
                            <img src="/flatIcon/user (2).png" className={classes.smalSidebarIcon}/>
                        </Box>
                        </Link>
                        <Link href="/wedding-info">
                        <Box sx={{padding:"10px",backgroundColor:DashboardList1?"#F8AD9D":""}}
                        onClick={SelectList1}>
                            <img src="/flatIcon/wedding-rings.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        </Link>
                        <Link href="/money">
                        <Box sx={{padding:"10px",backgroundColor:DashboardList2?"#F8AD9D":""}}
                        onClick={SelectList2}>
                            <img src="/flatIcon/money-bag.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        </Link>
                        <Link href="/wish">
                        <Box sx={{padding:"10px",backgroundColor:DashboardList3?"#F8AD9D":""}}
                        onClick={SelectList3}>
                            <img src="/flatIcon/wish-list.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        </Link>
                        <Link href="/history">
                        <Box sx={{padding:"10px",backgroundColor:DashboardHistory?"#F8AD9D":""}}
                        onClick={SelectHistory}>
                            <img src="/flatIcon/stopwatch.png" className={classes.smalSidebarIcon}/>
                        </Box>
                        </Link>
                    </Box>
                </Grid>
    )
}