const electron = require('electron');
const menubar = require('menubar');

const app = electron.app;
const globalShortcut = electron.globalShortcut;
const ipcMain = electron.ipcMain;
const clipboard = electron.clipboard;

let menu = menubar({
    dir: __dirname + '/../bar',
    preloadWindow: true
});

menu.on('ready', () => {
    globalShortcut.register('Control+1', () => {
        menu.window.webContents.send('key', 0);
    });

    globalShortcut.register('Control+2', () => {
        menu.window.webContents.send('key', 1);
    });

    globalShortcut.register('Control+3', () => {
        menu.window.webContents.send('key', 2);
    });
});

ipcMain.on('copy', (event, arg) => {
    clipboard.writeText(arg);
});

ipcMain.on('exit', (event, arg) => {
    app.quit()
});
