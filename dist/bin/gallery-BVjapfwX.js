import { s as __toESM } from "../server.bundle.mjs";
import { S as require_react, a as RoseWhite, b as require_jsx_runtime, d as motion, o as BottomNav, t as GoldCornerFrame, u as createLucideIcon } from "./WeddingDecorations-Do8QCZDF.js";
import { r as AnimatePresence, t as listWeddingPhotos } from "./supabase-C73X8F6f.js";
import { t as X } from "./x-BgdtR7zm.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Archive = createLucideIcon("archive", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}]
]);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photo.thumbnail_url,
			alt: `Foto di ${photo.uploader_name || "ospite"}`,
			className: "w-full object-cover",
			loading: "lazy",
			style: { display: "block" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
		})]
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/80 text-sm font-medium",
						children: photo.uploader_name || "Ospite"
					}), photo.is_photobooth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/50 text-xs",
						children: "Photobooth 📸"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
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
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
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
	const downloadAll = async () => {
		if (downloading) return;
		setDownloading(true);
		try {
			const JSZip = (await import("./lib-Dp1J3uVR.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).default;
			const zip = new JSZip();
			const folder = zip.folder("marco-vanessa-matrimonio");
			await Promise.all(photos.map(async (photo, i) => {
				try {
					const blob = await (await fetch(photo.url)).blob();
					folder?.file(`foto-${String(i + 1).padStart(3, "0")}.jpg`, blob);
				} catch {}
			}));
			const content = await zip.generateAsync({ type: "blob" });
			const url = URL.createObjectURL(content);
			const a = document.createElement("a");
			a.href = url;
			a.download = "marco-vanessa-matrimonio.zip";
			a.click();
			URL.revokeObjectURL(url);
		} catch {
			alert("Errore nel download. Riprova.");
		} finally {
			setDownloading(false);
		}
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
								children: loading ? "Caricamento..." : `${photos.length} ricordi condivisi`
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
				}) : photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							children: "L'album è ancora vuoto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							style: { color: "#7A6652" },
							children: "Sii il primo a condividere un ricordo!"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasonryGrid, {
					photos,
					onPhotoClick: setLightboxIndex
				})
			}),
			photos.length > 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-20 left-0 right-0 flex justify-center px-4 pointer-events-none z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					onClick: downloadAll,
					disabled: downloading,
					className: "pointer-events-auto flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-xl disabled:opacity-60",
					style: {
						background: "linear-gradient(135deg, #9a7e2e, #C9A84C)",
						boxShadow: "0 6px 24px rgba(201,168,76,0.45)",
						fontFamily: "Lato, sans-serif"
					},
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .8 },
					whileHover: { scale: 1.05 },
					whileTap: { scale: .97 },
					children: downloading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), " Preparazione ZIP..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { size: 16 }),
						" Scarica Tutte (",
						photos.length,
						")"
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				photos,
				index: lightboxIndex,
				onClose: () => setLightboxIndex(null),
				onPrev: () => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1)),
				onNext: () => setLightboxIndex((i) => Math.min(photos.length - 1, (i ?? 0) + 1))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { GalleryPage as default };
