// building your own HTTP Server
/**
 * Express router takes in an HTTP request
 * breaks it down into its method and path
 * tries to find an endpoint (place to stop at)
 * passes HTTP request off to that endpoint's handler
 */
const express = require("express") // include Express
const app = express() // initialize Express

/**
 * code body
 */

 // Express endpoint handler that takes in HTTP request and sends back
 function helloHandler(request, response) {

    /** Query Parameters are the 'weird' stuff at end of a URL
     * access query params in handler using 'request.query' object */
     const name = request.query.name

     /** checks if client forgot the name query param */
     if (typeof name == 'undefined' || name.length == 0) {
         response.status(400) // Bad request status code
         response.send('You forgot your name!')
         return // exit endpoint handler function early so nothing below runs
     }

     /** passes HTTP protocol response status code to tell
      * HTTP client how their request went */
     response.status(200)

     /** At end of every handler, we must send out response.
      * Otherwise, basic rules of HTTP protocol are broken.
      * 'response.send'
      * To send out JSON (like for an API) -> 'response.json' */
     response.send('Hello, ' + name + '!')

 }
 /** Link handler to Express router. Tell Express to run
  * 'helloHandler' function for the 'GET/hello endpoint */
 app.get('/hello', helloHandler)


 app.listen(3000) // runs Express