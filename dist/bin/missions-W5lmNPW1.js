//#region src/lib/missions.ts
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
export { getMissionById as t };
