/// <reference path="xfsapi.ts"/>
/**
 * BCR 命令
 * @namespace
*/
var BCR;
(function (BCR) {
    var WFS_SERVICE_CLASS_BCR = (15);
    var WFS_SERVICE_CLASS_VERSION_BCR = (0x1E03) /* Version 3.30 */;
    var WFS_SERVICE_CLASS_NAME_BCR = "BCR";
    var BCR_SERVICE_OFFSET = (WFS_SERVICE_CLASS_BCR * 100);
    /* BCR Info Commands */
    var INF;
    (function (INF) {
        INF[INF["WFS_INF_BCR_STATUS"] = (BCR_SERVICE_OFFSET + 1)] = "WFS_INF_BCR_STATUS";
        INF[INF["WFS_INF_BCR_CAPABILITIES"] = (BCR_SERVICE_OFFSET + 2)] = "WFS_INF_BCR_CAPABILITIES";
    })(INF = BCR.INF || (BCR.INF = {}));
    /* BCR Execute Commands */
    var CMD;
    (function (CMD) {
        CMD[CMD["WFS_CMD_BCR_READ"] = (BCR_SERVICE_OFFSET + 1)] = "WFS_CMD_BCR_READ";
        CMD[CMD["WFS_CMD_BCR_RESET"] = (BCR_SERVICE_OFFSET + 2)] = "WFS_CMD_BCR_RESET";
        CMD[CMD["WFS_CMD_BCR_SET_GUIDANCE_LIGHT"] = (BCR_SERVICE_OFFSET + 3)] = "WFS_CMD_BCR_SET_GUIDANCE_LIGHT";
        CMD[CMD["WFS_CMD_BCR_POWER_SAVE_CONTROL"] = (BCR_SERVICE_OFFSET + 4)] = "WFS_CMD_BCR_POWER_SAVE_CONTROL";
        CMD[CMD["WFS_CMD_BCR_SYNCHRONIZE_COMMAND"] = (BCR_SERVICE_OFFSET + 5)] = "WFS_CMD_BCR_SYNCHRONIZE_COMMAND";
    })(CMD = BCR.CMD || (BCR.CMD = {}));
    /* BCR Messages */
    var EVENT;
    (function (EVENT) {
        EVENT[EVENT["WFS_SRVE_BCR_DEVICEPOSITION"] = (BCR_SERVICE_OFFSET + 1)] = "WFS_SRVE_BCR_DEVICEPOSITION";
        EVENT[EVENT["WFS_SRVE_BCR_POWER_SAVE_CHANGE"] = (BCR_SERVICE_OFFSET + 2)] = "WFS_SRVE_BCR_POWER_SAVE_CHANGE";
    })(EVENT = BCR.EVENT || (BCR.EVENT = {}));
})(BCR || (BCR = {}));
