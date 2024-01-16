
export interface ChildType {
    text: string
    href: string
}


export interface HeaderLinkProps {
    text: string
    href?: string
    childs?: ChildType[]
}

export interface HeaderDropdownProps {
    text: string
    childs: ChildType[]
}