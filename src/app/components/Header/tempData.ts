import {HeaderLinkProps} from "app/components/Header/types";

export const HeaderData: HeaderLinkProps[] = [
    {href: '/', text: 'Integrations'},
    {
        text: 'Core Platform', childs: [
            {href: '/', text: 'Core Platform 1'},
            {href: '/', text: 'Core Platform 2'},
            {href: '/', text: 'Core Platform 3'}
        ]
    },
    {
        text: 'Company', childs: [
            {href: '/', text: 'Company 1'},
            {href: '/', text: 'Company 2'},
            {href: '/', text: 'Company 3'}
        ]
    },
    {
        text: 'Resources', childs: [
            {href: '/', text: 'Resources 1'},
            {href: '/', text: 'Resources 2'},
            {href: '/', text: 'Resources 3'}
        ]
    }
]