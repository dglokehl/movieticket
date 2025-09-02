import { FaDatabase, FaUserPlus, FaTrash, FaBell, FaTicket, FaArrowRightFromBracket } from "react-icons/fa6";


export type settingsDataProps = {
    color: string;
    icon: React.ReactNode;
    text: string;
    href?: string;
}


export const accountData = [
    {
        color: "bg-[#546EE5]",
        icon: <FaDatabase />,
        text: "Personal Data",
        href: "/"
    },
    {
        color: "bg-[#54C2E5]",
        icon: <FaUserPlus />,
        text: "Email & Payment",
        href: "/"
    },
    {
        color: "bg-[#E55454]",
        icon: <FaTrash />,
        text: "Deactivate Account"
    },
]


export const privacyData = [
    {
        color: "bg-[#546EE5]",
        icon: <FaBell />,
        text: "Notification",
        href: "/"
    },
    {
        color: "bg-[#54C2E5]",
        icon: <FaTicket />,
        text: "Your Ticket",
        href: "/"
    },
    {
        color: "bg-[#E55454]",
        icon: <FaArrowRightFromBracket />,
        text: "Logout"
    },
]