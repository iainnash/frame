// Manage navigation states for each window

import { ipcMain } from 'electron'

import store from '../../store'

interface Crumb {
  view: string
}

const nav = {
  forward: (windowId: string, crumb: Crumb) => {
    // Adds new crumb to nav array
    store.navForward(windowId, crumb)
  },
  back: (windowId: string) => {
    // Removes last crumb from nav array
    store.navBack(windowId)
  },
  update: (windowId: string, crumb: Crumb, navigate: boolean = true) => {
    // Updated last crumb in nav array with new data
    // Replaces last crumb when navigate is false
    // Adds new crumb to nav array when navigate is true
    store.navUpdate(windowId, crumb, navigate)
  }
}

ipcMain.on('nav:forward', (e, windowId: string, crumb: Crumb) => {
  nav.forward(windowId, crumb)
})

ipcMain.on('nav:back', (e, windowId: string) => {
  nav.back(windowId)
})

ipcMain.on('nav:update', (e, windowId: string, crumb: Crumb, navigate: boolean) => {
  nav.update(windowId, crumb, navigate)
})

export default nav