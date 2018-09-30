/// <reference path="xfsapi.ts"/>

/**
 * CEU 命令
 * @namespace
*/
namespace CEU {
    const WFS_SERVICE_CLASS_CEU              = (12);
    const WFS_SERVICE_CLASS_NAME_CEU         = "CEU";
    const WFS_SERVICE_CLASS_VERSION_CEU      = (0x1E03) /* Version 3.30 */;

    const CEU_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_CEU * 100)    ;

    /* CEU Info Commands */
    export enum INF {
        WFS_INF_CEU_STATUS                  = (CEU_SERVICE_OFFSET + 1),
        WFS_INF_CEU_CAPABILITIES            = (CEU_SERVICE_OFFSET + 2),
        WFS_INF_CEU_FORM_LIST               = (CEU_SERVICE_OFFSET + 3),
        WFS_INF_CEU_QUERY_FORM              = (CEU_SERVICE_OFFSET + 4),
        WFS_INF_CEU_MEDIA_LIST              = (CEU_SERVICE_OFFSET + 5),
        WFS_INF_CEU_QUERY_MEDIA             = (CEU_SERVICE_OFFSET + 6),
        WFS_INF_CEU_QUERY_FIELD             = (CEU_SERVICE_OFFSET + 7)        ,
    }

    /* CEU Execute Commands */
    export enum CMD {
        WFS_CMD_CEU_EMBOSS_CARD            = (CEU_SERVICE_OFFSET + 1),
        WFS_CMD_CEU_RESET                  = (CEU_SERVICE_OFFSET + 2),
        WFS_CMD_CEU_POWER_SAVE_CONTROL     = (CEU_SERVICE_OFFSET + 3),
        WFS_CMD_CEU_EMBOSS_CARD_EX         = (CEU_SERVICE_OFFSET + 4),
        WFS_CMD_CEU_SUPPLY_REPLENISH       = (CEU_SERVICE_OFFSET + 5),
        WFS_CMD_CEU_SYNCHRONIZE_COMMAND    = (CEU_SERVICE_OFFSET + 6)        ,
    }

    /* CEU Messages */
    export enum EVENT {
        WFS_SRVE_CEU_INPUTBINTHRESHOLD     = (CEU_SERVICE_OFFSET + 1),
        WFS_SRVE_CEU_OUTPUTBINTHRESHOLD    = (CEU_SERVICE_OFFSET + 2),
        WFS_SRVE_CEU_RETAINBINTHRESHOLD    = (CEU_SERVICE_OFFSET + 3),
        WFS_EXEE_CEU_FIELDERROR            = (CEU_SERVICE_OFFSET + 4),
        WFS_EXEE_CEU_FIELDWARNING          = (CEU_SERVICE_OFFSET + 5),
        WFS_EXEE_CEU_EMBOSS_FAILURE        = (CEU_SERVICE_OFFSET + 6),
        WFS_SRVE_CEU_MEDIAREMOVED          = (CEU_SERVICE_OFFSET + 7),
        WFS_SRVE_CEU_MEDIADETECTED         = (CEU_SERVICE_OFFSET + 8),
        WFS_SRVE_CEU_DEVICEPOSITION        = (CEU_SERVICE_OFFSET + 9),
        WFS_SRVE_CEU_POWER_SAVE_CHANGE     = (CEU_SERVICE_OFFSET + 10),
        WFS_USRE_CEU_TONERTHRESHOLD        = (CEU_SERVICE_OFFSET + 11)        ,
    }
}