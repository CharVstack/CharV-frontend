import{w as i,u as t,e as o}from"./index.696b114f.js";import{C as n,u,F as l}from"./Form.ca63a192.js";import{j as s}from"./jsx-runtime.ba3ffbd3.js";import"./iframe.e07aa4b6.js";import"./index.82845517.js";import"./es.map.constructor.05e3836e.js";import"./defaultTheme.84eef20e.js";import"./styled.6b0b7d47.js";import"./useThemeProps.25d3d8c9.js";import"./ListContext.c51a684a.js";import"./index.f2a06ad4.js";import"./useTheme.54010a27.js";import"./List.869fabe3.js";import"./Backdrop.80bfbf93.js";import"./TransitionGroupContext.b194db0b.js";import"./index.94224b96.js";import"./createSvgIcon.4e102858.js";import"./Paper.7ecd49a3.js";import"./GlobalStyles.db5d749b.js";import"./emotion-react.browser.esm.ac715648.js";import"./Stack.aeeb3cfc.js";import"./extendSxProp.c76a4626.js";import"./Typography.89ce888e.js";const U={component:n,decorators:[p=>{const e=u();return s(l,{...e,children:s(p,{})})}]},O={args:{isConfirm:!1},play:({canvasElement:p})=>{const e=i(p),r=e.getByLabelText("\u540D\u524D"),a=e.getByLabelText("CPU"),m=e.getByLabelText("\u30E1\u30E2\u30EA");t.clear(r),t.clear(a),t.clear(m),t.type(r,"foo"),t.type(a,"1"),t.type(m,"1"),o(r.value).toBe("foo"),o(a.value).toBe("1"),o(m.value).toBe("1"),t.clear(r),t.clear(a),t.clear(m),o(r.value).toBe(""),o(a.value).toBe("0"),o(m.value).toBe("0")}},k={args:{isConfirm:!0},play:({canvasElement:p})=>{const e=i(p),r=e.getByLabelText("\u540D\u524D"),a=e.getByLabelText("CPU"),m=e.getByLabelText("\u30E1\u30E2\u30EA");t.type(r,"foo"),t.type(a,"1"),t.type(m,"1"),o(r.value).toBe(""),o(a.value).toBe("0"),o(m.value).toBe("0")}},q=["Default","InConfirm"];export{O as Default,k as InConfirm,q as __namedExportsOrder,U as default};
