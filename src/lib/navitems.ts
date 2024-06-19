interface NavItem {
    title: string;
    icon?: string;
    link: string;
    id: number;
    header?: boolean;
}

interface UserStat {
    title: string;
    icon: string;
    count: string;
}

const ICON_PATH = '/assets/icons/';
const navIcon = (name: string) => `${ICON_PATH}${name}`;
const userStatIcon = (name: string) => `${ICON_PATH}${name}`;

export const navItems: NavItem[] = [
    {
        title: 'Switch Organization',
        icon: navIcon('nav-icon-4.svg'),
        link: '#',
        id: 1,
    },
    {
        title: 'Dashboard',
        icon: navIcon('home.svg'),
        link: '#',
        id: 2,
    },
    {
        title: 'Customers',
        header: true,
        link: '',
        id: 3,
    },
    {
        title: 'Users',
        icon: navIcon('nav-icon-4.svg'),
        link: '/',
        id: 4,
    },
    {
        title: 'Guarantors',
        icon: navIcon('nav-icon-5.svg'),
        link: '#',
        id: 5,
    },
    {
        title: 'Loan',
        icon: navIcon('nav-icon-6.svg'),
        link: '#',
        id: 6,
    },
    {
        title: 'Decision Models',
        icon: navIcon('nav-icon-7.svg'),
        link: '#',
        id: 7,
    },
    {
        title: 'Savings',
        icon: navIcon('nav-icon-8.svg'),
        link: '#',
        id: 8,
    },
    {
        title: 'Loan Requests',
        icon: navIcon('nav-icon-9.svg'),
        link: '#',
        id: 9,
    },
    {
        title: 'Whitelist',
        icon: navIcon('nav-icon-10.svg'),
        link: '#',
        id: 10,
    },
    {
        title: 'Karma',
        icon: navIcon('nav-icon-11.svg'),
        link: '#',
        id: 11,
    },
    {
        title: 'Businesses',
        header: true,
        link: '',
        id: 12,
    },
    {
        title: 'Organization',
        icon: navIcon('nav-icon-13.svg'),
        link: '#',
        id: 13,
    },
    {
        title: 'Loan Products',
        icon: navIcon('nav-icon-14.svg'),
        link: '#',
        id: 14,
    },
    {
        title: 'Savings Products',
        icon: navIcon('nav-icon-15.svg'),
        link: '#',
        id: 15,
    },
    {
        title: 'Fees and Charges',
        icon: navIcon('nav-icon-16.svg'),
        link: '#',
        id: 16,
    },
    {
        title: 'Transactions',
        icon: navIcon('nav-icon-17.svg'),
        link: '#',
        id: 17,
    },
    {
        title: 'Services',
        icon: navIcon('nav-icon-18.svg'),
        link: '#',
        id: 18,
    },
    {
        title: 'Service Account',
        icon: navIcon('nav-icon-19.svg'),
        link: '#',
        id: 19,
    },
    {
        title: 'Settlements',
        icon: navIcon('nav-icon-20.svg'),
        link: '#',
        id: 20,
    },
    {
        title: 'Reports',
        icon: navIcon('nav-icon-21.svg'),
        link: '#',
        id: 21,
    },
    {
        title: 'Settings',
        header: true,
        link: '',
        id: 22,
    },
    {
        title: 'Preferences',
        icon: navIcon('nav-icon-23.svg'),
        link: '#',
        id: 23,
    },
    {
        title: 'Fees and Pricing',
        icon: navIcon('nav-icon-24.svg'),
        link: '#',
        id: 24,
    },
    {
        title: 'Audit Logs',
        icon: navIcon('nav-icon-25.svg'),
        link: '#',
        id: 25,
    },
    {
        title: 'Systems Messages',
        icon: navIcon('nav-icon-26.svg'),
        link: '#',
        id: 26,
    },
];

export const usersStats: UserStat[] = [
    {
        title: 'Users',
        icon: userStatIcon('user-stat-icon-1.svg'),
        count: '2,453',
    },
    {
        title: 'Active Users',
        icon: userStatIcon('user-stat-icon-2.svg'),
        count: '2,453',
    },
    {
        title: 'Users with loans',
        icon: userStatIcon('user-stat-icon-3.svg'),
        count: '12,453',
    },
    {
        title: 'Users with savings',
        icon: userStatIcon('user-stat-icon-4.svg'),
        count: '102,453',
    },
];
