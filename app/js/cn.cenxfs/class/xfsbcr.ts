/// <reference path="xfsapi.ts"/>

/**
 * BCR 命令
 * @namespace
*/
namespace BCR {
    const WFS_SERVICE_CLASS_BCR              = (15);
    const WFS_SERVICE_CLASS_VERSION_BCR      = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_BCR         = "BCR";
    const BCR_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_BCR * 100);

    /* BCR Info Commands */
    export enum INF {
        WFS_INF_BCR_STATUS                 = (BCR_SERVICE_OFFSET + 1),
        WFS_INF_BCR_CAPABILITIES           = (BCR_SERVICE_OFFSET + 2)        ,
    }

    /* BCR Execute Commands */
    export enum CMD {
        WFS_CMD_BCR_READ                   = (BCR_SERVICE_OFFSET + 1),
        WFS_CMD_BCR_RESET                  = (BCR_SERVICE_OFFSET + 2),
        WFS_CMD_BCR_SET_GUIDANCE_LIGHT     = (BCR_SERVICE_OFFSET + 3),
        WFS_CMD_BCR_POWER_SAVE_CONTROL     = (BCR_SERVICE_OFFSET + 4),
        WFS_CMD_BCR_SYNCHRONIZE_COMMAND    = (BCR_SERVICE_OFFSET + 5),
    }

    /* BCR Messages */
    export enum EVENT {
        WFS_SRVE_BCR_DEVICEPOSITION        = (BCR_SERVICE_OFFSET + 1),
        WFS_SRVE_BCR_POWER_SAVE_CHANGE     = (BCR_SERVICE_OFFSET + 2)       ,
    }
}