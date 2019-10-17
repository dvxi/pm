/*let electron = require("electron");
let url = require("url");
let path = require("path");

const { app, BrowserWindow } = electron;

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 810,
    height: 610,
    frame: false, // borderless window
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(__dirname + "/public/collision.html");

  //win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);*/

let express = require("express");

let app = express();
let server = app.listen(3000);

app.use(express.static("public")); // działa z index.html

app.get('/', function(req, res) { // zalecane
  res.sendFile(__dirname + "/index.html");
});


console.log("working");
