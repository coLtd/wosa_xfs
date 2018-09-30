/// <reference path="xfsapi.ts"/>
/**
 * PIN 命令
 * @namespace
*/
var TTU;
(function (TTU) {
    var WFS_SERVICE_CLASS_TTU = (7);
    var WFS_SERVICE_CLASS_NAME_TTU = "TTU";
    var WFS_SERVICE_CLASS_VERSION_TTU = (0x1E03) /* Version 3.30 */;
    var TTU_SERVICE_OFFSET = (WFS_SERVICE_CLASS_TTU * 100);
    /* TTU Info Commands */
    var INF;
    (function (INF) {
        INF[INF["WFS_INF_TTU_STATUS"] = (TTU_SERVICE_OFFSET + 1)] = "WFS_INF_TTU_STATUS";
        INF[INF["WFS_INF_TTU_CAPABILITIES"] = (TTU_SERVICE_OFFSET + 2)] = "WFS_INF_TTU_CAPABILITIES";
        INF[INF["WFS_INF_TTU_FORM_LIST"] = (TTU_SERVICE_OFFSET + 3)] = "WFS_INF_TTU_FORM_LIST";
        INF[INF["WFS_INF_TTU_QUERY_FORM"] = (TTU_SERVICE_OFFSET + 4)] = "WFS_INF_TTU_QUERY_FORM";
        INF[INF["WFS_INF_TTU_QUERY_FIELD"] = (TTU_SERVICE_OFFSET + 5)] = "WFS_INF_TTU_QUERY_FIELD";
        INF[INF["WFS_INF_TTU_KEY_DETAIL"] = (TTU_SERVICE_OFFSET + 6)] = "WFS_INF_TTU_KEY_DETAIL";
    })(INF = TTU.INF || (TTU.INF = {}));
    /* TTU Command Verbs */
    var CMD;
    (function (CMD) {
        CMD[CMD["WFS_CMD_TTU_BEEP"] = (TTU_SERVICE_OFFSET + 1)] = "WFS_CMD_TTU_BEEP";
        CMD[CMD["WFS_CMD_TTU_CLEARSCREEN"] = (TTU_SERVICE_OFFSET + 2)] = "WFS_CMD_TTU_CLEARSCREEN";
        CMD[CMD["WFS_CMD_TTU_DISPLIGHT"] = (TTU_SERVICE_OFFSET + 3)] = "WFS_CMD_TTU_DISPLIGHT";
        CMD[CMD["WFS_CMD_TTU_SET_LED"] = (TTU_SERVICE_OFFSET + 4)] = "WFS_CMD_TTU_SET_LED";
        CMD[CMD["WFS_CMD_TTU_SET_RESOLUTION"] = (TTU_SERVICE_OFFSET + 5)] = "WFS_CMD_TTU_SET_RESOLUTION";
        CMD[CMD["WFS_CMD_TTU_WRITE_FORM"] = (TTU_SERVICE_OFFSET + 6)] = "WFS_CMD_TTU_WRITE_FORM";
        CMD[CMD["WFS_CMD_TTU_READ_FORM"] = (TTU_SERVICE_OFFSET + 7)] = "WFS_CMD_TTU_READ_FORM";
        CMD[CMD["WFS_CMD_TTU_WRITE"] = (TTU_SERVICE_OFFSET + 8)] = "WFS_CMD_TTU_WRITE";
        CMD[CMD["WFS_CMD_TTU_READ"] = (TTU_SERVICE_OFFSET + 9)] = "WFS_CMD_TTU_READ";
        CMD[CMD["WFS_CMD_TTU_RESET"] = (TTU_SERVICE_OFFSET + 10)] = "WFS_CMD_TTU_RESET";
        CMD[CMD["WFS_CMD_TTU_DEFINE_KEYS"] = (TTU_SERVICE_OFFSET + 11)] = "WFS_CMD_TTU_DEFINE_KEYS";
        CMD[CMD["WFS_CMD_TTU_POWER_SAVE_CONTROL"] = (TTU_SERVICE_OFFSET + 12)] = "WFS_CMD_TTU_POWER_SAVE_CONTROL";
        CMD[CMD["WFS_CMD_TTU_SET_LED_EX"] = (TTU_SERVICE_OFFSET + 13)] = "WFS_CMD_TTU_SET_LED_EX";
        CMD[CMD["WFS_CMD_TTU_SYNCHRONIZE_COMMAND"] = (TTU_SERVICE_OFFSET + 14)] = "WFS_CMD_TTU_SYNCHRONIZE_COMMAND";
    })(CMD = TTU.CMD || (TTU.CMD = {}));
    /* TTU Messages */
    var EVENT;
    (function (EVENT) {
        EVENT[EVENT["WFS_EXEE_TTU_FIELDERROR"] = (TTU_SERVICE_OFFSET + 1)] = "WFS_EXEE_TTU_FIELDERROR";
        EVENT[EVENT["WFS_EXEE_TTU_FIELDWARNING"] = (TTU_SERVICE_OFFSET + 2)] = "WFS_EXEE_TTU_FIELDWARNING";
        EVENT[EVENT["WFS_EXEE_TTU_KEY"] = (TTU_SERVICE_OFFSET + 3)] = "WFS_EXEE_TTU_KEY";
        EVENT[EVENT["WFS_SRVE_TTU_DEVICEPOSITION"] = (TTU_SERVICE_OFFSET + 4)] = "WFS_SRVE_TTU_DEVICEPOSITION";
        EVENT[EVENT["WFS_SRVE_TTU_POWER_SAVE_CHANGE"] = (TTU_SERVICE_OFFSET + 5)] = "WFS_SRVE_TTU_POWER_SAVE_CHANGE";
    })(EVENT = TTU.EVENT || (TTU.EVENT = {}));
})(TTU || (TTU = {}));
