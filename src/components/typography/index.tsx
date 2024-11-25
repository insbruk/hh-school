import React, {ComponentProps, FC} from 'react';
import {Heading} from 'spectacle';

export const H1: FC<ComponentProps<typeof Heading>> = ({ children, ...props }) => {
    return <Heading {...props} fontSize="h1">{children}</Heading>
}

export const H3: FC<ComponentProps<typeof Heading>> = ({ children, ...props }) => {
    return <Heading {...props} fontSize="h3">{children}</Heading>
}
