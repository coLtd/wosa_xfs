/// <reference path="xfsapi.ts"/>
/**
 * ALM 命令
 * @namespace
*/
var ALM;
(function (ALM) {
    var WFS_SERVICE_CLASS_ALM = 11;
    var WFS_SERVICE_CLASS_VERSION_ALM = 0x0A03; /*Version 3.10 */
    var WFS_SERVICE_CLASS_NAME_ALM = "ALM";
    var ALM_SERVICE_OFFSET = WFS_SERVICE_CLASS_ALM * 100;
    /**
     * INF 命令
     * enum
    */
    var INF;
    (function (INF) {
        INF[INF["WFS_INF_ALM_STATUS"] = (ALM_SERVICE_OFFSET + 1)] = "WFS_INF_ALM_STATUS";
        INF[INF["WFS_INF_ALM_CAPABILITIES"] = (ALM_SERVICE_OFFSET + 2)] = "WFS_INF_ALM_CAPABILITIES";
    })(INF = ALM.INF || (ALM.INF = {}));
    /**
     * CMD 命令
     * @enum
    */
    var CMD;
    (function (CMD) {
        CMD[CMD["WFS_CMD_ALM_SET_ALARM"] = (ALM_SERVICE_OFFSET + 1)] = "WFS_CMD_ALM_SET_ALARM";
        CMD[CMD["WFS_CMD_ALM_RESET_ALARM"] = (ALM_SERVICE_OFFSET + 2)] = "WFS_CMD_ALM_RESET_ALARM";
        CMD[CMD["WFS_CMD_ALM_RESET"] = (ALM_SERVICE_OFFSET + 3)] = "WFS_CMD_ALM_RESET";
        CMD[CMD["WFS_CMD_ALM_SYNCHRONIZE_COMMAND"] = (ALM_SERVICE_OFFSET + 4)] = "WFS_CMD_ALM_SYNCHRONIZE_COMMAND";
    })(CMD = ALM.CMD || (ALM.CMD = {}));
    /**
     * EVENT
     * @enum
    */
    var EVENT;
    (function (EVENT) {
        EVENT[EVENT["WFS_SRVE_ALM_DEVICE_SET"] = (ALM_SERVICE_OFFSET + 1)] = "WFS_SRVE_ALM_DEVICE_SET";
        EVENT[EVENT["WFS_SRVE_ALM_DEVICE_RESET"] = (ALM_SERVICE_OFFSET + 2)] = "WFS_SRVE_ALM_DEVICE_RESET";
    })(EVENT = ALM.EVENT || (ALM.EVENT = {}));
})(ALM || (ALM = {}));
