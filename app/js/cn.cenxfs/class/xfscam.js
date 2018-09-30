/// <reference path="xfsapi.ts"/>
/**
 * CAM 命令
 * @namespace
*/
var CAM;
(function (CAM) {
    var WFS_SERVICE_CLASS_CAM = (10);
    var WFS_SERVICE_VERSION_CAM = (0x1E03) /* Version 3.30 */;
    var WFS_SERVICE_NAME_CAM = "CAM";
    var CAM_SERVICE_OFFSET = (WFS_SERVICE_CLASS_CAM * 100);
    /* CAM Info Commands */
    var INF;
    (function (INF) {
        INF[INF["WFS_INF_CAM_STATUS"] = (CAM_SERVICE_OFFSET + 1)] = "WFS_INF_CAM_STATUS";
        INF[INF["WFS_INF_CAM_CAPABILITIES"] = (CAM_SERVICE_OFFSET + 2)] = "WFS_INF_CAM_CAPABILITIES";
    })(INF = CAM.INF || (CAM.INF = {}));
    /* CAM Execute Commands */
    var CMD;
    (function (CMD) {
        CMD[CMD["WFS_CMD_CAM_TAKE_PICTURE"] = (CAM_SERVICE_OFFSET + 1)] = "WFS_CMD_CAM_TAKE_PICTURE";
        CMD[CMD["WFS_CMD_CAM_RESET"] = (CAM_SERVICE_OFFSET + 2)] = "WFS_CMD_CAM_RESET";
        CMD[CMD["WFS_CMD_CAM_TAKE_PICTURE_EX"] = (CAM_SERVICE_OFFSET + 3)] = "WFS_CMD_CAM_TAKE_PICTURE_EX";
        CMD[CMD["WFS_CMD_CAM_SYNCHRONIZE_COMMAND"] = (CAM_SERVICE_OFFSET + 4)] = "WFS_CMD_CAM_SYNCHRONIZE_COMMAND";
    })(CMD = CAM.CMD || (CAM.CMD = {}));
    /* CAM Messages */
    var EVENT;
    (function (EVENT) {
        EVENT[EVENT["WFS_USRE_CAM_MEDIATHRESHOLD"] = (CAM_SERVICE_OFFSET + 1)] = "WFS_USRE_CAM_MEDIATHRESHOLD";
        EVENT[EVENT["WFS_EXEE_CAM_INVALIDDATA"] = (CAM_SERVICE_OFFSET + 2)] = "WFS_EXEE_CAM_INVALIDDATA";
    })(EVENT = CAM.EVENT || (CAM.EVENT = {}));
})(CAM || (CAM = {}));
