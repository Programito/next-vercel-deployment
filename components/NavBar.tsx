import React from 'react'

import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    // link no se puede estilizar con css, se hace con css
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({text, href}) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }
            {/* <ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
            <ActiveLink text="Pricing" href="/pricing" /> */}
        </nav>
    )
}
