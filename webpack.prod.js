const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(jpeg|png|jpg|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `images/[name].[ext]`,

                }
            }]
        }

        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: `./src/images/`,
            to: `./images/`
        }])
    ],
    optimization:{
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
            name:'vendors'
        }
    }
};