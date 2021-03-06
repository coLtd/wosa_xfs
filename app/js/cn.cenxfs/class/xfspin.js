/// <reference path="xfsapi.ts"/>
/**
 * PIN 命令
 * @namespace
*/
var PIN;
(function (PIN) {
    var WFS_SERVICE_CLASS_PIN = (4);
    var WFS_SERVICE_CLASS_VERSION_PIN = (0x1E03) /* Version 3.30 */;
    var WFS_SERVICE_CLASS_NAME_PIN = "PIN";
    var PIN_SERVICE_OFFSET = (WFS_SERVICE_CLASS_PIN * 100);
    /* PIN Info Commands */
    var INF;
    (function (INF) {
        INF[INF["WFS_INF_PIN_STATUS"] = (PIN_SERVICE_OFFSET + 1)] = "WFS_INF_PIN_STATUS";
        INF[INF["WFS_INF_PIN_CAPABILITIES"] = (PIN_SERVICE_OFFSET + 2)] = "WFS_INF_PIN_CAPABILITIES";
        INF[INF["WFS_INF_PIN_KEY_DETAIL"] = (PIN_SERVICE_OFFSET + 4)] = "WFS_INF_PIN_KEY_DETAIL";
        INF[INF["WFS_INF_PIN_FUNCKEY_DETAIL"] = (PIN_SERVICE_OFFSET + 5)] = "WFS_INF_PIN_FUNCKEY_DETAIL";
        INF[INF["WFS_INF_PIN_HSM_TDATA"] = (PIN_SERVICE_OFFSET + 6)] = "WFS_INF_PIN_HSM_TDATA";
        INF[INF["WFS_INF_PIN_KEY_DETAIL_EX"] = (PIN_SERVICE_OFFSET + 7)] = "WFS_INF_PIN_KEY_DETAIL_EX";
        INF[INF["WFS_INF_PIN_SECUREKEY_DETAIL"] = (PIN_SERVICE_OFFSET + 8)] = "WFS_INF_PIN_SECUREKEY_DETAIL";
        INF[INF["WFS_INF_PIN_QUERY_LOGICAL_HSM_DETAIL"] = (PIN_SERVICE_OFFSET + 9)] = "WFS_INF_PIN_QUERY_LOGICAL_HSM_DETAIL";
        INF[INF["WFS_INF_PIN_QUERY_PCIPTS_DEVICE_ID"] = (PIN_SERVICE_OFFSET + 10)] = "WFS_INF_PIN_QUERY_PCIPTS_DEVICE_ID";
        INF[INF["WFS_INF_PIN_GET_LAYOUT"] = (PIN_SERVICE_OFFSET + 11)] = "WFS_INF_PIN_GET_LAYOUT";
    })(INF = PIN.INF || (PIN.INF = {}));
    /* PIN Command Verbs */
    var CMD;
    (function (CMD) {
        CMD[CMD["WFS_CMD_PIN_CRYPT"] = (PIN_SERVICE_OFFSET + 1)] = "WFS_CMD_PIN_CRYPT";
        CMD[CMD["WFS_CMD_PIN_IMPORT_KEY"] = (PIN_SERVICE_OFFSET + 3)] = "WFS_CMD_PIN_IMPORT_KEY";
        CMD[CMD["WFS_CMD_PIN_GET_PIN"] = (PIN_SERVICE_OFFSET + 5)] = "WFS_CMD_PIN_GET_PIN";
        CMD[CMD["WFS_CMD_PIN_GET_PINBLOCK"] = (PIN_SERVICE_OFFSET + 7)] = "WFS_CMD_PIN_GET_PINBLOCK";
        CMD[CMD["WFS_CMD_PIN_GET_DATA"] = (PIN_SERVICE_OFFSET + 8)] = "WFS_CMD_PIN_GET_DATA";
        CMD[CMD["WFS_CMD_PIN_INITIALIZATION"] = (PIN_SERVICE_OFFSET + 9)] = "WFS_CMD_PIN_INITIALIZATION";
        CMD[CMD["WFS_CMD_PIN_LOCAL_DES"] = (PIN_SERVICE_OFFSET + 10)] = "WFS_CMD_PIN_LOCAL_DES";
        CMD[CMD["WFS_CMD_PIN_LOCAL_EUROCHEQUE"] = (PIN_SERVICE_OFFSET + 11)] = "WFS_CMD_PIN_LOCAL_EUROCHEQUE";
        CMD[CMD["WFS_CMD_PIN_LOCAL_VISA"] = (PIN_SERVICE_OFFSET + 12)] = "WFS_CMD_PIN_LOCAL_VISA";
        CMD[CMD["WFS_CMD_PIN_CREATE_OFFSET"] = (PIN_SERVICE_OFFSET + 13)] = "WFS_CMD_PIN_CREATE_OFFSET";
        CMD[CMD["WFS_CMD_PIN_DERIVE_KEY"] = (PIN_SERVICE_OFFSET + 14)] = "WFS_CMD_PIN_DERIVE_KEY";
        CMD[CMD["WFS_CMD_PIN_PRESENT_IDC"] = (PIN_SERVICE_OFFSET + 15)] = "WFS_CMD_PIN_PRESENT_IDC";
        CMD[CMD["WFS_CMD_PIN_LOCAL_BANKSYS"] = (PIN_SERVICE_OFFSET + 16)] = "WFS_CMD_PIN_LOCAL_BANKSYS";
        CMD[CMD["WFS_CMD_PIN_BANKSYS_IO"] = (PIN_SERVICE_OFFSET + 17)] = "WFS_CMD_PIN_BANKSYS_IO";
        CMD[CMD["WFS_CMD_PIN_RESET"] = (PIN_SERVICE_OFFSET + 18)] = "WFS_CMD_PIN_RESET";
        CMD[CMD["WFS_CMD_PIN_HSM_SET_TDATA"] = (PIN_SERVICE_OFFSET + 19)] = "WFS_CMD_PIN_HSM_SET_TDATA";
        CMD[CMD["WFS_CMD_PIN_SECURE_MSG_SEND"] = (PIN_SERVICE_OFFSET + 20)] = "WFS_CMD_PIN_SECURE_MSG_SEND";
        CMD[CMD["WFS_CMD_PIN_SECURE_MSG_RECEIVE"] = (PIN_SERVICE_OFFSET + 21)] = "WFS_CMD_PIN_SECURE_MSG_RECEIVE";
        CMD[CMD["WFS_CMD_PIN_GET_JOURNAL"] = (PIN_SERVICE_OFFSET + 22)] = "WFS_CMD_PIN_GET_JOURNAL";
        CMD[CMD["WFS_CMD_PIN_IMPORT_KEY_EX"] = (PIN_SERVICE_OFFSET + 23)] = "WFS_CMD_PIN_IMPORT_KEY_EX";
        CMD[CMD["WFS_CMD_PIN_ENC_IO"] = (PIN_SERVICE_OFFSET + 24)] = "WFS_CMD_PIN_ENC_IO";
        CMD[CMD["WFS_CMD_PIN_HSM_INIT"] = (PIN_SERVICE_OFFSET + 25)] = "WFS_CMD_PIN_HSM_INIT";
        CMD[CMD["WFS_CMD_PIN_IMPORT_RSA_PUBLIC_KEY"] = (PIN_SERVICE_OFFSET + 26)] = "WFS_CMD_PIN_IMPORT_RSA_PUBLIC_KEY";
        CMD[CMD["WFS_CMD_PIN_EXPORT_RSA_ISSUER_SIGNED_ITEM"] = (PIN_SERVICE_OFFSET + 27)] = "WFS_CMD_PIN_EXPORT_RSA_ISSUER_SIGNED_ITEM";
        CMD[CMD["WFS_CMD_PIN_IMPORT_RSA_SIGNED_DES_KEY"] = (PIN_SERVICE_OFFSET + 28)] = "WFS_CMD_PIN_IMPORT_RSA_SIGNED_DES_KEY";
        CMD[CMD["WFS_CMD_PIN_GENERATE_RSA_KEY_PAIR"] = (PIN_SERVICE_OFFSET + 29)] = "WFS_CMD_PIN_GENERATE_RSA_KEY_PAIR";
        CMD[CMD["WFS_CMD_PIN_EXPORT_RSA_EPP_SIGNED_ITEM"] = (PIN_SERVICE_OFFSET + 30)] = "WFS_CMD_PIN_EXPORT_RSA_EPP_SIGNED_ITEM";
        CMD[CMD["WFS_CMD_PIN_LOAD_CERTIFICATE"] = (PIN_SERVICE_OFFSET + 31)] = "WFS_CMD_PIN_LOAD_CERTIFICATE";
        CMD[CMD["WFS_CMD_PIN_GET_CERTIFICATE"] = (PIN_SERVICE_OFFSET + 32)] = "WFS_CMD_PIN_GET_CERTIFICATE";
        CMD[CMD["WFS_CMD_PIN_REPLACE_CERTIFICATE"] = (PIN_SERVICE_OFFSET + 33)] = "WFS_CMD_PIN_REPLACE_CERTIFICATE";
        CMD[CMD["WFS_CMD_PIN_START_KEY_EXCHANGE"] = (PIN_SERVICE_OFFSET + 34)] = "WFS_CMD_PIN_START_KEY_EXCHANGE";
        CMD[CMD["WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY"] = (PIN_SERVICE_OFFSET + 35)] = "WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY";
        CMD[CMD["WFS_CMD_PIN_EMV_IMPORT_PUBLIC_KEY"] = (PIN_SERVICE_OFFSET + 36)] = "WFS_CMD_PIN_EMV_IMPORT_PUBLIC_KEY";
        CMD[CMD["WFS_CMD_PIN_DIGEST"] = (PIN_SERVICE_OFFSET + 37)] = "WFS_CMD_PIN_DIGEST";
        CMD[CMD["WFS_CMD_PIN_SECUREKEY_ENTRY"] = (PIN_SERVICE_OFFSET + 38)] = "WFS_CMD_PIN_SECUREKEY_ENTRY";
        CMD[CMD["WFS_CMD_PIN_GENERATE_KCV"] = (PIN_SERVICE_OFFSET + 39)] = "WFS_CMD_PIN_GENERATE_KCV";
        CMD[CMD["WFS_CMD_PIN_SET_GUIDANCE_LIGHT"] = (PIN_SERVICE_OFFSET + 41)] = "WFS_CMD_PIN_SET_GUIDANCE_LIGHT";
        CMD[CMD["WFS_CMD_PIN_MAINTAIN_PIN"] = (PIN_SERVICE_OFFSET + 42)] = "WFS_CMD_PIN_MAINTAIN_PIN";
        CMD[CMD["WFS_CMD_PIN_KEYPRESS_BEEP"] = (PIN_SERVICE_OFFSET + 43)] = "WFS_CMD_PIN_KEYPRESS_BEEP";
        CMD[CMD["WFS_CMD_PIN_SET_PINBLOCK_DATA"] = (PIN_SERVICE_OFFSET + 44)] = "WFS_CMD_PIN_SET_PINBLOCK_DATA";
        CMD[CMD["WFS_CMD_PIN_SET_LOGICAL_HSM"] = (PIN_SERVICE_OFFSET + 45)] = "WFS_CMD_PIN_SET_LOGICAL_HSM";
        CMD[CMD["WFS_CMD_PIN_IMPORT_KEYBLOCK"] = (PIN_SERVICE_OFFSET + 46)] = "WFS_CMD_PIN_IMPORT_KEYBLOCK";
        CMD[CMD["WFS_CMD_PIN_POWER_SAVE_CONTROL"] = (PIN_SERVICE_OFFSET + 47)] = "WFS_CMD_PIN_POWER_SAVE_CONTROL";
        CMD[CMD["WFS_CMD_PIN_LOAD_CERTIFICATE_EX"] = (PIN_SERVICE_OFFSET + 48)] = "WFS_CMD_PIN_LOAD_CERTIFICATE_EX";
        CMD[CMD["WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY_EX"] = (PIN_SERVICE_OFFSET + 49)] = "WFS_CMD_PIN_IMPORT_RSA_ENCIPHERED_PKCS7_KEY_EX";
        CMD[CMD["WFS_CMD_PIN_DEFINE_LAYOUT"] = (PIN_SERVICE_OFFSET + 50)] = "WFS_CMD_PIN_DEFINE_LAYOUT";
        CMD[CMD["WFS_CMD_PIN_START_AUTHENTICATE"] = (PIN_SERVICE_OFFSET + 51)] = "WFS_CMD_PIN_START_AUTHENTICATE";
        CMD[CMD["WFS_CMD_PIN_AUTHENTICATE"] = (PIN_SERVICE_OFFSET + 52)] = "WFS_CMD_PIN_AUTHENTICATE";
        CMD[CMD["WFS_CMD_PIN_GET_PINBLOCK_EX"] = (PIN_SERVICE_OFFSET + 53)] = "WFS_CMD_PIN_GET_PINBLOCK_EX";
        CMD[CMD["WFS_CMD_PIN_SYNCHRONIZE_COMMAND"] = (PIN_SERVICE_OFFSET + 54)] = "WFS_CMD_PIN_SYNCHRONIZE_COMMAND";
    })(CMD = PIN.CMD || (PIN.CMD = {}));
    /* PIN Messages */
    var EVENT;
    (function (EVENT) {
        EVENT[EVENT["WFS_EXEE_PIN_KEY"] = (PIN_SERVICE_OFFSET + 1)] = "WFS_EXEE_PIN_KEY";
        EVENT[EVENT["WFS_SRVE_PIN_INITIALIZED"] = (PIN_SERVICE_OFFSET + 2)] = "WFS_SRVE_PIN_INITIALIZED";
        EVENT[EVENT["WFS_SRVE_PIN_ILLEGAL_KEY_ACCESS"] = (PIN_SERVICE_OFFSET + 3)] = "WFS_SRVE_PIN_ILLEGAL_KEY_ACCESS";
        EVENT[EVENT["WFS_SRVE_PIN_OPT_REQUIRED"] = (PIN_SERVICE_OFFSET + 4)] = "WFS_SRVE_PIN_OPT_REQUIRED";
        EVENT[EVENT["WFS_SRVE_PIN_HSM_TDATA_CHANGED"] = (PIN_SERVICE_OFFSET + 5)] = "WFS_SRVE_PIN_HSM_TDATA_CHANGED";
        EVENT[EVENT["WFS_SRVE_PIN_CERTIFICATE_CHANGE"] = (PIN_SERVICE_OFFSET + 6)] = "WFS_SRVE_PIN_CERTIFICATE_CHANGE";
        EVENT[EVENT["WFS_SRVE_PIN_HSM_CHANGED"] = (PIN_SERVICE_OFFSET + 7)] = "WFS_SRVE_PIN_HSM_CHANGED";
        EVENT[EVENT["WFS_EXEE_PIN_ENTERDATA"] = (PIN_SERVICE_OFFSET + 8)] = "WFS_EXEE_PIN_ENTERDATA";
        EVENT[EVENT["WFS_SRVE_PIN_DEVICEPOSITION"] = (PIN_SERVICE_OFFSET + 9)] = "WFS_SRVE_PIN_DEVICEPOSITION";
        EVENT[EVENT["WFS_SRVE_PIN_POWER_SAVE_CHANGE"] = (PIN_SERVICE_OFFSET + 10)] = "WFS_SRVE_PIN_POWER_SAVE_CHANGE";
        EVENT[EVENT["WFS_EXEE_PIN_LAYOUT"] = (PIN_SERVICE_OFFSET + 11)] = "WFS_EXEE_PIN_LAYOUT";
    })(EVENT = PIN.EVENT || (PIN.EVENT = {}));
})(PIN || (PIN = {}));
