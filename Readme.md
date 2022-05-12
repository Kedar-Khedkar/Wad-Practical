# Ajax

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API key}`).then(data => {console.log(data);}
<br>
- With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.
- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background
- 
1. An event occurs in a web page (the page is loaded, a button is clicked)<br>
2. An XMLHttpRequest object is created by JavaScript <br>
3. The XMLHttpRequest object sends a request to a web server <br>
4. The server processes the request <br>
5. The server sends a response back to the web page <br>
6. The response is read by JavaScript <br>
7. Proper action (like page update) is performed by JavaScript <br>