import React, {FC, MouseEvent, useState} from 'react';
import {
    FlexBox,
    Link,
    ListItem,
    OrderedList,
    Slide,
    Table,
    TableBody, TableCell,
    TableHeader, TableRow,
    Text,
    UnorderedList
} from 'spectacle';
import {Button} from '@hh.ru/magritte-ui';
import {H1, H3} from '../../components/typography'
import CodePaneJS from '../../components/CodePaneJS';
import CodeExampleButton from '../../components/CodeExampleButton';
import PresentationButton from '../../components/PresentationButton';
import SlideQuestions from '../../components/SlideQuestions';
import {
    exampleIframeAjaxRequest,
    exampleXhrRequest,
    exampleXhrOnloadHandler,
    exampleFetchRequest,
    exampleFetchRequestAsyncAwait,
    exampleFetchRequestPostBody,
    exampleXhrGetAndPost,
} from '../../examples/ajax';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';


const AJAX: FC = () => {
    const [showIframe, setShowIframe] = useState(false);
    return (
        <>
            <Slide>
                <H1>AJAX</H1>
                <UnorderedList>
                    <ListItem>Что это такое? Как работает?</ListItem>
                    <ListItem>Зачем нужен?</ListItem>
                    <ListItem>Разберем на примерах</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>AJAX. Что такое?</H3>
                <UnorderedList>
                    <ListItem>Это подход к построению веб приложений</ListItem>
                    <ListItem>С помощью JS в фоновом режиме делаем запрос, получаем ответ с данными</ListItem>
                    <ListItem>Используя полученные данные обновляем содержимое страницы с помощью JavaScript без её перезагрузки</ListItem>
                    <ListItem>Асинхронный JavaScript и XML</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>AJAX. Сайт с AJAX и без</H3>
                <Text>Сайт без AJAX <Link href="https://ru.wordpress.org/themes">Wordpress</Link></Text>
                <Text>Сайт с AJAX <Link href="https://hh.ru/mentors">HeadHunter</Link></Text>
                <Text>Сайт с AJAX <Link href="https://rutube.ru/video/e629de0d39a9c8d6c62c0adb707447d7/">Ютуб</Link></Text>
            </Slide>
            <Slide>
                <H3>AJAX. Основные достоинства</H3>
                <UnorderedList>
                    <ListItem>Интерфейс становится более отзывчивый и интерактивный</ListItem>
                    <ListItem>Мультимедиа не останавливается, можно смотреть видео и писать комментарии без перезагрузки</ListItem>
                    <ListItem>Уменьшается кол-во передаваемого трафика (важно когда медленный интернет)</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>AJAX. Основные недостатки</H3>
                <UnorderedList>
                    <ListItem>Усложнение клиентского приложения</ListItem>
                    <ListItem>Динамически загружаемое содержимое недоступно поисковикам</ListItem>
                    <ListItem>Не будет работать без включенного JavaScript в браузере</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>AJAX. Синхронный vs Асинхронный</H3>
                <div>
                    <Button style="accent" mode="primary" onClick={() => alert('Hello!')}>Обычная кнопка на сайте</Button>
                </div>
                <FlexBox justifyContent="start" pt={24} style={{ gap: '12px' }}>
                    <Button style="accent" mode="primary" onClick={() => {
                        const syncRequest = new XMLHttpRequest();
                        syncRequest.open('GET', 'http://localhost:8000/slow', false);
                        syncRequest.send();
                    }} >Синхронный запрос</Button>
                    <Button style="accent" mode="primary" onClick={() => {
                        const asyncRequest = new XMLHttpRequest();
                        asyncRequest.open('GET', 'http://localhost:8000/slow', true);
                        asyncRequest.send();
                    }}>Асинхронный запрос</Button>
                </FlexBox>
            </Slide>
            <Slide>
                <H3>AJAX. Способы асинхронной передачи данных</H3>
                <OrderedList>
                    <ListItem>Iframe</ListItem>
                    <ListItem>Image API и Beacon API</ListItem>
                    <ListItem>XMLHttpRequest</ListItem>
                    <ListItem>Fetch (ES6)</ListItem>
                    <ListItem>Server Sent Events</ListItem>
                    <ListItem>WebSocket</ListItem>
                    <ListItem>WebRTC</ListItem>
                </OrderedList>
            </Slide>
            <Slide>
                <H3>AJAX. Iframe</H3>
                <CodePaneJS>
                    {`
                        const iframe = document.createElement('iframe')
                        iframe.src = 'http://localhost:8000/iframe_with_json'
                        iframe.onload = () => {
                            // обрабатываем ответ
                        }
                        document.body.appendChild(iframe)
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <PresentationButton onClick={() => setShowIframe(!showIframe)}>
                        Показать iframe
                    </PresentationButton>
                    <CodeExampleButton code={exampleIframeAjaxRequest}/>
                </CodeContainer>
                {showIframe && (
                    <FlexBox pt={12} style={{ gap: '12px'}}>
                        <iframe
                            id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="50%"
                            height="200"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                        </iframe>
                        <iframe
                            title="Iframe"
                            src="http://localhost:8000/iframe_with_json"
                            height="200px"
                            width="50%"
                            style={{backgroundColor: 'beige'}}
                        />
                    </FlexBox>
                )}
            </Slide>
            <Slide>
                <H3>AJAX. Image API и Beacon API</H3>
                <CodePaneJS>
                    {`
                        // Вариант с отправкой аналитики используя fetch/xhr для пользователя не всегда подходит
                        const onClick = (event: MouseEvent) => {
                            event.preventDefault()
                            fetch('http://localhost:8000/analytics/slow').then(() => {
                                window.location.assign('http://example.com')
                            })
                        }
                        // Beacon API – отличный способ отправки аналитики
                        navigator.sendBeacon('http://localhost:8000/analytics?action=buy&item=11', 'some data')

                        // Этот способ до сих пор используется в старых проектах, минус что нельзя передать body
                        const image = new Image()
                        image.src = 'http://localhost:8000/image?action=buy&item=11'                        
                    `}
                </CodePaneJS>
                <FlexBox justifyContent="start" paddingTop={12} style={{ gap: '12px' }}>
                    <Link
                        href="http://example.com"
                        onClick={(event: MouseEvent) => {
                            event.preventDefault()
                            fetch('http://localhost:8000/analytics/slow').then(() => {
                                window.location.assign('http://example.com')
                            })
                        }}>
                        fetch
                    </Link>
                    <Link
                        href="http://example.com"
                        onClick={() => {
                            navigator.sendBeacon('http://localhost:8000/analytics/slow', 'some data')
                        }}>
                        sendBeacon
                    </Link>
                    <Button
                        mode="primary"
                        style="accent"
                        onClick={() => {
                            const img = new Image()
                            img.src = 'http://localhost:8000/image?action=buy&item=11'
                        }}>
                        Image API
                    </Button>
                </FlexBox>
            </Slide>
            <Slide>
                <H3>AJAX. XMLHttpRequest</H3>
                <CodePaneJS>
                    {`
                        const getRequest = new XMLHttpRequest()
                        getRequest.open('GET', 'http://localhost:8000/hello_world') // стартовая строка
                        getRequest.setRequestHeader('Authorization', 'Basic 123..789'); // заголовки
                        getRequest.send() // у GET запроса не может быть тела
                        
                        const postRequest = new XMLHttpRequest()
                        postRequest.open('POST', 'http://localhost:8000/registration') // стартовая строка
                        postRequest.setRequestHeader('Content-Type', 'text/html'); // заголовки
                        postRequest.send("username=ivan&password=123") // тело запроса
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleXhrGetAndPost} />
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>AJAX. XMLHttpRequest События</H3>
                <CodePaneJS>
                    {`
                        const xhr = new XMLHttpRequest()
                        xhr.open('GET', 'http://localhost:8000/users')                        
                        xhr.onprogress = (event) => console.log(event);
                        xhr.onload = (event) => console.log(event);
                        xhr.onerror = (event) => console.log(event);
                        xhr.send()
                        
                        xhr.abort(); // отмена запроса
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleXhrOnloadHandler}>Пример с onload</CodeExampleButton>
                    <CodeExampleButton code={exampleXhrRequest}>Про readyState</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>AJAX. Fetch API</H3>
                <CodePaneJS>
                    {`
                        fetch('/users')  // Возвращает promise
                            .then(response => response.json())  // Получаем данные с помощью then
                            .catch(error => console.log(error))  // Обрабатываем ошибки с помощью catch
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequest}/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>AJAX. Fetch API</H3>
                <CodePaneJS>
                    {`
                        let response
                        try {
                            let response = await fetch('/users');
                            response = await response.json();
                            console.log(response)
                        } catch (error) {
                            console.log(error)
                        }
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequestAsyncAwait}/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>AJAX. Fetch API</H3>
                <CodePaneJS>
                    {`
                        fetch('/users', {           // URL
                            method: 'POST',         // Метод – GET, POST и др.
                            headers: {              // заголовки
                                Authorization: 'Bearer abc123',
                                'Content-Type': 'application/json',
                                Accept: '*/*'
                            },                      // Полный список опций больше
                            redirect: 'follow',     // follow - следовать, error - не следовать
                            cache: 'no-store',      // default – стандартные правила, no-store – игнорировать кеш
                            body: '{"username": "ivanov", "password": "123"}',  // тело запроса
                        })
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleFetchRequestPostBody}/>
                    <CodeExampleButton code="" url="https://learn.javascript.ru/fetch-api">Fetch API все опции</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>AJAX. XMLHttpRequest vs Fetch</H3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>XMLHttpRequest</TableCell>
                            <TableCell>Fetch</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Обработка событий с помощью колбэков</TableCell>
                            <TableCell>Fetch возвращает промисы, можно использовать async/await</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>XMLHttpRequest позволяет отслеживать прогресс выполнения запроса</TableCell>
                            <TableCell>Такой фичи нет</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Slide>
            <Slide>
                <H3>AJAX. WebSocket и Server Sent Events</H3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>WebSocket</TableCell>
                            <TableCell>Server Sent Events</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Сообщения может посылать и клиент и сервер</TableCell>
                            <TableCell>Сообщения может посылать только сервер</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Данные – бинарные и текстовые</TableCell>
                            <TableCell>Данные – только текстовые</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Протокол – WebSocket</TableCell>
                            <TableCell>Протокол – HTTP</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Для чатов, игр, и т.д.</TableCell>
                            <TableCell>Для <Link href="https://tradytics.com/overall-market">дашбордов</Link> c быстро меняющимися данными</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Slide>
            <Slide>
                <H3>AJAX. Web RTC (Real-Time-Communication)</H3>
                <Text>Технология потоковой передачи данных между браузерами или другими приложениями</Text>
                <UnorderedList>
                    <ListItem>Работает на основе P2P протокола (обмен данными происходит без сервера)</ListItem>
                    <ListItem>Позволяет передавать и получать видео, аудио и др.</ListItem>
                    <ListItem>Google Meet, Discord и т.д.</ListItem>
                </UnorderedList>
            </Slide>
            <SlideUsefulLinks theme="AJAX">
                <Link href="https://learn.javascript.ru/xmlhttprequest" target="_blank">XMLHttpRequest</Link>
                <Link href="https://doka.guide/js/fetch/" target="_blank">Fetch API</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/API/Navigator/sendBeacon" target="_blank">Beacon API</Link>
                <Link href="https://learn.javascript.ru/server-sent-events" target="_blank">Server Sent Events</Link>
                <Link href="https://learn.javascript.ru/websocket" target="_blank">Web Socket</Link>
                <Link href="https://developer.mozilla.org/ru/docs/Web/API/WebRTC_API" target="_blank">WebRTC API</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default AJAX;
