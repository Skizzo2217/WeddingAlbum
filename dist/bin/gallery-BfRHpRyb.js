import { o as __toESM } from "../server.bundle.mjs";
import { C as require_react, a as RoseWhite, d as createLucideIcon, f as motion, o as BottomNav, t as GoldCornerFrame, x as require_jsx_runtime } from "./WeddingDecorations-BrcIrpFP.js";
import { r as AnimatePresence, t as listWeddingPhotos } from "./photo-api-B0ETNVNZ.js";
import { t as X } from "./x-DG1pN6kr.js";
import { t as getMissionById } from "./missions-W5lmNPW1.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
//#endregion
//#region src/pages/gallery.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function MasonryGrid({ photos, onPhotoClick }) {
	const col1 = photos.filter((_, i) => i % 2 === 0);
	const col2 = photos.filter((_, i) => i % 2 === 1);
	const PhotoCard = ({ photo, index }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "relative cursor-pointer group rounded-2xl overflow-hidden",
		style: {
			border: "1.5px solid #DFC98A",
			boxShadow: "0 2px 10px rgba(201,168,76,0.12)",
			marginBottom: 10
		},
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: index * .06,
			duration: .4,
			ease: "easeOut"
		},
		onClick: () => onPhotoClick(photos.indexOf(photo)),
		whileHover: { scale: 1.02 },
		whileTap: { scale: .98 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.thumbnail_url,
				alt: `Foto di ${photo.uploader_name || "ospite"}`,
				className: "w-full object-cover",
				loading: "lazy",
				style: { display: "block" }
			}),
			photo.mission_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-2 left-2 px-2 py-1 rounded-full text-[10px] font-semibold text-white",
				style: { background: "rgba(61,43,31,0.75)" },
				children: ["Missione ", photo.mission_id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end",
				style: { background: "linear-gradient(to top, rgba(61,43,31,0.65), transparent)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-2 w-full flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white text-xs font-medium truncate",
						children: photo.uploader_name || "Ospite"
					}), photo.is_photobooth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] px-1.5 py-0.5 rounded-full text-white",
						style: { background: "rgba(201,168,76,0.8)" },
						children: "📸"
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1",
			children: col1.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
				photo,
				index: i * 2
			}, photo.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 mt-5",
			children: col2.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
				photo,
				index: i * 2 + 1
			}, photo.id))
		})]
	});
}
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
	const photo = photos[index];
	const mission = photo.mission_id ? getMissionById(photo.mission_id) : void 0;
	const downloadSingle = () => {
		const a = document.createElement("a");
		a.href = photo.url;
		a.download = `marco-vanessa-foto-${index + 1}.jpg`;
		a.target = "_blank";
		a.click();
	};
	const touchStartX = (0, import_react.useRef)(0);
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const handleTouchEnd = (e) => {
		const diff = touchStartX.current - e.changedTouches[0].clientX;
		if (Math.abs(diff) > 50) if (diff > 0) onNext();
		else onPrev();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-50 flex items-center justify-center",
		style: { background: "rgba(0,0,0,0.94)" },
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		onTouchStart: handleTouchStart,
		onTouchEnd: handleTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center",
				style: { background: "rgba(255,255,255,0.15)" },
				onClick: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					size: 20,
					color: "white"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs text-white",
				style: { background: "rgba(255,255,255,0.15)" },
				children: [
					index + 1,
					" / ",
					photos.length
				]
			}),
			index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center",
				style: { background: "rgba(255,255,255,0.15)" },
				onClick: (e) => {
					e.stopPropagation();
					onPrev();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					size: 24,
					color: "white"
				})
			}),
			index < photos.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center",
				style: { background: "rgba(255,255,255,0.15)" },
				onClick: (e) => {
					e.stopPropagation();
					onNext();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 24,
					color: "white"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "max-w-full max-h-full px-14 flex flex-col items-center gap-3",
				initial: {
					opacity: 0,
					scale: .96
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.url,
					alt: "Foto a schermo intero",
					className: "max-w-full max-h-[78vh] object-contain rounded-2xl",
					style: { border: "2px solid rgba(201,168,76,0.35)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between w-full px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/80 text-sm font-medium",
							children: photo.uploader_name || "Ospite"
						}),
						photo.is_photobooth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/50 text-xs",
							children: "Photobooth 📸"
						}),
						mission && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-white/65 text-xs mt-1",
							children: [
								"Missione ",
								mission.id,
								": ",
								mission.description
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						onClick: downloadSingle,
						className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium",
						style: {
							background: "rgba(201,168,76,0.25)",
							color: "#E8D5A3",
							border: "1px solid rgba(201,168,76,0.4)"
						},
						whileHover: { scale: 1.05 },
						whileTap: { scale: .97 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Scarica"]
					})]
				})]
			}, index)
		]
	});
}
function GalleryPage() {
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [section, setSection] = (0, import_react.useState)("memories");
	const loadPhotos = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError(null);
		try {
			setPhotos(await listWeddingPhotos());
		} catch (err) {
			setPhotos([]);
			setError(err instanceof Error ? err.message : "Impossibile caricare la galleria");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadPhotos();
	}, [loadPhotos]);
	const refresh = async () => {
		setRefreshing(true);
		await loadPhotos();
		setRefreshing(false);
	};
	const memories = photos.filter((photo) => !photo.mission_id);
	const missions = photos.filter((photo) => Boolean(photo.mission_id));
	const visiblePhotos = section === "missions" ? missions : memories;
	const selectSection = (nextSection) => {
		setSection(nextSection);
		setLightboxIndex(null);
	};
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
								children: "Il Nostro Album"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-1",
								style: { color: "#7A6652" },
								children: loading ? "Caricamento..." : `${photos.length} ricordi · ${missions.length} missioni completate`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px mt-4 mx-6",
						style: { background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end px-4 mb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: refresh,
					className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
					style: {
						border: "1px solid #DFC98A",
						color: "#7A6652",
						background: "white"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						size: 11,
						className: refreshing ? "animate-spin" : ""
					}), "Aggiorna"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 max-w-2xl mx-auto mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 rounded-2xl p-1.5",
					style: { background: "#F0EBE1" },
					children: [[
						"memories",
						"Ricordi",
						memories.length
					], [
						"missions",
						"Missioni",
						missions.length
					]].map(([value, label, count]) => {
						const active = section === value;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => selectSection(value),
							className: "py-2.5 rounded-xl text-sm font-semibold transition-all",
							style: {
								background: active ? "white" : "transparent",
								color: active ? "#3D2B1F" : "#7A6652",
								boxShadow: active ? "0 2px 8px rgba(61,43,31,0.08)" : "none"
							},
							children: [
								label,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { color: "#C9A84C" },
									children: [
										"(",
										count,
										")"
									]
								})
							]
						}, value);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 max-w-2xl mx-auto",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2.5",
					children: [0, 1].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex-1 ${col === 1 ? "mt-5" : ""} space-y-2.5`,
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl animate-pulse",
							style: {
								background: "#F0EBE1",
								height: i % 2 === 0 ? 180 : 140
							}
						}, i))
					}, col))
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "text-center py-20 px-4",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mb-4 opacity-40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 64 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold mb-2",
							style: {
								fontFamily: "Playfair Display, serif",
								color: "#3D2B1F"
							},
							children: "Galleria non disponibile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							style: { color: "#7A6652" },
							children: error
						})
					]
				}) : visiblePhotos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "text-center py-20",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mb-4 opacity-40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseWhite, { size: 64 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold mb-2",
							style: {
								fontFamily: "Playfair Display, serif",
								color: "#3D2B1F"
							},
							children: section === "missions" ? "Nessuna missione completata" : "I ricordi sono ancora vuoti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							style: { color: "#7A6652" },
							children: section === "missions" ? "Le foto delle sfide appariranno qui." : "Condividi una foto per riempire questa sezione!"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasonryGrid, {
					photos: visiblePhotos,
					onPhotoClick: setLightboxIndex
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				photos: visiblePhotos,
				index: lightboxIndex,
				onClose: () => setLightboxIndex(null),
				onPrev: () => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1)),
				onNext: () => setLightboxIndex((i) => Math.min(visiblePhotos.length - 1, (i ?? 0) + 1))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { GalleryPage as default };
