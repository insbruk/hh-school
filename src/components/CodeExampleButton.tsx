import React, {FC, PropsWithChildren, ReactNode} from 'react';
import {Button} from '@hh.ru/magritte-ui';
import copyCodeAndNewTab from '../utils/copyCodeAndNewTab'

interface CodeExampleButtonProps extends PropsWithChildren {
    code: string
    url?: string
    target?: string
    children?: ReactNode;
}

const DEFAULT_URL = 'http://localhost:8000'

const CodeExampleButton: FC<CodeExampleButtonProps> = ({ code, url = DEFAULT_URL, children = 'Пример в консоли', target='_blank' }) => {
    return (
        <Button mode="primary" style="accent" onClick={() => copyCodeAndNewTab(code, url, target)}>
            {children}
        </Button>
    )
}

export default CodeExampleButton;
