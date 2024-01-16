import React from "react";
import Link from "next/link";

import {HeaderDropdown} from "app/components/Header/HeaderLink/HeaderDropdown";

import {HeaderLinkProps} from "app/components/Header/types";

import scss from 'app/components/Header/Header.module.scss'

export const HeaderLink: React.FC<HeaderLinkProps> = ({text, href, childs}) => {

    if (childs) {
        return <HeaderDropdown childs={childs} text={text}/>
    } else {
        return (
            <Link className={scss.link} href={href as string}>
                {text}
            </Link>
        )
    }
}