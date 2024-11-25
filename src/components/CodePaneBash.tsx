import React, {ComponentProps, FC} from 'react';
import {CodePane, codePaneThemes} from 'spectacle';

type CodePaneBashProps = Omit<ComponentProps<typeof CodePane>, 'language' | 'theme'>

const CodePaneBash: FC<CodePaneBashProps> = ({ children, ...props }) => {
    return <CodePane {...props} language="bash" theme={codePaneThemes.a11yDark}>{children}</CodePane>
}

export default CodePaneBash;
