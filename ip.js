/**
 * @file 获取IP地址
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2015-04-22
 */
var ip = {
    init: function () {

    },

    getIp: function () {
        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var items = interfaces[devName];
            for (var i = 0, len = items.length; i< len; i++) {
                var alias = items[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }
};

module.exports = ip;
