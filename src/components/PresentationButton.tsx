import React, {ComponentProps, FC, ReactNode} from 'react';
import {Button} from '@hh.ru/magritte-ui';

interface PresentationButtonProps extends ComponentProps<typeof Button> {
    onClick: () => void;
    children?: ReactNode;
}

const PresentationButton: FC<PresentationButtonProps> = ({ children, onClick, ...props}) => {
    return (
        <Button {...props} mode="primary" style="accent" onClick={onClick}>
            {children}
        </Button>
    )
}

export default PresentationButton;
