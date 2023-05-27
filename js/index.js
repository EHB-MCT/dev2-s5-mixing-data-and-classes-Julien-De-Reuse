"use strict";

import Joke from "../js/Jokes.js";

const app = {
	items: [],
	init() {
		this.getData();
	},
	getData() {
		fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10")
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				json.jokes.forEach((jokeData) => {
					const joke = new Joke(jokeData.category, jokeData.setup, jokeData.delivery);
					app.items.push();

					console.log(joke);
				});
				app.render();
			});
	},
	onSearch() {},
	render() {
		console.log(app.items);
		document.querySelector("#list").insertAdjacentHTML("beforeend", app.items[0].htmlString);
	},
};
app.init();
