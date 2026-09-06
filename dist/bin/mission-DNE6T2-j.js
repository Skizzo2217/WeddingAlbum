import { s as __toESM } from "../server.bundle.mjs";
import { C as require_react, a as RoseWhite, d as createLucideIcon, f as motion, n as GoldDivider, o as BottomNav, s as Upload, t as GoldCornerFrame, x as require_jsx_runtime } from "./WeddingDecorations-gF9kmYUA.js";
import { n as uploadWeddingPhoto, r as AnimatePresence } from "./supabase-B5Bmu2iI.js";
import { t as CircleCheckBig } from "./circle-check-big-CVBlSvry.js";
import { n as ImagePlus, t as Sparkles } from "./sparkles-D3uvhfxf.js";
import { t as X } from "./x-CNySFXCc.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
//#endregion
//#region src/lib/missions.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var MISSIONS = [
	{
		id: 1,
		description: "Fai una foto con qualcuno con pochi capelli."
	},
	{
		id: 2,
		description: "Fai una foto con un uomo che ha i capelli lunghi."
	},
	{
		id: 3,
		description: "Fai una foto con la persona più alta che trovi."
	},
	{
		id: 4,
		description: "Fai una foto con la persona più bassa che trovi."
	},
	{
		id: 5,
		description: "Fai una foto con qualcuno che porta gli occhiali."
	},
	{
		id: 6,
		description: "Fai una foto con qualcuno che ha i capelli ricci."
	},
	{
		id: 7,
		description: "Fai una foto con qualcuno che ha i capelli lisci."
	},
	{
		id: 8,
		description: "Fai una foto con gli occhiali bianchi a forma di cuore."
	},
	{
		id: 9,
		description: "Fai una foto con qualcuno che non conoscevi prima del matrimonio."
	},
	{
		id: 10,
		description: "Fai una foto con una coppia sposata o fidanzata."
	},
	{
		id: 11,
		description: "Fai una foto con una persona che indossa il colore verde."
	},
	{
		id: 12,
		description: "Fai una foto con una persona che indossa il colore blu."
	},
	{
		id: 13,
		description: "Fai una foto con una persona che indossa il colore rosso."
	},
	{
		id: 14,
		description: "Fai una foto con qualcuno più giovane di te."
	},
	{
		id: 15,
		description: "Fai una foto con qualcuno più grande di te."
	},
	{
		id: 16,
		description: "Fai una foto con la persona vestita più elegante."
	},
	{
		id: 17,
		description: "Fai una foto con qualcuno mentre fate una faccia buffa."
	},
	{
		id: 18,
		description: "Fai una foto con qualcuno che non avevi mai incontrato prima."
	},
	{
		id: 19,
		description: "Fai una foto con qualcuno che abbia già bevuto abbastanza."
	},
	{
		id: 20,
		description: "Fai una foto con la persona che secondo te ballerà fino alla fine della serata."
	},
	{
		id: 21,
		description: "Fai una foto con qualcuno che sta mangiando proprio in questo momento."
	},
	{
		id: 22,
		description: "Fai una foto con i genitori dello sposo."
	},
	{
		id: 23,
		description: "Fai una foto con i genitori della sposa."
	},
	{
		id: 24,
		description: "Fai una foto con la mamma dello sposo."
	},
	{
		id: 25,
		description: "Fai una foto con la mamma della sposa."
	},
	{
		id: 26,
		description: "Fai una foto con il papà dello sposo."
	},
	{
		id: 27,
		description: "Fai una foto con il papà della sposa."
	},
	{
		id: 28,
		description: "Fai una foto con i testimoni."
	},
	{
		id: 29,
		description: "Fai una foto con la testimone."
	},
	{
		id: 30,
		description: "Fai una foto con il testimone."
	},
	{
		id: 31,
		description: "Fai una foto con le damigelle."
	},
	{
		id: 32,
		description: "Fai una foto con la sposa."
	},
	{
		id: 33,
		description: "Fai una foto con lo sposo."
	},
	{
		id: 34,
		description: "Fai una foto con gli sposi."
	},
	{
		id: 35,
		description: "Fai una foto con la cugina della sposa."
	},
	{
		id: 36,
		description: "Fai una foto con gli zii degli sposi."
	},
	{
		id: 37,
		description: "Fai una foto con qualcuno: entrambi dovete avere il bicchiere pieno."
	}
];
function getMissionById(id) {
	return MISSIONS[id - 1]?.id === id ? MISSIONS[id - 1] : void 0;
}
//#endregion
//#region src/pages/mission.tsx
var import_jsx_runtime = require_jsx_runtime();
function MissionPage() {
	const [files, setFiles] = (0, import_react.useState)([]);
	const [uploaderName, setUploaderName] = (0, import_react.useState)("");
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const [allDone, setAllDone] = (0, import_react.useState)(false);
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const [missionIdInput, setMissionIdInput] = (0, import_react.useState)("");
	const normalizedMissionId = missionIdInput.trim();
	const missionId = /^\d+$/.test(normalizedMissionId) ? Number(normalizedMissionId) : void 0;
	const mission = missionId ? getMissionById(missionId) : void 0;
	const missionError = normalizedMissionId && !mission ? "Inserisci un numero di missione da 1 a 37." : null;
	const addFiles = (0, import_react.useCallback)((newFiles) => {
		const arr = Array.from(newFiles).filter((f) => f.type.startsWith("image/"));
		if (arr.length === 0) return;
		const previews = arr.map((f) => ({
			id: Math.random().toString(36).slice(2),
			file: f,
			preview: URL.createObjectURL(f),
			progress: 0,
			status: "pending"
		}));
		setFiles((prev) => [...prev, ...previews]);
		setAllDone(false);
	}, []);
	const removeFile = (id) => {
		setFiles((prev) => {
			const f = prev.find((p) => p.id === id);
			if (f) URL.revokeObjectURL(f.preview);
			return prev.filter((p) => p.id !== id);
		});
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setDragOver(false);
		addFiles(e.dataTransfer.files);
	};
	const uploadAll = async () => {
		const pending = files.filter((f) => f.status === "pending");
		if (pending.length === 0) return;
		setIsUploading(true);
		for (const file of pending) {
			setFiles((prev) => prev.map((f) => f.id === file.id ? {
				...f,
				status: "uploading",
				progress: 5
			} : f));
			try {
				for (let p = 15; p <= 70; p += 15) {
					await new Promise((r) => setTimeout(r, 80));
					setFiles((prev) => prev.map((f) => f.id === file.id ? {
						...f,
						progress: p
					} : f));
				}
				await uploadWeddingPhoto({
					file: file.file,
					uploaderName,
					originalName: file.file.name,
					missionId: mission?.id
				});
				setFiles((prev) => prev.map((f) => f.id === file.id ? {
					...f,
					status: "done",
					progress: 100
				} : f));
			} catch (error) {
				const message = error instanceof Error ? error.message : "Upload non riuscito";
				setFiles((prev) => prev.map((f) => f.id === file.id ? {
					...f,
					status: "error",
					error: message
				} : f));
			}
		}
		setIsUploading(false);
		setAllDone(true);
	};
	const reset = () => {
		files.forEach((f) => URL.revokeObjectURL(f.preview));
		setFiles([]);
		setAllDone(false);
		setUploaderName("");
		setMissionIdInput("");
	};
	const pendingCount = files.filter((f) => f.status === "pending").length;
	const doneCount = files.filter((f) => f.status === "done").length;
	const errorFiles = files.filter((f) => f.status === "error");
	const totalCount = files.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-28 overflow-x-hidden",
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
								children: "Completa la tua missione"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-1",
								style: { color: "#7A6652" },
								children: "Condividi la tua foto"
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
				className: "px-4 max-w-md mx-auto space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .15 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium mb-2 tracking-[0.12em]",
							style: {
								color: "#7A6652",
								fontFamily: "Lato, sans-serif"
							},
							children: "IL TUO NOME (opzionale)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: uploaderName,
							onChange: (e) => setUploaderName(e.target.value),
							placeholder: "Es: Nome prima lettera del cognome",
							className: "w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all",
							style: {
								border: "1.5px solid #DFC98A",
								background: "white",
								color: "#3D2B1F",
								fontFamily: "Lato, sans-serif",
								boxShadow: "0 2px 8px rgba(201,168,76,0.08)"
							},
							onFocus: (e) => {
								e.target.style.borderColor = "#C9A84C";
								e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
							},
							onBlur: (e) => {
								e.target.style.borderColor = "#DFC98A";
								e.target.style.boxShadow = "0 2px 8px rgba(201,168,76,0.08)";
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .2 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium mb-2 tracking-[0.12em]",
								style: {
									color: "#7A6652",
									fontFamily: "Lato, sans-serif"
								},
								children: "NUMERO MISSIONE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									inputMode: "numeric",
									value: missionIdInput,
									onChange: (e) => setMissionIdInput(e.target.value.replace(/\D/g, "")),
									placeholder: "Es: 3",
									className: "w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all",
									style: {
										border: `1.5px solid ${missionError ? "#ef4444" : "#DFC98A"}`,
										background: "white",
										color: "#3D2B1F",
										fontFamily: "Lato, sans-serif",
										boxShadow: "0 2px 8px rgba(201,168,76,0.08)"
									},
									onFocus: (e) => {
										if (!missionError) {
											e.target.style.borderColor = "#C9A84C";
											e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
										}
									},
									onBlur: (e) => {
										if (!missionError) {
											e.target.style.borderColor = "#DFC98A";
											e.target.style.boxShadow = "0 2px 8px rgba(201,168,76,0.08)";
										}
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
								mode: "wait",
								children: [missionError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: -4
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "flex items-center gap-2 mt-2 text-sm",
									style: { color: "#b45309" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: missionError })]
								}, "error"), mission && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: -4
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "mt-3 rounded-2xl px-4 py-3",
									style: {
										background: "rgba(201,168,76,0.08)",
										border: "1.5px solid #DFC98A"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-semibold tracking-wide mb-1",
										style: {
											color: "#C9A84C",
											fontFamily: "Lato, sans-serif"
										},
										children: ["MISSIONE N. ", mission.id]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										style: { color: "#3D2B1F" },
										children: mission.description
									})]
								}, "found")]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .25 },
						onDrop: handleDrop,
						onDragOver: (e) => {
							e.preventDefault();
							setDragOver(true);
						},
						onDragLeave: () => setDragOver(false),
						onClick: () => fileInputRef.current?.click(),
						className: "relative rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 overflow-hidden",
						style: {
							border: `2px dashed ${dragOver ? "#C9A84C" : "#DFC98A"}`,
							background: dragOver ? "rgba(201,168,76,0.06)" : "white",
							boxShadow: dragOver ? "0 0 0 4px rgba(201,168,76,0.1)" : "0 2px 12px rgba(201,168,76,0.08)"
						},
						whileHover: { scale: 1.01 },
						whileTap: { scale: .99 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								accept: "image/*",
								multiple: true,
								className: "hidden",
								onChange: (e) => e.target.files && addFiles(e.target.files)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-4 -left-4 opacity-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 80 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 -right-4 opacity-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 80 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { scale: dragOver ? 1.1 : 1 },
								transition: { duration: .2 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
									style: {
										background: "rgba(201,168,76,0.1)",
										border: "1.5px solid #DFC98A"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
										size: 28,
										style: { color: "#C9A84C" }
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-lg mb-1",
								style: {
									fontFamily: "Playfair Display, serif",
									color: "#3D2B1F"
								},
								children: dragOver ? "Rilascia qui!" : "Scegli le foto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mb-2",
								style: { color: "#7A6652" },
								children: "Tocca per selezionare dalla galleria"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										size: 12,
										style: { color: "#C9A84C" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										style: { color: "#B0A090" },
										children: "Compressione automatica — qualità ottimale"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										size: 12,
										style: { color: "#C9A84C" }
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [files.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "relative rounded-2xl overflow-hidden",
									style: {
										border: `1.5px solid ${f.status === "done" ? "#C9A84C" : f.status === "error" ? "#ef4444" : "#DFC98A"}`,
										aspectRatio: "1",
										boxShadow: f.status === "done" ? "0 0 0 2px rgba(201,168,76,0.2)" : "none"
									},
									initial: {
										opacity: 0,
										scale: .85
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: { delay: idx * .05 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: f.preview,
											alt: "",
											className: "w-full h-full object-cover"
										}),
										f.status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 flex flex-col items-center justify-center gap-1",
											style: { background: "rgba(250,247,242,0.88)" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full border-2 border-t-transparent animate-spin",
												style: {
													borderColor: "#C9A84C",
													borderTopColor: "transparent"
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-medium",
												style: { color: "#C9A84C" },
												children: [f.progress, "%"]
											})]
										}),
										f.status === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "absolute inset-0 flex items-center justify-center",
											style: { background: "rgba(250,247,242,0.75)" },
											initial: { opacity: 0 },
											animate: { opacity: 1 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
												size: 28,
												style: { color: "#C9A84C" }
											})
										}),
										f.status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 flex items-center justify-center",
											style: { background: "rgba(254,242,242,0.85)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 font-medium text-center px-1",
												title: f.error,
												children: "Errore"
											})
										}),
										f.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												removeFile(f.id);
											},
											className: "absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center",
											style: { background: "rgba(61,43,31,0.75)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												size: 10,
												color: "white"
											})
										})
									]
								}, f.id)), !allDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									onClick: () => fileInputRef.current?.click(),
									className: "rounded-2xl flex items-center justify-center",
									style: {
										border: "1.5px dashed #DFC98A",
										background: "white",
										aspectRatio: "1"
									},
									whileHover: { scale: 1.03 },
									whileTap: { scale: .97 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
										size: 22,
										style: { color: "#C9A84C" }
									})
								})]
							}),
							doneCount > 0 && doneCount < totalCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs mb-1.5",
								style: { color: "#7A6652" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									doneCount,
									" di ",
									totalCount,
									" caricate"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(doneCount / totalCount * 100), "%"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full overflow-hidden",
								style: { background: "#F0EBE1" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full rounded-full",
									style: { background: "linear-gradient(to right, #9a7e2e, #C9A84C, #E8D5A3)" },
									initial: { width: 0 },
									animate: { width: `${doneCount / totalCount * 100}%` },
									transition: { duration: .4 }
								})
							})] }),
							errorFiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
								children: errorFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									file.file.name,
									": ",
									file.error || "Upload non riuscito"
								] }, file.id))
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: allDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "relative rounded-3xl py-8 px-6 text-center overflow-hidden",
						style: {
							background: "white",
							border: "2px solid #C9A84C",
							boxShadow: "0 8px 32px rgba(201,168,76,0.2)"
						},
						initial: {
							opacity: 0,
							scale: .93,
							y: 10
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							type: "spring",
							stiffness: 180
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-6 -left-6 opacity-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 100 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-6 -right-6 opacity-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 100 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scale: 0 },
								animate: { scale: 1 },
								transition: {
									type: "spring",
									stiffness: 200,
									delay: .1
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
									size: 52,
									className: "mx-auto mb-3",
									style: { color: "#C9A84C" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold mb-1",
								style: {
									fontFamily: "Playfair Display, serif",
									color: "#3D2B1F"
								},
								children: "Grazie mille!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mb-4",
								style: { color: "#7A6652" },
								children: doneCount === 1 ? "La tua foto è nell'album degli sposi" : `Le tue ${doneCount} foto sono nell'album degli sposi`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs",
								style: { color: "#B0A090" },
								children: "Marco & Vanessa ti ringraziano per questo ricordo ❤️"
							})
						]
					}) }),
					files.length > 0 && !allDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						onClick: uploadAll,
						disabled: pendingCount === 0 || isUploading,
						className: "w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50",
						style: {
							background: "linear-gradient(135deg, #9a7e2e 0%, #C9A84C 40%, #E8D5A3 70%, #C9A84C 100%)",
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
						whileHover: { scale: 1.02 },
						whileTap: { scale: .97 },
						children: isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }), "Caricamento in corso..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 20 }),
							"Carica nell'Album",
							pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2 py-0.5 rounded-full text-sm font-bold",
								style: { background: "rgba(255,255,255,0.25)" },
								children: pendingCount
							})
						] })
					}),
					allDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						onClick: reset,
						className: "w-full py-4 rounded-2xl font-semibold text-base",
						style: {
							border: "2px solid #C9A84C",
							color: "#C9A84C",
							background: "white",
							fontFamily: "Playfair Display, serif"
						},
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .3 },
						whileHover: { scale: 1.02 },
						whileTap: { scale: .97 },
						children: "Carica altre foto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-3 pt-2 pb-4 opacity-25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 28 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 20 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 28 })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { MissionPage as default };
