const { app, BrowserWindow, session } = require('electron')
const path = require('path')

function createWindow() {
  // Strip tracking headers from all requests
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    const headers = details.requestHeaders
    delete headers['X-Client-Data']
    delete headers['X-Forwarded-For']
    delete headers['DNT']
    headers['User-Agent'] = 'CCE-Browser/1.0'
    callback({ requestHeaders: headers })
  })

  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    title: 'CCE — Conspiracy Connection Engine',
    backgroundColor: '#080810',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false  // allows cross-origin requests to search APIs
    },
    // Frameless feel
    titleBarStyle: 'default',
    show: false
  })

  // Show when ready to avoid white flash
  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadFile('index.html')

  // Optional: open devtools for debugging
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
