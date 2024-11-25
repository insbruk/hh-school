import React from 'react';
import {Link, SlideLayout} from 'spectacle';
import {H1} from '../../components/typography';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';

const Thanks = () => {
    return (
        <>
            <SlideUsefulLinks>
                <Link href="https://learn.javascript.ru" target="_blank">JavaScript Учебник (learn.javascript.ru)</Link>
                <Link href="https://doka.guide/js/" target="_blank">JavaScript Учебник (doka.guide)</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank">JavaScript Документация (MDN)</Link>
                <Link href="https://overapi.com/javascript" target="_blank">JavaScript Шпаргалка</Link>
                <Link href="https://caniuse.com/" target="_blank">Can I Use</Link>
            </SlideUsefulLinks>
            <SlideLayout.Center>
                <H1>Спасибо за внимание!</H1>
            </SlideLayout.Center>
        </>
    )
}

export default Thanks;
