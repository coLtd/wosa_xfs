/// <reference path="xfsapi.ts"/>

/**
 * CRD 命令
 * @namespace
*/
namespace CRD {
    const WFS_SERVICE_CLASS_CRD              = (14);
    const WFS_SERVICE_CLASS_VERSION_CRD      = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_CRD         = "CRD";
    const CRD_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_CRD * 100)    ;

    /* CRD Info Commands */
    export enum INF {
        WFS_INF_CRD_STATUS                 = (CRD_SERVICE_OFFSET + 1),
        WFS_INF_CRD_CAPABILITIES           = (CRD_SERVICE_OFFSET + 2),
        WFS_INF_CRD_CARD_UNIT_INFO         = (CRD_SERVICE_OFFSET + 3)        ,
    }

    /* CRD Execute Commands */
    export enum CMD {
        WFS_CMD_CRD_DISPENSE_CARD          = (CRD_SERVICE_OFFSET + 1),
        WFS_CMD_CRD_EJECT_CARD             = (CRD_SERVICE_OFFSET + 2),
        WFS_CMD_CRD_RETAIN_CARD            = (CRD_SERVICE_OFFSET + 3),
        WFS_CMD_CRD_RESET                  = (CRD_SERVICE_OFFSET + 4),
        WFS_CMD_CRD_SET_GUIDANCE_LIGHT     = (CRD_SERVICE_OFFSET + 5),
        WFS_CMD_CRD_SET_CARD_UNIT_INFO     = (CRD_SERVICE_OFFSET + 6),
        WFS_CMD_CRD_POWER_SAVE_CONTROL     = (CRD_SERVICE_OFFSET + 7),
        WFS_CMD_CRD_SYNCHRONIZE_COMMAND    = (CRD_SERVICE_OFFSET + 8),
    }

    /* CRD Events  */
    export enum EVENT {
        WFS_SRVE_CRD_MEDIAREMOVED          = (CRD_SERVICE_OFFSET + 1),
        WFS_SRVE_CRD_CARDUNITINFOCHANGED   = (CRD_SERVICE_OFFSET + 2),
        WFS_SRVE_CRD_MEDIADETECTED         = (CRD_SERVICE_OFFSET + 3),
        WFS_USRE_CRD_CARDUNITTHRESHOLD     = (CRD_SERVICE_OFFSET + 4),
        WFS_EXEE_CRD_CARDUNITERROR         = (CRD_SERVICE_OFFSET + 5),
        WFS_SRVE_CRD_DEVICEPOSITION        = (CRD_SERVICE_OFFSET + 6),
        WFS_SRVE_CRD_POWER_SAVE_CHANGE     = (CRD_SERVICE_OFFSET + 7)        ,
    }
}