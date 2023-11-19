const os = require('os')
/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { isServer }) => {
    //     config.module.rules.push({
    //         test: /\.node$/,
    //         use: 'node-loader',
    //     })
    //     if (isServer) {
    //         config.externals = ['node-externals'].concat(config.externals || [])
    //     }
    //
    //     return config
    // }
    //
    webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
        config.module.rules.push({
            test: /\.node$/,
            use: [
                {
                    loader: "nextjs-node-loader",
                    options: {
                        flags: os.constants.dlopen.RTLD_NOW,
                        outputPath: config.output.path
                    }
                },
            ],
        });
        return config;
    },
}

module.exports = nextConfig
