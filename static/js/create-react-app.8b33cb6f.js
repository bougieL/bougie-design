(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/create-react-app.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),c={},o="wrapper";function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(o,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"use-in-create-react-app"},"Use in create-react-app"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/facebookincubator/create-react-app"}),"create-react-app")," is one of the best React application development tools. We are going to use ",Object(r.b)("inlineCode",{parentName:"p"},"bougie-deisgn")," within it and modify the webpack config for some customized needs."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"install-and-initialization"},"Install and Initialization"),Object(r.b)("p",null,"Before all start, you may need install ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/yarnpkg/yarn/"}),"yarn"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ yarn create react-app bougie-deisgn-demo\n")),Object(r.b)("p",null,"The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it."),Object(r.b)("p",null,"Then we go inside ",Object(r.b)("inlineCode",{parentName:"p"},"bougie-deisgn-demo")," and start it."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ cd bougie-deisgn-demo\n$ yarn start\n")),Object(r.b)("p",null,"Open the browser at ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/"),'. It renders a header saying "Welcome to React" on the page.'),Object(r.b)("h2",{id:"import-bougie-deisgn"},"Import bougie-deisgn"),Object(r.b)("p",null,"Below is the default directory structure."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg\n\u2514\u2500\u2500 yarn.lock\n")),Object(r.b)("p",null,"Now we install ",Object(r.b)("inlineCode",{parentName:"p"},"bougie-deisgn")," from yarn or npm."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ yarn add bougie-deisgn\n")),Object(r.b)("p",null,"Modify ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.js"),", import Button component from ",Object(r.b)("inlineCode",{parentName:"p"},"bougie-deisgn"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { Button } from 'bougie-deisgn'\nimport './App.css'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    )\n  }\n}\n\nexport default App\n")),Object(r.b)("p",null,"Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of ",Object(r.b)("inlineCode",{parentName:"p"},"bougie-deisgn")," to develop your application. Visit other workflows of ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," at its ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"}),"User Guide "),"."),Object(r.b)("h2",{id:"advanced-guides"},"Advanced Guides"),Object(r.b)("p",null,"We are successfully running bougie-deisgn components now but in the real world, there are still lots of problems about bougie-deisgn-demo. For instance, we actually import all styles of components in the project which may be a network performance issue."),Object(r.b)("p",null,"Now we need to customize the default webpack config. We can achieve that by using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/timarney/react-app-rewired"}),"react-app-rewired")," which is one of create-react-app's custom config solutions."),Object(r.b)("p",null,"Import react-app-rewired and modify the ",Object(r.b)("inlineCode",{parentName:"p"},"scripts")," field in package.json. Due to new ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/timarney/react-app-rewired#alternatives"}),"react-app-rewired@2.x")," issue, you shall need ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/arackaf/customize-cra"}),"customize-cra")," along with react-app-rewired."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"$ yarn add react-app-rewired customize-cra\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test",\n}\n')),Object(r.b)("p",null,"Then create a ",Object(r.b)("inlineCode",{parentName:"p"},"config-overrides.js")," at root directory of your project for further overriding."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config\n}\n")),Object(r.b)("h2",{id:"eject"},"eject"),Object(r.b)("p",null,"You can also could try ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup"}),"yarn run eject")," for a custom setup of create-react-app, although you should dig into it by yourself."),Object(r.b)("h2",{id:"source-code-and-other-boilerplates"},"Source code and other boilerplates"),Object(r.b)("p",null,"Finally, we used bougie-design with create-react-app successfully."),Object(r.b)("p",null,"There are a lot of great boilerplates like create-react-app in the React community."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/kriasoft/react-starter-kit"}),"kriasoft/react-starter-kit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/zeit/next.js"}),"next.js"))))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/create-react-app.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=create-react-app.423b26cbd71c54b5dfaf.js.map