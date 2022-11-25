const path = require ("path");

const mode = process.env.NODE_ENV || "development";

const devMode = "mode" === "development";

const target = devMode ? "web" : "web";
const devtool = devMode ? "source-map" : undefined;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let conf = {

    mode,
    target,
    devtool,

    entry: {
        index: path.resolve(__dirname, "src/base/", "index.js"),
        game: path.resolve(__dirname, "src/game/", "game.js"),
        results: path.resolve(__dirname, "src/results/", "results.js"),
    },
    output: {
        path: path.resolve (__dirname, "dist"),
        clean: true,
        filename: "[name].js",
        assetModuleFilename: "assets/images[name][ext]"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/base/", "index.html"),
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/game/", "game.html"),
            filename: "game.html",
            chunks: ["game"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/results/", "results.html"),
            filename: "results.html",
            chunks: ["results"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
],

    devServer: {
       /* static: 
            path.resolve(__dirname, "./dist/") */
    },
    
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: "html-loader"
            },

            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|webp|gif)$/i,
                type: "asset/resource",
                use: [
                        {
                          loader: "image-webpack-loader",
                           options: {
                             mozjpeg: {
                               progressive: true,
                            },
                             optipng: {
                               enabled: false,
                            },
                             pngquant: {
                               quality: [0.65, 0.90],
                               speed: 4
                            },
                             gifsicle: {
                               interlaced: false,
                            },
                             webp: {
                               quality: 75
                            },
                          }
                        }
                      ],
                
                generator: {
                    filename: "./assets/images/[name][ext]"
                }

            },
            {
                test: /\.svg$/i,
                type: "asset/resource",
                use: "image-webpack-loader",
                generator: {
                    filename: "./assets/icons/[name][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                use: "file-loader",
                generator: {
                    filename: "./assets/fonts/[name][ext]"
                }
            },
            {
                test: /\.(mp3|wav)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/sounds",
                            name: "[name].[ext]",
                            clean: true,
                            contenthash: false
                        }
                    }
                ],
            },
        ]
    }
};

module.exports = conf;