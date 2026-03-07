# 手把手配置 Firebase 全局点赞

按下面顺序做，做完就能在画廊页看到「所有访客加起来的点赞数」。

---

## 第一步：打开 Firebase 并登录

1. 浏览器打开：**https://console.firebase.google.com/**
2. 用你的 **Google 账号**登录（没有就注册一个）。

---

## 第二步：创建项目（没有的话）

1. 点击 **「添加项目」**（或「Create a project」）。
2. **项目名称**随便填，例如：`yuxinjin-gallery`。
3. 若有「Google Analytics」选项，可以**先关闭**（不必须）。
4. 点 **「创建项目」**，等几秒，出现「您的项目已就绪」后点 **「继续」**。

---

## 第三步：为网站添加一个「应用」

1. 在项目首页，找到 **「您的应用」** 或 **「Get started by adding Firebase to your app」**。
2. 点击 **「</>」** 图标（代表 Web 应用）。
3. **应用昵称**可填：`Gallery` 或留空。
4. **不要**勾选「Firebase Hosting」（我们用的是 GitHub Pages）。
5. 点 **「注册应用」**。
6. 会看到一段代码，里面有 **`firebaseConfig`**，类似：

   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "xxx.firebaseapp.com",
     databaseURL: "https://xxx.firebaseio.com",  // 可能这里暂时没有，后面会补
     projectId: "xxx",
     storageBucket: "xxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```

7. **先复制整段 `firebaseConfig` 到记事本备用**（后面会用到）。  
8. 点 **「下一步」**，再点 **「继续到控制台」**。

---

## 第四步：创建 Realtime Database 并拿到 databaseURL

1. 左侧菜单点 **「Build」**（或「构建」）→ **「Realtime Database」**。
2. 点 **「创建数据库」**（Create database）。
3. **位置**选一个离你近的，例如：
   - **europe-west1**（欧洲）
   - **asia-southeast1**（新加坡）
   - **us-central1**（美国）
4. **安全规则**选 **「以测试模式启动」**（Start in test mode）。  
   （之后可以再改成更严格的规则。）
5. 点 **「启用」**。
6. 创建好后，在 Realtime Database 页面**顶部**会有一行：
   - **数据库 URL** 或 **Database URL**，例如：  
     `https://yuxinjin-gallery-default-rtdb.europe-west1.firebasedatabase.app`  
     或（老格式）  
     `https://yuxinjin-gallery-default-rtdb.firebaseio.com`
7. **把这个 URL 完整复制下来**。  
8. 如果你在第三步拿到的 `firebaseConfig` 里**没有** `databaseURL`，或写的是 `undefined`，就**手动加上**这一行（把下面的地址换成你复制的）：  
   `databaseURL: "https://你的项目-default-rtdb.地区.firebasedatabase.app"`

---

## 第五步：把配置填进你的网站代码

1. 用编辑器打开你本地的 **`static/js/midjourney.js`**。
2. 搜索 **`FIREBASE_CONFIG`**，找到这一行：

   ```js
   var FIREBASE_CONFIG = null;
   ```

3. 把 **`null`** 整段替换成你的配置对象，格式保持和下面一致（只改右边引号里的值为你自己的）：

   ```js
   var FIREBASE_CONFIG = {
     apiKey: "AIza开头的长串",
     authDomain: "你的项目.firebaseapp.com",
     databaseURL: "https://你的项目-default-rtdb.地区.firebasedatabase.app",
     projectId: "你的项目ID",
     storageBucket: "你的项目.appspot.com",
     messagingSenderId: "数字",
     appId: "1:数字:web:一串字符"
   };
   ```

   **注意：**

   - `databaseURL` 必须和第四步里 Realtime Database 页顶的 **数据库 URL** 完全一致。
   - 所有值都用**英文双引号**包起来，最后一个属性后面**不要**逗号。

4. 保存文件。

---

## 第六步：本地或线上测试

1. 用浏览器打开你的 **midjourney 画廊页**（本地打开 `midjourney.html` 或部署后访问线上地址）。
2. 打开开发者工具（F12）→ **Console**，看有没有报错。
3. 给任意作品点一次 **赞**。
4. 回到 Firebase 控制台 → **Realtime Database** → **「数据」** 标签，刷新一下，应该能看到多了一个 **`likes`** 节点，下面有作品 id 和数字 **1**。
5. 换一个浏览器（或无痕窗口）打开同一页，点赞数应显示为 1，再点一次赞会变成 2——说明**全局统计已生效**。

---

## 常见问题

**Q：控制台报错 `Permission denied` 或 403**  
- 到 Realtime Database → **「规则」**，确认是测试模式，规则里有：  
  `".read": true, ".write": true`  
  保存后再试。

**Q：点赞后数据里没有 `likes`**  
- 检查 `databaseURL` 是否和 Realtime Database 页顶的 URL 完全一致（包括 `https://`、地区、不要多空格）。  
- 再检查浏览器 Console 是否有红色报错，把报错信息对着 [Firebase 文档](https://firebase.google.com/docs/database) 查。

**Q：不想用测试模式，想限制只允许写点赞**  
- 在 Realtime Database → **规则** 里可以改成只允许读写 `likes` 节点，例如：  
  ```json
  {
    "rules": {
      "likes": {
        ".read": true,
        ".write": true
      }
    }
  }
  ```  
  更严格的规则可以之后再慢慢加。

---

## 小结

| 步骤 | 要做的事 |
|------|----------|
| 1 | 登录 https://console.firebase.google.com/ |
| 2 | 创建项目（没有的话） |
| 3 | 添加 Web 应用，复制 `firebaseConfig` |
| 4 | 创建 Realtime Database，复制 **数据库 URL**，补进 config 的 `databaseURL` |
| 5 | 在 `static/js/midjourney.js` 里把 `FIREBASE_CONFIG = null` 改成你的 config 对象 |
| 6 | 打开画廊页点赞，在 Firebase 控制台「数据」里看到 `likes` 即成功 |

做完这些，你的画廊点赞就是**所有用户加起来的真实总数**了。
