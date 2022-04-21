# JavaScriptの`ready`と`onload`の説明
- `ready`
  - DOMが構築が終わってから実行される
- `onload`
  - 画像ファイルなど全てのコンテンツの読み込みが終わってから実行される
  - `window.onload = e => {}`のやつ
  - `window.addEventLisntener('load', e => {})`もある
- `ready`の方が先に実行される
# 図
```mermaid
    graph
    ID1(["HTMLをファイルの上から読み込む"])
    ID2(["DOMの構築が完了"])
    ID3(["readyが実行"])
    ID4(["画像など全ての読み込みが完了"])
    ID5(["onload実行"])

    ID1 --> ID2 --> ID3 --> ID4 --> ID5
```