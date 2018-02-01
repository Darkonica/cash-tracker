const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}, {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 100, // Convert images < 8kb to base64 strings
            name: './public/images/[hash]-[name].[ext]'
          } 
        }]
      }
			]
		},
		plugins: [
			CSSExtract
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			host: "dev.darkonica.com",
			port: 80,
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/',
			headers: {
	      "Access-Control-Allow-Origin": "http://dev.darkonica.com",
      	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      	"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  		}
		}
	};
};