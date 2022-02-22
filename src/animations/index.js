export const ShakeEgg = {
	hidden: {},

	show: {
		opacity: 1,
		x: [-1, 0, 1, 0],
		y: [0, 0.5, 0, 0.5],

		transition: {
			type: 'spring',
			stiffness: 300,
			duration: 1,
			yoyo: Infinity,
		},
	},
}

export const LightOnOff = {
	hidden: {},

	show: {
		opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],

		transition: {
			yoyo: Infinity,
			duration: 4,
		},
	},
}
