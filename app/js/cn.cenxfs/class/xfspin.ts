/// <reference path="xfsapi.ts"/>

/**
 * PIN 命令
 * @namespace
*/
namespace PIN {
    const WFS_SERVICE_CLASS_PIN                      = (4);
    const WFS_SERVICE_CLASS_VERSION_PIN              = (0x1E03) /* Version 3.30 */;
    const WFS_SERVICE_CLASS_NAME_PIN                 = "PIN";
    const PIN_SERVICE_OFFSET                         = (WFS_SERVICE_CLASS_PIN * 100);

    /* PIN Info Commands */
    export enum INF {
        WFS_INF_PIN_STATUS                         = (PIN_SERVICE_OFFSET + 1),
        WFS_INF_PIN_CAPABILITIES                   = (PIN_SERVICE_OFFSET + 2),
        WFS_INF_PIN_KEY_DETAIL                     = (PIN_SERVICE_OFFSET + 4),
        WFS_INF_PIN_FUNCKEY_DETAIL                 = (PIN_SERVICE_OFFSET + 5),
        WFS_INF_PIN_HSM_TDATA                      = (PIN_SERVICE_OFFSET + 6),
        WFS_INF_PIN_KEY_DETAIL_EX                  = (PIN_SERVICE_OFFSET + 7),
        WFS_INF_PIN_SECUREKEY_DETAIL               = (PIN_SERVICE_OFFSET + 8),
        WFS_INF_PIN_QUERY_LOGICAL_HSM_DETAIL       = (PIN_SERVICE_OFFSET + 9),
        WFS_INF_PIN_QUERY_PCIPTS_DEVICE_ID         = (PIN_SERVICE_OFFSET + 10),
        WFS_INF_PIN_GET_LAYOUT                     = (PIN_SERVICE_OFFSET + 11)
    }

    /* PIN Command Verbs */
    export enum CMD {
        WFS_CMD_PIN_CRYPT                          = (PIN_SERVICE_OFFSET + 1),
        WFS_CMD_PIN_IMPORT_KEY                     = (PIN_SERVICE_OFFSET + 3),
        WFS_CMD_PIN_GET_PIN                        = (PIN_SERVICE_OFFSET + 5),
        WFS_CMD_PIN_GET_PINBLOCK                   = (PIN_SERVICE_OFFSET + 7),
        WFS_CMD_PIN_GET_DATA                       = (PIN_SERVICE_OFFSET + 8),
        WFS_CMD_PIN_INITIALIZATION                 = (PIN_SERVICE_OFFSET + 9),
        WFS_CMD_PIN_LOCAL_DES                      = (PIN_SERVICE_OFFSET + 10),
        WFS_CMD_PIN_LOCAL_EUROCHEQUE               = (PIN_SERVICE_OFFSET + 11),
        WFS_CMD_PIN_LOCAL_VISA                     = (PIN_SERVICE_OFFSET + 12),
        WFS_CMD_PIN_CREATE_OFFSET                  = (PIN_SERVICE_OFFSET + 13),
        WFS_CMD_PIN_DERIVE_KEY                     = (PIN_SERVICE_OFFSET + 14),
        WFS_CMD_PIN_PRESENT_IDC                    = (PIN_SERVICE_OFFSET + 15),
        WFS_CMD_PIN_LOCAL_BANKSYS                  = (PIN_SERVICE_OFFSET + 16),
        WFS_CMD_PIN_BANKSYS_IO                     = (PIN_SERVICE_OFFSET + 17),
        WFS_CMD_PIN_RESET                          = (PIN_SERVICE_OFFSET + 18),
        WFS_CMD_PIN_HSM_SET_TDATA                  = (PIN_SERVICE_OFFSET + 19),
        WFS_CMD_PIN_SECURE_MSG_SEND                = (PIN_SERVICE_OFFSET + 20),
        WFS_CMD_PIN_SECURE_MSG_RECEIVE             = (PIN_SERVICE_OFFSET + 21),
        WFS_CMD_PIN_GET_JOURNAL                    = (PIN_SERVICE_OFFSET + 22),
        WFS_CMD_PIN_IMPORT_KEY_EX                  = (PIN_SERVICE_OFFSET + 23),
        WFS_CMD_PIN_ENC_IO                         = (PIN_SERVICE_OFFSET + 24),
        WFS_CMD_PIN_HSM_INIT                       = (PIN_SERVICE_OFFSET + 25),
        WFS_CMD_PIN_IMPORT_RSA_PUBLIC_KEY          = (PIN_SERVICE_OFFSET + 26),
        WFS_CMD_PIN_EXPORT_RSA_ISSUER_SIGNED_ITEM  = (PIN_SERVICE_OFFSET + 27),
        WFS_CMD_PIN_IMPORT_RSA_SIGNED_DES_KEY      = (PIN_SERVICE_OFFSET + 28),
        WFS_CMD_PIN_GENERATE_RSA_KEY_PAIR          = (PIN_SERVICE_OFFSET + 29),
        WFS_CMD_PIN_EXPORT_RSA_EPP_SIGNED_ITEM     = (PIN_SERVICE_OFFSET + 30),
        WFS_CMD_PIN_LOAD_CERTIFICATE               = (PIN_SERVICE_OFFSET + 31),
        WFS_CMD_PIN_GET_CERTIFICATE                = (PIN_SERVICE_OFFSET + 32),
        WFS_CMD_PIN_REPLACE_CERTIFICATE            = (PIN_SERVICE_OFFSET + 33),
        WFS_CMD_PIN_START_KEY_EXCHANGE             = (PIN_SERVICE_OFFSET + 34),
        WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY= (PIN_SERVICE_OFFSET + 35),
        WFS_CMD_PIN_EMV_IMPORT_PUBLIC_KEY          = (PIN_SERVICE_OFFSET + 36),
        WFS_CMD_PIN_DIGEST                         = (PIN_SERVICE_OFFSET + 37),
        WFS_CMD_PIN_SECUREKEY_ENTRY                = (PIN_SERVICE_OFFSET + 38),
        WFS_CMD_PIN_GENERATE_KCV                   = (PIN_SERVICE_OFFSET + 39),
        WFS_CMD_PIN_SET_GUIDANCE_LIGHT             = (PIN_SERVICE_OFFSET + 41),
        WFS_CMD_PIN_MAINTAIN_PIN                   = (PIN_SERVICE_OFFSET + 42),
        WFS_CMD_PIN_KEYPRESS_BEEP                  = (PIN_SERVICE_OFFSET + 43),
        WFS_CMD_PIN_SET_PINBLOCK_DATA              = (PIN_SERVICE_OFFSET + 44),
        WFS_CMD_PIN_SET_LOGICAL_HSM                = (PIN_SERVICE_OFFSET + 45),
        WFS_CMD_PIN_IMPORT_KEYBLOCK                = (PIN_SERVICE_OFFSET + 46),
        WFS_CMD_PIN_POWER_SAVE_CONTROL             = (PIN_SERVICE_OFFSET + 47),
        WFS_CMD_PIN_LOAD_CERTIFICATE_EX            = (PIN_SERVICE_OFFSET + 48),
        WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY_EX= (PIN_SERVICE_OFFSET + 49),
        WFS_CMD_PIN_DEFINE_LAYOUT                  = (PIN_SERVICE_OFFSET + 50),
        WFS_CMD_PIN_START_AUTHENTICATE             = (PIN_SERVICE_OFFSET + 51),
        WFS_CMD_PIN_AUTHENTICATE                   = (PIN_SERVICE_OFFSET + 52),
        WFS_CMD_PIN_GET_PINBLOCK_EX                = (PIN_SERVICE_OFFSET + 53),
        WFS_CMD_PIN_SYNCHRONIZE_COMMAND            = (PIN_SERVICE_OFFSET + 54)        
    }

    /* PIN Messages */
    export enum EVENT {
        WFS_EXEE_PIN_KEY                           = (PIN_SERVICE_OFFSET + 1),
        WFS_SRVE_PIN_INITIALIZED                   = (PIN_SERVICE_OFFSET + 2),
        WFS_SRVE_PIN_ILLEGAL_KEY_ACCESS            = (PIN_SERVICE_OFFSET + 3),
        WFS_SRVE_PIN_OPT_REQUIRED                  = (PIN_SERVICE_OFFSET + 4),
        WFS_SRVE_PIN_HSM_TDATA_CHANGED             = (PIN_SERVICE_OFFSET + 5),
        WFS_SRVE_PIN_CERTIFICATE_CHANGE            = (PIN_SERVICE_OFFSET + 6),
        WFS_SRVE_PIN_HSM_CHANGED                   = (PIN_SERVICE_OFFSET + 7),
        WFS_EXEE_PIN_ENTERDATA                     = (PIN_SERVICE_OFFSET + 8),
        WFS_SRVE_PIN_DEVICEPOSITION                = (PIN_SERVICE_OFFSET + 9),
        WFS_SRVE_PIN_POWER_SAVE_CHANGE             = (PIN_SERVICE_OFFSET + 10),
        WFS_EXEE_PIN_LAYOUT                        = (PIN_SERVICE_OFFSET + 11)
    }
}