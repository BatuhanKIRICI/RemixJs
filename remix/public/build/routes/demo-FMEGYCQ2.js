import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q7KTKYBB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/demo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/demo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/demo.tsx"
  );
  import.meta.hot.lastModified = "1706642116537.4517";
}
function DemoPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Demo page" }, void 0, false, {
    fileName: "app/routes/demo.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = DemoPage;
var _c;
$RefreshReg$(_c, "DemoPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DemoPage as default
};
//# sourceMappingURL=/build/routes/demo-FMEGYCQ2.js.map
