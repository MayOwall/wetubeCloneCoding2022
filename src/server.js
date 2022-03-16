import express from "express";

const app = express();

const PORT = 4000;


function pageControler(request, response, next) {
    console.log(`Someone trying to access the page`);
    next();
};

function securedpageProtector(request, response, next) {
    console.log("Emergency!! Someone try to hack the secure page!!");
    next();
};


function homepageControler(request, response, next) {
    console.log("homepage controler is working~");
    return response.send("Hello");
};

function loginpageControler(request, response) {
    console.log(`Someone trying to access the ${request.url}`);
    return response.send("Hello, there. I see you~");
};


function listenControler() {
    console.log("💖 listen control is working!");
};




app.use(pageControler);

app.get("/", homepageControler);
app.get("/login", loginpageControler);
app.get("/secured", securedpageProtector, homepageControler);

app.listen(PORT, listenControler);

