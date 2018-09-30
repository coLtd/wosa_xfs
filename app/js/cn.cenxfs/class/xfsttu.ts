/// <reference path="xfsapi.ts"/>

/**
 * PIN 命令
 * @namespace
*/

namespace TTU {
    const WFS_SERVICE_CLASS_TTU              = (7);
    const WFS_SERVICE_CLASS_NAME_TTU         = "TTU";
    const WFS_SERVICE_CLASS_VERSION_TTU      = (0x1E03) /* Version 3.30 */;
    const TTU_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_TTU * 100)   ;

    /* TTU Info Commands */
    export enum INF {
        WFS_INF_TTU_STATUS                 = (TTU_SERVICE_OFFSET + 1),
        WFS_INF_TTU_CAPABILITIES           = (TTU_SERVICE_OFFSET + 2),
        WFS_INF_TTU_FORM_LIST              = (TTU_SERVICE_OFFSET + 3),
        WFS_INF_TTU_QUERY_FORM             = (TTU_SERVICE_OFFSET + 4),
        WFS_INF_TTU_QUERY_FIELD            = (TTU_SERVICE_OFFSET + 5),
        WFS_INF_TTU_KEY_DETAIL             = (TTU_SERVICE_OFFSET + 6),
    }

    /* TTU Command Verbs */
    export enum CMD {
        WFS_CMD_TTU_BEEP                   = (TTU_SERVICE_OFFSET + 1),
        WFS_CMD_TTU_CLEARSCREEN            = (TTU_SERVICE_OFFSET + 2),
        WFS_CMD_TTU_DISPLIGHT              = (TTU_SERVICE_OFFSET + 3),
        WFS_CMD_TTU_SET_LED                = (TTU_SERVICE_OFFSET + 4),
        WFS_CMD_TTU_SET_RESOLUTION         = (TTU_SERVICE_OFFSET + 5),
        WFS_CMD_TTU_WRITE_FORM             = (TTU_SERVICE_OFFSET + 6),
        WFS_CMD_TTU_READ_FORM              = (TTU_SERVICE_OFFSET + 7),
        WFS_CMD_TTU_WRITE                  = (TTU_SERVICE_OFFSET + 8),
        WFS_CMD_TTU_READ                   = (TTU_SERVICE_OFFSET + 9),
        WFS_CMD_TTU_RESET                  = (TTU_SERVICE_OFFSET + 10),
        WFS_CMD_TTU_DEFINE_KEYS            = (TTU_SERVICE_OFFSET + 11),
        WFS_CMD_TTU_POWER_SAVE_CONTROL     = (TTU_SERVICE_OFFSET + 12),
        WFS_CMD_TTU_SET_LED_EX             = (TTU_SERVICE_OFFSET + 13),
        WFS_CMD_TTU_SYNCHRONIZE_COMMAND    = (TTU_SERVICE_OFFSET + 14)
    }

    /* TTU Messages */
    export enum EVENT {
        WFS_EXEE_TTU_FIELDERROR             = (TTU_SERVICE_OFFSET + 1),
        WFS_EXEE_TTU_FIELDWARNING           = (TTU_SERVICE_OFFSET + 2),
        WFS_EXEE_TTU_KEY                    = (TTU_SERVICE_OFFSET + 3),
        WFS_SRVE_TTU_DEVICEPOSITION         = (TTU_SERVICE_OFFSET + 4),
        WFS_SRVE_TTU_POWER_SAVE_CHANGE      = (TTU_SERVICE_OFFSET + 5),
    }
}