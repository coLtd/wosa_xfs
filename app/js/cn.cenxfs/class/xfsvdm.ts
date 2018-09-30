/// <reference path="xfsapi.ts"/>

/**
 * VDM 命令
 * @namespace
*/
namespace VDM {
    const WFS_SERVICE_CLASS_VDM                  = (9);
    const WFS_SERVICE_CLASS_VERSION_VDM          = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_VDM             = "VDM";
    const VDM_SERVICE_OFFSET                     = (WFS_SERVICE_CLASS_VDM * 100)    ;

    /* VDM Info Commands */
    export enum INF {
        WFS_INF_VDM_STATUS                     = (VDM_SERVICE_OFFSET + 1),
        WFS_INF_VDM_CAPABILITIES               = (VDM_SERVICE_OFFSET + 2),
        WFS_INF_VDM_ACTIVE_INTERFACE           = (VDM_SERVICE_OFFSET + 3),
    }

    /* VDM Execute Commands */
    export enum CMD {
        WFS_CMD_VDM_ENTER_MODE_REQ             = (VDM_SERVICE_OFFSET + 1),
        WFS_CMD_VDM_ENTER_MODE_ACK             = (VDM_SERVICE_OFFSET + 2),
        WFS_CMD_VDM_EXIT_MODE_REQ              = (VDM_SERVICE_OFFSET + 3),
        WFS_CMD_VDM_EXIT_MODE_ACK              = (VDM_SERVICE_OFFSET + 4),
        WFS_CMD_VDM_SET_ACTIVE_INTERFACE       = (VDM_SERVICE_OFFSET + 5),
    }

    /* VDM Messages */
    export enum EVENT {
        WFS_SRVE_VDM_ENTER_MODE_REQ            = (VDM_SERVICE_OFFSET + 1),
        WFS_SRVE_VDM_EXIT_MODE_REQ             = (VDM_SERVICE_OFFSET + 2),
        WFS_SYSE_VDM_MODEENTERED               = (VDM_SERVICE_OFFSET + 3),
        WFS_SYSE_VDM_MODEEXITED                = (VDM_SERVICE_OFFSET + 4),
        WFS_SRVE_VDM_INTERFACE_CHANGED         = (VDM_SERVICE_OFFSET + 5)       ,
    }
}