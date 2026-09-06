import { o as __toESM } from "../server.bundle.mjs";
import { C as require_react, d as createLucideIcon, x as require_jsx_runtime } from "./WeddingDecorations-BrcIrpFP.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
//#endregion
//#region src/components/Turnstile.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var TURNSTILE_SITE_KEY = "0x4AAAAAAEqms8_1HcdsF5gV";
var SCRIPT_ID = "cloudflare-turnstile-script";
function loadTurnstile() {
	if (window.turnstile) return Promise.resolve();
	const existing = document.getElementById(SCRIPT_ID);
	if (existing) return new Promise((resolve, reject) => {
		existing.addEventListener("load", () => resolve(), { once: true });
		existing.addEventListener("error", () => reject(/* @__PURE__ */ new Error("Impossibile caricare il controllo di sicurezza.")), { once: true });
	});
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.id = SCRIPT_ID;
		script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject(/* @__PURE__ */ new Error("Impossibile caricare il controllo di sicurezza."));
		document.head.appendChild(script);
	});
}
function Turnstile({ onToken }) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let widgetId;
		let disposed = false;
		loadTurnstile().then(() => {
			if (disposed || !containerRef.current || !window.turnstile) return;
			widgetId = window.turnstile.render(containerRef.current, {
				sitekey: TURNSTILE_SITE_KEY,
				theme: "light",
				callback: (token) => onToken(token),
				"expired-callback": () => onToken(null),
				"error-callback": () => onToken(null)
			});
		}).catch(() => onToken(null));
		return () => {
			disposed = true;
			if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
		};
	}, [onToken]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "flex justify-center"
	});
}
//#endregion
export { CircleCheckBig as n, Turnstile as t };
