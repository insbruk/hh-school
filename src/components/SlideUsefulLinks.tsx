import React, {FC, PropsWithChildren} from 'react';
import {H3} from './typography';
import {ListItem, Slide, UnorderedList} from 'spectacle';

interface SlideUsefulLinksProps extends PropsWithChildren {
    theme?: string;
}

const SlideUsefulLinks: FC<SlideUsefulLinksProps>  = ({ children, theme }) => {
    const links = Array.isArray(children) ? children : [children]

    return (
        <Slide>
            <H3>{theme ? `${theme}. ` : null}Полезные ссылки</H3>
            <UnorderedList>
                {links.map((link, index) => <ListItem key={index}>{link}</ListItem>)}
            </UnorderedList>
        </Slide>
    )
}

export default SlideUsefulLinks;
