# Northstar Auto Care — 汽车维修服务单页网站

面向汽车维修服务商的英文单页响应式官网，包含服务介绍、关于与优势、客户评价、常见问题与联系咨询入口。视觉语言对齐参考稿（深墨蓝 + 安全橙、Barlow Condensed 标题字 + Barlow 正文字）。

## 技术栈

- Next.js 16（App Router，Cache Components）+ React 19 + TypeScript
- Tailwind CSS 4（设计令牌见 `app/globals.css` 的 `@theme`）
- 自托管 Barlow / Barlow Condensed 字体（`public/fonts`，通过 `next/font/local` 加载）
- 全部业务文案集中维护于 `site_content.json`

## 环境要求

- Node.js LTS（建议 ≥ 20）
- npm ≥ 10

## 安装与启动

```bash
npm install
npm run dev      # 开发服务器 http://localhost:3000
```

## 生产构建

```bash
npm run build
npm run start    # 以生产模式启动
```

## 内容配置

所有栏目文案（品牌、导航、首屏、服务、关于、评价、FAQ、联系、页脚）均读取自项目根目录的 [site_content.json](./site_content.json)，组件内不硬编码业务文案。修改文案后重新构建即可。

关键配置项：

| 字段 | 说明 |
| --- | --- |
| `contact.email` | 联系邮箱；联系表单生成的 mailto 草稿收件地址 |
| `contact.subject` | 邮件草稿主题（Website Service Inquiry） |
| `contact.phone` / `contact.phoneHref` | 展示电话与 tel: 链接 |
| `faq.contactCard` | FAQ 区联系卡片（标题、描述、按钮文字、邮件主题） |
| `hero.primaryCta` | 主按钮文案与跳转；顶部导航 CTA 复用同一字段 |
| `hero.image` / `about.image` | 图片路径（`public/assets`）与 alt 文本 |

## 功能与验收

- 固定顶部导航 + 移动端汉堡菜单（Escape 可关闭）；`scroll-padding-top: 84px` 处理锚点遮挡；FAQ 展开收起为瞬时切换
- 4 条 FAQ 手风琴，按钮控制，`aria-expanded` 状态同步，支持 Tab + Enter 键盘操作
- 联系表单前端校验：姓名 ≥ 2 字符、邮箱格式、问题描述 ≥ 10 字符；错误显示在对应控件附近，无效不提交
- 校验通过后生成 `mailto:` 邮件草稿（主题 + 含姓名/邮箱/问题描述的正文）
- 响应式断点覆盖 375px / 768px / 1440px，375px 无横向溢出
- 三档宽度整页截图见 [screenshots/](./screenshots/)；关键交互演示（移动端菜单展开、FAQ 展开、表单校验错误、提交成功）见 [screenshots/interactions/](./screenshots/interactions/)

## 项目结构

```
app/            # layout（元信息/字体）、page（页面组装）、globals.css（设计令牌）
components/     # Header、Hero、Services、About、Reviews、Faq、Contact、ContactForm、Footer
lib/            # content.ts（统一内容入口）、icons.tsx（内联 SVG 图标集）
public/assets/  # 首屏与关于区图片
public/fonts/   # 自托管 Barlow 系列字体
site_content.json
```
