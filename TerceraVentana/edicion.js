const { ipcRenderer } = require('electron')

ipcRenderer.on('mensaje', (event, args) => {
 alert(args)
})