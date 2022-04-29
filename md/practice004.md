# 問題04
コンピュータを2台用意しておき，現用系が故障したときは，現用系と同一のオンライン処理プログラムをあらかじめ起動して待機している待機系のコンピュータに速やかに切り替えて，処理を続行するシステムはどれか。
  
- ア：コールドスタンバイシステム
- イ：ホットスタンバイシステム
- ウ：マルチプロセッサシステム
- エ：マルチユーザーシステム
  
## 正解 : <u>　　　　</u>  
---
# 解説
現用（本番）系と待機（予備）系の2系統でシステムを構成し現用系が停止した時に待機系に切り替えることでシステムを冗長化させる

ホットスタンバイ  
**現用（本番）系と同様のシステムを最初から起動しておく方式。** 障害発生時には自動的に処理を引き継ぎ、業務を継続する。3つの中では切替えに要する時間が最も短い。  

ウォームスタンバイ  
コンピュータの電源を入れ OS を立ち上げておくが、業務システムは起動させない状態で待機させておく方式。待機時には主系のデータベースとの同期だけを行い、障害が発生してから待機系のデータベースシステムに切り替えて処理を引き継ぐ。  

コールドスタンバイ  
待機時には予備系で別の処理を行わせておく方式、または予備系の電源を切った状態で待機させておく方式。障害発生時はシステムを再起動し、業務システムを立ち上げて処理の引継ぎを行う。3つの中では切替えに要する時間が最も長い。

### ホットスタンバイの図
```:mermaid
    sequenceDiagram
    
    participant WorkingSystem as 現用系
    participant StandbySystem as 待機系

    rect rgb(191, 200, 255)
     Note over WorkingSystem, StandbySystem :平常時
     WorkingSystem ->> StandbySystem: 現用系から待機系へ同期させる 
     note right of StandbySystem: 現用系と同じ処理をする
    end
    
    rect rgb(231, 213, 232)
      Note over WorkingSystem, StandbySystem :障害発生時
      WorkingSystem ->> StandbySystem: 待機系へ移行 
      activate StandbySystem
      note left of WorkingSystem: 障害発生
      note right of StandbySystem: 待機系で対応する
    
    StandbySystem ->> WorkingSystem: 復旧 
      deactivate StandbySystem
    end

```

平常時から運用しているので障害発生時に切り替えが速い