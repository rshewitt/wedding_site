var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "d9d0e520", entry: { module: "/build/entry.client-LSFG57EJ.js", imports: ["/build/_shared/chunk-DDCJTZZH.js", "/build/_shared/chunk-UZEIUW3T.js", "/build/_shared/chunk-VAHLHB76.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W6UKITTJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YJ4TYJU5.js", imports: ["/build/_shared/chunk-2P6FRLSA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-D9D0E520.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ECNC22R6.css";

// node_modules/react-photo-view/dist/react-photo-view.css
var react_photo_view_default = "/build/_assets/react-photo-view-7Z2GU4I5.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
require("dotenv").config();
var links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: react_photo_view_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.comhttps://fonts.gstatic.com"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { suppressHydrationWarning: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/components/WelcomeModal.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function WelcomeModal({ isOpen, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" + (isOpen ? "" : " -translate-y-full"),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center p-5 my-auto w-full md:w-[500]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "text-center font-head text-5xl md:text-6xl mb-6 text-black", children: "Brittany & Reid" }, void 0, !1, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            type: "button",
            className: "px-5 transition-all py-3 font-sans font-medium rounded-md bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            onClick: onClose,
            children: "Open Invitation"
          },
          void 0,
          !1,
          {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 18,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/WelcomeModal.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/controls/index.ts
var import_node2 = require("@remix-run/node");

// app/env.server.ts
var getClinetEnv = () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
});

// app/utils/googleSheetsApi.ts
var import_googleapis = require("googleapis"), SCOPES = ["https://www.googleapis.com/auth/spreadsheets"], getAuthToken = async () => {
  let auth = new import_googleapis.google.auth.GoogleAuth({
    scopes: SCOPES,
    projectId: process.env.GOOGLE_PROJECTID,
    keyFile: "named-sunset-406203-fa816a89a032.json"
    // credentials: {
    //   private_key: privateKey,
    //   client_email: process.env.GOOGLE_CLIENT_EMAIL,
    // },
  });
  return console.log("auth object", auth), auth;
}, sheets, getSheets = async () => {
  if (sheets)
    return sheets;
  let auth = await getAuthToken();
  return sheets = import_googleapis.google.sheets({ version: "v4", auth }), sheets;
}, getPersonRemarks = async (name) => {
  if (name)
    try {
      let sheets2 = await getSheets(), range = "Sheet1!A:B", dataRaw = (await sheets2.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
      })).data.values, data = (dataRaw == null ? void 0 : dataRaw.map((data2) => ({ name: data2[0], remarks: data2[1] }))) ?? [], regex = new RegExp(`${name}$`, "i");
      return data.find((person) => regex.test(person.name));
    } catch (err) {
      console.error(err);
      return;
    }
}, appendMessage = async (name, message, googleName) => {
  try {
    let sheets2 = await getSheets(), range = "Sheet2!A:B", serverTime = /* @__PURE__ */ new Date();
    return await sheets2.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, message, serverTime, 0, googleName]]
      }
    }), !0;
  } catch (err) {
    return console.error(err), !1;
  }
}, getMessage = async () => {
  try {
    let sheets2 = await getSheets(), range = "Sheet2!A:D", dataRaw = (await sheets2.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range
    })).data.values, data = (dataRaw == null ? void 0 : dataRaw.map((data2) => ({
      name: data2[0],
      message: data2[1],
      date: data2[2],
      hide: Boolean(Number(data2[3]))
    }))) ?? [];
    return data.length > 1 && data.shift(), data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (err) {
    return console.error(err), [];
  }
};

// app/controls/index.ts
var indexLoader = async ({ request }) => {
  let recipient = new URL(request.url).searchParams.get("to") || "", [recipientRemarks, messages] = await Promise.all([
    getPersonRemarks(recipient),
    getMessage()
  ]);
  return (0, import_node2.json)({
    remark: (recipientRemarks == null ? void 0 : recipientRemarks.remarks) || recipient,
    messages,
    ENV: getClinetEnv()
  });
}, indexAction = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), message = formData.get("message"), googleName = formData.get("google_name");
  return typeof name != "string" || typeof message != "string" || typeof googleName != "string" ? { ok: !1 } : { ok: await appendMessage(name, message, googleName) };
};

// app/routes/_index.tsx
var import_react_responsive = require("react-responsive");

// app/images/DSC_1968.jpg
var DSC_1968_default = "/build/_assets/DSC_1968-AVGZNGYS.jpg";

// app/components/Utils/SectionWrapper.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), SectionWrapper = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto px-0 md:px-16", children }, void 0, !1, {
  fileName: "app/components/Utils/SectionWrapper.tsx",
  lineNumber: 11,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Utils/SectionWrapper.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), SectionWrapper_default = SectionWrapper;

// app/components/Utils/TextWithLine.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), TextWithLine = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center font-medium font-head text-gray-600 italic mx-3", children }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Utils/TextWithLine.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), TextWithLine_default = TextWithLine;

// app/images/bride.jpg
var bride_default = "/build/_assets/bride-ZS5CB5AF.jpg";

// app/images/groom.jpeg
var groom_default = "/build/_assets/groom-HIJZKDK2.jpeg";

// app/components/BrideAndGroom.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), BrideAndGroom = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-20 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex flex-wrap pb-20", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        src: bride_default,
        alt: "pengantin perempuan",
        className: "w-48 h-48 rounded-full mb-8"
      },
      void 0,
      !1,
      {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-5xl font-medium font-head mb-4 text-gray-800", children: "Brittany Morgan McMahon" }, void 0, !1, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TextWithLine_default, { children: "Bride" }, void 0, !1, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-sans text-gray-500 leading-6", children: [
      "Born on August 25th, 1992 in San Diego, CA to ",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: "James Glenn McMahon" }, void 0, !1, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: "Michelle Ford Toleos" }, void 0, !1, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BrideAndGroom.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/BrideAndGroom.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "img",
        {
          src: groom_default,
          alt: "pengantin laki-laki",
          className: "w-48 h-48 rounded-full mb-8"
        },
        void 0,
        !1,
        {
          fileName: "app/components/BrideAndGroom.tsx",
          lineNumber: 33,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-5xl font-medium font-head mb-4 text-gray-800", children: "Reid Samuel Hewitt" }, void 0, !1, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TextWithLine_default, { children: "Groom" }, void 0, !1, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-sans text-gray-500 leading-6", children: [
        "Born on June 10th 1992 in Sacramento, CA to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: "Robbin Van Herr Waarden Hewitt" }, void 0, !1, {
          fileName: "app/components/BrideAndGroom.tsx",
          lineNumber: 47,
          columnNumber: 61
        }, this),
        " and ",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: "Ann Marie Hewitt" }, void 0, !1, {
          fileName: "app/components/BrideAndGroom.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/components/BrideAndGroom.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BrideAndGroom.tsx",
    lineNumber: 31,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/BrideAndGroom.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans", children: "Our Story" }, void 0, !1, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-4 mb-4 text-gray-500 font-head md:text-lg font-medium", children: "We first met in Sacramento, CA [ insert more content here ]" }, void 0, !1, {
      fileName: "app/components/BrideAndGroom.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BrideAndGroom.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/BrideAndGroom.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/BrideAndGroom.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), BrideAndGroom_default = BrideAndGroom;

// app/components/Countdown.tsx
var import_react3 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), EVENT_DATE = "March 8, 2025 15:00:00", COUNTDOWN_DATE = new Date(EVENT_DATE).getTime(), countdownBase = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}, Countdown = (0, import_react3.memo)(() => {
  let [countdown, setCountdown] = (0, import_react3.useState)(countdownBase);
  return (0, import_react3.useEffect)(() => {
    let interval = setInterval(() => {
      let now = (/* @__PURE__ */ new Date()).getTime(), delta = COUNTDOWN_DATE - now, days = Math.floor(delta / (1e3 * 60 * 60 * 24)), hours = Math.floor(
        delta % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), minutes = Math.floor(delta % (1e3 * 60 * 60) / (1e3 * 60)), seconds = Math.floor(delta % (1e3 * 60) / 1e3);
      setCountdown({ days, hours, minutes, seconds }), delta < 0 && (clearInterval(interval), setCountdown(countdownBase));
    }, 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "mb-1", children: "See you there in..." }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center pb-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.days, label: "Days" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.hours, label: "Hours" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.minutes, label: "Minutes" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.seconds, label: "Seconds" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
});
Countdown.displayName = "Countdown";
var NumberCard = (0, import_react3.memo)(({ number, label }) => {
  let numberString = number < 100 ? ("0" + number).slice(-2) : String(number);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-lg bg-[#EFEFEF] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-3xl mb-2", children: numberString }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: label }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
});
NumberCard.displayName = "NumberCard";
var Countdown_default = Countdown;

// app/components/Agendas.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), CALENDAR_URL = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXM5c2RnN2k4NTlnNWxlMDEzbWluM29hZnQgc2FtLmhldy5yQG0&tmsrc=sam.hew.r%40gmail.com", Agendas = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-3xl mx-auto text-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-4 text-gray-500 font-head md:text-lg font-medium", children: "Our wedding will be held on:" }, void 0, !1, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans", children: "March 8, 2025" }, void 0, !1, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-12 flex max-w-md mx-auto mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "a",
    {
      href: CALENDAR_URL,
      target: "_blank",
      className: "px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      rel: "noreferrer",
      children: "Save to calender"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Agendas.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 text-gray-400 text-left md:text-center font-sans", children: "Mardi Gras" }, void 0, !1, {
      fileName: "app/components/Agendas.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 text-gray-700 text-right md:text-center font-sans", children: "Feb 28 - March 4" }, void 0, !1, {
      fileName: "app/components/Agendas.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 text-gray-400 text-left md:text-center font-sans", children: "Ceremony & Reception" }, void 0, !1, {
      fileName: "app/components/Agendas.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 text-gray-700 text-right md:text-center font-sans", children: "March 8" }, void 0, !1, {
      fileName: "app/components/Agendas.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 text-gray-400 text-lg md:text-center font-sans", children: "additional festivities to be announced!" }, void 0, !1, {
    fileName: "app/components/Agendas.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Agendas.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Agendas_default = Agendas;

// app/images/mazant.jpg
var mazant_default = "/build/_assets/mazant-4QKIM6KQ.jpg";

// app/components/LocationMap.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
var MAP_REDIRECT_URL = "https://www.google.com/maps/place/The+Mazant/@29.9628879,-90.0464758,14.38z/data=!4m9!3m8!1s0x8620a7d28949446d:0x46b489c1ee0f9268!5m2!4m1!1i2!8m2!3d29.9635097!4d-90.0352657!16s%2Fg%2F11csswn9xw?entry=ttu", MAP_TITLE = "The Mazant", MAP_ADDRESS = "906 Mazant St, New Orleans, LA 70117", LocationMap = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-10 bg-[#EFEFEF]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SectionWrapper_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col-reverse md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full px-4 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: mazant_default, alt: "pic54" }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 21,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 19,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:w-1/2 w-full px-4 mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sticky top-8 text-center md:text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-3xl font-head font-bold mb-3 text-gray-700", children: "Wedding Location" }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700", children: MAP_TITLE }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 30,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mb-16 md:mb-10 font-sans", children: MAP_ADDRESS }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 33,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex md:justify-start justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "a",
      {
        href: MAP_REDIRECT_URL,
        target: "_blank",
        className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        rel: "noreferrer",
        children: "Map"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 35,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 25,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 18,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 17,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), LocationMap_default = LocationMap;

// app/components/Message.tsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_resend = require("resend"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), PER_PAGE = 5, resend = new import_resend.Resend("re_CYNYsDir_PRLNQS25i6UD3WsE1kpBH4Y7"), Message = ({ isMobile }) => {
  let { messages } = (0, import_react5.useLoaderData)(), fetcher = (0, import_react5.useFetcher)(), formRef = (0, import_react4.useRef)(null), messagesRef = (0, import_react4.useRef)(null), [commentSubmitted, setCommentSubmitted] = (0, import_react4.useState)(!1), [page, setPage] = (0, import_react4.useState)(0), messagesSantized = messages.filter((message) => !message.hide), messagesDisplay = messagesSantized.slice(
    PER_PAGE * page,
    PER_PAGE * (page + 1)
  ), totalPages = Math.ceil(messagesSantized.length / PER_PAGE), paginationDisplay = [...Array(totalPages).keys()].filter((num) => {
    let leftBoundary = page - 2, rightBoundary = page + 2;
    return num >= leftBoundary && num <= rightBoundary || page < 4 && num < 4 || page > totalPages - 5 && num > totalPages - 5;
  }), scrollTop = () => {
    messagesRef.current && messagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, onChangePage = (0, import_react4.useCallback)(
    (newPage) => {
      setPage(newPage), isMobile && scrollTop();
    },
    [isMobile]
  );
  (0, import_react4.useEffect)(() => {
    var _a, _b;
    (_a = fetcher.data) != null && _a.ok && fetcher.state === "loading" && ((_b = formRef.current) == null || _b.reset(), onChangePage(0));
  }, [fetcher, onChangePage]);
  let sendMessage = (event) => {
    setCommentSubmitted(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4", children: "Leave us a note" }, void 0, !1, {
      fileName: "app/components/Message.tsx",
      lineNumber: 88,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rounded-lg shadow-2xl p-6 md:p-8 bg-white sticky top-8 mb-6 md:mb-0", children: commentSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4", children: "Comment posted. See you there!" }, void 0, !1, {
      fileName: "app/components/Message.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "form",
      {
        ref: formRef,
        onSubmit: (e) => {
          e.preventDefault(), sendMessage(e);
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("fieldset", { disabled: fetcher.state === "submitting", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 mb-6 outline-[#052E16]",
              placeholder: "Your Name",
              name: "name",
              required: !0,
              maxLength: 70
            },
            void 0,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 102,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "textarea",
            {
              className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 min-h-[6rem] mb-4 outline-[#052E16]",
              placeholder: "Write a comment for us",
              name: "message",
              required: !0,
              maxLength: 750
            },
            void 0,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 109,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "button",
            {
              type: "submit",
              id: "submit-message-btn",
              className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-green-950 hover:bg-green-800 outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
              children: "Submit"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 117,
              columnNumber: 7
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Message.tsx",
            lineNumber: 116,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Message.tsx",
          lineNumber: 101,
          columnNumber: 6
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Message.tsx",
        lineNumber: 94,
        columnNumber: 4
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Message.tsx",
      lineNumber: 92,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/Message.tsx",
      lineNumber: 91,
      columnNumber: 3
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Message.tsx",
    lineNumber: 87,
    columnNumber: 2
  }, this);
}, Message_default = (0, import_react4.memo)(Message);

// app/routes/_index.tsx
var import_google = require("@react-oauth/google");

// app/images/ogimage.jpg
var ogimage_default = "/build/_assets/ogimage-7A2MB35A.jpg";

// app/components/GalleryPhotos.tsx
var import_react7 = require("react");

// app/images/DSC_1879.jpg
var DSC_1879_default = "/build/_assets/DSC_1879-Q23Q5OVO.jpg";

// app/images/DSC_1891.jpg
var DSC_1891_default = "/build/_assets/DSC_1891-VECK6CLI.jpg";

// app/images/DSC_1955.jpg
var DSC_1955_default = "/build/_assets/DSC_1955-DK3T5XET.jpg";

// app/images/DSC_1989.jpg
var DSC_1989_default = "/build/_assets/DSC_1989-OJJLGPHF.jpg";

// app/images/DSC_1993.jpg
var DSC_1993_default = "/build/_assets/DSC_1993-WKDAXACL.jpg";

// app/components/Gallery/Gallery.tsx
var import_react6 = require("react");

// app/components/Gallery/Utils/binary-heap.ts
var BinaryHeap = class {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  bubbleUp(n) {
    let element = this.content[n], score = this.scoreFunction(element);
    for (; n > 0; ) {
      let parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
      if (score >= this.scoreFunction(parent))
        break;
      this.content[parentN] = element, this.content[n] = parent, n = parentN;
    }
  }
  sinkDown(n) {
    let length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
    for (; ; ) {
      let child2N = (n + 1) * 2, child1N = child2N - 1, swap = null, child1Score = 0;
      if (child1N < length) {
        let child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1), child1Score < elemScore && (swap = child1N);
      }
      if (child2N < length) {
        let child2 = this.content[child2N];
        this.scoreFunction(child2) < (swap === null ? elemScore : child1Score) && (swap = child2N);
      }
      if (swap === null)
        break;
      this.content[n] = this.content[swap], this.content[swap] = element, n = swap;
    }
  }
  push(element) {
    this.content.push(element), this.bubbleUp(this.content.length - 1);
  }
  pop() {
    let result = this.content[0], end = this.content.pop();
    return this.content.length > 0 && end && (this.content[0] = end, this.sinkDown(0)), result;
  }
  remove(node) {
    let length = this.content.length;
    for (let i = 0; i < length; i++) {
      if (this.content[i] != node)
        continue;
      let end = this.content.pop();
      if (i === length - 1)
        break;
      end && (this.content[i] = end, this.bubbleUp(i));
      break;
    }
  }
  size() {
    return this.content.length;
  }
};

// app/components/Gallery/Utils/dijkstra.ts
var buildPrecedentsMap = (graph, startNode, endNode) => {
  let precedentsMap = {}, visited = {}, storedShortestPaths = {};
  storedShortestPaths[startNode] = 0;
  let pQueue = new BinaryHeap(function(n) {
    return n.weight;
  });
  for (pQueue.push({ id: startNode, weight: 0 }); pQueue.size(); ) {
    let shortestNode = pQueue.pop(), shortestNodeId = shortestNode.id;
    if (visited[shortestNodeId])
      continue;
    let neighboringNodes = graph(shortestNodeId) || {};
    visited[shortestNodeId] = 1;
    for (let neighbor in neighboringNodes) {
      let newTotalWeight = shortestNode.weight + neighboringNodes[neighbor], neighborId = Number(neighbor);
      (typeof storedShortestPaths[neighborId] > "u" || storedShortestPaths[neighborId] > newTotalWeight) && (storedShortestPaths[neighborId] = newTotalWeight, pQueue.push({ id: neighborId, weight: newTotalWeight }), precedentsMap[neighborId] = shortestNodeId);
    }
  }
  if (typeof storedShortestPaths[endNode] > "u")
    throw new Error(`There is no path from ${startNode} to ${endNode}`);
  return precedentsMap;
}, getPathFromPrecedentsMap = (precedentsMap, endNode) => {
  let nodes = [], n = endNode;
  for (; n !== void 0; )
    nodes.push(n), n = precedentsMap[n];
  return nodes.reverse();
}, findShortestPath = (graph, startNode, endNode) => {
  let precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
  return getPathFromPrecedentsMap(precedentsMap, endNode);
};

// app/components/Gallery/Utils/round.ts
var round = (value, decimals = 0) => Number(Math.round(Number(`${value}e${decimals}`)) + "e-" + decimals);

// app/components/Gallery/Utils/compute-layout.ts
var ratio = ({ width, height }) => round(width / height, 2), getCommonHeight = (row, containerWidth, margin) => {
  let rowWidth = containerWidth - row.length * (margin * 2), totalAspectRatio = row.reduce((acc, photo) => acc + ratio(photo), 0);
  return rowWidth / totalAspectRatio;
}, cost = (photos2, i, j, width, targetHeight, margin) => {
  let row = photos2.slice(i, j), commonHeight = getCommonHeight(row, width, margin);
  return Math.pow(Math.abs(commonHeight - targetHeight), 2);
}, makeGetNeighbors = (targetHeight, containerWidth, photos2, limitNodeSearch, margin) => (start) => {
  let results = {};
  start = +start, results[+start] = 0;
  for (let i = start + 1; i < photos2.length + 1 && !(i - start > limitNodeSearch); ++i)
    results[i] = cost(photos2, start, i, containerWidth, targetHeight, margin);
  return results;
}, computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  photos: photos2
}) => {
  let getNeighbors = makeGetNeighbors(
    targetRowHeight,
    containerWidth,
    photos2,
    limitNodeSearch,
    margin
  ), path = findShortestPath(getNeighbors, 0, photos2.length);
  path = path.map((node) => +node);
  for (let i = 1; i < path.length; ++i) {
    let row = photos2.slice(path[i - 1], path[i]), height = getCommonHeight(row, containerWidth, margin);
    for (let j = path[i - 1]; j < path[i]; ++j)
      photos2[j].width = round(height * ratio(photos2[j]), 1), photos2[j].height = height;
  }
  return photos2;
};

// app/components/Gallery/Utils/findIdealNodeSearch.ts
var findIdealNodeSearch = ({
  targetRowHeight,
  containerWidth
}) => {
  let rowAR = containerWidth / targetRowHeight;
  return round(rowAR / 1.5) + 8;
};

// app/components/Gallery/Gallery.tsx
var import_react_photo_view2 = require("react-photo-view"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Gallery = ({ photos: photos2 }) => {
  let [containerWidth, setContainerWidth] = (0, import_react6.useState)(0), galleryEl = (0, import_react6.useRef)(null);
  if ((0, import_react6.useLayoutEffect)(() => {
    let animationFrameID = null, observer = new ResizeObserver((entries) => {
      let newWidth = entries[0].contentRect.width;
      containerWidth !== newWidth && (animationFrameID = window.requestAnimationFrame(() => {
        setContainerWidth(Math.floor(newWidth));
      }));
    });
    return galleryEl.current && observer.observe(galleryEl.current), () => {
      observer.disconnect(), animationFrameID && window.cancelAnimationFrame(animationFrameID);
    };
  }), !containerWidth)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: galleryEl, children: "\xA0" }, void 0, !1, {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 52,
      columnNumber: 31
    }, this);
  let width = containerWidth - 1, targetRowHeight = 300, limitNodeSearch = 2;
  containerWidth >= 450 && (limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight }));
  let thumbs = computeRowLayout({
    containerWidth: width,
    limitNodeSearch,
    targetRowHeight,
    margin: 2,
    photos: photos2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_photo_view2.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: galleryEl, className: "flex flex-wrap", children: thumbs.map((thumb, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_photo_view2.PhotoView, { src: thumb.src, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "img",
    {
      src: thumb.src,
      alt: thumb.alt,
      width: thumb.width,
      height: thumb.height,
      className: "m-0.5 cursor-pointer"
    },
    index,
    !1,
    {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 74,
      columnNumber: 15
    },
    this
  ) }, index, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 73,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}, Gallery_default = Gallery;

// app/components/GalleryPhotos.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), photos = [
  {
    src: DSC_1879_default,
    width: 10,
    height: 2,
    alt: "pic 1"
  },
  {
    src: DSC_1955_default,
    width: 15,
    height: 5,
    alt: "pic 2"
  },
  {
    src: DSC_1891_default,
    width: 3,
    height: 2,
    alt: "pic 3"
  },
  {
    src: DSC_1993_default,
    width: 5,
    height: 1,
    alt: "pic 4"
  },
  {
    src: DSC_1989_default,
    width: 8,
    height: 2,
    alt: "pic 5"
  }
  //   {
  //     src: foto4,
  //     width: 4,
  //     height: 5,
  //     alt: "pic 6",
  //   },
  //   {
  //     src: foto9,
  //     width: 5,
  //     height: 4,
  //     alt: "pic 7",
  //   },
  //   {
  //     src: foto8,
  //     width: 3,
  //     height: 2,
  //     alt: "pic 8",
  //   },
  //   {
  //     src: foto7,
  //     width: 2,
  //     height: 3,
  //     alt: "pic 9",
  //   },
], isHydrating = !0, GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = (0, import_react7.useState)(!isHydrating);
  return (0, import_react7.useEffect)(() => {
    isHydrating = !1, setIsHydrated(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700", children: "Gallery" }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Gallery_default, { photos }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/GalleryPhotos.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}, GalleryPhotos_default = GalleryPhotos;

// app/components/SpotifyPlayer.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
var SpotifyPlaylist = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "a",
    {
      href: "https://open.spotify.com/playlist/1accWGTIiTGHdkpJhei0Ff?si=uHRxgcTkQC6ShCEox4ewOg&pt=12afd4560a6b1715fcf57ba7ab4780e9&pi=u-kTdBwbCRRl-s",
      target: "_blank",
      rel: "noreferrer",
      children: "CLICK HERE TO ADD A SONG"
    },
    void 0,
    !1,
    {
      fileName: "app/components/SpotifyPlayer.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/SpotifyPlayer.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "max-w-lg mx-auto px-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "iframe",
    {
      title: "sp",
      src: "https://open.spotify.com/embed/playlist/62kuDwfMjJQTA6Y1bWAmmW?utm_source=generator&theme=0",
      width: "100%",
      height: "352",
      allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy"
    },
    void 0,
    !1,
    {
      fileName: "app/components/SpotifyPlayer.tsx",
      lineNumber: 25,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/SpotifyPlayer.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SpotifyPlayer.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this), SpotifyPlayer_default = SpotifyPlaylist;

// app/routes/_index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta = () => [
  {
    title: "Wedding Invitation - Brittany & Reid"
  },
  {
    description: "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu"
  },
  {
    "og:image": ogimage_default
  },
  {
    "og:image:type": "image/jpeg"
  },
  {
    "og:site_name": "amifauzi"
  },
  { "og:url": "https://www.amifauzi.com/" },
  { "og:title": "Undangan Pernikahan - Ami & Fauzi" },
  {
    "og:description": "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu"
  },
  { "og:type": "website" },
  { "twitter:image": ogimage_default },
  { "twitter:card": "summary_large_image" },
  {
    "twitter:description": "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu"
  }
], loader = indexLoader, action = indexAction;
function Index() {
  let { ENV } = (0, import_react8.useLoaderData)(), isSmallScreen = (0, import_react_responsive.useMediaQuery)({ query: "(max-width: 768px)" }), [openWelcome, setOpenWelcome] = (0, import_react9.useState)(!0), [isMobile, setIsMobile] = (0, import_react9.useState)(!1);
  (0, import_react9.useEffect)(() => {
    document.body.style.overflow = "hidden";
  }, []);
  let onCloseWelcomeModal = () => {
    setOpenWelcome(!1), document.body.style.overflow = "auto", window.scrollTo({ top: 0 });
  };
  (0, import_react9.useEffect)(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);
  let thisYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "div",
    {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      className: "bg-background-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(WelcomeModal, { isOpen: openWelcome, onClose: onCloseWelcomeModal }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "div",
          {
            className: "flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover",
            style: { backgroundImage: `url(${isMobile ? DSC_1968_default : DSC_1968_default})` },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "h4",
                {
                  className: "text-center font-head font-bold text-5xl mb-4 text-white",
                  style: { textShadow: "5px 5px 2px #052E16" },
                  children: "Brittany & Reid"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 96,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "div",
                {
                  className: "text-center font-black font-sans text-lg text-[#EFEFEF] italic pt-3",
                  style: { textShadow: "5px 5px 2px #052E16" },
                  children: "March 8, 2025"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 102,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 95,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 91,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "bg-background mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(BrideAndGroom_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Agendas_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "mb-12 pt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Countdown_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LocationMap_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GalleryPhotos_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SpotifyPlayer_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_google.GoogleOAuthProvider, { clientId: ENV.GOOGLE_CLIENT_ID, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Message_default, { isMobile }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "py-24 bg-background text-gray-700 relative text-center font-sans", children: [
          "\xA9 ",
          thisYear,
          " forked from",
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "a",
            {
              className: "font-semibold",
              href: "https://github.com/fauzialz/amifauzi.com-open",
              target: "_blank",
              rel: "noreferrer",
              children: " Fauzi"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 144,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 142,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionWrapper_default, { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: " fixed bottom-0 right-0 mr-3 mb-8 md:mr-8 md:mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "a",
          {
            href: "https://www.zola.com/registry/brittanyandreid2025",
            target: "_blank",
            className: "px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            rel: "noreferrer",
            children: "Registry"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 151,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 85,
      columnNumber: 5
    },
    this
  );
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
