"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[9347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,b=d["".concat(l,".").concat(c)]||d[c]||s[c]||a;return n?r.createElement(b,p(p({ref:t},m),{},{components:n})):r.createElement(b,p({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2312:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"appium",title:"Running Serenity Tests on Appium",sidebar_position:4},p="Running tests on Appium",o={unversionedId:"mobile/appium",id:"mobile/appium",isDocsHomePage:!1,title:"Running Serenity Tests on Appium",description:"Serenity supports running tests on mobile devices/emulators out of the box with Appium.",source:"@site/docs/mobile/appium.md",sourceDirName:"mobile",slug:"/mobile/appium",permalink:"/docs/mobile/appium",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/mobile/appium.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"appium",title:"Running Serenity Tests on Appium",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SauceLabs",permalink:"/docs/cloud/saucelabs"}},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-tests-on-appium"},"Running tests on Appium"),(0,i.kt)("p",null,"Serenity supports running tests on mobile devices/emulators out of the box with ",(0,i.kt)("a",{parentName:"p",href:"http://appium.io"},"Appium"),"."),(0,i.kt)("p",null,"First, you will need to install Appium:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'(sudo) npm install -g appium --chromedriver_version="102.0"\n')),(0,i.kt)("p",null,"Afterwards Appium is available as command and can be started by invoking the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"appium\n")),(0,i.kt)("p",null,"Then adapt ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.properties")," to run on an Android device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"webdriver.driver= appium\nwebdriver.base.url = http://www.google.com/\nappium.hub = http://127.0.0.1:4723/wd/hub\nappium.platformName = Android\nappium.platformVersion = 5.1.1\nappium.deviceName = e2f5c460\nappium.browserName = Chrome\n")),(0,i.kt)("p",null,"Here's an example for iOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"webdriver.driver= appium\nwebdriver.base.url = http://www.google.com/\nappium.hub = http://127.0.0.1:4723/wd/hub\nappium.platformName = iOS\nappium.platformVersion = 8.1\nappium.deviceName = iPhone 5\nappium.browserName = Safari\n")),(0,i.kt)("p",null,"Note: All properties which are starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"appium")," in serenity.properties will be forwarded to appium driver. "),(0,i.kt)("p",null,"For example, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"appium.automationName = XCUITest")," in serenity.properties will have as end effect setting the property ",(0,i.kt)("inlineCode",{parentName:"p"},"automationName = XCUITest")," in appium driver capabilities."),(0,i.kt)("p",null,"Besides the properties file you can also use commandline switches:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mvn test -Dappium.hub=http://127.0.0.1:4723/wd/hub -Dwebdriver.driver=appium -Dappium.platformName=iOS -Dappium.browserName=Safari -Dappium.deviceName="iPhone 5"\n')),(0,i.kt)("p",null,"All properties starting with appium.* will be forwarded to the appium driver as appium desired capabilities."),(0,i.kt)("p",null,"For example, setting the property ",(0,i.kt)("inlineCode",{parentName:"p"},"appium.automationName=myAutomationName")," will have as effect setting the capability ",(0,i.kt)("inlineCode",{parentName:"p"},"automationName")," in the appium driver to ",(0,i.kt)("inlineCode",{parentName:"p"},"myAutomationName"),"."),(0,i.kt)("p",null,"The following annotations are supported for a PageObject element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@AndroidFindBy(id="")\nprivate WebElement loginButton;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@iOSFindBy(id="")\nprivate WebElement loginButton;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@FindBy(accessibilityId="")\nprivate WebElement loginButton;\n')),(0,i.kt)("p",null,"Sometimes it may be necessary in a PageObject to use specific methods of the underlying driver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"AndroidDriver<AndroidElement> androidDriver() {\n    return (AndroidDriver<AndroidElement>)\n            ((WebDriverFacade) getDriver()).getProxiedDriver();\n}\n...\nandroidDriver().hideKeyboard();\n")),(0,i.kt)("p",null,"You can also add Appium to an existing grid. See the ",(0,i.kt)("a",{parentName:"p",href:"https://appium.io/docs/en/advanced-concepts/grid/"},"Appium documentation")," for more details about the node-config option."))}m.isMDXComponent=!0}}]);