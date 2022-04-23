'use strict'
// import json from './lib/md.json'
window.addEventListener('load', e => {
    // JSONファイル読み込み
    fetch('./js/lib/md.json')
    .then(
        Response => {
            return Response.json()
        }
    )
    .then(data => {
        // console.log(data);
        const liFragment = document.createDocumentFragment()
        for (const i of data) {
            // console.log(i);
            const liEle = document.createElement('li')
            const aEle = document.createElement('a')
            aEle.href = `./md/${i}`
            aEle.innerText = i.replace('.html', '')
            liEle.appendChild(aEle)
            liFragment.appendChild(liEle)
        }
        document.getElementById('list').appendChild(liFragment)
    })
    // console.log(json);
})