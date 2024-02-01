var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
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
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/main.css
var main_default = "/build/_assets/main-THLKTWJO.css";

// app/components/MyNavigation.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function MainNavigation() {
  return /* @__PURE__ */ jsxDEV2("nav", { id: "main-navigation", children: /* @__PURE__ */ jsxDEV2("ul", { children: [
    /* @__PURE__ */ jsxDEV2("li", { className: "nav-item", children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/components/MyNavigation.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MyNavigation.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { className: "nav-item", children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/notes", children: "My Notes" }, void 0, !1, {
      fileName: "app/components/MyNavigation.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MyNavigation.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MyNavigation.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MyNavigation.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MyNavigation_default = MainNavigation;

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3(MyNavigation_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2
});
import { Link } from "@remix-run/react";

// app/styles/home.css
var home_default = "/build/_assets/home-PJIINAIX.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV4("main", { id: "content", children: [
    /* @__PURE__ */ jsxDEV4("h1", { children: "A better way of keeping track of your notes" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: "Try our early beta and never loose track of your notes again!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { id: "cta", children: /* @__PURE__ */ jsxDEV4(Link, { to: "/notes", children: "Try Now!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function links2() {
  return [{ rel: "stylesheet", href: home_default }];
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  action: () => action,
  default: () => NotesPage,
  links: () => links5,
  loader: () => loader
});
import { redirect } from "@remix-run/node";

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function NewNote() {
  return /* @__PURE__ */ jsxDEV5("form", { method: "post", action: "/notes", id: "note-form", children: [
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("label", { htmlFor: "title", children: "Title" }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "text", id: "title", name: "title", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("label", { htmlFor: "content", children: "Content" }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("textarea", { id: "content", name: "content", rows: 5, required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "form-actions", children: /* @__PURE__ */ jsxDEV5("button", { children: "Add Note" }, void 0, !1, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewNote.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links3() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/data/notes.tsx
import fs from "fs/promises";
async function getStoredNotes() {
  let rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function NoteList({ notes }) {
  return /* @__PURE__ */ jsxDEV6("ul", { id: "note-list", children: notes.map(
    (note, index) => /* @__PURE__ */ jsxDEV6("li", { className: "note", children: /* @__PURE__ */ jsxDEV6("article", { children: [
      /* @__PURE__ */ jsxDEV6("header", { children: [
        /* @__PURE__ */ jsxDEV6("ul", { className: "note-meta", children: [
          /* @__PURE__ */ jsxDEV6("li", { children: [
            "#",
            index + 1
          ] }, void 0, !0, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 11,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, !1, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 13,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 12,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 10,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("h2", { children: note.title }, void 0, !1, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: note.content }, void 0, !1, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, note.id, !1, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links4() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.tsx
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function NotesPage() {
  let notes = useLoaderData();
  return /* @__PURE__ */ jsxDEV7("main", { children: /* @__PURE__ */ jsxDEV7("h1", { children: [
    /* @__PURE__ */ jsxDEV7(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7(NoteList_default2, { notes }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader() {
  return await getStoredNotes();
}
async function action({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData), existingNotes = await getStoredNotes();
  noteData.id = (/* @__PURE__ */ new Date()).toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), redirect("/notes");
}
function links5() {
  return [...links3(), ...links4()];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OE2MBWTE.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-T4HCFHGD.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-Q7KTKYBB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VEIDDAQ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XK33TCFQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-ET4FQILN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "bc4302d0", hmr: { runtime: "/build/_shared/chunk-Q7KTKYBB.js", timestamp: 1706756502811 }, url: "/build/manifest-BC4302D0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
