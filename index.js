const defaultReplacement = "#!/usr/bin/env node";

module.exports = function visitor(babel) {
	const majorVersion = parseInt(babel.version, 10);
	return {
		visitor: {
			Program(path, state) {
				if (state.opts.force || path.hub.file.shebang) {
					const shebang = state.opts.replacement || defaultReplacement;
					path.hub.file.shebang =
						majorVersion >= 7 ? shebang.replace(/^#!/, "") : shebang;
				}
			}
		}
	};
};
