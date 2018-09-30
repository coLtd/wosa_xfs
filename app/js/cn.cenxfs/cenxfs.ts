/// <reference path="cenxfs.api.d.ts"/>
/// <reference path="event.d.ts"/>
/// <reference path="cenxfs.message.ts"/>
/// <reference path="XfsEventHandler.ts"/>

/**
 * CEN/XFS api面向对象封装
 * @class CenXfs
*/
class CenXfs {
    /**
     * CenXfsApi对象
     * @private
    */
    private cenXfsApi : CenXfsApi;

    /**
     * WOSA/XFS 服务句柄
     * @private
    */
    private hService : number;

    /**
     * 此服务程序支持的版本
    */
    private _supportSpiVersions:Array<string>;

    /**
     * WOSA/XFS API版本信息
    */
    private _dwVersionsRequired:Object;

    /**
     * WOSA/XFS spi版本信息
    */
    private _spiVersion:Object;

    /**
     * 事件处理器句柄
    */
    private eventHandler : number;

    /**
     * @property {Array<CXfsEventHandler>} events 事件处理器数组
    */
    private events:any;

    /**
     * CenXfs构造函数
     * @constructor
     * @param {CenXfsApi} cenXfsApi cenXfsApi对象，由CxPons异步返回
    */
    constructor(
        callbackOrCenXfsApi: any) //((cenXfs:any)=>void) | CenXfsApi
    {
        this.hService = 0;
        this.eventHandler = 0;
        
        if(typeof callbackOrCenXfsApi == "function") {
            new CxPons((CxApi) => {
                this.cenXfsApi = CxApi;
                callbackOrCenXfsApi(this);
            });  
        } else {
            this.cenXfsApi = callbackOrCenXfsApi;
        }
    }

    /**
     * 获取服务支持的版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get supportSpiVersions() : Object {
        return this._supportSpiVersions;
    }

    /**
     * 获取WOSA/XFS API版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get dwVersionsRequired() : Object {
        return this._dwVersionsRequired;
    }

    /**
     * 获取WOSA/XFS spi版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get spiVersion() : Object {
        return this._spiVersion;
    }

    /**
     * 异步打开函数
     * @param {string} lpszLogicalName 设备逻辑名称
     * @param {string} lpszAppID appID
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {number} dwTimeOut 打开设备超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncOpen(
        lpszLogicalName:string,
        lpszAppID:string,
        dwTraceLevel:number,
        dwTimeOut:number,
        response: (error:number, response:any) => void)
    {
        this.typeChecked(lpszLogicalName, ["string"], "lpszLogicalName");
        this.typeChecked(lpszAppID, ["string"], "lpszAppID");
        this.typeChecked(dwTraceLevel, ["number"], "dwTraceLevel");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncOpen(
            lpszLogicalName, 
            lpszAppID, 
            dwTraceLevel, 
            dwTimeOut, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    this.hService = resp.hService;
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                this._spiVersion = resp.spiVersion;
                this._dwVersionsRequired = resp.dwVersionsRequired;
                this._supportSpiVersions = resp.supportSpiVersions;
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }

    /**
     * 异步关闭设备
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncClose(
        response: (error:number, response:any) => void) 
    {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncClose(
            this.hService, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    this.cenXfsApi.unregistEventAssociatedObject(this.hService);
                    this.hService = null;
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }

    /**
     * 异步取消所有请求
    */
    WFSCancelAsyncRequest(
        response: (error:number, response:any) => void)
    {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSCancelAsyncRequest(
            this.hService,
            0,
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            });
    }

    /**
     * 注册事件处理函数
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncRegister(
        response: (error:number, response:any) => void) 
    {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncRegister(
            this.hService, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    this.cenXfsApi.registEventAssociatedObject(this.hService, this);
                    response(null, resp);
                } else {
                    this.eventHandler = 0;
                    response(resp.hResult, null);
                }  
            },
            (resp) => {
                if(resp && resp.hResult == 0) {
                    this.eventHandler = resp.eventHandler;
                } else {
                    response(resp.hResult, null);
                }
            });
    }

    /**
     * 注销事件处理函数
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncDeregister(
        response: (error:number, response:any) => void) 
    {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncDeregister(
            this.hService, 
            this.eventHandler,
            (resp) => {
                if(resp && resp.hResult == 0) {
                    this.cenXfsApi.unregistEventAssociatedObject(this.hService);
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0) {
                    response(resp.hResult, null);
                }
            });
    }

    /**
     * 异步执行Info命令
     * @param {number} dwCategory info命令标识
     * @param {JSON | string | null} lpQueryDetails info命令参数
     * @param {number} dwTimeOut 命令执行超时时间, 默认0，无限等待
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncGetInfo(
        dwCategory:number, 
        lpQueryDetails: any,
        dwTimeOut:number, 
        response: (error:number, response:any) => void) 
    {
        this.typeChecked(dwCategory, ["number"], "dwCategory");
        this.typeChecked(lpQueryDetails, 
            ["string", "object", "number", "null", "undefined"], "lpQueryDetails");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        var queryDetails = lpQueryDetails || "";
        queryDetails = queryDetails instanceof Object ? 
            JSON.stringify(queryDetails) : queryDetails;
        queryDetails = typeof queryDetails == "number" ? 
            ""+queryDetails : queryDetails;
        this.cenXfsApi.WFSAsyncGetInfo(
            this.hService, 
            dwCategory, 
            queryDetails, 
            dwTimeOut, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }

    /**
     * 异步执行cmd命令
     * @param {number} dwCommand cmd命令标识
     * @param {JSON} lpCmdData cmd命令参数
     * @param {number} dwTimeOut 命令执行超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncExecute(
        dwCommand:number,
        lpCmdData:any,
        dwTimeOut:number,
        response: (error:number, response:any) => void)
    {
        this.typeChecked(dwCommand, ["number"], "dwCommand");
        this.typeChecked(lpCmdData, 
            ["string", "object", "number", "null", "undefined"], "lpCmdData");
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        var cmdData = lpCmdData || "";
        cmdData = cmdData instanceof Object ? 
            JSON.stringify(cmdData) : cmdData;
        cmdData = typeof cmdData == "number" ? 
            ""+cmdData : cmdData;
        this.cenXfsApi.WFSAsyncExecute(
            this.hService, 
            dwCommand, 
            cmdData,
            dwTimeOut,
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }

    /**
     * 异步锁定设备
     * @param {number} dwTimeOut 锁定设备超时时间
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncLock(
        dwTimeOut:number, 
        response: (error:number, response:any) => void) 
    {
        this.typeChecked(dwTimeOut, ["number"], "dwTimeOut");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncLock(
            this.hService,
            dwTimeOut,
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }

    /**
     * 异步解除锁定
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFSAsyncUnlock(
        response: (error:number, response:any) => void)
    {
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFSAsyncUnlock(
            this.hService, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            },
            (resp) => {
                if(resp && resp.hResult != 0)
                    response(resp.hResult, null);
            });
    }
    
    /**
     * 修改日志跟踪级别
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {(error:number, response:any) => void} response 响应回调函数
    */
    WFMSetTraceLevel(
        dwTraceLevel:number,
        response: (error:number, response:any) => void)
    {
        this.typeChecked(dwTraceLevel, ["number"], "dwTraceLevel");
        this.typeChecked(response, ["function"], "response");
        this.cenXfsApi.WFMSetTraceLevel(
            dwTraceLevel, 
            (resp) => {
                if(resp && resp.hResult == 0) {
                    response(null, resp);
                } else {
                    response(resp.hResult, null);
                }
            });
    }

    /**
     * @class 
     * @description 添加事件监听函数
     * @param {number} eventID 事件ID
     * @param {(event:CEvent)=>void} listener 事件处理函数
    */
    addEventListener(eventID:number, listener:(event:CEvent)=>void) {
        if(typeof this.events[eventID] === "undefined") {
            this.events[eventID] = new CXfsEventHandler(eventID);
        }
        this.events[eventID].addEventListener(listener);
    }

    /**
     * @description 删除事件监听函数
     * @param {string} evtName 事件名称
     * @param {(result:any)=>void} listener 事件处理函数
    */
    removeEventListener(eventID:number, listener:(event:CEvent)=>void) {
        if(typeof this.events[eventID] !== "undefined") {
            this.events[eventID].removeEventListener(listener);
        }
    }

    /**
     * 事件处理函数
     * @param {number} message 消息类型
     * @param {JSON} event 事件数据
    */
    onEvent(message: WFSMESSAGE, event:CEvent) {
        if(this.events[event.dwEventID]) {
            this.events[event.dwEventID].dispatchEvent(null, event);
        }
    }

    private typeChecked(value:any, arrayOfValidType:string[], varName:string) {
        var valid = false;
        for(var t in arrayOfValidType) {
            if(typeof value == arrayOfValidType[t]) {
                valid = true;
                break;
            }
        }
        if(!valid) throw new Error(varName + " cann't be " + typeof value);
    }
}