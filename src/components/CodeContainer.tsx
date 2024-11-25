import React, {ComponentProps, FC} from 'react';
import {FlexBox} from 'spectacle';

interface CodeContainerProps extends ComponentProps<typeof FlexBox> {
    gap?: number;
}

const CodeContainer: FC<CodeContainerProps> = ({ gap = 12, children, ...props }) => {
    return (
        <FlexBox justifyContent="start" pt={12} style={{ gap: gap ? `${gap}px` : undefined }} {...props}>
            {children}
        </FlexBox>
    )
}

export default CodeContainer;
