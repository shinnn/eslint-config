function run([id]) {
	const app = Application(id);

	if (app.running()) {
		console.log(ObjC.unwrap($.NSURL.URLWithString('https://eslint.org')));
	}
}
