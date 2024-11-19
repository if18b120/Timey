import { BrowserWindow, app } from "electron";
import * as url from "url";
import * as path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 370,
    height: 400,
  });

  //   win.loadFile(path.join(__dirname, 'browser/index.html'));
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "./browser/index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  
  win.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});