'use strict'
window.addEventListener('load', e => {
    
    (async () => {
        // JSONファイル読み込み
        const res = await fetch('./js/lib/md.json')
        const json =await res.json()
        // console.log(json)
        // 要素生成
        const liFragment = document.createDocumentFragment()
        for (const i of json) {
            // console.log(i)
            const liEle = document.createElement('li')
            const aEle = document.createElement('a')
            aEle.href = `./md/${i}`
            aEle.innerText = i.replace('.html', '')
            liEle.appendChild(aEle)
            liFragment.appendChild(liEle)
        }
        document.getElementById('list').appendChild(liFragment)
    })()
})