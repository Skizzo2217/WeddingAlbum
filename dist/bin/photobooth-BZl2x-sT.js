import { s as __toESM } from "../server.bundle.mjs";
import { S as require_react, a as RoseWhite, b as require_jsx_runtime, d as motion, l as Camera, o as BottomNav, t as GoldCornerFrame, u as createLucideIcon } from "./WeddingDecorations-Do8QCZDF.js";
import { n as uploadWeddingPhoto, r as AnimatePresence } from "./supabase-CqoOoJkt.js";
import { t as CircleCheckBig } from "./circle-check-big--dDbR3yl.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
//#endregion
//#region src/pages/photobooth.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var GLASSES = [
	{
		id: "hearts",
		emoji: "❤️",
		label: "Cuori",
		component: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 220 70",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 28 C50 16 62 10 72 22 C82 10 94 16 94 28 C94 42 72 56 72 56 C72 56 50 42 50 28Z",
					fill: "#FF6B8A",
					stroke: "#C9A84C",
					strokeWidth: "2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M126 28 C126 16 138 10 148 22 C158 10 170 16 170 28 C170 42 148 56 148 56 C148 56 126 42 126 28Z",
					fill: "#FF6B8A",
					stroke: "#C9A84C",
					strokeWidth: "2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "94",
					y1: "32",
					x2: "126",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "8",
					y1: "32",
					x2: "50",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "170",
					y1: "32",
					x2: "212",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				})
			]
		})
	},
	{
		id: "stars",
		emoji: "⭐",
		label: "Stelle",
		component: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 220 70",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "72,8 78,26 97,26 83,37 88,55 72,44 56,55 61,37 47,26 66,26",
					fill: "#FFD700",
					stroke: "#C9A84C",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "148,8 154,26 173,26 159,37 164,55 148,44 132,55 137,37 123,26 142,26",
					fill: "#FFD700",
					stroke: "#C9A84C",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "97",
					y1: "32",
					x2: "123",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "8",
					y1: "32",
					x2: "47",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "173",
					y1: "32",
					x2: "212",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				})
			]
		})
	},
	{
		id: "flowers",
		emoji: "🌸",
		label: "Fiori",
		component: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 220 70",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "72",
					cy: "32",
					r: "22",
					fill: "none",
					stroke: "#C9A84C",
					strokeWidth: "2"
				}),
				[
					0,
					60,
					120,
					180,
					240,
					300
				].map((a, i) => {
					const r = a * Math.PI / 180;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: 72 + 14 * Math.cos(r),
						cy: 32 + 14 * Math.sin(r),
						rx: "7",
						ry: "5",
						fill: "white",
						stroke: "#E8D5A3",
						strokeWidth: "1",
						transform: `rotate(${a} ${72 + 14 * Math.cos(r)} ${32 + 14 * Math.sin(r)})`
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "72",
					cy: "32",
					r: "6",
					fill: "#FFD700"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "148",
					cy: "32",
					r: "22",
					fill: "none",
					stroke: "#C9A84C",
					strokeWidth: "2"
				}),
				[
					0,
					60,
					120,
					180,
					240,
					300
				].map((a, i) => {
					const r = a * Math.PI / 180;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: 148 + 14 * Math.cos(r),
						cy: 32 + 14 * Math.sin(r),
						rx: "7",
						ry: "5",
						fill: "white",
						stroke: "#E8D5A3",
						strokeWidth: "1",
						transform: `rotate(${a} ${148 + 14 * Math.cos(r)} ${32 + 14 * Math.sin(r)})`
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "148",
					cy: "32",
					r: "6",
					fill: "#FFD700"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "94",
					y1: "32",
					x2: "126",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "8",
					y1: "32",
					x2: "50",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "170",
					y1: "32",
					x2: "212",
					y2: "32",
					stroke: "#C9A84C",
					strokeWidth: "3"
				})
			]
		})
	},
	{
		id: "classic",
		emoji: "🕶️",
		label: "Classici",
		component: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 220 70",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "46",
					y: "14",
					width: "52",
					height: "34",
					rx: "17",
					fill: "rgba(10,10,10,0.82)",
					stroke: "#C9A84C",
					strokeWidth: "2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "122",
					y: "14",
					width: "52",
					height: "34",
					rx: "17",
					fill: "rgba(10,10,10,0.82)",
					stroke: "#C9A84C",
					strokeWidth: "2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "98",
					y1: "31",
					x2: "122",
					y2: "31",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "8",
					y1: "31",
					x2: "46",
					y2: "31",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "174",
					y1: "31",
					x2: "212",
					y2: "31",
					stroke: "#C9A84C",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "72",
					cy: "28",
					rx: "14",
					ry: "8",
					fill: "rgba(255,255,255,0.06)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "148",
					cy: "28",
					rx: "14",
					ry: "8",
					fill: "rgba(255,255,255,0.06)"
				})
			]
		})
	}
];
function PhotoboothPage() {
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [selectedGlasses, setSelectedGlasses] = (0, import_react.useState)(0);
	const [stage, setStage] = (0, import_react.useState)("camera");
	const [capturedImage, setCapturedImage] = (0, import_react.useState)(null);
	const [flash, setFlash] = (0, import_react.useState)(false);
	const [cameraError, setCameraError] = (0, import_react.useState)(false);
	const [uploadError, setUploadError] = (0, import_react.useState)(null);
	const [cameraReady, setCameraReady] = (0, import_react.useState)(false);
	const streamRef = (0, import_react.useRef)(null);
	const startCamera = (0, import_react.useCallback)(async () => {
		setCameraError(false);
		setCameraReady(false);
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					facingMode: "user",
					width: { ideal: 1280 },
					height: { ideal: 960 }
				},
				audio: false
			});
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				videoRef.current.onloadedmetadata = () => setCameraReady(true);
			}
		} catch {
			setCameraError(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		startCamera();
		return () => {
			streamRef.current?.getTracks().forEach((t) => t.stop());
		};
	}, [startCamera]);
	const capturePhoto = () => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas || !cameraReady) return;
		setFlash(true);
		setTimeout(() => setFlash(false), 350);
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		canvas.width = video.videoWidth || 640;
		canvas.height = video.videoHeight || 480;
		ctx.save();
		ctx.scale(-1, 1);
		ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
		ctx.restore();
		setCapturedImage(canvas.toDataURL("image/jpeg", .92));
		setStage("preview");
		streamRef.current?.getTracks().forEach((t) => t.stop());
	};
	const retake = () => {
		setCapturedImage(null);
		setUploadError(null);
		setStage("camera");
		startCamera();
	};
	const uploadPhoto = async () => {
		if (!capturedImage) return;
		setStage("uploading");
		setUploadError(null);
		try {
			await uploadWeddingPhoto({
				file: await (await fetch(capturedImage)).blob(),
				isPhotobooth: true,
				originalName: "photobooth.jpg"
			});
			setStage("success");
		} catch (error) {
			setUploadError(error instanceof Error ? error.message : "Upload non riuscito");
			setStage("preview");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-24 overflow-x-hidden",
		style: { background: "linear-gradient(160deg, #FAF7F2 0%, #F5EFE4 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pt-10 pb-5 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldCornerFrame, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] mb-1",
								style: {
									color: "#C9A84C",
									fontFamily: "Lato, sans-serif"
								},
								children: "MARCO & VANESSA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-bold",
								style: {
									fontFamily: "Playfair Display, serif",
									color: "#3D2B1F"
								},
								children: "Photobooth degli Sposi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-1",
								style: { color: "#7A6652" },
								children: "Scegli gli occhiali e scatta il tuo selfie!"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px mt-4 mx-6",
						style: { background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 max-w-md mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "relative rounded-3xl overflow-hidden",
						style: {
							border: "2px solid #C9A84C",
							aspectRatio: "3/4",
							boxShadow: "0 8px 32px rgba(201,168,76,0.2)"
						},
						initial: {
							opacity: 0,
							scale: .97
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .5,
							delay: .2
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: flash && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute inset-0 z-30 bg-white pointer-events-none",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: .15 }
							}) }),
							stage === "camera" && !cameraError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									ref: videoRef,
									autoPlay: true,
									playsInline: true,
									muted: true,
									className: "w-full h-full object-cover",
									style: { transform: "scaleX(-1)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-start justify-center pointer-events-none",
									style: { paddingTop: "28%" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-4/5",
										children: GLASSES[selectedGlasses].component
									})
								}),
								!cameraReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center",
									style: { background: "#F0EBE1" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm",
											style: { color: "#7A6652" },
											children: "Avvio fotocamera..."
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg pointer-events-none",
									style: { borderColor: "rgba(201,168,76,0.6)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg pointer-events-none",
									style: { borderColor: "rgba(201,168,76,0.6)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg pointer-events-none",
									style: { borderColor: "rgba(201,168,76,0.6)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-lg pointer-events-none",
									style: { borderColor: "rgba(201,168,76,0.6)" }
								})
							] }),
							stage === "camera" && cameraError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full h-full flex flex-col items-center justify-center gap-4 p-6",
								style: { background: "#F0EBE1" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
										size: 52,
										style: { color: "#C9A84C" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold mb-1",
											style: {
												fontFamily: "Playfair Display, serif",
												color: "#3D2B1F"
											},
											children: "Fotocamera non disponibile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm",
											style: { color: "#7A6652" },
											children: "Abilita l'accesso alla fotocamera nelle impostazioni del browser"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: startCamera,
										className: "px-5 py-2 rounded-full text-sm font-medium",
										style: {
											background: "#C9A84C",
											color: "white"
										},
										children: "Riprova"
									})
								]
							}),
							(stage === "preview" || stage === "uploading" || stage === "success") && capturedImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: capturedImage,
								alt: "Foto scattata",
								className: "w-full h-full object-cover"
							}),
							stage === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
								style: { background: "rgba(250,247,242,0.88)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 border-3 border-primary border-t-transparent rounded-full animate-spin",
									style: {
										borderWidth: 3,
										borderColor: "#C9A84C",
										borderTopColor: "transparent"
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									style: {
										fontFamily: "Playfair Display, serif",
										color: "#3D2B1F"
									},
									children: "Caricamento..."
								})]
							}),
							stage === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
								style: { background: "rgba(250,247,242,0.9)" },
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { scale: 0 },
										animate: { scale: 1 },
										transition: {
											type: "spring",
											stiffness: 200,
											delay: .1
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 64,
											style: { color: "#C9A84C" }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-bold",
										style: {
											fontFamily: "Playfair Display, serif",
											color: "#3D2B1F"
										},
										children: "Nell'Album!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										style: { color: "#7A6652" },
										children: "Grazie per il ricordo ❤️"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stage === "camera" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-5",
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						transition: { delay: .3 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs tracking-[0.15em] mb-3 font-medium",
							style: {
								color: "#7A6652",
								fontFamily: "Lato, sans-serif"
							},
							children: "SCEGLI GLI OCCHIALI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 justify-center",
							children: GLASSES.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								onClick: () => setSelectedGlasses(i),
								className: "flex flex-col items-center gap-1.5 py-2 px-2 rounded-2xl transition-all duration-200",
								style: {
									border: `2px solid ${selectedGlasses === i ? "#C9A84C" : "#E8D5A3"}`,
									background: selectedGlasses === i ? "rgba(201,168,76,0.1)" : "white",
									minWidth: 68
								},
								whileTap: { scale: .95 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-7",
									children: g.component
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-medium",
									style: { color: selectedGlasses === i ? "#C9A84C" : "#7A6652" },
									children: g.label
								})]
							}, g.id))
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3",
						children: [
							stage === "camera" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								onClick: capturePhoto,
								disabled: cameraError || !cameraReady,
								className: "w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-40",
								style: {
									background: "linear-gradient(135deg, #9a7e2e 0%, #C9A84C 40%, #E8D5A3 70%, #C9A84C 100%)",
									fontFamily: "Playfair Display, serif",
									boxShadow: "0 4px 20px rgba(201,168,76,0.4)"
								},
								whileHover: { scale: 1.02 },
								whileTap: { scale: .97 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 22 }), "Scatta la Foto"]
							}),
							stage === "preview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [uploadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm text-red-600 px-3",
								children: uploadError
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
									onClick: retake,
									className: "flex-1 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2",
									style: {
										border: "2px solid #C9A84C",
										color: "#C9A84C",
										background: "white",
										fontFamily: "Lato, sans-serif"
									},
									whileHover: { scale: 1.02 },
									whileTap: { scale: .97 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 18 }), " Riprova"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
									onClick: uploadPhoto,
									className: "flex-1 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2",
									style: {
										background: "linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)",
										fontFamily: "Lato, sans-serif",
										boxShadow: "0 4px 16px rgba(201,168,76,0.35)"
									},
									whileHover: { scale: 1.02 },
									whileTap: { scale: .97 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 }), " Carica"]
								})]
							})] }),
							stage === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								onClick: retake,
								className: "w-full py-4 rounded-2xl text-white font-bold text-lg",
								style: {
									background: "linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)",
									fontFamily: "Playfair Display, serif",
									boxShadow: "0 4px 20px rgba(201,168,76,0.4)"
								},
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .6 },
								whileHover: { scale: 1.02 },
								whileTap: { scale: .97 },
								children: "Scatta un'altra foto! 📸"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-3 mt-6 opacity-25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 28 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 20 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 28 })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "hidden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { PhotoboothPage as default };
