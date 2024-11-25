import React from 'react';
import {Box, DeckProps, FlexBox, FullScreen} from 'spectacle';


const DefaultTemplate: DeckProps['template'] = ({ slideNumber }) => {
    return (
        <FlexBox
            justifyContent="space-between"
            position="absolute"
            bottom={0}
            width={1}
        >
            <Box padding="0 1em">
                <FullScreen />
            </Box>
            <Box padding="1em">
                <FlexBox justifyContent="center" color="#fff">#{slideNumber}</FlexBox>
            </Box>
        </FlexBox>
    )
}

export default DefaultTemplate;
