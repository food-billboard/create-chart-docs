"use strict";(self.webpackChunkchart_docs=self.webpackChunkchart_docs||[]).push([[9185],{6980:function(n,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var o=e(3117),a=e(102),p=(e(7294),e(3905)),r=["components"],l={slug:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5f00\u53d1",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",authors:["Daniel"],position:2},m=void 0,i={permalink:"/create-chart-docs/blog/\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5f00\u53d1",source:"@site/blog/2022-06-15-custom-component.mdx",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",description:"\u672c\u5730\u4e8c\u6b21\u5f00\u53d1\u81ea\u5b9a\u4e49\u5b9a\u5236\u5316\u7ec4\u4ef6\u3002",date:"2022-06-15T00:00:00.000Z",formattedDate:"2022\u5e746\u670815\u65e5",tags:[],readingTime:2.89,hasTruncateMarker:!1,authors:[{name:"Daniel",title:"\u5927\u5c4f\u4f5c\u8005",url:"https://github.com/food-billboard",imageURL:"https://avatars.githubusercontent.com/u/50391608?v=4",key:"Daniel"}],frontMatter:{slug:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5f00\u53d1",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",authors:["Daniel"],position:2},prevItem:{title:"\u5168\u5c40\u914d\u7f6e\u5f00\u5173",permalink:"/create-chart-docs/blog/\u5168\u5c40\u914d\u7f6e\u5f00\u5173"},nextItem:{title:"\u8272\u8c03\u81ea\u5b9a\u4e49",permalink:"/create-chart-docs/blog/\u81ea\u5b9a\u4e49\u5927\u5c4f\u7684\u6574\u4f53\u8272\u8c03"}},s={authorsImageUrls:[void 0]},u=[{value:"\u7ec4\u4ef6\u7c7b\u578b\u5b9a\u4e49",id:"\u7ec4\u4ef6\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"\u7ec4\u4ef6\u5217\u8868\u5b9a\u4e49",id:"\u7ec4\u4ef6\u5217\u8868\u5b9a\u4e49",level:2},{value:"\u7ec4\u4ef6\u5f15\u5165\u6dfb\u52a0",id:"\u7ec4\u4ef6\u5f15\u5165\u6dfb\u52a0",level:2},{value:"\u7ec4\u4ef6\u5f00\u53d1\u6587\u4ef6\u5939",id:"\u7ec4\u4ef6\u5f00\u53d1\u6587\u4ef6\u5939",level:2},{value:"\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6",id:"\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6",level:3},{value:"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6",id:"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",id:"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u6e32\u67d3\u7ec4\u4ef6\u6587\u4ef6",id:"\u6e32\u67d3\u7ec4\u4ef6\u6587\u4ef6",level:3},{value:"\u5bfc\u51fa\u6587\u4ef6",id:"\u5bfc\u51fa\u6587\u4ef6",level:3}],C={toc:u};function c(n){var t=n.components,e=(0,a.Z)(n,r);return(0,p.kt)("wrapper",(0,o.Z)({},C,e,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u5730\u4e8c\u6b21\u5f00\u53d1\u81ea\u5b9a\u4e49\u5b9a\u5236\u5316",(0,p.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u3002  "),(0,p.kt)("p",null,"\u6539\u52a8\u4f4d\u7f6e\u5305\u62ec\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7c7b\u578b\u5b9a\u4e49  "),(0,p.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5217\u8868\u5b9a\u4e49  "),(0,p.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5f15\u5165\u6dfb\u52a0  "),(0,p.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5f00\u53d1\u6587\u4ef6\u5939  ")),(0,p.kt)("h2",{id:"\u7ec4\u4ef6\u7c7b\u578b\u5b9a\u4e49"},"\u7ec4\u4ef6\u7c7b\u578b\u5b9a\u4e49"),(0,p.kt)("p",null,"\u76ee\u5f55\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"/src/component.d.ts"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'\n  declare namespace ComponentData {\n    export type TComponentSelfType = "CUSTOM_COMPONENT_TYPE" // \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u7c7b\u578b\n  }\n\n')),(0,p.kt)("h2",{id:"\u7ec4\u4ef6\u5217\u8868\u5b9a\u4e49"},"\u7ec4\u4ef6\u5217\u8868\u5b9a\u4e49"),(0,p.kt)("p",null,"\u76ee\u5f55\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"/src/utils/constants/components.tsx"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"\n  type COMPONENT_TYPE_LIST = {\n    type: string  // \u7ec4\u4ef6\u7684\u7c7b\u578b\n    icon: string  // \u7ec4\u4ef6\u7684\u663e\u793a\u56fe\u6807\n    title: string // \u7ec4\u4ef6\u7684\u540d\u79f0\n  }\n\n")),(0,p.kt)("h2",{id:"\u7ec4\u4ef6\u5f15\u5165\u6dfb\u52a0"},"\u7ec4\u4ef6\u5f15\u5165\u6dfb\u52a0"),(0,p.kt)("p",null,"\u76ee\u5f55\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/index.ts"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  import CustomComponent from '/path/to/component'\n\n  COMPONENT_MAP.set(CustomComponent.label, CustomComponent)\n\n")),(0,p.kt)("h2",{id:"\u7ec4\u4ef6\u5f00\u53d1\u6587\u4ef6\u5939"},"\u7ec4\u4ef6\u5f00\u53d1\u6587\u4ef6\u5939"),(0,p.kt)("p",null,"\u76ee\u5f55\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"CustomComponent"),"\u4e3a\u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u5939\u540d\u79f0  "),(0,p.kt)("h3",{id:"\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6"},"\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent/type.ts"),(0,p.kt)("br",{parentName:"p"}),"\n","\u7ec4\u4ef6\u7279\u6b8a\u5316\u914d\u7f6e\u7684\u7c7b\u578b\u6587\u4ef6\u3002  "),(0,p.kt)("h3",{id:"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6"},"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent/config"),(0,p.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u6587\u4ef6\u7684\u6587\u4ef6\u5939\uff0c\u5305\u542b\u7ec4\u4ef6\u7684\u6240\u6709\u914d\u7f6e\u3002    "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u53ea\u9700\u8981\u5305\u542b\u7ec4\u4ef6\u7684\u7279\u6b8a\u5316\u914d\u7f6e\u3002  ")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"props"),"\u4e3a\uff1a  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  export type IProps<T extends object = {}> = {\n    value: TComponentData<T>;\n    onChange: (value: SuperPartial<TComponentData<T>>) => void;\n  };\n")),(0,p.kt)("p",null,"\u683c\u5f0f\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"  import { Component } from 'react';\n  import { Tabs } from 'antd';\n  import ComponentOptionConfig, {\n    Tab,\n  } from '@/components/ChartComponents/Common/ComponentOptionConfig';\n  import ConfigList from '@/components/ChartComponents/Common/Structure/ConfigList';\n  import { TBarBasicConfig } from '../type';\n\n  const { TabPane } = Tabs;\n\n  const TemplateComponent = (props: IProps) => {\n\n    const { value, onChange } = props \n\n    return (\n      <ComponentOptionConfig>\n        <TabPane key={'1'} tab={<Tab>\u914d\u7f6e\u7c7b\u578b1</Tab>}>\n          <ConfigList level={1}>\n            \u914d\u7f6e\u5185\u5bb9\n          </ConfigList>\n        </TabPane>\n      </ComponentOptionConfig>\n    )\n\n  }\n\n")),(0,p.kt)("h3",{id:"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent/defaultConfig.ts"),(0,p.kt)("br",{parentName:"p"}),"\n","\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u6837\u5f0f\u5c5e\u6027\u914d\u7f6e\u3002  "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6e\u9ed8\u8ba4\u914d\u7f6e\u53ef\u4ee5\u5173\u95ed\u76f8\u5173\u4e0d\u9700\u8981\u5f00\u542f\u7684\u901a\u7528\u529f\u80fd\u3002  ")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  export default {\n    interactive: {\n      base: [], // \u6ca1\u6709\u4ea4\u4e92\u4e8b\u4ef6\n    },\n    data: {\n      disabled: true // \u6ca1\u6709\u6570\u636e\u83b7\u53d6\u914d\u7f6e\n    }\n  }\n")),(0,p.kt)("h3",{id:"\u6e32\u67d3\u7ec4\u4ef6\u6587\u4ef6"},"\u6e32\u67d3\u7ec4\u4ef6\u6587\u4ef6"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent/component"),(0,p.kt)("br",{parentName:"p"}),"\n","\u5b9e\u9645\u6e32\u67d3\u5728\u753b\u5e03\u4e2d\u7684\u6837\u5f0f\u3002  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  import {\n    useComponent, // \u63d0\u4f9b\u4e86\u7ec4\u4ef6\u7684\u5b9e\u7528\u65b9\u6cd5\u7684hook\n    useChartComponentResize, // \u5c4f\u5e55\u53d1\u751f\u53d8\u5316\u7684hook\n    useChartValueMapField, // \u5b57\u6bb5\u6620\u5c04\u7684hook\n    useComponentResize, // \u7ec4\u4ef6\u5927\u5c0f\u53d1\u751f\u53d8\u5316\u7684hook \n    useAnimationChange, // echarts\u7684animation\u53d1\u751f\u53d8\u5316\u7684hook\n    useCondition, // \u7ec4\u4ef6\u6761\u4ef6\u5904\u7406\u7684hook\n    useChartComponentTooltip, // echart\u7684tooltip\u8f6e\u64adhook\n    useChartPerConfig, // echart\u7684config\u9884\u5904\u7406hook \n  } from '@/components/ChartComponents/Common/Component/hook';\n\n  import FetchFragment, {\n    TFetchFragmentRef,\n  } from '@/components/ChartComponents/Common/FetchFragment'; // \u6570\u636e\u4ea4\u4e92\u7684wrapper \n\n  export type IProps<T> = {\n    className?: string;\n    style?: CSSProperties;\n    value: ComponentData.TComponentData<T>;\n    global: ComponentProps['global'];\n  }\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u4ee5\u4e0a\u7684\u7ec6\u8282\u8bf7\u81ea\u884c\u67e5\u770b\u5bf9\u5e94\u7684\u5df2\u5185\u7f6e\u7684\u7ec4\u4ef6\u7684\u4ee3\u7801\u3002  ")),(0,p.kt)("h3",{id:"\u5bfc\u51fa\u6587\u4ef6"},"\u5bfc\u51fa\u6587\u4ef6"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"/src/components/ChartComponents/CustomComponent/index.ts"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  import defaultConfig from './defaultConfig';\n  import Component from './component';\n  import Config from './config';\n\n  // \u9700\u8981\u5bfc\u51fa\u4ee5\u4e0b\u51e0\u4e2a\u5c5e\u6027\n  export default {\n    defaultConfig,\n    configComponent: Config,\n    render: Component,\n    type: Component.id,\n  };\n\n")))}c.isMDXComponent=!0}}]);