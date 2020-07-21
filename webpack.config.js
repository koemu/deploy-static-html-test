const path = require('path');

module.exports = {
	// モード
	mode: 'development',
	entry: './src/hello2.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
