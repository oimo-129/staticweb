# 3.11 position

## 父相子绝

---

### 📌 定位类型概述

- **relative**: 相对于自身，不脱离文档流，占位置

- **absolute**: 相对于最近的祖先非static元素，脱离文档流，不占位置

### 另外三个：

- **fixed**: 脱离文档流，不占位置，相对于视口，用来生成固定图片（秒速，不对，应该是不动的背景图，不对，就是秒速）

- **sticky**: 粘性定位，粘性侧边栏

# CSS 定位（Position）属性详解

## 定位类型总览

| 定位类型 | 相对参考 | 是否脱离文档流 | 是否占位置 | 常见用途 |
|---------|---------|--------------|-----------|---------|
| static  | 默认定位 | 否 | 是 | 正常文档流 |
| relative | 相对自身 | 否 | 是 | 微调元素位置 |
| absolute | 最近非static祖先元素 | 是 | 否 | 精确定位元素 |
| fixed | 相对视口 | 是 | 否 | 固定元素，不随滚动移动 |
| sticky | 相对最近滚动祖先 | 部分 | 是 | 粘性侧边栏、导航栏 |

---

## 详细说明

### 🔹 relative（相对定位）
- 相对于**自身原本位置**定位
- **不脱离**文档流
- **占据**原本的位置
- 常用于作为absolute定位的参考点

### 🔹 absolute（绝对定位）
> 父相子绝：父元素设为relative，子元素设为absolute

- 相对于**最近的非static祖先元素**定位
- **完全脱离**文档流
- **不占据**原本的位置
- 其他元素的布局就像它不存在一样

### 🔹 fixed（固定定位）
- 相对于**视口（浏览器窗口）**定位
- **完全脱离**文档流
- **不占据**原本的位置
- 页面滚动时位置不变，常用于固定头部、侧边栏等

### 🔹 sticky（粘性定位）
- 在指定阈值前为relative，达到阈值后为fixed
- **部分脱离**文档流
- 常见于滚动到某位置时固定的导航栏、目录等

---

## 📝 应用场景示例
- **弹窗**：absolute或fixed
- **悬浮按钮**：fixed
- **吸顶导航**：sticky
- **图层叠加**：absolute
- **轮播图指示器**：absolute




# 3.17前后端借助AI进行构建

## 数据库表设计
1.分析文档，明确业务需求，确定几个表
2.确定数据主体关系，一对一还是一对多
3.确定约束，主外键，类型
4.构建数据库

# 2倍图技术说明

## 什么是2倍图
2倍图技术是一种为高分辨率显示设备（如Retina屏幕）优化图像显示的方法。原理是使用尺寸为实际显示尺寸2倍的图片，然后通过CSS将其缩放到所需大小，以适应高像素密度屏幕。

## 为什么需要2倍图
- 在高分辨率屏幕（如iPhone、iPad等设备）上，1个CSS像素对应多个物理像素
- 普通图片在高清屏上会显得模糊不清
- 2倍图可以确保在高清屏上图像保持清晰

## 使用方法
1. 准备图片尺寸为目标显示尺寸的2倍（如需显示50×50px，则准备100×100px的图片）
2. 在CSS中将图片大小设置为目标尺寸（如width: 50px; height: 50px;）
3. 对于响应式设计，可以结合媒体查询为不同设备提供不同分辨率的图片

## 示例
见`css/common.css`文件中的`.icon`和`.logo`类定义。

## 命名规范
为了区分普通图片和2倍图，建议在2倍图文件名后添加`@2x`标识：
- 普通图片：`logo.png`
- 2倍图：`logo@2x.png`
