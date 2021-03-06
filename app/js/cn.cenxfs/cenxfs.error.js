/**
 * CEN/XFS 错误类型
 * @enum
*/
var WFSERROR;
(function (WFSERROR) {
    WFSERROR[WFSERROR["WFS_SUCCESS"] = 0] = "WFS_SUCCESS";
    WFSERROR[WFSERROR["WFS_ERR_ALREADY_STARTED"] = -1] = "WFS_ERR_ALREADY_STARTED";
    WFSERROR[WFSERROR["WFS_ERR_API_VER_TOO_HIGH"] = -2] = "WFS_ERR_API_VER_TOO_HIGH";
    WFSERROR[WFSERROR["WFS_ERR_API_VER_TOO_LOW"] = -3] = "WFS_ERR_API_VER_TOO_LOW";
    WFSERROR[WFSERROR["WFS_ERR_CANCELED"] = -4] = "WFS_ERR_CANCELED";
    WFSERROR[WFSERROR["WFS_ERR_CFG_INVALID_HKEY"] = -5] = "WFS_ERR_CFG_INVALID_HKEY";
    WFSERROR[WFSERROR["WFS_ERR_CFG_INVALID_NAME"] = -6] = "WFS_ERR_CFG_INVALID_NAME";
    WFSERROR[WFSERROR["WFS_ERR_CFG_INVALID_SUBKEY"] = -7] = "WFS_ERR_CFG_INVALID_SUBKEY";
    WFSERROR[WFSERROR["WFS_ERR_CFG_INVALID_VALUE"] = -8] = "WFS_ERR_CFG_INVALID_VALUE";
    WFSERROR[WFSERROR["WFS_ERR_CFG_KEY_NOT_EMPTY"] = -9] = "WFS_ERR_CFG_KEY_NOT_EMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CFG_NAME_TOO_LONG"] = -10] = "WFS_ERR_CFG_NAME_TOO_LONG";
    WFSERROR[WFSERROR["WFS_ERR_CFG_NO_MORE_ITEMS"] = -11] = "WFS_ERR_CFG_NO_MORE_ITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CFG_VALUE_TOO_LONG"] = -12] = "WFS_ERR_CFG_VALUE_TOO_LONG";
    WFSERROR[WFSERROR["WFS_ERR_DEV_NOT_READY"] = -13] = "WFS_ERR_DEV_NOT_READY";
    WFSERROR[WFSERROR["WFS_ERR_HARDWARE_ERROR"] = -14] = "WFS_ERR_HARDWARE_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_INTERNAL_ERROR"] = -15] = "WFS_ERR_INTERNAL_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_ADDRESS"] = -16] = "WFS_ERR_INVALID_ADDRESS";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_APP_HANDLE"] = -17] = "WFS_ERR_INVALID_APP_HANDLE";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_BUFFER"] = -18] = "WFS_ERR_INVALID_BUFFER";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_CATEGORY"] = -19] = "WFS_ERR_INVALID_CATEGORY";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_COMMAND"] = -20] = "WFS_ERR_INVALID_COMMAND";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_EVENT_CLASS"] = -21] = "WFS_ERR_INVALID_EVENT_CLASS";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_HSERVICE"] = -22] = "WFS_ERR_INVALID_HSERVICE";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_HPROVIDER"] = -23] = "WFS_ERR_INVALID_HPROVIDER";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_HWND"] = -24] = "WFS_ERR_INVALID_HWND";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_HWNDREG"] = -25] = "WFS_ERR_INVALID_HWNDREG";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_POINTER"] = -26] = "WFS_ERR_INVALID_POINTER";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_REQ_ID"] = -27] = "WFS_ERR_INVALID_REQ_ID";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_RESULT"] = -28] = "WFS_ERR_INVALID_RESULT";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_SERVPROV"] = -29] = "WFS_ERR_INVALID_SERVPROV";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_TIMER"] = -30] = "WFS_ERR_INVALID_TIMER";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_TRACELEVEL"] = -31] = "WFS_ERR_INVALID_TRACELEVEL";
    WFSERROR[WFSERROR["WFS_ERR_LOCKED"] = -32] = "WFS_ERR_LOCKED";
    WFSERROR[WFSERROR["WFS_ERR_NO_BLOCKING_CALL"] = -33] = "WFS_ERR_NO_BLOCKING_CALL";
    WFSERROR[WFSERROR["WFS_ERR_NO_SERVPROV"] = -34] = "WFS_ERR_NO_SERVPROV";
    WFSERROR[WFSERROR["WFS_ERR_NO_SUCH_THREAD"] = -35] = "WFS_ERR_NO_SUCH_THREAD";
    WFSERROR[WFSERROR["WFS_ERR_NO_TIMER"] = -36] = "WFS_ERR_NO_TIMER";
    WFSERROR[WFSERROR["WFS_ERR_NOT_LOCKED"] = -37] = "WFS_ERR_NOT_LOCKED";
    WFSERROR[WFSERROR["WFS_ERR_NOT_OK_TO_UNLOAD"] = -38] = "WFS_ERR_NOT_OK_TO_UNLOAD";
    WFSERROR[WFSERROR["WFS_ERR_NOT_STARTED"] = -39] = "WFS_ERR_NOT_STARTED";
    WFSERROR[WFSERROR["WFS_ERR_NOT_REGISTERED"] = -40] = "WFS_ERR_NOT_REGISTERED";
    WFSERROR[WFSERROR["WFS_ERR_OP_IN_PROGRESS"] = -41] = "WFS_ERR_OP_IN_PROGRESS";
    WFSERROR[WFSERROR["WFS_ERR_OUT_OF_MEMORY"] = -42] = "WFS_ERR_OUT_OF_MEMORY";
    WFSERROR[WFSERROR["WFS_ERR_SERVICE_NOT_FOUND"] = -43] = "WFS_ERR_SERVICE_NOT_FOUND";
    WFSERROR[WFSERROR["WFS_ERR_SPI_VER_TOO_HIGH"] = -44] = "WFS_ERR_SPI_VER_TOO_HIGH";
    WFSERROR[WFSERROR["WFS_ERR_SPI_VER_TOO_LOW"] = -45] = "WFS_ERR_SPI_VER_TOO_LOW";
    WFSERROR[WFSERROR["WFS_ERR_SRVC_VER_TOO_HIGH"] = -46] = "WFS_ERR_SRVC_VER_TOO_HIGH";
    WFSERROR[WFSERROR["WFS_ERR_SRVC_VER_TOO_LOW"] = -47] = "WFS_ERR_SRVC_VER_TOO_LOW";
    WFSERROR[WFSERROR["WFS_ERR_TIMEOUT"] = -48] = "WFS_ERR_TIMEOUT";
    WFSERROR[WFSERROR["WFS_ERR_UNSUPP_CATEGORY"] = -49] = "WFS_ERR_UNSUPP_CATEGORY";
    WFSERROR[WFSERROR["WFS_ERR_UNSUPP_COMMAND"] = -50] = "WFS_ERR_UNSUPP_COMMAND";
    WFSERROR[WFSERROR["WFS_ERR_VERSION_ERROR_IN_SRVC"] = -51] = "WFS_ERR_VERSION_ERROR_IN_SRVC";
    WFSERROR[WFSERROR["WFS_ERR_INVALID_DATA"] = -52] = "WFS_ERR_INVALID_DATA";
    WFSERROR[WFSERROR["WFS_ERR_SOFTWARE_ERROR"] = -53] = "WFS_ERR_SOFTWARE_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_CONNECTION_LOST"] = -54] = "WFS_ERR_CONNECTION_LOST";
    WFSERROR[WFSERROR["WFS_ERR_USER_ERROR"] = -55] = "WFS_ERR_USER_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_UNSUPP_DATA"] = -56] = "WFS_ERR_UNSUPP_DATA";
    WFSERROR[WFSERROR["WFS_ERR_FRAUD_ATTEMPT"] = -57] = "WFS_ERR_FRAUD_ATTEMPT";
    WFSERROR[WFSERROR["WFS_ERR_SEQUENCE_ERROR"] = -58] = "WFS_ERR_SEQUENCE_ERROR";
    // PTR
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_PTR"] = 1] = "WFS_SERVICE_CLASS_PTR";
    WFSERROR[WFSERROR["PTR_SERVICE_OFFSET"] = 100] = "PTR_SERVICE_OFFSET";
    // PTR error
    WFSERROR[WFSERROR["WFS_ERR_PTR_FORMNOTFOUND"] = -100] = "WFS_ERR_PTR_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FIELDNOTFOUND"] = -101] = "WFS_ERR_PTR_FIELDNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_PTR_NOMEDIAPRESENT"] = -102] = "WFS_ERR_PTR_NOMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_READNOTSUPPORTED"] = -103] = "WFS_ERR_PTR_READNOTSUPPORTED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FLUSHFAIL"] = -104] = "WFS_ERR_PTR_FLUSHFAIL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIAOVERFLOW"] = -105] = "WFS_ERR_PTR_MEDIAOVERFLOW";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FIELDSPECFAILURE"] = -106] = "WFS_ERR_PTR_FIELDSPECFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FIELDERROR"] = -107] = "WFS_ERR_PTR_FIELDERROR";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIANOTFOUND"] = -108] = "WFS_ERR_PTR_MEDIANOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_PTR_EXTENTNOTSUPPORTED"] = -109] = "WFS_ERR_PTR_EXTENTNOTSUPPORTED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIAINVALID"] = -110] = "WFS_ERR_PTR_MEDIAINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FORMINVALID"] = -111] = "WFS_ERR_PTR_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FIELDINVALID"] = -112] = "WFS_ERR_PTR_FIELDINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIASKEWED"] = -113] = "WFS_ERR_PTR_MEDIASKEWED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_RETRACTBINFULL"] = -114] = "WFS_ERR_PTR_RETRACTBINFULL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_STACKERFULL"] = -115] = "WFS_ERR_PTR_STACKERFULL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_PAGETURNFAIL"] = -116] = "WFS_ERR_PTR_PAGETURNFAIL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIATURNFAIL"] = -117] = "WFS_ERR_PTR_MEDIATURNFAIL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_SHUTTERFAIL"] = -118] = "WFS_ERR_PTR_SHUTTERFAIL";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIAJAMMED"] = -119] = "WFS_ERR_PTR_MEDIAJAMMED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FILE_IO_ERROR"] = -120] = "WFS_ERR_PTR_FILE_IO_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_PTR_CHARSETDATA"] = -121] = "WFS_ERR_PTR_CHARSETDATA";
    WFSERROR[WFSERROR["WFS_ERR_PTR_PAPERJAMMED"] = -122] = "WFS_ERR_PTR_PAPERJAMMED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_PAPEROUT"] = -123] = "WFS_ERR_PTR_PAPEROUT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_INKOUT"] = -124] = "WFS_ERR_PTR_INKOUT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_TONEROUT"] = -125] = "WFS_ERR_PTR_TONEROUT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_LAMPINOP"] = -126] = "WFS_ERR_PTR_LAMPINOP";
    WFSERROR[WFSERROR["WFS_ERR_PTR_SOURCEINVALID"] = -127] = "WFS_ERR_PTR_SOURCEINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PTR_SEQUENCEINVALID"] = -128] = "WFS_ERR_PTR_SEQUENCEINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIASIZE"] = -129] = "WFS_ERR_PTR_MEDIASIZE";
    WFSERROR[WFSERROR["WFS_ERR_PTR_INVALID_PORT"] = -130] = "WFS_ERR_PTR_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIARETAINED"] = -131] = "WFS_ERR_PTR_MEDIARETAINED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_BLACKMARK"] = -132] = "WFS_ERR_PTR_BLACKMARK";
    WFSERROR[WFSERROR["WFS_ERR_PTR_DEFINITIONEXISTS"] = -133] = "WFS_ERR_PTR_DEFINITIONEXISTS";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIAREJECTED"] = -134] = "WFS_ERR_PTR_MEDIAREJECTED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MEDIARETRACTED"] = -135] = "WFS_ERR_PTR_MEDIARETRACTED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_MSFERROR"] = -136] = "WFS_ERR_PTR_MSFERROR";
    WFSERROR[WFSERROR["WFS_ERR_PTR_NOMSF"] = -137] = "WFS_ERR_PTR_NOMSF";
    WFSERROR[WFSERROR["WFS_ERR_PTR_FILENOTFOUND"] = -138] = "WFS_ERR_PTR_FILENOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_PTR_POWERSAVETOOSHORT"] = -139] = "WFS_ERR_PTR_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_POWERSAVEMEDIAPRESENT"] = -140] = "WFS_ERR_PTR_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_PTR_PASSBOOKCLOSED"] = -141] = "WFS_ERR_PTR_PASSBOOKCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_LASTORFIRSTPAGEREACHED"] = -142] = "WFS_ERR_PTR_LASTORFIRSTPAGEREACHED";
    WFSERROR[WFSERROR["WFS_ERR_PTR_COMMANDUNSUPP"] = -143] = "WFS_ERR_PTR_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_PTR_SYNCHRONIZEUNSUPP"] = -144] = "WFS_ERR_PTR_SYNCHRONIZEUNSUPP";
    //IDC
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_IDC"] = 2] = "WFS_SERVICE_CLASS_IDC";
    WFSERROR[WFSERROR["IDC_SERVICE_OFFSET"] = 200] = "IDC_SERVICE_OFFSET";
    // IDC Error
    WFSERROR[WFSERROR["WFS_ERR_IDC_MEDIAJAM"] = -200] = "WFS_ERR_IDC_MEDIAJAM";
    WFSERROR[WFSERROR["WFS_ERR_IDC_NOMEDIA"] = -201] = "WFS_ERR_IDC_NOMEDIA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_MEDIARETAINED"] = -202] = "WFS_ERR_IDC_MEDIARETAINED";
    WFSERROR[WFSERROR["WFS_ERR_IDC_RETAINBINFULL"] = -203] = "WFS_ERR_IDC_RETAINBINFULL";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDDATA"] = -204] = "WFS_ERR_IDC_INVALIDDATA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDMEDIA"] = -205] = "WFS_ERR_IDC_INVALIDMEDIA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_FORMNOTFOUND"] = -206] = "WFS_ERR_IDC_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_IDC_FORMINVALID"] = -207] = "WFS_ERR_IDC_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_IDC_DATASYNTAX"] = -208] = "WFS_ERR_IDC_DATASYNTAX";
    WFSERROR[WFSERROR["WFS_ERR_IDC_SHUTTERFAIL"] = -209] = "WFS_ERR_IDC_SHUTTERFAIL";
    WFSERROR[WFSERROR["WFS_ERR_IDC_SECURITYFAIL"] = -210] = "WFS_ERR_IDC_SECURITYFAIL";
    WFSERROR[WFSERROR["WFS_ERR_IDC_PROTOCOLNOTSUPP"] = -211] = "WFS_ERR_IDC_PROTOCOLNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_IDC_ATRNOTOBTAINED"] = -212] = "WFS_ERR_IDC_ATRNOTOBTAINED";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDKEY"] = -213] = "WFS_ERR_IDC_INVALIDKEY";
    WFSERROR[WFSERROR["WFS_ERR_IDC_WRITE_METHOD"] = -214] = "WFS_ERR_IDC_WRITE_METHOD";
    WFSERROR[WFSERROR["WFS_ERR_IDC_CHIPPOWERNOTSUPP"] = -215] = "WFS_ERR_IDC_CHIPPOWERNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_IDC_CARDTOOSHORT"] = -216] = "WFS_ERR_IDC_CARDTOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_IDC_CARDTOOLONG"] = -217] = "WFS_ERR_IDC_CARDTOOLONG";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALID_PORT"] = -218] = "WFS_ERR_IDC_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_IDC_POWERSAVETOOSHORT"] = -219] = "WFS_ERR_IDC_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_IDC_POWERSAVEMEDIAPRESENT"] = -220] = "WFS_ERR_IDC_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_IDC_CARDPRESENT"] = -221] = "WFS_ERR_IDC_CARDPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_IDC_POSITIONINVALID"] = -222] = "WFS_ERR_IDC_POSITIONINVALID";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDTERMINALDATA"] = -223] = "WFS_ERR_IDC_INVALIDTERMINALDATA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDAIDDATA"] = -224] = "WFS_ERR_IDC_INVALIDAIDDATA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_INVALIDKEYDATA"] = -225] = "WFS_ERR_IDC_INVALIDKEYDATA";
    WFSERROR[WFSERROR["WFS_ERR_IDC_READERNOTCONFIGURED"] = -226] = "WFS_ERR_IDC_READERNOTCONFIGURED";
    WFSERROR[WFSERROR["WFS_ERR_IDC_TRANSACTIONNOTINITIATED"] = -227] = "WFS_ERR_IDC_TRANSACTIONNOTINITIATED";
    WFSERROR[WFSERROR["WFS_ERR_IDC_COMMANDUNSUPP"] = -228] = "WFS_ERR_IDC_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_IDC_SYNCHRONIZEUNSUPP"] = -229] = "WFS_ERR_IDC_SYNCHRONIZEUNSUPP";
    // CDM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CDM"] = 3] = "WFS_SERVICE_CLASS_CDM";
    WFSERROR[WFSERROR["CDM_SERVICE_OFFSET"] = 300] = "CDM_SERVICE_OFFSET";
    // CDM error
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDCURRENCY"] = -300] = "WFS_ERR_CDM_INVALIDCURRENCY";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDTELLERID"] = -301] = "WFS_ERR_CDM_INVALIDTELLERID";
    WFSERROR[WFSERROR["WFS_ERR_CDM_CASHUNITERROR"] = -302] = "WFS_ERR_CDM_CASHUNITERROR";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDDENOMINATION"] = -303] = "WFS_ERR_CDM_INVALIDDENOMINATION";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDMIXNUMBER"] = -304] = "WFS_ERR_CDM_INVALIDMIXNUMBER";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOCURRENCYMIX"] = -305] = "WFS_ERR_CDM_NOCURRENCYMIX";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOTDISPENSABLE"] = -306] = "WFS_ERR_CDM_NOTDISPENSABLE";
    WFSERROR[WFSERROR["WFS_ERR_CDM_TOOMANYITEMS"] = -307] = "WFS_ERR_CDM_TOOMANYITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CDM_UNSUPPOSITION"] = -308] = "WFS_ERR_CDM_UNSUPPOSITION";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SAFEDOOROPEN"] = -310] = "WFS_ERR_CDM_SAFEDOOROPEN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SHUTTERNOTOPEN"] = -312] = "WFS_ERR_CDM_SHUTTERNOTOPEN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SHUTTEROPEN"] = -313] = "WFS_ERR_CDM_SHUTTEROPEN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SHUTTERCLOSED"] = -314] = "WFS_ERR_CDM_SHUTTERCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDCASHUNIT"] = -315] = "WFS_ERR_CDM_INVALIDCASHUNIT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOITEMS"] = -316] = "WFS_ERR_CDM_NOITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CDM_EXCHANGEACTIVE"] = -317] = "WFS_ERR_CDM_EXCHANGEACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOEXCHANGEACTIVE"] = -318] = "WFS_ERR_CDM_NOEXCHANGEACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SHUTTERNOTCLOSED"] = -319] = "WFS_ERR_CDM_SHUTTERNOTCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_CDM_PRERRORNOITEMS"] = -320] = "WFS_ERR_CDM_PRERRORNOITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CDM_PRERRORITEMS"] = -321] = "WFS_ERR_CDM_PRERRORITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CDM_PRERRORUNKNOWN"] = -322] = "WFS_ERR_CDM_PRERRORUNKNOWN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_ITEMSTAKEN"] = -323] = "WFS_ERR_CDM_ITEMSTAKEN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDMIXTABLE"] = -327] = "WFS_ERR_CDM_INVALIDMIXTABLE";
    WFSERROR[WFSERROR["WFS_ERR_CDM_OUTPUTPOS_NOT_EMPTY"] = -328] = "WFS_ERR_CDM_OUTPUTPOS_NOT_EMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALIDRETRACTPOSITION"] = -329] = "WFS_ERR_CDM_INVALIDRETRACTPOSITION";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOTRETRACTAREA"] = -330] = "WFS_ERR_CDM_NOTRETRACTAREA";
    WFSERROR[WFSERROR["WFS_ERR_CDM_NOCASHBOXPRESENT"] = -333] = "WFS_ERR_CDM_NOCASHBOXPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_AMOUNTNOTINMIXTABLE"] = -334] = "WFS_ERR_CDM_AMOUNTNOTINMIXTABLE";
    WFSERROR[WFSERROR["WFS_ERR_CDM_ITEMSNOTTAKEN"] = -335] = "WFS_ERR_CDM_ITEMSNOTTAKEN";
    WFSERROR[WFSERROR["WFS_ERR_CDM_ITEMSLEFT"] = -336] = "WFS_ERR_CDM_ITEMSLEFT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INVALID_PORT"] = -337] = "WFS_ERR_CDM_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_POWERSAVETOOSHORT"] = -338] = "WFS_ERR_CDM_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_POWERSAVEMEDIAPRESENT"] = -339] = "WFS_ERR_CDM_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_POSITION_NOT_EMPTY"] = -340] = "WFS_ERR_CDM_POSITION_NOT_EMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CDM_INCOMPLETERETRACT"] = -341] = "WFS_ERR_CDM_INCOMPLETERETRACT";
    WFSERROR[WFSERROR["WFS_ERR_CDM_COMMANDUNSUPP"] = -342] = "WFS_ERR_CDM_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CDM_SYNCHRONIZEUNSUPP"] = -343] = "WFS_ERR_CDM_SYNCHRONIZEUNSUPP";
    // PIN
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_PIN"] = 4] = "WFS_SERVICE_CLASS_PIN";
    WFSERROR[WFSERROR["PIN_SERVICE_OFFSET"] = 400] = "PIN_SERVICE_OFFSET";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYNOTFOUND"] = -400] = "WFS_ERR_PIN_KEYNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_PIN_MODENOTSUPPORTED"] = -401] = "WFS_ERR_PIN_MODENOTSUPPORTED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_ACCESSDENIED"] = -402] = "WFS_ERR_PIN_ACCESSDENIED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALIDID"] = -403] = "WFS_ERR_PIN_INVALIDID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_DUPLICATEKEY"] = -404] = "WFS_ERR_PIN_DUPLICATEKEY";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYNOVALUE"] = -406] = "WFS_ERR_PIN_KEYNOVALUE";
    WFSERROR[WFSERROR["WFS_ERR_PIN_USEVIOLATION"] = -407] = "WFS_ERR_PIN_USEVIOLATION";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOPIN"] = -408] = "WFS_ERR_PIN_NOPIN";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALIDKEYLENGTH"] = -409] = "WFS_ERR_PIN_INVALIDKEYLENGTH";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYINVALID"] = -410] = "WFS_ERR_PIN_KEYINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYNOTSUPPORTED"] = -411] = "WFS_ERR_PIN_KEYNOTSUPPORTED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOACTIVEKEYS"] = -412] = "WFS_ERR_PIN_NOACTIVEKEYS";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOTERMINATEKEYS"] = -414] = "WFS_ERR_PIN_NOTERMINATEKEYS";
    WFSERROR[WFSERROR["WFS_ERR_PIN_MINIMUMLENGTH"] = -415] = "WFS_ERR_PIN_MINIMUMLENGTH";
    WFSERROR[WFSERROR["WFS_ERR_PIN_PROTOCOLNOTSUPP"] = -416] = "WFS_ERR_PIN_PROTOCOLNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALIDDATA"] = -417] = "WFS_ERR_PIN_INVALIDDATA";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOTALLOWED"] = -418] = "WFS_ERR_PIN_NOTALLOWED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOKEYRAM"] = -419] = "WFS_ERR_PIN_NOKEYRAM";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NOCHIPTRANSACTIVE"] = -420] = "WFS_ERR_PIN_NOCHIPTRANSACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_PIN_ALGORITHMNOTSUPP"] = -421] = "WFS_ERR_PIN_ALGORITHMNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_FORMATNOTSUPP"] = -422] = "WFS_ERR_PIN_FORMATNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_HSMSTATEINVALID"] = -423] = "WFS_ERR_PIN_HSMSTATEINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_MACINVALID"] = -424] = "WFS_ERR_PIN_MACINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_PROTINVALID"] = -425] = "WFS_ERR_PIN_PROTINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_FORMATINVALID"] = -426] = "WFS_ERR_PIN_FORMATINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_CONTENTINVALID"] = -427] = "WFS_ERR_PIN_CONTENTINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_SIG_NOT_SUPP"] = -429] = "WFS_ERR_PIN_SIG_NOT_SUPP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALID_MOD_LEN"] = -431] = "WFS_ERR_PIN_INVALID_MOD_LEN";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALIDCERTSTATE"] = -432] = "WFS_ERR_PIN_INVALIDCERTSTATE";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEY_GENERATION_ERROR"] = -433] = "WFS_ERR_PIN_KEY_GENERATION_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_PIN_EMV_VERIFY_FAILED"] = -434] = "WFS_ERR_PIN_EMV_VERIFY_FAILED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_RANDOMINVALID"] = -435] = "WFS_ERR_PIN_RANDOMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_SIGNATUREINVALID"] = -436] = "WFS_ERR_PIN_SIGNATUREINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_SNSCDINVALID"] = -437] = "WFS_ERR_PIN_SNSCDINVALID";
    WFSERROR[WFSERROR["WFS_ERR_PIN_NORSAKEYPAIR"] = -438] = "WFS_ERR_PIN_NORSAKEYPAIR";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALID_PORT"] = -439] = "WFS_ERR_PIN_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_PIN_POWERSAVETOOSHORT"] = -440] = "WFS_ERR_PIN_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_PIN_INVALIDHSM"] = -441] = "WFS_ERR_PIN_INVALIDHSM";
    WFSERROR[WFSERROR["WFS_ERR_PIN_TOOMANYFRAMES"] = -442] = "WFS_ERR_PIN_TOOMANYFRAMES";
    WFSERROR[WFSERROR["WFS_ERR_PIN_PARTIALFRAME"] = -443] = "WFS_ERR_PIN_PARTIALFRAME";
    WFSERROR[WFSERROR["WFS_ERR_PIN_MISSINGKEYS"] = -444] = "WFS_ERR_PIN_MISSINGKEYS";
    WFSERROR[WFSERROR["WFS_ERR_PIN_FRAMECOORD"] = -445] = "WFS_ERR_PIN_FRAMECOORD";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYCOORD"] = -446] = "WFS_ERR_PIN_KEYCOORD";
    WFSERROR[WFSERROR["WFS_ERR_PIN_FRAMEOVERLAP"] = -447] = "WFS_ERR_PIN_FRAMEOVERLAP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYOVERLAP"] = -448] = "WFS_ERR_PIN_KEYOVERLAP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_TOOMANYKEYS"] = -449] = "WFS_ERR_PIN_TOOMANYKEYS";
    WFSERROR[WFSERROR["WFS_ERR_PIN_KEYALREADYDEFINED"] = -450] = "WFS_ERR_PIN_KEYALREADYDEFINED";
    WFSERROR[WFSERROR["WFS_ERR_PIN_COMMANDUNSUPP"] = -451] = "WFS_ERR_PIN_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_PIN_SYNCHRONIZEUNSUPP"] = -452] = "WFS_ERR_PIN_SYNCHRONIZEUNSUPP";
    // CHK
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CHK"] = 5] = "WFS_SERVICE_CLASS_CHK";
    WFSERROR[WFSERROR["CHK_SERVICE_OFFSET"] = 500] = "CHK_SERVICE_OFFSET";
    // CHK error
    WFSERROR[WFSERROR["WFS_ERR_CHK_FORMNOTFOUND"] = -500] = "WFS_ERR_CHK_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CHK_FORMINVALID"] = -501] = "WFS_ERR_CHK_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CHK_MEDIANOTFOUND"] = -502] = "WFS_ERR_CHK_MEDIANOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CHK_MEDIAINVALID"] = -503] = "WFS_ERR_CHK_MEDIAINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CHK_MEDIAOVERFLOW"] = -504] = "WFS_ERR_CHK_MEDIAOVERFLOW";
    WFSERROR[WFSERROR["WFS_ERR_CHK_FIELDNOTFOUND"] = -505] = "WFS_ERR_CHK_FIELDNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CHK_FIELDINVALID"] = -506] = "WFS_ERR_CHK_FIELDINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CHK_FIELDERROR"] = -507] = "WFS_ERR_CHK_FIELDERROR";
    WFSERROR[WFSERROR["WFS_ERR_CHK_REQDFIELDMISSING"] = -508] = "WFS_ERR_CHK_REQDFIELDMISSING";
    WFSERROR[WFSERROR["WFS_ERR_CHK_FIELDSPECFAILURE"] = -509] = "WFS_ERR_CHK_FIELDSPECFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_CHK_CHARSETDATA"] = -510] = "WFS_ERR_CHK_CHARSETDATA";
    WFSERROR[WFSERROR["WFS_ERR_CHK_MEDIAJAM"] = -511] = "WFS_ERR_CHK_MEDIAJAM";
    WFSERROR[WFSERROR["WFS_ERR_CHK_SHUTTERFAIL"] = -512] = "WFS_ERR_CHK_SHUTTERFAIL";
    WFSERROR[WFSERROR["WFS_ERR_CHK_INVALID_PORT"] = -513] = "WFS_ERR_CHK_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_CHK_POWERSAVETOOSHORT"] = -514] = "WFS_ERR_CHK_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_CHK_POWERSAVEMEDIAPRESENT"] = -515] = "WFS_ERR_CHK_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CHK_COMMANDUNSUPP"] = -516] = "WFS_ERR_CHK_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CHK_SYNCHRONIZEUNSUPP"] = -517] = "WFS_ERR_CHK_SYNCHRONIZEUNSUPP";
    // DEP
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_DEP"] = 6] = "WFS_SERVICE_CLASS_DEP";
    WFSERROR[WFSERROR["DEP_SERVICE_OFFSET"] = 600] = "DEP_SERVICE_OFFSET";
    // DEP error
    WFSERROR[WFSERROR["WFS_ERR_DEP_DEPFULL"] = -600] = "WFS_ERR_DEP_DEPFULL";
    WFSERROR[WFSERROR["WFS_ERR_DEP_DEPJAMMED"] = -601] = "WFS_ERR_DEP_DEPJAMMED";
    WFSERROR[WFSERROR["WFS_ERR_DEP_ENVEMPTY"] = -602] = "WFS_ERR_DEP_ENVEMPTY";
    WFSERROR[WFSERROR["WFS_ERR_DEP_ENVJAMMED"] = -603] = "WFS_ERR_DEP_ENVJAMMED";
    WFSERROR[WFSERROR["WFS_ERR_DEP_ENVSIZE"] = -604] = "WFS_ERR_DEP_ENVSIZE";
    WFSERROR[WFSERROR["WFS_ERR_DEP_NOENV"] = -605] = "WFS_ERR_DEP_NOENV";
    WFSERROR[WFSERROR["WFS_ERR_DEP_PTRFAIL"] = -606] = "WFS_ERR_DEP_PTRFAIL";
    WFSERROR[WFSERROR["WFS_ERR_DEP_SHTNOTCLOSED"] = -607] = "WFS_ERR_DEP_SHTNOTCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_DEP_SHTNOTOPENED"] = -608] = "WFS_ERR_DEP_SHTNOTOPENED";
    WFSERROR[WFSERROR["WFS_ERR_DEP_CONTMISSING"] = -609] = "WFS_ERR_DEP_CONTMISSING";
    WFSERROR[WFSERROR["WFS_ERR_DEP_DEPUNKNOWN"] = -610] = "WFS_ERR_DEP_DEPUNKNOWN";
    WFSERROR[WFSERROR["WFS_ERR_DEP_CHARSETNOTSUPP"] = -611] = "WFS_ERR_DEP_CHARSETNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_DEP_TONEROUT"] = -612] = "WFS_ERR_DEP_TONEROUT";
    WFSERROR[WFSERROR["WFS_ERR_DEP_INVALID_PORT"] = -613] = "WFS_ERR_DEP_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_DEP_POWERSAVETOOSHORT"] = -614] = "WFS_ERR_DEP_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_DEP_POWERSAVEMEDIAPRESENT"] = -615] = "WFS_ERR_DEP_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_DEP_COMMANDUNSUPP"] = -616] = "WFS_ERR_DEP_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_DEP_SYNCHRONIZEUNSUPP"] = -617] = "WFS_ERR_DEP_SYNCHRONIZEUNSUPP";
    // TTU
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_TTU"] = 7] = "WFS_SERVICE_CLASS_TTU";
    WFSERROR[WFSERROR["TTU_SERVICE_OFFSET"] = 700] = "TTU_SERVICE_OFFSET";
    // TTU error
    WFSERROR[WFSERROR["WFS_ERR_TTU_FIELDERROR"] = -701] = "WFS_ERR_TTU_FIELDERROR";
    WFSERROR[WFSERROR["WFS_ERR_TTU_FIELDINVALID"] = -702] = "WFS_ERR_TTU_FIELDINVALID";
    WFSERROR[WFSERROR["WFS_ERR_TTU_FIELDNOTFOUND"] = -703] = "WFS_ERR_TTU_FIELDNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_TTU_FIELDSPECFAILURE"] = -704] = "WFS_ERR_TTU_FIELDSPECFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_TTU_FORMINVALID"] = -705] = "WFS_ERR_TTU_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_TTU_FORMNOTFOUND"] = -706] = "WFS_ERR_TTU_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_TTU_INVALIDLED"] = -707] = "WFS_ERR_TTU_INVALIDLED";
    WFSERROR[WFSERROR["WFS_ERR_TTU_KEYCANCELED"] = -708] = "WFS_ERR_TTU_KEYCANCELED";
    WFSERROR[WFSERROR["WFS_ERR_TTU_MEDIAOVERFLOW"] = -709] = "WFS_ERR_TTU_MEDIAOVERFLOW";
    WFSERROR[WFSERROR["WFS_ERR_TTU_RESNOTSUPP"] = -710] = "WFS_ERR_TTU_RESNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_TTU_CHARSETDATA"] = -711] = "WFS_ERR_TTU_CHARSETDATA";
    WFSERROR[WFSERROR["WFS_ERR_TTU_KEYINVALID"] = -712] = "WFS_ERR_TTU_KEYINVALID";
    WFSERROR[WFSERROR["WFS_ERR_TTU_KEYNOTSUPPORTED"] = -713] = "WFS_ERR_TTU_KEYNOTSUPPORTED";
    WFSERROR[WFSERROR["WFS_ERR_TTU_NOACTIVEKEYS"] = -714] = "WFS_ERR_TTU_NOACTIVEKEYS";
    WFSERROR[WFSERROR["WFS_ERR_TTU_POWERSAVETOOSHORT"] = -715] = "WFS_ERR_TTU_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_TTU_COMMANDUNSUPP"] = -716] = "WFS_ERR_TTU_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_TTU_SYNCHRONIZEUNSUPP"] = -717] = "WFS_ERR_TTU_SYNCHRONIZEUNSUPP";
    // SIU
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_SIU"] = 8] = "WFS_SERVICE_CLASS_SIU";
    WFSERROR[WFSERROR["SIU_SERVICE_OFFSET"] = 800] = "SIU_SERVICE_OFFSET";
    // SIU error
    WFSERROR[WFSERROR["WFS_ERR_SIU_INVALID_PORT"] = -801] = "WFS_ERR_SIU_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_SIU_SYNTAX"] = -802] = "WFS_ERR_SIU_SYNTAX";
    WFSERROR[WFSERROR["WFS_ERR_SIU_PORT_ERROR"] = -803] = "WFS_ERR_SIU_PORT_ERROR";
    WFSERROR[WFSERROR["WFS_ERR_SIU_POWERSAVETOOSHORT"] = -804] = "WFS_ERR_SIU_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_SIU_COMMANDUNSUPP"] = -805] = "WFS_ERR_SIU_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_SIU_SYNCHRONIZEUNSUPP"] = -806] = "WFS_ERR_SIU_SYNCHRONIZEUNSUPP";
    // VDM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_VDM"] = 9] = "WFS_SERVICE_CLASS_VDM";
    WFSERROR[WFSERROR["VDM_SERVICE_OFFSET"] = 900] = "VDM_SERVICE_OFFSET";
    // VDM error
    WFSERROR[WFSERROR["WFS_ERR_VDM_INTERFACE_NOT_AVAILABLE"] = -900] = "WFS_ERR_VDM_INTERFACE_NOT_AVAILABLE";
    // CAM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CAM"] = 10] = "WFS_SERVICE_CLASS_CAM";
    WFSERROR[WFSERROR["CAM_SERVICE_OFFSET"] = 1000] = "CAM_SERVICE_OFFSET";
    WFSERROR[WFSERROR["WFS_ERR_CAM_CAMNOTSUPP"] = -1000] = "WFS_ERR_CAM_CAMNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CAM_MEDIAFULL"] = -1001] = "WFS_ERR_CAM_MEDIAFULL";
    WFSERROR[WFSERROR["WFS_ERR_CAM_CAMINOP"] = -1002] = "WFS_ERR_CAM_CAMINOP";
    WFSERROR[WFSERROR["WFS_ERR_CAM_CHARSETNOTSUPP"] = -1003] = "WFS_ERR_CAM_CHARSETNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CAM_FILEIOERROR"] = -1004] = "WFS_ERR_CAM_FILEIOERROR";
    WFSERROR[WFSERROR["WFS_ERR_CAM_COMMANDUNSUPP"] = -1005] = "WFS_ERR_CAM_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CAM_SYNCHRONIZEUNSUPP"] = -1006] = "WFS_ERR_CAM_SYNCHRONIZEUNSUPP";
    // ALM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_ALM"] = 11] = "WFS_SERVICE_CLASS_ALM";
    WFSERROR[WFSERROR["ALM_SERVICE_OFFSET"] = 1100] = "ALM_SERVICE_OFFSET";
    // ALM error
    WFSERROR[WFSERROR["WFS_ERR_ALM_COMMANDUNSUPP"] = -1100] = "WFS_ERR_ALM_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_ALM_SYNCHRONIZEUNSUPP"] = -1101] = "WFS_ERR_ALM_SYNCHRONIZEUNSUPP";
    // CEU
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CEU"] = 12] = "WFS_SERVICE_CLASS_CEU";
    WFSERROR[WFSERROR["CEU_SERVICE_OFFSET"] = 1200] = "CEU_SERVICE_OFFSET";
    // CEU error
    WFSERROR[WFSERROR["WFS_ERR_CEU_FORMNOTFOUND"] = -1201] = "WFS_ERR_CEU_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CEU_FORMINVALID"] = -1202] = "WFS_ERR_CEU_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CEU_MEDIANOTFOUND"] = -1203] = "WFS_ERR_CEU_MEDIANOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CEU_MEDIAINVALID"] = -1204] = "WFS_ERR_CEU_MEDIAINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CEU_NOMEDIA"] = -1205] = "WFS_ERR_CEU_NOMEDIA";
    WFSERROR[WFSERROR["WFS_ERR_CEU_MEDIAOVERFLOW"] = -1206] = "WFS_ERR_CEU_MEDIAOVERFLOW";
    WFSERROR[WFSERROR["WFS_ERR_CEU_IDC_FORMNOTFOUND"] = -1207] = "WFS_ERR_CEU_IDC_FORMNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CEU_IDC_FORMINVALID"] = -1208] = "WFS_ERR_CEU_IDC_FORMINVALID";
    WFSERROR[WFSERROR["WFS_ERR_CEU_INVALIDDATA"] = -1209] = "WFS_ERR_CEU_INVALIDDATA";
    WFSERROR[WFSERROR["WFS_ERR_CEU_PROTOCOLNOTSUPP"] = -1210] = "WFS_ERR_CEU_PROTOCOLNOTSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CEU_ATRNOTOBTAINED"] = -1211] = "WFS_ERR_CEU_ATRNOTOBTAINED";
    WFSERROR[WFSERROR["WFS_ERR_CEU_FIELDSPECFAILURE"] = -1212] = "WFS_ERR_CEU_FIELDSPECFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_CEU_FIELDERROR"] = -1213] = "WFS_ERR_CEU_FIELDERROR";
    WFSERROR[WFSERROR["WFS_ERR_CEU_EMBOSSFAILURE"] = -1214] = "WFS_ERR_CEU_EMBOSSFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_CEU_FIELDNOTFOUND"] = -1215] = "WFS_ERR_CEU_FIELDNOTFOUND";
    WFSERROR[WFSERROR["WFS_ERR_CEU_POWERSAVETOOSHORT"] = -1216] = "WFS_ERR_CEU_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_CEU_POWERSAVEMEDIAPRESENT"] = -1217] = "WFS_ERR_CEU_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CEU_CHARSETDATA"] = -1218] = "WFS_ERR_CEU_CHARSETDATA";
    WFSERROR[WFSERROR["WFS_ERR_CEU_COMMANDUNSUPP"] = -1219] = "WFS_ERR_CEU_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CEU_SYNCHRONIZEUNSUPP"] = -1220] = "WFS_ERR_CEU_SYNCHRONIZEUNSUPP";
    // CIM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CIM"] = 13] = "WFS_SERVICE_CLASS_CIM";
    WFSERROR[WFSERROR["CIM_SERVICE_OFFSET"] = 1300] = "CIM_SERVICE_OFFSET";
    // CIM error
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDCURRENCY"] = -1300] = "WFS_ERR_CIM_INVALIDCURRENCY";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDTELLERID"] = -1301] = "WFS_ERR_CIM_INVALIDTELLERID";
    WFSERROR[WFSERROR["WFS_ERR_CIM_CASHUNITERROR"] = -1302] = "WFS_ERR_CIM_CASHUNITERROR";
    WFSERROR[WFSERROR["WFS_ERR_CIM_TOOMANYITEMS"] = -1307] = "WFS_ERR_CIM_TOOMANYITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CIM_UNSUPPOSITION"] = -1308] = "WFS_ERR_CIM_UNSUPPOSITION";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SAFEDOOROPEN"] = -1310] = "WFS_ERR_CIM_SAFEDOOROPEN";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SHUTTERNOTOPEN"] = -1312] = "WFS_ERR_CIM_SHUTTERNOTOPEN";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SHUTTEROPEN"] = -1313] = "WFS_ERR_CIM_SHUTTEROPEN";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SHUTTERCLOSED"] = -1314] = "WFS_ERR_CIM_SHUTTERCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDCASHUNIT"] = -1315] = "WFS_ERR_CIM_INVALIDCASHUNIT";
    WFSERROR[WFSERROR["WFS_ERR_CIM_NOITEMS"] = -1316] = "WFS_ERR_CIM_NOITEMS";
    WFSERROR[WFSERROR["WFS_ERR_CIM_EXCHANGEACTIVE"] = -1317] = "WFS_ERR_CIM_EXCHANGEACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_NOEXCHANGEACTIVE"] = -1318] = "WFS_ERR_CIM_NOEXCHANGEACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SHUTTERNOTCLOSED"] = -1319] = "WFS_ERR_CIM_SHUTTERNOTCLOSED";
    WFSERROR[WFSERROR["WFS_ERR_CIM_ITEMSTAKEN"] = -1323] = "WFS_ERR_CIM_ITEMSTAKEN";
    WFSERROR[WFSERROR["WFS_ERR_CIM_CASHINACTIVE"] = -1325] = "WFS_ERR_CIM_CASHINACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_NOCASHINACTIVE"] = -1326] = "WFS_ERR_CIM_NOCASHINACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_POSITION_NOT_EMPTY"] = -1328] = "WFS_ERR_CIM_POSITION_NOT_EMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDRETRACTPOSITION"] = -1334] = "WFS_ERR_CIM_INVALIDRETRACTPOSITION";
    WFSERROR[WFSERROR["WFS_ERR_CIM_NOTRETRACTAREA"] = -1335] = "WFS_ERR_CIM_NOTRETRACTAREA";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALID_PORT"] = -1336] = "WFS_ERR_CIM_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_CIM_FOREIGN_ITEMS_DETECTED"] = -1337] = "WFS_ERR_CIM_FOREIGN_ITEMS_DETECTED";
    WFSERROR[WFSERROR["WFS_ERR_CIM_LOADFAILED"] = -1338] = "WFS_ERR_CIM_LOADFAILED";
    WFSERROR[WFSERROR["WFS_ERR_CIM_CASHUNITNOTEMPTY"] = -1339] = "WFS_ERR_CIM_CASHUNITNOTEMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDREFSIG"] = -1340] = "WFS_ERR_CIM_INVALIDREFSIG";
    WFSERROR[WFSERROR["WFS_ERR_CIM_INVALIDTRNSIG"] = -1341] = "WFS_ERR_CIM_INVALIDTRNSIG";
    WFSERROR[WFSERROR["WFS_ERR_CIM_POWERSAVETOOSHORT"] = -1342] = "WFS_ERR_CIM_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_CIM_POWERSAVEMEDIAPRESENT"] = -1343] = "WFS_ERR_CIM_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CIM_DEVICELOCKFAILURE"] = -1344] = "WFS_ERR_CIM_DEVICELOCKFAILURE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_TOOMANYITEMSTOCOUNT"] = -1345] = "WFS_ERR_CIM_TOOMANYITEMSTOCOUNT";
    WFSERROR[WFSERROR["WFS_ERR_CIM_COUNTPOSNOTEMPTY"] = -1346] = "WFS_ERR_CIM_COUNTPOSNOTEMPTY";
    WFSERROR[WFSERROR["WFS_ERR_CIM_MEDIAINACTIVE"] = -1347] = "WFS_ERR_CIM_MEDIAINACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_CIM_COMMANDUNSUPP"] = -1348] = "WFS_ERR_CIM_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CIM_SYNCHRONIZEUNSUPP"] = -1349] = "WFS_ERR_CIM_SYNCHRONIZEUNSUPP";
    // CRD 
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_CRD"] = 14] = "WFS_SERVICE_CLASS_CRD";
    WFSERROR[WFSERROR["CRD_SERVICE_OFFSET"] = 1400] = "CRD_SERVICE_OFFSET";
    // CRD error
    WFSERROR[WFSERROR["WFS_ERR_CRD_MEDIAJAM"] = -1400] = "WFS_ERR_CRD_MEDIAJAM";
    WFSERROR[WFSERROR["WFS_ERR_CRD_NOMEDIA"] = -1401] = "WFS_ERR_CRD_NOMEDIA";
    WFSERROR[WFSERROR["WFS_ERR_CRD_MEDIARETAINED"] = -1402] = "WFS_ERR_CRD_MEDIARETAINED";
    WFSERROR[WFSERROR["WFS_ERR_CRD_RETAINBINFULL"] = -1403] = "WFS_ERR_CRD_RETAINBINFULL";
    WFSERROR[WFSERROR["WFS_ERR_CRD_SHUTTERFAIL"] = -1404] = "WFS_ERR_CRD_SHUTTERFAIL";
    WFSERROR[WFSERROR["WFS_ERR_CRD_DEVICE_OCCUPIED"] = -1405] = "WFS_ERR_CRD_DEVICE_OCCUPIED";
    WFSERROR[WFSERROR["WFS_ERR_CRD_CARDUNITERROR"] = -1406] = "WFS_ERR_CRD_CARDUNITERROR";
    WFSERROR[WFSERROR["WFS_ERR_CRD_INVALIDCARDUNIT"] = -1407] = "WFS_ERR_CRD_INVALIDCARDUNIT";
    WFSERROR[WFSERROR["WFS_ERR_CRD_INVALID_PORT"] = -1408] = "WFS_ERR_CRD_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_CRD_INVALIDRETAINBIN"] = -1409] = "WFS_ERR_CRD_INVALIDRETAINBIN";
    WFSERROR[WFSERROR["WFS_ERR_CRD_POWERSAVETOOSHORT"] = -1410] = "WFS_ERR_CRD_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_CRD_POWERSAVEMEDIAPRESENT"] = -1411] = "WFS_ERR_CRD_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_CRD_COMMANDUNSUPP"] = -1412] = "WFS_ERR_CRD_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_CRD_SYNCHRONIZEUNSUPP"] = -1413] = "WFS_ERR_CRD_SYNCHRONIZEUNSUPP";
    // BCR
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_BCR"] = 15] = "WFS_SERVICE_CLASS_BCR";
    WFSERROR[WFSERROR["BCR_SERVICE_OFFSET"] = 1500] = "BCR_SERVICE_OFFSET";
    // BCR error
    WFSERROR[WFSERROR["WFS_ERR_BCR_BARCODEINVALID"] = -1500] = "WFS_ERR_BCR_BARCODEINVALID";
    WFSERROR[WFSERROR["WFS_ERR_BCR_INVALID_PORT"] = -1501] = "WFS_ERR_BCR_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_BCR_POWERSAVETOOSHORT"] = -1502] = "WFS_ERR_BCR_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_BCR_COMMANDUNSUPP"] = -1503] = "WFS_ERR_BCR_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_BCR_SYNCHRONIZEUNSUPP"] = -1504] = "WFS_ERR_BCR_SYNCHRONIZEUNSUPP";
    // IPM
    WFSERROR[WFSERROR["WFS_SERVICE_CLASS_IPM"] = 16] = "WFS_SERVICE_CLASS_IPM";
    WFSERROR[WFSERROR["IPM_SERVICE_OFFSET"] = 1600] = "IPM_SERVICE_OFFSET";
    // IPM error
    WFSERROR[WFSERROR["WFS_ERR_IPM_NOMEDIAPRESENT"] = -1601] = "WFS_ERR_IPM_NOMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIABINFULL"] = -1602] = "WFS_ERR_IPM_MEDIABINFULL";
    WFSERROR[WFSERROR["WFS_ERR_IPM_STACKERFULL"] = -1603] = "WFS_ERR_IPM_STACKERFULL";
    WFSERROR[WFSERROR["WFS_ERR_IPM_SHUTTERFAIL"] = -1604] = "WFS_ERR_IPM_SHUTTERFAIL";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIAJAMMED"] = -1605] = "WFS_ERR_IPM_MEDIAJAMMED";
    WFSERROR[WFSERROR["WFS_ERR_IPM_FILEIOERROR"] = -1606] = "WFS_ERR_IPM_FILEIOERROR";
    WFSERROR[WFSERROR["WFS_ERR_IPM_INKOUT"] = -1607] = "WFS_ERR_IPM_INKOUT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_TONEROUT"] = -1608] = "WFS_ERR_IPM_TONEROUT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_SCANNERINOP"] = -1609] = "WFS_ERR_IPM_SCANNERINOP";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MICRINOP"] = -1610] = "WFS_ERR_IPM_MICRINOP";
    WFSERROR[WFSERROR["WFS_ERR_IPM_SEQUENCEINVALID"] = -1611] = "WFS_ERR_IPM_SEQUENCEINVALID";
    WFSERROR[WFSERROR["WFS_ERR_IPM_INVALID_PORT"] = -1612] = "WFS_ERR_IPM_INVALID_PORT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_FOREIGNITEMSDETECTED"] = -1613] = "WFS_ERR_IPM_FOREIGNITEMSDETECTED";
    WFSERROR[WFSERROR["WFS_ERR_IPM_INVALIDMEDIAID"] = -1614] = "WFS_ERR_IPM_INVALIDMEDIAID";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIABINERROR"] = -1615] = "WFS_ERR_IPM_MEDIABINERROR";
    WFSERROR[WFSERROR["WFS_ERR_IPM_POSITIONNOTEMPTY"] = -1616] = "WFS_ERR_IPM_POSITIONNOTEMPTY";
    WFSERROR[WFSERROR["WFS_ERR_IPM_INVALIDBIN"] = -1617] = "WFS_ERR_IPM_INVALIDBIN";
    WFSERROR[WFSERROR["WFS_ERR_IPM_NOBIN"] = -1618] = "WFS_ERR_IPM_NOBIN";
    WFSERROR[WFSERROR["WFS_ERR_IPM_REFUSEDITEMS"] = -1619] = "WFS_ERR_IPM_REFUSEDITEMS";
    WFSERROR[WFSERROR["WFS_ERR_IPM_ALLBINSFULL"] = -1620] = "WFS_ERR_IPM_ALLBINSFULL";
    WFSERROR[WFSERROR["WFS_ERR_IPM_FEEDERNOTEMPTY"] = -1621] = "WFS_ERR_IPM_FEEDERNOTEMPTY";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIAREJECTED"] = -1622] = "WFS_ERR_IPM_MEDIAREJECTED";
    WFSERROR[WFSERROR["WFS_ERR_IPM_FEEDERINOPERATIVE"] = -1623] = "WFS_ERR_IPM_FEEDERINOPERATIVE";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIAPRESENT"] = -1624] = "WFS_ERR_IPM_MEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_POWERSAVETOOSHORT"] = -1625] = "WFS_ERR_IPM_POWERSAVETOOSHORT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_POWERSAVEMEDIAPRESENT"] = -1626] = "WFS_ERR_IPM_POWERSAVEMEDIAPRESENT";
    WFSERROR[WFSERROR["WFS_ERR_IPM_CASHINACTIVE"] = -1627] = "WFS_ERR_IPM_CASHINACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_IPM_MEDIAINACTIVE"] = -1628] = "WFS_ERR_IPM_MEDIAINACTIVE";
    WFSERROR[WFSERROR["WFS_ERR_IPM_COMMANDUNSUPP"] = -1629] = "WFS_ERR_IPM_COMMANDUNSUPP";
    WFSERROR[WFSERROR["WFS_ERR_IPM_SYNCHRONIZEUNSUPP"] = -1630] = "WFS_ERR_IPM_SYNCHRONIZEUNSUPP";
})(WFSERROR || (WFSERROR = {}));
