import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Models',
        path: '/models',
        icon: <GiIcons.GiAtom/>,
        cName: 'nav-text'
    },
    {
        title: 'AddModel',
        path: '/addmodel',
        icon: <AiIcons.AiOutlinePlusCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/myaccount',
        icon: <MdIcons.MdManageAccounts/>,
        cName: 'nav-text'
    }
]