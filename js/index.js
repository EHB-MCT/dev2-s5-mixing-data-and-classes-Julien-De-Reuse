"use strict";

import Jokes from "../js/Jokes.js";

const app = {
	items: [],
	init() {
		this.getData();
	},
	getData() {
		fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10")
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (json) {
				json.jokes.forEach(function (jokesData) {
					console.log(Jokes);
					const joke = new Jokes(jokesData.category, jokesData.setup, jokesData.delivery);
					app.items.push(joke);
					app.render(joke);
				});
			});
	},
	onSearch() {},
	render(message) {
		console.log(app.items);
		document.querySelector("#list").insertAdjacentHTML("beforeend", message.htmlString);
	},
};
app.init();
