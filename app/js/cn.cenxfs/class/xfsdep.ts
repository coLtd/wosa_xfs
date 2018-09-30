/// <reference path="xfsapi.ts"/>

/**
 * DEP 命令
 * @namespace
*/
namespace DEP {
    const WFS_SERVICE_CLASS_DEP              = (6);
    const WFS_SERVICE_CLASS_VERSION_DEP      = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_DEP         = "DEP";
    const DEP_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_DEP * 100);

    /* DEP Info Commands */
    export enum INF {
        WFS_INF_DEP_STATUS                 = (DEP_SERVICE_OFFSET + 1),
        WFS_INF_DEP_CAPABILITIES           = (DEP_SERVICE_OFFSET + 2),
    }

    /* DEP Execute Commands */
    export enum CMD {
        WFS_CMD_DEP_ENTRY                  = (DEP_SERVICE_OFFSET + 1),
        WFS_CMD_DEP_DISPENSE               = (DEP_SERVICE_OFFSET + 2),
        WFS_CMD_DEP_RETRACT                = (DEP_SERVICE_OFFSET + 3),
        WFS_CMD_DEP_RESET_COUNT            = (DEP_SERVICE_OFFSET + 5),
        WFS_CMD_DEP_RESET                  = (DEP_SERVICE_OFFSET + 6),
        WFS_CMD_DEP_SET_GUIDANCE_LIGHT     = (DEP_SERVICE_OFFSET + 7),
        WFS_CMD_DEP_SUPPLY_REPLENISH       = (DEP_SERVICE_OFFSET + 8),
        WFS_CMD_DEP_POWER_SAVE_CONTROL     = (DEP_SERVICE_OFFSET + 9),
        WFS_CMD_DEP_SYNCHRONIZE_COMMAND    = (DEP_SERVICE_OFFSET + 10)
    }

    /* DEP Messages */
    export enum EVENT {
        WFS_SRVE_DEP_ENVTAKEN              = (DEP_SERVICE_OFFSET + 1),
        WFS_EXEE_DEP_ENVDEPOSITED          = (DEP_SERVICE_OFFSET + 2),
        WFS_EXEE_DEP_DEPOSITERROR          = (DEP_SERVICE_OFFSET + 3),
        WFS_USRE_DEP_DEPTHRESHOLD          = (DEP_SERVICE_OFFSET + 4),
        WFS_USRE_DEP_TONERTHRESHOLD        = (DEP_SERVICE_OFFSET + 5),
        WFS_USRE_DEP_ENVTHRESHOLD          = (DEP_SERVICE_OFFSET + 6),
        WFS_SRVE_DEP_CONTINSERTED          = (DEP_SERVICE_OFFSET + 7),
        WFS_SRVE_DEP_CONTREMOVED           = (DEP_SERVICE_OFFSET + 8),
        WFS_SRVE_DEP_ENVINSERTED           = (DEP_SERVICE_OFFSET + 9),
        WFS_SRVE_DEP_MEDIADETECTED         = (DEP_SERVICE_OFFSET + 10),
        WFS_EXEE_DEP_INSERTDEPOSIT         = (DEP_SERVICE_OFFSET + 11),
        WFS_SRVE_DEP_DEVICEPOSITION        = (DEP_SERVICE_OFFSET + 12),
        WFS_SRVE_DEP_POWER_SAVE_CHANGE     = (DEP_SERVICE_OFFSET + 13),
    }
}