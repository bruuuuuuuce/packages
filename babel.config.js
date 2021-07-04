module.exports = {
    plugins: [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-class-properties",
    ],
    presets: [
        "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": true
                },
                "debug": false,
                "targets": {
                    "browsers": [
                        "last 3 versions"
                    ]
                }
            }
        ]
    ],
    "env": {
        "test": {
            "presets": [
                "@babel/preset-typescript",
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "usage",
                        "corejs": {
                            "version": 3,
                            "proposals": true
                        },
                        "debug": false,
                        "targets": {
                            "browsers": [
                                "last 3 versions"
                            ]
                        }
                    }
                ]
            ],
            "plugins": [
                ["emotion", {
                    "inline": true,
                    "sourceMap": true
                }],
                "@babel/plugin-proposal-class-properties"
            ]
        }
    }
};