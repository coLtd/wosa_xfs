/// <reference path="xfsapi.ts"/>

/**
 * ALM 命令
 * @namespace
*/
namespace ALM {

    const WFS_SERVICE_CLASS_ALM = 11;
    const WFS_SERVICE_CLASS_VERSION_ALM = 0x0A03; /*Version 3.10 */
    const WFS_SERVICE_CLASS_NAME_ALM = "ALM";
    const ALM_SERVICE_OFFSET = WFS_SERVICE_CLASS_ALM * 100;

    /**
     * INF 命令
     * enum
    */
    export enum INF {
        WFS_INF_ALM_STATUS       = (ALM_SERVICE_OFFSET + 1),
        WFS_INF_ALM_CAPABILITIES = (ALM_SERVICE_OFFSET + 2)
    }

    /**
     * CMD 命令
     * @enum
    */
   export enum CMD {
        WFS_CMD_ALM_SET_ALARM    = (ALM_SERVICE_OFFSET + 1),
        WFS_CMD_ALM_RESET_ALARM  = (ALM_SERVICE_OFFSET + 2),
        WFS_CMD_ALM_RESET        = (ALM_SERVICE_OFFSET + 3),
        WFS_CMD_ALM_SYNCHRONIZE_COMMAND = (ALM_SERVICE_OFFSET + 4)
    }

    /**
     * EVENT
     * @enum
    */
   export enum EVENT {
        WFS_SRVE_ALM_DEVICE_SET = (ALM_SERVICE_OFFSET + 1),
        WFS_SRVE_ALM_DEVICE_RESET = (ALM_SERVICE_OFFSET + 2)
    }
}