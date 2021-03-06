require("string.prototype.startswith");
const shebang = require("../");

const run = (name, transform) => {
	describe(name, () => {
		test("default", () => {
			const src = "#!/usr/bin/env ./node_modules/.bin/babel-node";
			const dest = transform(src, {
				plugins: [shebang]
			});
			expect(dest.code.startsWith("#!/usr/bin/env node")).toBe(true);
		});

		test("`replacement` option", () => {
			const src = "#!/usr/bin/env node";
			const replacement = "#!awesome";
			const dest = transform(src, {
				plugins: [[shebang, { replacement }]]
			});
			expect(dest.code.startsWith(replacement)).toBe(true);
		});

		test("without shebang", () => {
			const src = "";
			const dest = transform(src, {
				plugins: [shebang]
			});
			expect(dest.code.startsWith("#!/usr/bin/env node")).toBe(false);
		});

		test("`force` option", () => {
			const src = "";
			const dest = transform(src, {
				plugins: [[shebang, { force: true }]]
			});
			expect(dest.code.startsWith("#!/usr/bin/env node")).toBe(true);
		});
	});
};

run("babel v6", require("babel-core").transform);
run("babel v7", require("@babel/core").transform);
