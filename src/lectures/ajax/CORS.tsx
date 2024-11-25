import React, {FC} from 'react';
import {Link, ListItem, Slide, Text, UnorderedList} from 'spectacle';
import {H1, H3} from '../../components/typography';
import CodePaneJS from '../../components/CodePaneJS';
import SlideQuestions from '../../components/SlideQuestions';
import CodeExampleButton from '../../components/CodeExampleButton';
import {corsErrorExample} from '../../examples/cors';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';


const CORS: FC = () => {
    return (
        <>
            <Slide>
                <H1>CORS</H1>
                <UnorderedList>
                    <ListItem>Что это такое?</ListItem>
                    <ListItem>Зачем нужно?</ListItem>
                    <ListItem>Посмотрим примеры</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>CORS. Кросдоменные запросы</H3>
                <Text>Cross Origin Resource Sharing</Text>
                <CodePaneJS>
                    {`
                        fetch('http://example.com/')
                        // Access to fetch at 'http://example.com/'
                        // from origin '${window.location.origin}' has been blocked by CORS policy

                        window.location.origin === '${window.location.origin}' // \`\${PROTOCOL}//\${HOST}:\${PORT}\`
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={corsErrorExample} url="http://localhost:8000?page=0&pageSize=20" />
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>CORS. Политика безопасности</H3>
                <UnorderedList>
                    <ListItem>Same-Origin Policy</ListItem>
                    <ListItem>По умолчанию с помощью AJAX запросов можно запрашивать ресурсы только если origin совпадает</ListItem>
                    <ListItem>Используя HTML теги можно загружать ресурсы из любого источника (img, css, mp4)</ListItem>
                    <ListItem>CORS - Механизм, позволяющий настроить доступ к ресурсам с иного источника</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>CORS. Пример</H3>
                <CodePaneJS>
                    {`                        
                        GET /users HTTP/1.1
                        Host: localhost:8000
                        Origin: example.com

                        HTTP/1.1 200 OK
                        Access-Control-Allow-Origin: example.com
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code="fetch('http://localhost:8000/cors')" url="https://example.com">
                        Устанавливаем CORS заголовки на сервере
                    </CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>CORS. Настройки</H3>
                <CodePaneJS>
                    {`
                        // Разрешить любой источник
                        Access-Control-Allow-Origin: *
                        // Разрешить только hh.ru
                        Access-Control-Allow-Origin: https://hh.ru
                        // Разрешить только эти 3 метода (например PATCH запрос выполнить не получится)
                        Access-Control-Allow-Methods: POST, GET, OPTIONS
                        // Разрешить клиенту сделать запрос с авторизационными данными (куки, заголовки)
                        Access-Control-Allow-Credentials: true
                        
                        если разрешено делать запрос с авторизационными данными
                        fetch('http://localhost:8000/users', {'credentials': 'include'})
                    `}
                </CodePaneJS>
            </Slide>
            <SlideUsefulLinks theme="CORS">
                <Link href="https://doka.guide/tools/cors/" target="_blank">CORS за 5 мин</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/HTTP/CORS" target="_blank">MDN CORS</Link>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors" target="_blank">MDN CORS ошибки</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/Security/Same-origin_policy" target="_blank">MDN Same-origin policy</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default CORS;
