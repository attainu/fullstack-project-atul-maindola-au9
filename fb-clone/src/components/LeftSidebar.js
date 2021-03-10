import React from 'react'
import "./LeftSidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"


const LeftSidebar = () => {
    const dp="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fprofile-placeholder.html&psig=AOvVaw1yyr0rt0mNSU-iXim_iEmT&ust=1615750225379000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD68-qAru8CFQAAAAAdAAAAABAD"
    return (
        <div className="sidebar">
            <SidebarRow src={dp} title="Username"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More"/>    
        </div>
    )
}

export default LeftSidebar