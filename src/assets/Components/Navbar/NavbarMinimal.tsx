import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, useMantineColorScheme } from '@mantine/core';
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSun,
    IconMoon,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const buttons = [
    { icon: IconHome2, label: 'Home', path: '/' },
    { icon: IconGauge, label: 'Dashboard', path: '/dashboard' },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', path: '/analytics' },
    { icon: IconCalendarStats, label: 'Releases', path: '/releases' },
    { icon: IconUser, label: 'Account', path: '/account' },
    { icon: IconFingerprint, label: 'Security', path: '/security' },
    { icon: IconSettings, label: 'Settings', path: '/settings' },
];

export function NavbarMinimal() {
    const navigate = useNavigate();
    const location = useLocation();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [active, setActive] = useState(0);

    useEffect(() => {
        const currentPath = location.pathname;
        const activeIndex = buttons.findIndex(link => link.path === currentPath);
        setActive(activeIndex);
    }, [location.pathname]);

    const links = buttons.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => {
                setActive(index);
                navigate(link.path);
            }}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <MantineLogo type="mark" size={30} />
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink
                    icon={colorScheme === 'dark' ? IconSun : IconMoon}
                    label="Toggle theme"
                    onClick={toggleColorScheme}
                />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    );
}