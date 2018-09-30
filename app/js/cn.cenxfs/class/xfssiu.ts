/// <reference path="xfsapi.ts"/>

/**
 * SIU 命令
 * @namespace
*/
namespace SIU {
    const WFS_SERVICE_CLASS_SIU              = (8);
    const WFS_SERVICE_CLASS_NAME_SIU         = "SIU";
    const WFS_SERVICE_CLASS_VERSION_SIU      = (0x1E03) /* Version 3.30 */  ;
    const SIU_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_SIU * 100)   ;
    
    /* SIU Info Commands */
    export enum INF {
        WFS_INF_SIU_STATUS                 = (SIU_SERVICE_OFFSET + 1),
        WFS_INF_SIU_CAPABILITIES           = (SIU_SERVICE_OFFSET + 2),
        WFS_INF_SIU_GET_AUTOSTARTUP_TIME   = (SIU_SERVICE_OFFSET + 3),
    }

    /* SIU Command Verbs */
    export enum CMD {
        WFS_CMD_SIU_ENABLE_EVENTS          = (SIU_SERVICE_OFFSET + 1),
        WFS_CMD_SIU_SET_PORTS              = (SIU_SERVICE_OFFSET + 2),
        WFS_CMD_SIU_SET_DOOR               = (SIU_SERVICE_OFFSET + 3),
        WFS_CMD_SIU_SET_INDICATOR          = (SIU_SERVICE_OFFSET + 4),
        WFS_CMD_SIU_SET_AUXILIARY          = (SIU_SERVICE_OFFSET + 5),
        WFS_CMD_SIU_SET_GUIDLIGHT          = (SIU_SERVICE_OFFSET + 6),
        WFS_CMD_SIU_RESET                  = (SIU_SERVICE_OFFSET + 7),
        WFS_CMD_SIU_POWER_SAVE_CONTROL     = (SIU_SERVICE_OFFSET + 8),
        WFS_CMD_SIU_SET_AUTOSTARTUP_TIME   = (SIU_SERVICE_OFFSET + 9),
        WFS_CMD_SIU_SYNCHRONIZE_COMMAND    = (SIU_SERVICE_OFFSET + 10),
    }

    /* SIU Messages */
    export enum EVENT {
        WFS_SRVE_SIU_PORT_STATUS           = (SIU_SERVICE_OFFSET + 1),
        WFS_EXEE_SIU_PORT_ERROR            = (SIU_SERVICE_OFFSET + 2),
        WFS_SRVE_SIU_POWER_SAVE_CHANGE     = (SIU_SERVICE_OFFSET + 3)        ,
    }
}