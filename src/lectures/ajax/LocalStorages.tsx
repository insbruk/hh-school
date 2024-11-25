import React, {FC, useState} from 'react';
import {Input} from '@hh.ru/magritte-ui';
import {
    ListItem,
    Slide,
    UnorderedList,
    Text,
    Box,
    Link,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TableBody
} from 'spectacle';
import {H1, H3} from '../../components/typography';
import CodePaneJS from '../../components/CodePaneJS';
import SlideQuestions from '../../components/SlideQuestions';
import CodeExampleButton from '../../components/CodeExampleButton';
import {exampleCookie} from '../../examples/cookie';
import {exampleLocalStorage, exampleLocalStorageEvent} from '../../examples/localStorage';
import SlideUsefulLinks from '../../components/SlideUsefulLinks';
import CodeContainer from '../../components/CodeContainer';

const LocalStorages: FC = () => {
    const [name, setName] = useState<string>(window.sessionStorage.getItem('name') || '');
    const [surName, setSurName] = useState<string>(window.sessionStorage.getItem('surname') || '');

    return (
        <>
            <Slide>
                <H1>Локальные хранилища данных</H1>
                <UnorderedList>
                    <ListItem>Cookie</ListItem>
                    <ListItem>LocalStorage</ListItem>
                    <ListItem>SessionStorage</ListItem>
                    <ListItem>IndexedDB</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Cookie</H3>
                <UnorderedList>
                    <ListItem>Что это?</ListItem>
                    <ListItem>Для чего использовать?</ListItem>
                    <ListItem>Как использовать?</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>Cookie. Что это?</H3>
                <CodePaneJS>
                    {`
                        // Cookie - часть HTTP протокола, выглядят как заголовок
                        // Ограниченное кол-во на домен (сотни), размер каждой не более 4кб
                        // По умолчанию кука живет до закрытия браузера

                        POST /login HTTP/1.1
                        host: hh.ru
                        
                        {"username": "mailbox@yandex.ru", "password": "123"}
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        HTTP/1.1 200 OK
                        Set-Cookie: role=client
                        Set-Cookie: auth=r2d2; Domain=example.com; HttpOnly; Secure
                    `}
                </CodePaneJS>
                <CodePaneJS>
                    {`
                        GET /api/tasks?limit=50 HTTP/1.1
                        host: hh.ru
                        Cookie: auth=r2d2;role=client
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleCookie} url={'http://localhost:8000/with_cookies'}/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Cookie. Для чего использовать?</H3>
                <Text>Использование cookie позволяет нам создавать персонализированные сервисы</Text>
                <UnorderedList>
                    <ListItem>Авторизация</ListItem>
                    <ListItem>Персонализация контента</ListItem>
                    <ListItem>Исследование поведения пользователей</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>
                    Cookie. Параметры (не обязательные)
                </H3>
                <CodePaneJS>
                {`
                        'role=student;secure;max-age=3600'
                        httpOnly:
                            кука будет недоступна из JS для чтения/изменения, в HTTP запросах отправляется
                        domain (hh.ru):
                            определяет домен, для которого указана кука
                        max-age:
                            указывает, через сколько секунд кука станет недействительна
                        expires (Thu Jan 30 2025 15:32:03 GMT+0300):
                            указывает точное время, когда кука станет недействительна
                        secure: 
                            указывает, что данная кука может быть передана только при запросах по HTTPS протоколу
                        samesite (strict | lax): 
                            определяет, может ли данная кука быть отправлена при кроссдоменном запросе
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleCookie} url={'http://localhost:8000/with_cookies'}>
                        Посмотреть в инструментах разработчика
                    </CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>Cookie. JavaScript</H3>
                <CodePaneJS>
                    {`
                        console.log(document.cookie)  // ''

                        // Добавить значение по ключу "counter":
                        document.cookie = 'counter=1'
                        console.log(document.cookie)  // 'counter=1'

                        // При использовании существующего ключа – значение будет перезаписано
                        document.cookie = 'counter=5'
                        console.log(document.cookie)  // 'counter=5'

                        // Удаление осуществляется установкой прошедшей даты в поле expires
                        const date = new Date(0);  // Thu Jan 01 1970 03:00:00 GMT+0300
                        document.cookie = \`counter=5; expires=\${date.toUTCString()}\`;
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleCookie} url={'http://localhost:8000/with_cookies'}>Инструментах разработчика tab Application</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>LocalStorage</H3>
                <UnorderedList>
                    <ListItem>Что это?</ListItem>
                    <ListItem>Для чего использовать?</ListItem>
                    <ListItem>Как использовать?</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>LocalStorage. Что это?</H3>
                <UnorderedList>
                    <ListItem>Долговременное key-value хранилище</ListItem>
                    <ListItem>И ключ и значение являются строками</ListItem>
                    <ListItem>Данные хранятся локально и не отправляются автоматически на сервер как куки</ListItem>
                    <ListItem>Доступны на всех открытых страницах с одним origin</ListItem>
                    <ListItem>Максимальный объем данных ограничен размером 5MB</ListItem>
                    <ListItem>Может быть очищено вручную или браузером автоматически</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>LocalStorage. Для чего использовать?</H3>
                <UnorderedList>
                    <ListItem>Сохранение пользовательских настроек (тема, язык)</ListItem>
                    <ListItem>Сокращение запросов к серверу (кэширование данных)</ListItem>
                    <ListItem>Работа приложения без интернета</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>LocalStorage. Как использовать?</H3>
                <CodePaneJS>
                    {`
                        // API доступно как через window.localStorage, так и просто localStorage
                        // Запись элемента
                        window.localStorage.setItem('data', '123')
                        // Чтение элемента
                        window.localStorage.getItem('data') // если такого ключа нет – вернется null
                        // Удаление элемента
                        localStorage.removeItem('data')
                        // Очистка хранилища
                        localStorage.clear()
                        // Если превысим размер — получим exception. Запись элементов лучше оборачивать в try/catch
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleLocalStorage} url="http://localhost:8000/local_storage">Инструменты разработчика tab Application</CodeExampleButton>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>LocalStorage. Следить за изменениями</H3>
                <CodePaneJS>
                    {`
                        // Обработчик не вызывается на той вкладке в которой было произведено изменение хранилища
                        window.addEventListener('storage', (storageEvent) => console.log(storageEvent))
                        
                        // storageEvent
                        {
                            ...
                            key: 'theme',
                            newValue: 'dark',
                            oldValue: 'light',
                            ...
                        }
                    `}
                </CodePaneJS>
                <CodeContainer>
                    <CodeExampleButton code={exampleLocalStorageEvent} url="http://localhost:8000/local_storage"/>
                </CodeContainer>
            </Slide>
            <Slide>
                <H3>SessionStorage</H3>
                <UnorderedList>
                    <ListItem>Хранилище данных в формате ключ-значение</ListItem>
                    <ListItem>Данные хранятся пока жива сессия (открытая вкладка)</ListItem>
                    <ListItem>Выдерживает обновление страницы, но не перезапуск браузера</ListItem>
                    <ListItem>Открытие новой вкладки с таким же адресом приведёт к созданию новой сессии (дублирование нет)</ListItem>
                    <ListItem>API очень схоже с LocalStorage</ListItem>
                    <ListItem>Максимальный объем данных ограничен размером 5MB</ListItem>
                </UnorderedList>
            </Slide>
            <Slide>
                <H3>LocalStorage vs SessionStorage</H3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>LocalStorage</TableCell>
                            <TableCell>SessionStorage</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Данные хранятся пока хранилище не будет очищено автоматически или вручную</TableCell>
                            <TableCell>Данные хранятся пока жива сессия (вкладка)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Данные доступны из любой вкладки с одним origin</TableCell>
                            <TableCell>Данные доступны только из текущей вкладки (и её дубликата)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Slide>
            <Slide>
                <H3>SessionStorage. Как использовать?</H3>
                <CodePaneJS>
                    {`
                        // API доступно как через window.sessionStorage, так и просто sessionStorage
                        // Запись элемента
                        window.sessionStorage.setItem('data', '123')
                        // Чтение элемента
                        window.sessionStorage.getItem('data') // если такого ключа нет – вернется null
                        // Удаление элемента
                        sessionStorage.removeItem('data')
                        // Очистка хранилища
                        sessionStorage.clear()
                        // Если превысим размер — получим exception. Запись элементов лучше оборачивать в try/catch
                    `}
                </CodePaneJS>
            </Slide>
            <Slide>
                <H3>SessionStorage. Для чего использовать?</H3>
                <Text>SessionStorage в реальных проектах используется достаточно редко</Text>
                <Box>
                    <Input
                        placeholder="Имя"
                        onChange={(value) => {
                            setName(value);
                            sessionStorage.setItem('name', value)
                        }}
                        value={name}
                    />
                    <Input
                        placeholder="Фамилия"
                        onChange={(value) => {
                            setSurName(value);
                            sessionStorage.setItem('surname', value)
                        }}
                        value={surName}
                    />
                </Box>
            </Slide>
            <Slide>
                <H3>IndexedDB. Что это и зачем нужно?</H3>
                <UnorderedList>
                    <ListItem>Встроенная база данных</ListItem>
                    <ListItem>Функциональнее и сложнее чем localStorage</ListItem>
                    <ListItem>Позволяет хранить больше данных чем localStorage</ListItem>
                    <ListItem>Позволяет хранить практически любые значения</ListItem>
                    <ListItem>Данные хранятся локально</ListItem>
                    <ListItem>Больше подходит для сложных офлайн приложений</ListItem>
                </UnorderedList>
            </Slide>
            <SlideUsefulLinks theme="Локальные хранилища данных">
                <Link href="https://doka.guide/js/cookie/" target="_blank">Про cookie</Link>
                <Link href="https://doka.guide/js/local-storage/" target="_blank">Про LocalStorage</Link>
                <Link href="https://doka.guide/js/session-storage/" target="_blank">Про SessionStorage</Link>
                <Link href="https://learn.javascript.ru/indexeddb" target="_blank">Про IndexedDB</Link>
            </SlideUsefulLinks>
            <SlideQuestions />
        </>
    )
}

export default LocalStorages;
