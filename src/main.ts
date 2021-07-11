import { storage } from './storage'
//import { storage } from './localStorage'

import type { Items } from './interface'

storage.set({
  filteredStr: '(filtered)',
  regexps: [
    {
      name: 'mail',
      regexp: '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+',
      enable: true,
    },
    {
      name: 'password',
      regexp: 'password:.*',
      enable: true,
    },
  ],
})

// Show local storage for this chrome extension
// @ts-ignore
//chrome.storage.local.get((result) => {
//  console.log(result)
//})

document.addEventListener('paste', pasteStringFilter)

async function pasteStringFilter(event: any) {
  const elem = window.document.activeElement as HTMLInputElement
  if (!elem || !['TEXTAREA'].includes(elem.nodeName)) {
    return false
  }

  const orignal = elem.value
  const selectionStart = elem.selectionStart
  const selectionEnd = elem.selectionEnd
  if (selectionStart === null || selectionEnd === null) {
    return false
  }
  let clipboardData = event.clipboardData
  if (!clipboardData) {
    return false
  }
  let paste = clipboardData.getData('text')
  // @ts-ignore
  const items = (await storage.get(['enable', 'filteredStr', 'regexps'])) as Items
  if (!items.hasOwnProperty('enable')) {
    console.log('enable is not set.')
    return
  }

  const enable = items['enable']
  if (!enable) {
    console.log('Filter is disable now.')
    return
  }

  const filteredStr = items['filteredStr']
  Object.keys(items['regexps']).forEach((key) => {
    let regexp = new RegExp(items['regexps'].regexp, 'g')
    paste = paste.replace(regexp, filteredStr)
  })
  elem.value = orignal.slice(0, selectionStart) + paste + orignal.slice(selectionEnd)

  event.preventDefault()
}
