import {HeaderData} from "app/components/Header/tempData";
import {HeaderLink} from "app/components/Header/HeaderLink";

import scss from './Header.module.scss'

export const Header = () => {
    return (
        <nav className={scss.nav_links}>
            <div className={scss.links}>
                {HeaderData.map((el, index) => (
                    <HeaderLink key={index} {...el}/>
                ))}
            </div>
            <div className={scss.nav_actions}>
                <p className={scss.link}>Contact Sales</p>
                <button className={scss.header_button}>Book a Demo</button>
            </div>
        </nav>
    )
}