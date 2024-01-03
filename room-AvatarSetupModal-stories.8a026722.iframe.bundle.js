"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[9005],{"./src/react-components/room/AvatarSetupModal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarSetupModal_stories});__webpack_require__("./node_modules/react/index.js");var RoomLayout=__webpack_require__("./src/react-components/layout/RoomLayout.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Modal=__webpack_require__("./src/react-components/modal/Modal.js"),BackButton=__webpack_require__("./src/react-components/input/BackButton.js"),AvatarSettingsContent=__webpack_require__("./src/react-components/room/AvatarSettingsContent.js"),message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","onBack"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarSetupModal(_ref){let{className,onBack}=_ref,rest=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(Modal.u,{title:(0,jsx_runtime.jsx)(message.Z,{id:"avatar-setup-sidebar.title",defaultMessage:"Avatar Setup"}),beforeTitle:(0,jsx_runtime.jsx)(BackButton.x,{onClick:onBack}),className,children:(0,jsx_runtime.jsx)(AvatarSettingsContent.O,_objectSpread({},rest))})}var _Base$parameters,_Base$parameters2,_Base$parameters2$doc;function AvatarSetupModal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function AvatarSetupModal_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?AvatarSetupModal_stories_ownKeys(Object(source),!0).forEach((function(key){AvatarSetupModal_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarSetupModal_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function AvatarSetupModal_stories_defineProperty(obj,key,value){return(key=function AvatarSetupModal_stories_toPropertyKey(arg){var key=function AvatarSetupModal_stories_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}AvatarSetupModal.displayName="AvatarSetupModal",AvatarSetupModal.propTypes={className:prop_types_default().string,onBack:prop_types_default().func},AvatarSetupModal.__docgenInfo={description:"",methods:[],displayName:"AvatarSetupModal",props:{className:{description:"",type:{name:"string"},required:!1},onBack:{description:"",type:{name:"func"},required:!1}}};const AvatarSetupModal_stories={title:"Room/AvatarSetupModal"},Base=()=>(0,jsx_runtime.jsx)(RoomLayout.s,{viewport:(0,jsx_runtime.jsx)(AvatarSetupModal,{})});Base.displayName="Base",Base.parameters={layout:"fullscreen"},Base.parameters=AvatarSetupModal_stories_objectSpread(AvatarSetupModal_stories_objectSpread({},Base.parameters),{},{docs:AvatarSetupModal_stories_objectSpread(AvatarSetupModal_stories_objectSpread({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:AvatarSetupModal_stories_objectSpread({originalSource:"() => <RoomLayout viewport={<AvatarSetupModal />} />"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2$doc=_Base$parameters2.docs)||void 0===_Base$parameters2$doc?void 0:_Base$parameters2$doc.source)})});const __namedExportsOrder=["Base"];Base.__docgenInfo={description:"",methods:[],displayName:"Base"}}}]);