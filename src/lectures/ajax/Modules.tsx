import React, {FC} from 'react';
import {Link, ListItem, Slide, Text, UnorderedList} from 'spectacle';
import {H1, H3} from '../../components/typography';
import CodePaneJS from '../../components/CodePaneJS';
import SlideQuestions from '../../components/SlideQuestions';

const LocalStorages: FC = () => {
    return (
        <>
            <Slide>
                <H1>JS Модули</H1>
                <UnorderedList>
                    <ListItem>Что это?</ListItem>
                    <ListItem>Для чего использовать?</ListItem>
                    <ListItem>Как использовать?</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>JS Модули. Что это?</H3>
                <Text fontSize={24}>
                    Модуль – файл, который содержит код
                </Text>
                <CodePaneJS>
                    {`
                        // файл (модуль) utils.js
                        export const getCurrentDate = () => '${new Date().toUTCString()}';
                    `}
                </CodePaneJS>
                <Text fontSize={24}>Код выносится в модули для удобства</Text>
                <CodePaneJS>
                    {`
                        // файл app.js
                        import { getCurrentDate } from './utils.js'
                        const today = getCurrentDate()
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули. Предыстория</H3>
                <UnorderedList>
                    <ListItem>Изначально в JS отсутствовал синтаксис модулей</ListItem>
                    <ListItem>Скрипты были довольно простые</ListItem>
                    <ListItem>Весь JS выполняется как только загрузился</ListItem>
                    <ListItem>Часто вставляется прямо в тело страницы</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>JS Модули. Для чего использовать?</H3>
                <Text>Если в большом проекте не использовать модули, то будет сложнее:</Text>
                <UnorderedList>
                    <ListItem>Понять структуру и взаимосвязи</ListItem>
                    <ListItem>Переиспользовать код</ListItem>
                    <ListItem>Перемещаться по проекту</ListItem>
                    <ListItem>Параллельно работать над проектом</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>JS Модули. Модульные системы</H3>
                <UnorderedList>
                    <ListItem>AMD — Asynchronous Module Definition</ListItem>
                    <ListItem>CommonJS — модульная система node.js</ListItem>
                    <ListItem>ES6 Modules — современная модульная система, внесена в стандарт ECMAScript в 2015г.</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>JS Модули AMD</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        define('myModule', ['math', 'underscore'], (math, _) => {
                            return {
                                getMinNumber: (a, b) => math.min(a, b),
                                sortDirection: 'ASC'
                            }
                        });
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        require(
                            ['myModule', 'underscore'],
                            function(Module, _) {
                                var minNumber = Module.getMinNumber(1, 5)
                            }
                        );
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули CommonJS</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        module.exports = {
                            getMinNumber: (a, b) => math.min(a, b),
                            sortDirection: 'ASC'
                        }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        const myModule = require('./myModule.js')
                        const minNumber = myModule.getMinNumber(5, 10)
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Экспорт до объявления</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        export const sortElements = (elements, direction) => {}
                        export const sortDirection = 'ASC'
                        const privateData = [4, 5, 6]  // не экспортировано
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { sortElements, sortDirection } from './my-module.js'  // privateData недоступно
                        
                        const result = sortElements([4, 8, 0], sortDirection)
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Экспорт отдельно от объявления</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        const sortElements = (elements, direction) => {}
                        const sortDirection = 'ASC'
                        
                        export { sortElements, sortDirection }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { sortElements, sortDirection } from './my-module'
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Импорт * и Импорт «как»</H3>
                <CodePaneJS>
                    {`             
                        // если мы хотим много импортировать можно импортировать всё сразу в виде объекта
                        import * as utils from './utils.js';
                        
                        utils.sortElements([5, 23, 2], utils.sortASC);
                        utils.sortElements([5, 23, 2], utils.sortDESC);
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Мы также можем использовать as, чтобы импортировать под другими именами.
                        import {years as worldCupYears, players as worldCupPlayers} from './worldCup.js';  
                        
                        console.log(worldCupYears);
                        console.log(worldCupPlayers);
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Экспорт «как»</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        const otherMethod = () => {}
                        const otherProp = 123
                        
                        export const { otherMethod as fetchUsers, otherProp as LIMIT }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import { fetchUsers, LIMIT } from './my-module'
                        
                        fetchUsers(LIMIT)
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Экспорт по умолчанию</H3>
                <CodePaneJS>
                    {`
                        // файл (модуль) myModule.js
                        export default class User {
                            constructor(name) {
                                this.name = name;
                            }
                        }
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        // Использование в app.js
                        import User from './my-module.js';
                        const joeBlack = new User('Joe');

                        // Можно дать другое название
                        import UserItem from './my-module.js';
                        const joeBlack = new UserItem('Joe');
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>JS Модули ES6. Полезные ссылки</H3>
                <UnorderedList>
                    <ListItem>
                        <Link href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules">JS Модули ES6. Документация</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://learn.javascript.ru/import-export">JS Модули ES6. Экспорт и импорт</Link>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <SlideQuestions />
        </>
    )
}

export default LocalStorages;
