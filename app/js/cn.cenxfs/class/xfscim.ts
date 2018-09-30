/// <reference path="xfsapi.ts"/>

/**
 * CHK 命令
 * @namespace
*/
namespace CIM {
    const WFS_SERVICE_CLASS_CIM              = (13);
    const WFS_SERVICE_CLASS_VERSION_CIM      = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_CIM         = "CIM"   ;
    const CIM_SERVICE_OFFSET                 = (WFS_SERVICE_CLASS_CIM * 100);

    /* CIM Info Commands */
    export enum INF {
        WFS_INF_CIM_STATUS                 = (CIM_SERVICE_OFFSET + 1),
        WFS_INF_CIM_CAPABILITIES           = (CIM_SERVICE_OFFSET + 2),
        WFS_INF_CIM_CASH_UNIT_INFO         = (CIM_SERVICE_OFFSET + 3),
        WFS_INF_CIM_TELLER_INFO            = (CIM_SERVICE_OFFSET + 4),
        WFS_INF_CIM_CURRENCY_EXP           = (CIM_SERVICE_OFFSET + 5),
        WFS_INF_CIM_BANKNOTE_TYPES         = (CIM_SERVICE_OFFSET + 6),
        WFS_INF_CIM_CASH_IN_STATUS         = (CIM_SERVICE_OFFSET + 7),
        WFS_INF_CIM_GET_P6_INFO            = (CIM_SERVICE_OFFSET + 8),
        WFS_INF_CIM_GET_P6_SIGNATURE       = (CIM_SERVICE_OFFSET + 9),
        WFS_INF_CIM_GET_ITEM_INFO          = (CIM_SERVICE_OFFSET + 10),
        WFS_INF_CIM_POSITION_CAPABILITIES  = (CIM_SERVICE_OFFSET + 11),
        WFS_INF_CIM_REPLENISH_TARGET       = (CIM_SERVICE_OFFSET + 12),
        WFS_INF_CIM_DEVICELOCK_STATUS      = (CIM_SERVICE_OFFSET + 13),
        WFS_INF_CIM_CASH_UNIT_CAPABILITIES = (CIM_SERVICE_OFFSET + 14),
        WFS_INF_CIM_DEPLETE_SOURCE         = (CIM_SERVICE_OFFSET + 15),
        WFS_INF_CIM_GET_ALL_ITEMS_INFO     = (CIM_SERVICE_OFFSET + 16),
        WFS_INF_CIM_GET_BLACKLIST          = (CIM_SERVICE_OFFSET + 17)        ,
    }

    /* CIM Execute Commands */
    export enum CMD {
        WFS_CMD_CIM_CASH_IN_START          = (CIM_SERVICE_OFFSET + 1),
        WFS_CMD_CIM_CASH_IN                = (CIM_SERVICE_OFFSET + 2),
        WFS_CMD_CIM_CASH_IN_END            = (CIM_SERVICE_OFFSET + 3),
        WFS_CMD_CIM_CASH_IN_ROLLBACK       = (CIM_SERVICE_OFFSET + 4),
        WFS_CMD_CIM_RETRACT                = (CIM_SERVICE_OFFSET + 5),
        WFS_CMD_CIM_OPEN_SHUTTER           = (CIM_SERVICE_OFFSET + 6),
        WFS_CMD_CIM_CLOSE_SHUTTER          = (CIM_SERVICE_OFFSET + 7),
        WFS_CMD_CIM_SET_TELLER_INFO        = (CIM_SERVICE_OFFSET + 8),
        WFS_CMD_CIM_SET_CASH_UNIT_INFO     = (CIM_SERVICE_OFFSET + 9),
        WFS_CMD_CIM_START_EXCHANGE         = (CIM_SERVICE_OFFSET + 10),
        WFS_CMD_CIM_END_EXCHANGE           = (CIM_SERVICE_OFFSET + 11),
        WFS_CMD_CIM_OPEN_SAFE_DOOR         = (CIM_SERVICE_OFFSET + 12),
        WFS_CMD_CIM_RESET                  = (CIM_SERVICE_OFFSET + 13),
        WFS_CMD_CIM_CONFIGURE_CASH_IN_UNITS= (CIM_SERVICE_OFFSET + 14),
        WFS_CMD_CIM_CONFIGURE_NOTETYPES    = (CIM_SERVICE_OFFSET + 15),
        WFS_CMD_CIM_CREATE_P6_SIGNATURE    = (CIM_SERVICE_OFFSET + 16),
        WFS_CMD_CIM_SET_GUIDANCE_LIGHT     = (CIM_SERVICE_OFFSET + 17),
        WFS_CMD_CIM_CONFIGURE_NOTE_READER  = (CIM_SERVICE_OFFSET + 18),
        WFS_CMD_CIM_COMPARE_P6_SIGNATURE   = (CIM_SERVICE_OFFSET + 19),
        WFS_CMD_CIM_POWER_SAVE_CONTROL     = (CIM_SERVICE_OFFSET + 20),
        WFS_CMD_CIM_REPLENISH              = (CIM_SERVICE_OFFSET + 21),
        WFS_CMD_CIM_SET_CASH_IN_LIMIT      = (CIM_SERVICE_OFFSET + 22),
        WFS_CMD_CIM_CASH_UNIT_COUNT        = (CIM_SERVICE_OFFSET + 23),
        WFS_CMD_CIM_DEVICE_LOCK_CONTROL    = (CIM_SERVICE_OFFSET + 24),
        WFS_CMD_CIM_SET_MODE               = (CIM_SERVICE_OFFSET + 25),
        WFS_CMD_CIM_PRESENT_MEDIA          = (CIM_SERVICE_OFFSET + 26),
        WFS_CMD_CIM_DEPLETE                = (CIM_SERVICE_OFFSET + 27),
        WFS_CMD_CIM_SET_BLACKLIST          = (CIM_SERVICE_OFFSET + 28),
        WFS_CMD_CIM_SYNCHRONIZE_COMMAND    = (CIM_SERVICE_OFFSET + 29),
    }
    
    /* CIM Messages */
    export enum EVENT {
        WFS_SRVE_CIM_SAFEDOOROPEN          = (CIM_SERVICE_OFFSET + 1),
        WFS_SRVE_CIM_SAFEDOORCLOSED        = (CIM_SERVICE_OFFSET + 2),
        WFS_USRE_CIM_CASHUNITTHRESHOLD     = (CIM_SERVICE_OFFSET + 3),
        WFS_SRVE_CIM_CASHUNITINFOCHANGED   = (CIM_SERVICE_OFFSET + 4),
        WFS_SRVE_CIM_TELLERINFOCHANGED     = (CIM_SERVICE_OFFSET + 5),
        WFS_EXEE_CIM_CASHUNITERROR         = (CIM_SERVICE_OFFSET + 6),
        WFS_SRVE_CIM_ITEMSTAKEN            = (CIM_SERVICE_OFFSET + 7),
        WFS_SRVE_CIM_COUNTS_CHANGED        = (CIM_SERVICE_OFFSET + 8),
        WFS_EXEE_CIM_INPUTREFUSE           = (CIM_SERVICE_OFFSET + 9),
        WFS_SRVE_CIM_ITEMSPRESENTED        = (CIM_SERVICE_OFFSET + 10),
        WFS_SRVE_CIM_ITEMSINSERTED         = (CIM_SERVICE_OFFSET + 11),
        WFS_EXEE_CIM_NOTEERROR             = (CIM_SERVICE_OFFSET + 12),
        WFS_EXEE_CIM_SUBCASHIN             = (CIM_SERVICE_OFFSET + 13),
        WFS_SRVE_CIM_MEDIADETECTED         = (CIM_SERVICE_OFFSET + 14),
        WFS_EXEE_CIM_INPUT_P6              = (CIM_SERVICE_OFFSET + 15),
        WFS_EXEE_CIM_INFO_AVAILABLE        = (CIM_SERVICE_OFFSET + 16),
        WFS_EXEE_CIM_INSERTITEMS           = (CIM_SERVICE_OFFSET + 17),
        WFS_SRVE_CIM_DEVICEPOSITION        = (CIM_SERVICE_OFFSET + 18),
        WFS_SRVE_CIM_POWER_SAVE_CHANGE     = (CIM_SERVICE_OFFSET + 19),
        WFS_EXEE_CIM_INCOMPLETEREPLENISH   = (CIM_SERVICE_OFFSET + 20),
        WFS_EXEE_CIM_INCOMPLETEDEPLETE     = (CIM_SERVICE_OFFSET + 21),
        WFS_SRVE_CIM_SHUTTERSTATUSCHANGED  = (CIM_SERVICE_OFFSET + 22),
    }
}