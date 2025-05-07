export const getByMotoPath = (path, params = []) => {
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};

export const getByMotoPathByMarque = (path, params = []) => {
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};

export const getByMotoPathByType = (path, params = []) => {
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};
