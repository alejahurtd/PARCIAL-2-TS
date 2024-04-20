export async function traer_img(text: any) {
	try {
		const imagen = await fetch('https://cataas.com/cat/says/'+ text).then((res) => res.json());

		return imagen;
	} catch (error) {
		console.log(error);
	}
}

export async function traer_texto() {
	try {
		const imagen = await fetch('https://catfact.ninja/fact').then((res) =>
			res.json()
		);

		return imagen;
	} catch (error) {
		console.log(error);
	}
}
