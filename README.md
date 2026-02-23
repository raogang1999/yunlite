# 蕴光工作室 | Yunlite Studio Homepage

> 蕴光工作室官网首页，基于 Astro 构建的静态站点。

## Tech Stack

- **[Astro](https://astro.build)** — 静态站点生成框架
- **Tailwind CSS** — 原子化 CSS
- **TypeScript** — 类型安全
- **Google Fonts** — Inter + Noto Serif SC
- **Vercel** — 零配置部署

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (localhost:4321)
npm run dev

# 构建生产版本
npm run build

# 本地预览构建产物
npm run preview
```

## 部署

### Vercel（推荐）

1. 推送到 GitHub 仓库
2. 在 [vercel.com](https://vercel.com) 导入该仓库
3. Framework Preset 会自动识别 **Astro**
4. 自动部署完成
5. 绑定自定义域名 `yunlite.com`

### Nginx（自有服务器）

```bash
# 构建静态文件
npm run build

# 将 dist/ 目录部署到 Nginx
cp -r dist/* /var/www/yunlite-home/
```

Nginx 配置示例：
```nginx
server {
    listen 443 ssl;
    server_name yunlite.com www.yunlite.com;

    root /var/www/yunlite-home;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/yunlite.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yunlite.com/privkey.pem;
}
```

## 项目结构

```
yunlite-home/
├── public/
│   └── favicon.svg           # 站点图标
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # 固定顶部导航（毛玻璃）
│   │   ├── Hero.astro        # 首屏大标题 + CTA
│   │   ├── Philosophy.astro  # 理念板块
│   │   ├── Values.astro      # 三栏价值观
│   │   ├── Products.astro    # 产品卡片（Voxia）
│   │   ├── Contact.astro     # 联系方式
│   │   └── Footer.astro      # 页脚 + 备案号
│   ├── layouts/
│   │   └── Layout.astro      # 全局布局（Head、字体、脚本）
│   ├── pages/
│   │   └── index.astro       # 首页入口
│   └── styles/
│       └── global.css        # 全局样式（Tailwind + 自定义）
├── doc/
│   ├── 理念.md
│   └── 页面需求.md
├── astro.config.mjs          # Astro 配置
├── tailwind.config.mjs       # Tailwind 配置
├── package.json
└── README.md
```

## 自定义

- **备案信息**：编辑 `src/components/Footer.astro`，替换 `蜀ICP备XXXXXXXX号`
- **邮箱**：编辑 `src/components/Contact.astro`，替换 `raogang1999@gmail.com`
- **产品链接**：编辑 `src/components/Products.astro`，Voxia 链接指向 `https://voxia.yunlite.com`
- **新增产品**：在 `Products.astro` 中添加新的产品卡片

## 域名规划

| 域名 | 用途 |
|------|------|
| `yunlite.com` | 本页面 — 工作室主站 |
| `voxia.yunlite.com` | Voxia — AI 社交技能训练 |
| `*.yunlite.com` | 预留未来产品 |
