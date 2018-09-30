/// <reference path="xfsapi.ts"/>

/**
 * CHK 命令
 * @namespace
*/
namespace CHK {

    const WFS_SERVICE_CLASS_CHK            = (5);
    const WFS_SERVICE_VERSION_CHK          = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_NAME_CHK             = "CHK";
    const CHK_SERVICE_OFFSET               = (WFS_SERVICE_CLASS_CHK * 100);

    /* CHK Info Commands */
    export enum INF {
        WFS_INF_CHK_STATUS               = (CHK_SERVICE_OFFSET + 1),
        WFS_INF_CHK_CAPABILITIES         = (CHK_SERVICE_OFFSET + 2),
        WFS_INF_CHK_FORM_LIST            = (CHK_SERVICE_OFFSET + 3),
        WFS_INF_CHK_MEDIA_LIST           = (CHK_SERVICE_OFFSET + 4),
        WFS_INF_CHK_QUERY_FORM           = (CHK_SERVICE_OFFSET + 5),
        WFS_INF_CHK_QUERY_MEDIA          = (CHK_SERVICE_OFFSET + 6),
        WFS_INF_CHK_QUERY_FIELD          = (CHK_SERVICE_OFFSET + 7)
    }

    /* CHK Command Verbs */
    export enum CMD {
        WFS_CMD_CHK_PROCESS_FORM         = (CHK_SERVICE_OFFSET + 1),
        WFS_CMD_CHK_RESET                = (CHK_SERVICE_OFFSET + 2),
        WFS_CMD_CHK_SET_GUIDANCE_LIGHT   = (CHK_SERVICE_OFFSET + 3),
        WFS_CMD_CHK_POWER_SAVE_CONTROL   = (CHK_SERVICE_OFFSET + 4),
        WFS_CMD_CHK_SYNCHRONIZE_COMMAND  = (CHK_SERVICE_OFFSET + 5),
    }

    /* CHK Messages */
    export enum EVENT {
        WFS_EXEE_CHK_NOMEDIA             = (CHK_SERVICE_OFFSET + 1),
        WFS_EXEE_CHK_MEDIAINSERTED       = (CHK_SERVICE_OFFSET + 2),
        WFS_SRVE_CHK_MEDIAINSERTED       = (CHK_SERVICE_OFFSET + 3),
        WFS_EXEE_CHK_FIELDERROR          = (CHK_SERVICE_OFFSET + 4),
        WFS_EXEE_CHK_FIELDWARNING        = (CHK_SERVICE_OFFSET + 5),
        WFS_USRE_CHK_INKTHRESHOLD        = (CHK_SERVICE_OFFSET + 6),
        WFS_SRVE_CHK_MEDIADETECTED       = (CHK_SERVICE_OFFSET + 7),
        WFS_SRVE_CHK_DEVICEPOSITION      = (CHK_SERVICE_OFFSET + 8),
        WFS_SRVE_CHK_POWER_SAVE_CHANGE   = (CHK_SERVICE_OFFSET + 9),
    }
}