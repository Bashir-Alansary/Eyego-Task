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

export const ordersTableThs = [
    {
        id: 1,
        name: "Order"
    },
    {
        id: 2,
        name: "Store"
    },
    {
        id: 3,
        name: "Reason"
    },
    {
        id: 4,
        name: "Amount"
    },
    {
        id: 5,
        name: "Items"
    },
    {
        id: 6,
        name: "Actions"
    },
]

export const decisionItems = [
    {
        id: 1,
        name: "reject",
        value: "reject",
    },
    {
        id: 2,
        name: "accept",
        value: "accept",
    },
    {
        id: 3,
        name: "escalate",
        value: "escalate",
    },
]

export const itemsTableThs = [
    {
        id: 1,
        name: "#"
    },
    {
        id: 2,
        name: "Name"
    },
    {
        id: 3,
        name: "Price"
    },
    {
        id: 4,
        name: "Quantity"
    },
    {
        id: 5,
        name: "Total"
    },
]