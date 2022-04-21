chrome.runtime.onInstalled.addListener(()=>{
    console.log('Installed')
})

chrome.bookmarks.onCreated.addListener((id, bookmark)=>{
    alert(JSON.stringify({id, bookmark}))
})
