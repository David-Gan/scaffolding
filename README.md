
这是一个前后端单体架构的全栈开发系统。

## 技术架构

- FrameWork: nextjs
- UI: Antd, pro-components
- DataBase: PostgreSQL
- ORM: Prisma

## 设计风格
- 整体风格参考 Ant Design 的简约现代设计
- 使用清晰的视觉层次结构，突出重要内容
- 配色方案应专业、和谐，适合长时间阅读

## 响应式设计
- 页面必须在所有设备上（手机、平板、桌面）完美展示
- 针对不同屏幕尺寸优化布局和字体大小
- 确保移动端有良好的触控体验

## 系统状态
- 已安装了所需要的依赖

## 注意事项
- 使用 Nextjs App Router，并且代码都在 /src 目录下
- 注意: Next.js App Router 当前不支持直接使用 `.` 引入的子组件，如 `<Select.Option />`、`<Typography.Text />` 等，需要从路径引入这些子组件来避免错误。
- 所有页面使用 @ant-design/pro-components 中的 ProLayout 组件进行布局