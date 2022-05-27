'use strict'
window.addEventListener('load', e => {
    
    // fetctでファイルあるか試す関数
    (async () => {
        // JSONファイル読み込み
        const option = {
            method: 'GET'
        }
        const res = await fetch('./js/lib/md.json', option)
        console.log(res);
        if(!res.ok) { //パス間違えててデータ取得できなかった場合
            alert('データ取得失敗')
            return
        }
        const json = await res.json()
        // console.log(json)
        // 要素生成
        const liFragment = document.createDocumentFragment()
        for (const i of json) {

            const md = await fetch(`./md/${i}`)
            // console.log(md);
            if(!md.ok) { //パス間違えててデータ取得できなかった場合
                continue //リンク間違えたaタグ作らないために飛ばす
            }
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