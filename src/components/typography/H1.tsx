import React, {ComponentProps, FC} from 'react';
import {Heading} from 'spectacle';

const H1: FC<ComponentProps<typeof Heading>> = ({ children, ...props }) => {
    return (
        <Heading {...props} fontSize="h1">{children}</Heading>
    )
}

export default H1
