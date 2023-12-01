本项目 Fork 自 xr-frame-demo，用于测试、实践 xr-frame 功能、特性。

# xr-frame-demo

微信小程序`xr-frame`系统的示例集。

## 准备工作

目前需要下载最新的[Nightly 版本工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html)，最新的客户端（安卓 8.0.29，iOS8.0.29），以及基础库（2.27.1）。

## 直接体验

二维码以及部分样例的扫描图片详见：[官方文档-示例](https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/overview/index#示例)。

https://user-images.githubusercontent.com/7337763/199401152-d3e14ca2-bcde-41aa-902c-dc0fbd6b6358.mp4

## 快速索引

#### [常见问题 QA](/qa/README.md)

#### [基础库版本分布](https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html)

<!-- ### [案例截图与描述](/screenshot/README.md) -->

### 基础能力

[基础案例](/miniprogram/components/xr-basic/) PBR 材质下渲染的内置图形。

[透明画布](/miniprogram/components/xr-basic-alpha/) 使用透明画布能力，透出背景。

[灯光案例](/miniprogram/components/xr-basic-light/) 多种灯光作用下的四个白色图形。

[动画案例](/miniprogram/components/xr-basic-animation/) `keyframe` 动画案例。

[视频案例](/miniprogram/components/xr-basic-video/) 视频纹理，正式版本预计基础库 v2.32.0 及以上支持。

[交互案例](/miniprogram/components/xr-basic-touch/) 简单的拖拽图形旋转移动案例。

[显示与图层案例](/miniprogram/components/xr-basic-visible-layer/) 控制节点树的显示案例。

[动态节点案例](/miniprogram/components/xr-basic-shadow/) 通过 `xr-shadow` 节点，来动态在其下添加节点，以及用代码加载资源。

[渲染目标案例](/miniprogram/components/xr-basic-render-texture/) 使用 `xr-asset-render-texture` 生成渲染目标。

[粒子系统](/miniprogram/components/xr-basic-particle/) 使用`xr-particle`，控制粒子系统的显示。

[后处理系统](/miniprogram/components/xr-basic-postprocessing/) 展示了内置的几种后处理效果。

[全局环境数据与局部环境数据](/miniprogram/components/xr-basic-envData/) 动态更改 `xr-mesh` 局部环境数据的案例。

### AR 能力

[相机渲染案例](/miniprogram/components/xr-ar-camera/) AR 相机与 glTF 一同渲染的基础案例。

[平面识别案例](/miniprogram/components/xr-ar-basic/) 基础的平面识别案例。

[平面识别叠加 Marker 案例](/miniprogram/components/xr-vio-marker/) 平面识别叠加 Marker 案例

[相机旋转案例](/miniprogram/components/xr-ar-threeDof/) threeDof，用于在不需要 SLAM 的场景，支持手持相机旋转，兼容性较好。

[2DMarker 案例](/miniprogram/components/xr-ar-2dmarker/) 2DMarker 识别案例。

[OSDMarker 案例](/miniprogram/components/xr-ar-osdmarker/) OSDMarker 识别案例。

[人脸案例](/miniprogram/components/xr-ar-face/) 人脸识别案例。

[人手案例](/miniprogram/components/xr-ar-hand/) 人手识别案例。

[人体案例](/miniprogram/components/xr-ar-body/) 人体识别案例。

### 物理 能力

[射击积木案例](/miniprogram/components/xr-physics-shoot/) 射击积木案例

[投球入筐案例](/miniprogram/components/xr-physics-throw/) 投球入筐案例

### glTF 能力

[金属头盔案例](/miniprogram/components/xr-gltf-damageHelmet/) 包含完整 MetalRougnessMap、EmissiveMap、NormalMap、OcclusionTexture 以及各类因子的 glTF 模型案例。

[动画案例](/miniprogram/components/xr-gltf-animation/) 包含 glTF 动画，以及 keyframe 动画协作的案例

[加载与多光源案例](/miniprogram/components/xr-gltf-light-loading/) 组件和页面通信实现资源加载时覆盖加载界面，以及多个动画光源案例。

[morph 案例](/miniprogram/components/xr-gltf-morph/) morph targets 的使用。

[无光照案例](/miniprogram/components/xr-gltf-unlit/) 应用 KHR_materials_unlit 扩展的 glTF 案例。

[扩展 - 压缩纹理](/miniprogram/components/xr-gltf-compressTextures/)

[扩展 - KHR_texture_transform 贴图矩阵变换案例](/miniprogram/components/xr-gltf-textureTransform/) 应用 KHR_texture_transform 扩展的 glTF 案例，glTF 贴图矩阵变换支持（需基础库 2.31.0）。

[扩展 - KHR_materials_pbrSpecularGlossiness 高光光泽度案例](/miniprogram/components/xr-gltf-specularGlossiness/)

[扩展 - KHR_materials_sheen 布料与织物材质的模拟案例](/miniprogram/components/xr-gltf-sheen/) glTF Sheen 扩展，主要用于布料与织物材质的模拟。基础库 2.32.1 支持。

[扩展 - KHR_lights_punctual](/miniprogram/components/xr-gltf-lightsPunctual/)

### 高级定制

[定制组件和元素](/miniprogram/components/xr-custom-logic/) 定制组件和元素并使用。

[定制渲染资源](/miniprogram/components/xr-custom-render/) 定制 Effect 和 Geometry 并使用。

### 通用功能模版

[ 小程序混合通信](/miniprogram/components/template/xr-template-message/) 通过小程序按钮事件，传递速度变量到 xr-frame 组件通信的案例。

[Controller 第一人称漫游](/miniprogram/components/template/xr-template-control/) 第一人称相机控制器。

[Loading 动态资源加载与使用](/miniprogram/components/template/xr-template-loading/) 点击按钮进行对应资源的加载与使用。

[Tracker 动态多 Tracker 切换](/miniprogram/components/template/xr-template-tracker/) 点击按钮，对应不同识别效果 Marker 的添加与删除。

[AR 模型摆放与手势控制](/miniprogram/components/template/xr-template-arPreview/) 点击屏幕摆放，然后单指拖动屏幕进行旋转，双指拖动进行放大缩小。

[AR 面向屏幕的面片与模型](/miniprogram/components/template/xr-template-lookat/) 通过脚本控制的，四个方向各有一个面向屏幕的物体。

[AR 平面模式下的 UI 面板](/miniprogram/components/template/xr-template-arui/) AR 环境下，简单的 UI 面板

[Effect 模型切换为 Toon 渲染(自定义多 pass)](/miniprogram/components/template/xr-template-toon/)

[Geometry 定制每帧变化的 Geometry](/miniprogram/components/template/xr-template-geometry/)

[glTF 模型更换贴图](/miniprogram/components/template/xr-template-gltfEdit/) 加载 glTF 模型，调整 glTF 的材质的贴图

[glTF 模型动画（脚本、骨骼）](/miniprogram/components/template/xr-template-gltfAnimation/)

[glTF 模型更改渲染状态，glTF 设为遮挡模型](/miniprogram/components/template/xr-template-gltfOcclusion/) 使用模型做遮挡剔除，让该模型剔除其他物体

[glTF 添加模型内 UV 动画](/miniprogram/components/template/xr-template-gltfUVAnimation/)

[Touch 点选物体与动画控制](/miniprogram/components/template/xr-template-select/)

[序列帧动画（雪碧图、GIF）](/miniprogram/components/template/xr-template-frameEffect/) 使用自定义材质实现的序列帧动画案例。

[截屏与分享](/miniprogram/components/template/xr-template-share/) 通过分享系统截屏分享

[过滤黑色背景视频](/miniprogram/components/template/xr-template-removeBlack/) 通过自定义材质，过滤掉视频黑色部分的案例。

### AR 典型案例

[扫描图片模型透视案例](/miniprogram/components/xr-classic-perspect/) 基于 Stencil 裁剪 实现的基本模型透视效果案例。

[传送门效果案例](/miniprogram/components/xr-classic-portal/) 基于平面识别与模版剔除实现的基本传送门效果案例。

[平面视频案例](/miniprogram/components/xr-classic-video/) 基于 2DMarker 实现，扫描工卡照片显示对应的生活场景。

[扫描物体查看信息](/miniprogram/components/xr-classic-osd/) 基于 OSD 实现的扫描 广州塔 或 虎年公仔，识别成功后会在物体右上角加上信息提示。

[扫描人脸穿戴](/miniprogram/components/xr-classic-face/) 基于 人脸识别 的穿戴。

[微信球案例](/miniprogram/components/xr-classic-wxball/) 扫描手握着的微信纪念球，会显示三维纪念球，点击三维纪念球会播放动画。

### 扫描还原案例

[扫描渲染案例](/miniprogram/components/xr-scan-render/) 根据三维重建模型与扫描全景图还原的案例，仅使用 IBL 作为光源，可切换天空盒。

[卡 其 脱 离 太](/miniprogram/components/xr-scan-render/) xr-frame 团队的办公区和成员三维重建，以及与小程序音频系统、2dview 协作的例子。

### 产品级案例

[边缘迷走](/miniprogram/pages/scene-beside-edge/) AR 文字互动游戏。

[■■■■](/miniprogram/pages/scene-last-record/) ■■■■■■■■■■■■■■■■

## 版权

实例中用到的所有资源：

https://sketchfab.com/3d-models/borboleta-azul-butterfly-ab9192b6bc8f49e3baed63e984c7073a  
https://sketchfab.com/3d-models/just-a-girl-b2359160a4f54e76b5ae427a55d9594d  
https://sketchfab.com/3d-models/metal-table-60f8c279c7b64fce8241220178e543ec  
https://sketchfab.com/3d-models/fiesta-tea-8bde490c80444157b4545471d067423c  
https://sketchfab.com/3d-models/ship-in-clouds-c475323dc7f24e26ba2009c08c8e1941  
https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf  
https://sketchfab.com/3d-models/shiteyanyo-hatsune-miku-0f4029ba805c4751933bba24dc72dd24  
https://sketchfab.com/3d-models/miku-8b8028fa527549629b620752517812ac  
https://sketchfab.com/3d-models/pokemon-frlg-loreleis-arena-ce7397e95ec9458b8df3c1453e4d0b82  
https://sketchfab.com/3d-models/10th-attract-genderless-attraction-fc5548bb511e45748c393184ecbad26b  
https://sketchfab.com/3d-models/camera-limits-demo-van-gogh-bedroom-in-arles-daefab319a584e559443e39ff05e84fa  
https://sketchfab.com/3d-models/night-car-landscape-be4011aeb09740948bf30d33936c875b  
https://sketchfab.com/models/b81008d513954189a063ff901f7abfe4  
http://www.alexandre-pestana.com/pbr-textures-sponza/  
https://sketchfab.com/3d-models/jokers-mask-persona-5-81669910c0b74f41a3a58febfd514794
