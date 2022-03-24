var reg = document.getElementById("regioni");
var prov = document.getElementById("province");
var opt = document.querySelector("option");
let placeholderReg = document.createElement("option");
placeholderReg.innerHTML = "seleziona una regione";
reg.prepend(placeholderReg);
let placeholderProv = document.createElement("option");
placeholderProv.innerHTML = " ";
prov.prepend(placeholderProv);

fetch("regioni.json")
	.then((res) => res.json())
	.then((data) => {
		data.forEach((item) => {
			let optReg = document.createElement("option");
			reg.append(optReg);
			optReg.innerHTML = item.prov_regione;
			optReg.value = item.prov_regione;
		});
	});

fetch("province.json")
	.then((res) => res.json())
	.then((data) => {
		reg.addEventListener("change", function () {
			let provinceAttuali = document.querySelectorAll("#province > option");

			if (provinceAttuali) {
				provinceAttuali.forEach((item) => {
					item.remove();
				});
			}

			let provReg = data.filter(function (item) {
				return item.prov_reg == reg.value;
			});

			provReg.forEach((item) => {
				let optProv = document.createElement("option");
				prov.append(optProv);
				optProv.innerHTML = item.prov_nome;
			});
			let divReg = document.getElementById("imgReg");
			let immaginiAttuali = document.querySelector("#imgReg > img");
			let immaginiAttuali1 = document.querySelector("#imgProv > img");
			if (immaginiAttuali) {
				immaginiAttuali.remove();
			}
			if (immaginiAttuali1) {
				immaginiAttuali1.remove();
			}
			if (reg.value != placeholderReg.innerHTML) {
				let provincia = document.createElement("img");
				provincia.setAttribute("src", "img/regioni/" + reg.value + ".png");
				divReg.append(provincia);
			}
		});

		prov.addEventListener("change", function () {
			let immaginiAttuali = document.querySelectorAll("#imgProv > img");
			if (immaginiAttuali) {
				immaginiAttuali.forEach((item) => {
					item.remove();
				});
			}
			let selOpt = prov.options[prov.selectedIndex];
			data.forEach((item) => {
				if (selOpt.innerHTML == item.prov_nome) {
					let divProv = document.getElementById("imgProv");
					let provincia = document.createElement("img");
					provincia.setAttribute(
						"src",
						"img/province/" + item.prov_nome + ".png"
					);
					divProv.append(provincia);
				}
			});
		});
	});
