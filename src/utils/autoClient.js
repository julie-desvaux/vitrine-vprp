export const getByAutoPath = (path, params = []) => {
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};

export const getByAutoPathByMarque = (path, params = []) => {
	console.log("getByAutoPathByMarque", path);
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};

export const getByAutoPathByType = (path, params = []) => {
	const url = new URL(`https://back-concess.vi-paris-rp.fr/api${path}`);
	params
		.filter((param) => param.value)
		.forEach((param) => {
			url.searchParams.append(param.key, param.value);
		});

	return fetch(url).then((res) => res.json());
};
