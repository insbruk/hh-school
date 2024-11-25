export const exampleIframeAjaxRequest =
`const iframe = document.createElement('iframe')
iframe.src = 'http://localhost:8000/iframe_with_json'
iframe.style.display = 'none'
iframe.onload = () => {
    const dataFromIframe = iframe.contentWindow.document.body.innerText;
    try {
        const data = JSON.parse(dataFromIframe)
        data.users.map(item => {
            const userElement = document.createElement('div')
            userElement.innerText = \`\${item.firstName} \${item.lastName}\`
            userElement.style.backgroundColor = 'lightgrey'
            userElement.style.border = '1px solid darkgrey'
            userElement.style.padding = '8px'
            document.body.appendChild(userElement)
        })
    } catch (e) {
        console.error(e)
        return
    }
    document.body.removeChild(iframe)
}
document.body.appendChild(iframe)
`

export const exampleImageAjaxRequest =
`const image = new Image()
image.src = 'http://localhost:8000/image?action=buy&item=11'
`

export const exampleXhrGetAndPost =
`const getRequest = new XMLHttpRequest()
getRequest.open('GET', 'http://localhost:8000/hello_world')
getRequest.setRequestHeader('Authorization', 'Basic 123..789');
getRequest.send()

const postRequest = new XMLHttpRequest()
postRequest.open('POST', 'http://localhost:8000/registration')
postRequest.setRequestHeader('Content-Type', 'text/html');
postRequest.send("username=ivan&password=123")
`

export const exampleJSONData =
`const jsonString = '{"users": ["Tom", "Jerry", "Ninja"]}'
// JSON.parse - конвертирует строку в JS объект
// JSON.stringify - конвертирует JS объект в строку

`

export const exampleXhrRequest =
`const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    console.log('---------------')
    console.log('Ready state: ', xhr.readyState)
    console.log('Status: ', xhr.status)
    console.log('Response: ', xhr.responseText)
    console.log('Ready state: ', xhr.readyState)
}
xhr.onreadystatechange()
xhr.open('GET', 'http://localhost:8000/hello_world')
xhr.send()
`

export const exampleXhrSyncRequest =
`const syncRequest = new XMLHttpRequest();
syncRequest.open("GET", "http://localhost:8000/slow", false);
syncRequest.send();
`

export const exampleXhrAsyncRequest =
`const asyncRequest = new XMLHttpRequest();
asyncRequest.open("GET", "http://localhost:8000/slow", true);
asyncRequest.send();
`

export const exampleXhrOnloadHandler =
`const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:8000/users')
xhr.onload = function(event) {
    const response = JSON.parse(xhr.response)
    const users = response.users
    users.map(item => {
        const userElement = document.createElement('div')
        userElement.innerText = \`\${item.firstName} \${item.lastName}\`
        userElement.style.backgroundColor = 'lightgrey'
        userElement.style.border = '1px solid darkgrey'
        userElement.style.padding = '8px'
        document.body.appendChild(userElement)
    })
};
xhr.send()
`

export const exampleFetchRequest =
`// status500
fetch('/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('failed to load data')
            return;
        }
        return response.json()
    })
    .then(response => console.log(response))
`

export const exampleFetchRequestAsyncAwait =
`let response
try {
    let response = await fetch('/users');
    response = await response.json();
    console.log(response)
} catch (error) {
    console.log(error)
}
`

export const exampleFetchRequestPostBody =
`fetch('/registration', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: "Alice", password: 123 }),
})
`
export const exampleWebSocketRequest =
`
const wsConnection = new WebSocket(url)
wsConnection.send()
wsConnection.addEventListener(‘message’, console.log)

setTimeout(() => {
    wsConnection.close()
}, 10000)
`
