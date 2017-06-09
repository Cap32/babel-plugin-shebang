
const defaultReplacement = '#!/usr/bin/env node';

module.exports = function visitor() {
	return {
		visitor: {
			Program(path, state) {
				if (state.opts.force || path.hub.file.shebang) {
					path.hub.file.shebang = state.opts.replacement || defaultReplacement;
				}
			},
		},
	};
}
