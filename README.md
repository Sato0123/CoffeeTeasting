## 画面

https://github.com/user-attachments/assets/fffe0aa9-8036-4234-877c-523585406d8c

## 事前準備
Dockerをインストールしてください！！！
- Dockerとは？？
 - 42課題のInceptionで詳しくは学びますが、B2Bと同じ仮想化です！まあまあアプリが重いですが、VirtualBoxよりは重くないのでインストールするとのちのちの課題のためにもなります！

# Docker インストールガイド

## Mac

### Homebrew でインストール

```bash
brew install --cask docker
```

---

## Windows

### 1. WSL 2 を有効化

PowerShell を **管理者権限** で開いて実行。完了後に再起動が必要です。

```powershell
wsl --install
```

### 2. Docker Desktop をダウンロード

https://www.docker.com/products/docker-desktop/

### 3. インストーラーを実行

`Docker Desktop Installer.exe` を実行し、  
**"Use WSL 2 instead of Hyper-V"** にチェックが入っていることを確認して進める。


## HOW TO USE
### 起動
```
docker compose up -d
```
### 停止
```
docker compose down
```

