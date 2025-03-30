import { FaLuggageCart,FaChartBar, FaCog } from "react-icons/fa";
import Orders from "@/components/MainView/Orders";
import Chart from "@/components/MainView/Chart";
import Setting from "@/components/MainView/Setting";



export const sidebarLinks = [
    {
        id: 1,
        name: 'Orders',
        icon: <FaLuggageCart />,
        comp: <Orders />,
    },
    {
        id: 2,
        name: 'Chart',
        icon: <FaChartBar />,
        comp: <Chart />,
    },
    {
        id: 3,
        name: 'Setting',
        icon: <FaCog />,
        comp: <Setting />,
    },
]
