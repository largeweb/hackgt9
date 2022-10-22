import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

// profile
// past history
// preferences
// dashboard
// login/logout

export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Profile",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "History",
        link: "/"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Preferences",
        link: "/preferences"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Dashboard",
        link: "/dashboard"
    },
    {
        id: 4,
        icon: <SettingsIcon/>,
        text: "Logout",
        link: "/"
    }
]