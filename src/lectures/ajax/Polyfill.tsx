import React, {FC} from 'react';
import {ListItem, Slide, UnorderedList, Text, Image, Link} from 'spectacle';
import caniuseImage from './images/caniuse.png'
import {H1, H3} from '../../components/typography';
import SlideQuestions from '../../components/SlideQuestions';
import CodePaneJS from '../../components/CodePaneJS';
import CodeExampleButton from '../../components/CodeExampleButton';
import { polyfillExample } from '../../examples/polyfill';
import CodePaneBash from '../../components/CodePaneBash';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';

const Polyfill: FC = () => {
    return (
        <>
            <Slide>
                <H1>Полифилы</H1>
                <UnorderedList>
                    <ListItem>Что это?</ListItem>
                    <ListItem>Для чего использовать?</ListItem>
                    <ListItem>Как использовать?</ListItem>
                    <ListItem>Какими они должны быть?</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Полифилы. Что это?</H3>
                <Text>Код, с помощью которого мы можем добавить в браузер функционал из спецификации <Link href="https://tc39.es/ecma262/"> JavaScript</Link></Text>
                <CodePaneJS>
                    {`
                        // если хром выше 110й версии (released 2023-02-07)
                        const items = ['apple', 'mango', 'kiwi'];
                        const reversedItems = items.toReversed();
                        console.log(reversedItems); // ['kiwi', 'mango', 'apple']

                        // если хром ниже 110й версии
                        const reversedItems = items.toReversed();
                        // Uncaught TypeError: items.toReversed is not a function
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={polyfillExample}>Напишем свой полифил</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Полифилы. Для чего использовать?</H3>
                <UnorderedList>
                    <ListItem>JavaScript активно <Link href="https://tc39.es/#proposals" target="_blank">развивается</Link></ListItem>
                    <ListItem>Появляются новые фичи, старые могут меняться</ListItem>
                    <ListItem>Хочется использовать новые возможности сразу, при этом приложение работало стабильно</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Полифилы. Какими они должны быть?</H3>
                <UnorderedList>
                    <ListItem>Фича должна работать как описано в <Link href="https://tc39.es/ecma262/" target="_blank">спецификации</Link></ListItem>
                    <ListItem>Замена должна быть адекватной</ListItem>
                    <ListItem>Исходный код должен вызывать доверие</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Полифилы. Популярные библиотеки</H3>
                <UnorderedList>
                    <ListItem>core-js — самый популярный набор полифилов для JS</ListItem>
                    <ListItem>HTML5 Shiv — добавляет в старые браузеры поддержку HTML5 тэгов</ListItem>
                    <ListItem>es5shim — добавляет поддержку почти всех фич ECMAScript 5 в IE</ListItem>
                    <ListItem>Flexie — обеспечивает кроссбраузерную поддержку flexbox</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Полифилы. Как использовать?</H3>
                <CodePaneBash>
                    npm install --save core-js
                </CodePaneBash>
                <CodePaneJS>
                    {`
                        // можно импортировать целый набор полифилов
                        import 'core-js/actual';
                        // или только нужное
                        import 'core-js/actual/array/to-reversed';
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>Полифилы. Поддержка браузерами</H3>
                <Image src={caniuseImage} />
            </Slide>
            <SlideUsefulLinks theme="Полифилы">
                <Link href="https://caniuse.com/" target="_blank">Поддержка браузерами caniuse.com</Link>
                <Link href="https://github.com/zloirock/core-js" target="_blank">Библиотека полифилов core-js</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default Polyfill;
