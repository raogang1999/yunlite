# 蕴光工作室 | Yunlite Studio Homepage

> 蕴光工作室官网首页，纯静态部署。

## Tech Stack

- **HTML5** + **Tailwind CSS** (CDN)
- 零构建依赖，直接部署
- Google Fonts: Inter + Noto Serif SC

## 部署

### Vercel（推荐）

1. 将此文件夹推送到 GitHub 仓库
2. 在 [vercel.com](https://vercel.com) 导入该仓库
3. Framework Preset 选 **Other**
4. 自动部署完成
5. 绑定自定义域名 `yunlite.com`

### Nginx（自有服务器）

```bash
# 直接将 index.html 放到 Nginx 静态目录
cp index.html /var/www/yunlite-home/
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

## 文件结构

```
yunlite-home/
├── index.html      # 唯一页面，包含所有 HTML/CSS/JS
└── README.md       # 本文件
```

## 自定义

- **备案信息**：编辑 `index.html` 底部 footer，替换 `蜀ICP备XXXXXXXX号`
- **邮箱**：替换 `hello@yunlite.com`
- **产品链接**：Voxia 链接指向 `https://talk.yunlite.com`
- **新增产品**：在 Products section 复制 product-card 模板

## 域名规划

| 域名 | 用途 |
|------|------|
| `yunlite.com` | 本页面 — 工作室主站 |
| `talk.yunlite.com` | Voxia — AI 社交技能训练 |
| `*.yunlite.com` | 预留未来产品 |
