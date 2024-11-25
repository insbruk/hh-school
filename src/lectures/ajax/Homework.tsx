import React from 'react';
import {H1} from '../../components/typography';
import {FlexBox, Link, SlideLayout} from 'spectacle';

const Homework = () => {
    return (
        <>
            <SlideLayout.Center>
                <H1>Домашнее задание</H1>
                <FlexBox><Link href="https://review.hhdev.ru/homeworks/4">Ссылка на RevYou</Link></FlexBox>
            </SlideLayout.Center>
        </>
    )
}

export default Homework
