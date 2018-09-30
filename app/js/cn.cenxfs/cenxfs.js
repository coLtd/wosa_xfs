/// <reference path="cenxfs.api.d.ts"/>
/// <reference path="event.d.ts"/>
/// <reference path="cenxfs.message.ts"/>
/// <reference path="XfsEventHandler.ts"/>
/**
 * CEN/XFS api面向对象封装
 * @class CenXfs
*/
var CenXfs = /** @class */ (function () {
    /**
     * CenXfs构造函数
     * @constructor
     * @param {CenXfsApi} cenXfsApi cenXfsApi对象，由CxPons异步返回
    */
    function CenXfs(callbackOrCenXfsApi) {
        var _this = this;
        this.hService = 0;
        this.eventHandler = 0;
        if (typeof callbackOrCenXfsApi == "function") {
            new CxPons(function (CxApi) {
                _this.cenXfsApi = CxApi;
                callbackOrCenXfsApi(_this);
            });
        }
        else {
            this.cenXfsApi = callbackOrCenXfsApi;
        }
    }
    Object.defineProperty(CenXfs.prototype, "supportSpiVersions", {
        /**
         * 获取服务支持的版本信息
         * 调用open后才可获取到对应的版本信息
        */
        get: function () {
            return this._supportSpiVersions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenXfs.prototype, "dwVersionsRequired", {
        /**
         * 获取WOSA/XFS API版本信息
         * 调用open后才可获取到对应的版本信息
        */
        get: function () {
            return this._dwVersionsRequired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenXfs.prototype, "spiVersion", {
        /**
         * 获取WOSA/XFS spi版本信息
         * 调用open后才可获取到对应的版本信息
        */
        get: function () {
            return this._spiVersion;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 异步打开函数
     * @param {string} lpszLogicalName 设备逻辑名称
     * @param {string} lpszAppID appID
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {number} dwTimeOut 打开设备超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncOpen = function (lpszLogicalName, lpszAppID, dwTraceLevel, dwTimeOut, response) {
        var _this = this;
        this.typeChecked(lpszLogicalName, ["string"], "lpszLogicalName");
        this.typeChecked(lpszAppID, ["string"], "lpszAppID");
        this.typeChecked(dwTraceLevel, ["number"], "dwTraceLevel");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncOpen(lpszLogicalName, lpszAppID, dwTraceLevel, dwTimeOut, function (resp) {
            if (resp && resp.hResult == 0) {
                _this.hService = resp.hService;
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            _this._spiVersion = resp.spiVersion;
            _this._dwVersionsRequired = resp.dwVersionsRequired;
            _this._supportSpiVersions = resp.supportSpiVersions;
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 异步关闭设备
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncClose = function (response) {
        var _this = this;
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncClose(this.hService, function (resp) {
            if (resp && resp.hResult == 0) {
                _this.cenXfsApi.unregistEventAssociatedObject(_this.hService);
                _this.hService = null;
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 异步取消所有请求
    */
    CenXfs.prototype.WFSCancelAsyncRequest = function (response) {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSCancelAsyncRequest(this.hService, 0, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        });
    };
    /**
     * 注册事件处理函数
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncRegister = function (response) {
        var _this = this;
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncRegister(this.hService, function (resp) {
            if (resp && resp.hResult == 0) {
                _this.cenXfsApi.registEventAssociatedObject(_this.hService, _this);
                response(null, resp);
            }
            else {
                _this.eventHandler = 0;
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult == 0) {
                _this.eventHandler = resp.eventHandler;
            }
            else {
                response(resp.hResult, null);
            }
        });
    };
    /**
     * 注销事件处理函数
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncDeregister = function (response) {
        var _this = this;
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncDeregister(this.hService, this.eventHandler, function (resp) {
            if (resp && resp.hResult == 0) {
                _this.cenXfsApi.unregistEventAssociatedObject(_this.hService);
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0) {
                response(resp.hResult, null);
            }
        });
    };
    /**
     * 异步执行Info命令
     * @param {number} dwCategory info命令标识
     * @param {JSON | string | null} lpQueryDetails info命令参数
     * @param {number} dwTimeOut 命令执行超时时间, 默认0，无限等待
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncGetInfo = function (dwCategory, lpQueryDetails, dwTimeOut, response) {
        this.typeChecked(dwCategory, ["number"], "dwCategory");
        this.typeChecked(lpQueryDetails, ["string", "object", "number", "null", "undefined"], "lpQueryDetails");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        var queryDetails = lpQueryDetails || "";
        queryDetails = queryDetails instanceof Object ?
            JSON.stringify(queryDetails) : queryDetails;
        queryDetails = typeof queryDetails == "number" ?
            "" + queryDetails : queryDetails;
        this.cenXfsApi.WFSAsyncGetInfo(this.hService, dwCategory, queryDetails, dwTimeOut, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 异步执行cmd命令
     * @param {number} dwCommand cmd命令标识
     * @param {JSON} lpCmdData cmd命令参数
     * @param {number} dwTimeOut 命令执行超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncExecute = function (dwCommand, lpCmdData, dwTimeOut, response) {
        this.typeChecked(dwCommand, ["number"], "dwCommand");
        this.typeChecked(lpCmdData, ["string", "object", "number", "null", "undefined"], "lpCmdData");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        var cmdData = lpCmdData || "";
        cmdData = cmdData instanceof Object ?
            JSON.stringify(cmdData) : cmdData;
        cmdData = typeof cmdData == "number" ?
            "" + cmdData : cmdData;
        this.cenXfsApi.WFSAsyncExecute(this.hService, dwCommand, cmdData, dwTimeOut, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 异步锁定设备
     * @param {number} dwTimeOut 锁定设备超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncLock = function (dwTimeOut, response) {
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncLock(this.hService, dwTimeOut, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 异步解除锁定
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFSAsyncUnlock = function (response) {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncUnlock(this.hService, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        }, function (resp) {
            if (resp && resp.hResult != 0)
                response(resp.hResult, null);
        });
    };
    /**
     * 修改日志跟踪级别
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    CenXfs.prototype.WFMSetTraceLevel = function (dwTraceLevel, response) {
        this.typeChecked(dwTraceLevel, ["number"], "dwTraceLevel");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFMSetTraceLevel(dwTraceLevel, function (resp) {
            if (resp && resp.hResult == 0) {
                response(null, resp);
            }
            else {
                response(resp.hResult, null);
            }
        });
    };
    /**
     * @class
     * @description 添加事件监听函数
     * @param {number} eventID 事件ID
     * @param {(event:CEvent)=>void} listener 事件处理函数
    */
    CenXfs.prototype.addEventListener = function (eventID, listener) {
        if (typeof this.events[eventID] === "undefined") {
            this.events[eventID] = new CXfsEventHandler(eventID);
        }
        this.events[eventID].addEventListener(listener);
    };
    /**
     * @description 删除事件监听函数
     * @param {string} evtName 事件名称
     * @param {(result:any)=>void} listener 事件处理函数
    */
    CenXfs.prototype.removeEventListener = function (eventID, listener) {
        if (typeof this.events[eventID] !== "undefined") {
            this.events[eventID].removeEventListener(listener);
        }
    };
    /**
     * 事件处理函数
     * @param {number} message 消息类型
     * @param {JSON} event 事件数据
    */
    CenXfs.prototype.onEvent = function (message, event) {
        if (this.events[event.dwEventID]) {
            this.events[event.dwEventID].dispatchEvent(null, event);
        }
    };
    CenXfs.prototype.typeChecked = function (value, arrayOfValidType, varName) {
        var valid = false;
        for (var t in arrayOfValidType) {
            if (typeof value == arrayOfValidType[t]) {
                valid = true;
                break;
            }
        }
        if (!valid)
            throw new Error(varName + " cann't be " + typeof value);
    };
    return CenXfs;
}());
