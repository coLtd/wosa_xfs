/// <reference path="xfsapi.ts"/>

/**
 * CDM 命令
 * @namespace
*/
namespace CDM {
    const WFS_SERVICE_CLASS_CDM                    = (3);
    const WFS_SERVICE_CLASS_VERSION_CDM            = (0x1E03); /* Version 3.30 */
    const WFS_SERVICE_CLASS_NAME_CDM               = "CDM";

    const CDM_SERVICE_OFFSET                       = (WFS_SERVICE_CLASS_CDM * 100);

    /* CDM Info Commands */
    export enum INF {
        WFS_INF_CDM_STATUS                       = (CDM_SERVICE_OFFSET + 1),
        WFS_INF_CDM_CAPABILITIES                 = (CDM_SERVICE_OFFSET + 2),
        WFS_INF_CDM_CASH_UNIT_INFO               = (CDM_SERVICE_OFFSET + 3),
        WFS_INF_CDM_TELLER_INFO                  = (CDM_SERVICE_OFFSET + 4),
        WFS_INF_CDM_CURRENCY_EXP                 = (CDM_SERVICE_OFFSET + 6),
        WFS_INF_CDM_MIX_TYPES                    = (CDM_SERVICE_OFFSET + 7),
        WFS_INF_CDM_MIX_TABLE                    = (CDM_SERVICE_OFFSET + 8),
        WFS_INF_CDM_PRESENT_STATUS               = (CDM_SERVICE_OFFSET + 9),
        WFS_INF_CDM_GET_ITEM_INFO                = (CDM_SERVICE_OFFSET + 10),
        WFS_INF_CDM_GET_BLACKLIST                = (CDM_SERVICE_OFFSET + 11),
        WFS_INF_CDM_GET_ALL_ITEMS_INFO           = (CDM_SERVICE_OFFSET + 12)
    }

    /* CDM Execute Commands */
    export enum CMD {
        WFS_CMD_CDM_DENOMINATE                   = (CDM_SERVICE_OFFSET + 1),
        WFS_CMD_CDM_DISPENSE                     = (CDM_SERVICE_OFFSET + 2),
        WFS_CMD_CDM_PRESENT                      = (CDM_SERVICE_OFFSET + 3),
        WFS_CMD_CDM_REJECT                       = (CDM_SERVICE_OFFSET + 4),
        WFS_CMD_CDM_RETRACT                      = (CDM_SERVICE_OFFSET + 5),
        WFS_CMD_CDM_OPEN_SHUTTER                 = (CDM_SERVICE_OFFSET + 7),
        WFS_CMD_CDM_CLOSE_SHUTTER                = (CDM_SERVICE_OFFSET + 8),
        WFS_CMD_CDM_SET_TELLER_INFO              = (CDM_SERVICE_OFFSET + 9),
        WFS_CMD_CDM_SET_CASH_UNIT_INFO           = (CDM_SERVICE_OFFSET + 10),
        WFS_CMD_CDM_START_EXCHANGE               = (CDM_SERVICE_OFFSET + 11),
        WFS_CMD_CDM_END_EXCHANGE                 = (CDM_SERVICE_OFFSET + 12),
        WFS_CMD_CDM_OPEN_SAFE_DOOR               = (CDM_SERVICE_OFFSET + 13),
        WFS_CMD_CDM_CALIBRATE_CASH_UNIT          = (CDM_SERVICE_OFFSET + 15),
        WFS_CMD_CDM_SET_MIX_TABLE                = (CDM_SERVICE_OFFSET + 20),
        WFS_CMD_CDM_RESET                        = (CDM_SERVICE_OFFSET + 21),
        WFS_CMD_CDM_TEST_CASH_UNITS              = (CDM_SERVICE_OFFSET + 22),
        WFS_CMD_CDM_COUNT                        = (CDM_SERVICE_OFFSET + 23),
        WFS_CMD_CDM_SET_GUIDANCE_LIGHT           = (CDM_SERVICE_OFFSET + 24),
        WFS_CMD_CDM_POWER_SAVE_CONTROL           = (CDM_SERVICE_OFFSET + 25),
        WFS_CMD_CDM_PREPARE_DISPENSE             = (CDM_SERVICE_OFFSET + 26),
        WFS_CMD_CDM_SET_BLACKLIST                = (CDM_SERVICE_OFFSET + 27),
        WFS_CMD_CDM_SYNCHRONIZE_COMMAND          = (CDM_SERVICE_OFFSET + 28)
    }

    /* CDM Messages */
    export enum EVENT {
        WFS_SRVE_CDM_SAFEDOOROPEN                = (CDM_SERVICE_OFFSET + 1),
        WFS_SRVE_CDM_SAFEDOORCLOSED              = (CDM_SERVICE_OFFSET + 2),
        WFS_USRE_CDM_CASHUNITTHRESHOLD           = (CDM_SERVICE_OFFSET + 3),
        WFS_SRVE_CDM_CASHUNITINFOCHANGED         = (CDM_SERVICE_OFFSET + 4),
        WFS_SRVE_CDM_TELLERINFOCHANGED           = (CDM_SERVICE_OFFSET + 5),
        WFS_EXEE_CDM_DELAYEDDISPENSE             = (CDM_SERVICE_OFFSET + 6),
        WFS_EXEE_CDM_STARTDISPENSE               = (CDM_SERVICE_OFFSET + 7),
        WFS_EXEE_CDM_CASHUNITERROR               = (CDM_SERVICE_OFFSET + 8),
        WFS_SRVE_CDM_ITEMSTAKEN                  = (CDM_SERVICE_OFFSET + 9),
        WFS_EXEE_CDM_PARTIALDISPENSE             = (CDM_SERVICE_OFFSET + 10),
        WFS_EXEE_CDM_SUBDISPENSEOK               = (CDM_SERVICE_OFFSET + 11),
        WFS_SRVE_CDM_ITEMSPRESENTED              = (CDM_SERVICE_OFFSET + 13),
        WFS_SRVE_CDM_COUNTS_CHANGED              = (CDM_SERVICE_OFFSET + 14),
        WFS_EXEE_CDM_INCOMPLETEDISPENSE          = (CDM_SERVICE_OFFSET + 15),
        WFS_EXEE_CDM_NOTEERROR                   = (CDM_SERVICE_OFFSET + 16),
        WFS_SRVE_CDM_MEDIADETECTED               = (CDM_SERVICE_OFFSET + 17),
        WFS_EXEE_CDM_INPUT_P6                    = (CDM_SERVICE_OFFSET + 18),
        WFS_SRVE_CDM_DEVICEPOSITION              = (CDM_SERVICE_OFFSET + 19),
        WFS_SRVE_CDM_POWER_SAVE_CHANGE           = (CDM_SERVICE_OFFSET + 20),
        WFS_EXEE_CDM_INFO_AVAILABLE              = (CDM_SERVICE_OFFSET + 21),
        WFS_EXEE_CDM_INCOMPLETERETRACT           = (CDM_SERVICE_OFFSET + 22),
        WFS_SRVE_CDM_SHUTTERSTATUSCHANGED        = (CDM_SERVICE_OFFSET + 23)        
    }
}