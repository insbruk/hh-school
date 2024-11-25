import React from 'react';
import {H1, H3} from '../../components/typography';
import {
    ListItem,
    Slide,
    Text,
    UnorderedList,
    FlexBox, Link
} from 'spectacle';
import CodeExampleButton from '../../components/CodeExampleButton';
import { ReactComponent as FetchWebPage} from './images/fetching-a-page.svg'
import { ReactComponent as HttpMessageStructure} from './images/http-message-structure.svg'
import SlideQuestions from '../../components/SlideQuestions';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodePaneJS from '../../components/CodePaneJS';
import CodeContainer from '../../components/CodeContainer';
import {exampleJSONData} from '../../examples/ajax';


const HTTP = () => {
    return (
        <>
            <Slide>
                <H1>HTTP Протокол</H1>
                <UnorderedList>
                    <ListItem>Что это? Зачем нужен?</ListItem>
                    <ListItem>Структура запросов/ответов</ListItem>
                    <ListItem>Инструменты разработчика</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>HTTP Протокол. Не только для Hypertext'a</H3>
                <FlexBox backgroundColor="#fff">
                    <FetchWebPage />
                </FlexBox>
                <CodeContainer>
                    <CodeExampleButton code="curl -v example.com" target="no">Пример в терминале (curl)</CodeExampleButton>
                    <CodeExampleButton code="" url="https://tc39.es/">Проинспектируем загрузку сайта в браузере</CodeExampleButton>
                    <CodeExampleButton code="" target="no">Insomnia example.com</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>HTTP Протокол. Что это? Зачем нужен?</H3>
                <UnorderedList>
                    <ListItem>Правила по которым веб клиент и веб сервер обмениваются данными</ListItem>
                    <ListItem>Веб клиент – обычно браузер</ListItem>
                    <ListItem>Веб сервер - программа, работающая на сервере, принимает запросы и отвечает на них</ListItem>
                    <ListItem>Данные - TEXT, HTML, JSON, IMG, MOV и т.д.</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>HTTP Протокол. Структура</H3>
                <Text>HTTP запрос/ответ представляет собой обычный текст со строго определенной структурой</Text>
                <FlexBox backgroundColor="#fff">
                    <HttpMessageStructure/>
                </FlexBox>
            </Slide>
            <Slide>
                <H3>HTTP Протокол. URL</H3>
                <Text fontSize={20}>У каждой части урла есть свое название</Text>
                <CodePaneJS>
                    {
                        `https://mywebsite.com/presentation?slideIndex=6&stepIndex=0
                        
{
    "protocol": "https:",  // http: или https:
    "domain (host)": "mywebsite.com",
    "port": "",  //  для http: 80, для https: 443;
    "origin": "https://mywebsite.com",
    "pathname": "/presentation",  // путь
    "query": "?slideIndex=6&stepIndex=0",  // query параметры запроса
    "uri": "/presentation?slideIndex=6&stepIndex=0"  // относительный урл
}`
                    }
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>AJAX. Формат данных JSON</H3>
                <CodePaneJS>
                    {`
                        // Текстовый формат обмена данными (бывает еще xml, soap и др.)
                        // key: string (только двойные кавычки)
                        // value: string | number | object | array | boolean | null
                        {
                            "rules": {
                                "shouldKnowJSON": true
                            },
                            "users": [{"name": "John", "age": 35}, {"name": "Ivan", "age": 30}],
                            "total": 2,
                            "archive": null
                        }
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleJSONData}/>
                    <CodeExampleButton code="" url="https://jsonlint.com/">JSON Валидатор</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Изучим инструменты разработчика</H3>
                <UnorderedList>
                    <ListItem>Как открыть?</ListItem>
                    <ListItem>Вкладка "Сеть"</ListItem>
                    <ListItem>Вкладка "Элементы"</ListItem>
                    <ListItem>Вкладка "Консоль"</ListItem>
                    <ListItem>Вкладка "Приложение"</ListItem>
                </UnorderedList>
                <CodeContainer>
                    <CodeExampleButton code="document.querySelector('p').textContent = 'test'" url="https://example.com">Проинспектируем простенький сайт</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <SlideUsefulLinks>
                <Link href="https://htmlacademy.ru/blog/php/http" target="_blank">Коротко про принцип работы</Link>
                <Link href="https://doka.guide/tools/http-protocol/" target="_blank">Doka про HTTP протокол</Link>
                <Link href="https://developer.chrome.com/docs/devtools?hl=ru" target="_blank">Инструменты разработчика</Link>
                <Link href="https://habr.com/ru/articles/554274/" target="_blank">Формат данных JSON</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default HTTP
