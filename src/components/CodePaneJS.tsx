import React, {ComponentProps, FC} from 'react';
import {CodePane, codePaneThemes} from 'spectacle';

type CodePaneJSProps = Omit<ComponentProps<typeof CodePane>, 'language' | 'theme'>

const CodePaneJS: FC<CodePaneJSProps> = ({ children, ...props }) => {
    return <CodePane {...props} language="javascript" theme={codePaneThemes.a11yDark}>{children}</CodePane>
}

export default CodePaneJS;
