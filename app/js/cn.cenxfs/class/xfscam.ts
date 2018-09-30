/// <reference path="xfsapi.ts"/>

/**
 * CAM 命令
 * @namespace
*/
namespace CAM {
    const WFS_SERVICE_CLASS_CAM              = (10);
    const WFS_SERVICE_VERSION_CAM            = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_NAME_CAM               = "CAM";

    const CAM_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_CAM * 100);

    /* CAM Info Commands */
    export enum INF {
        WFS_INF_CAM_STATUS                 = (CAM_SERVICE_OFFSET + 1),
        WFS_INF_CAM_CAPABILITIES           = (CAM_SERVICE_OFFSET + 2),
    }

    /* CAM Execute Commands */
    export enum CMD {
        WFS_CMD_CAM_TAKE_PICTURE           = (CAM_SERVICE_OFFSET + 1),
        WFS_CMD_CAM_RESET                  = (CAM_SERVICE_OFFSET + 2),
        WFS_CMD_CAM_TAKE_PICTURE_EX        = (CAM_SERVICE_OFFSET + 3),
        WFS_CMD_CAM_SYNCHRONIZE_COMMAND    = (CAM_SERVICE_OFFSET + 4)        ,
    }

    /* CAM Messages */
    export enum EVENT {
        WFS_USRE_CAM_MEDIATHRESHOLD        = (CAM_SERVICE_OFFSET + 1),
        WFS_EXEE_CAM_INVALIDDATA           = (CAM_SERVICE_OFFSET + 2)       ,
    }
}