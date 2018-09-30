/// <reference path="cenxfs.ts"/>

/**
 * 将面向对象的CEN/XFS接口封装为Promise
 * @module
*/

/**
 * CEN/XFS api的promise实现
 * @class CenXfsPromise
*/
class CenXfsPromise {

    /**
     * CEN/XFS 面向对象的接口对象
     * @private
    */
    private cenXfs:CenXfs;

    /**
     * WFSPromiseOpen函数别名
     * @public
    */
    promiseOpen = this.WFSPromiseOpen;

    /**
     * WFSPromiseOpen函数别名
     * @public
    */
    open = this.WFSPromiseOpen;

    /**
     * WFSPromiseClose函数别名
     * @public
    */
    promiseClose = this.WFSPromiseClose;

    /**
     * WFSPromiseClose函数别名
     * @public
    */
    close = this.WFSPromiseClose;

    /**
     * WFSCancelAsyncRequest函数别名
    */
    cancelAsyncRequest = this.WFSCancelAsyncRequest;

    /**
     * WFSPromiseRegister函数别名
     * @public
    */
    promiseRegister = this.WFSPromiseRegister;

    /**
     * WFSPromiseRegister函数别名
     * @public
    */
    register = this.WFSPromiseRegister;

    /**
     * WFSPromiseDeregister函数别名
     * @public
    */
    promiseDeregister = this.WFSPromiseDeregister;

    /**
     * WFSPromiseDeregister函数别名
     * @public
    */
    deregister = this.WFSPromiseDeregister;

    /**
     * WFSPromiseGetInfo函数别名
     * @public
    */
    promiseGetInfo = this.WFSPromiseGetInfo;

    /**
     * WFSPromiseGetInfo函数别名
     * @public
    */
    getInfo = this.WFSPromiseGetInfo;

    /**
     * WFSPromiseExecute函数别名
     * @public
    */
    promiseExecute = this.WFSPromiseExecute;

    /**
     * WFSPromiseExecute函数别名
     * @public
    */
    execute = this.WFSPromiseExecute;

    /**
     * WFSPromiseLock函数别名
     * @public
    */
    promiseLock = this.WFSPromiseLock;

    /**
     * WFSPromiseLock函数别名
     * @public
    */
    lock = this.WFSPromiseLock;

    /**
     * WFSPromiseUnlock函数别名
     * @public
    */
    promiseUnlock = this.WFSPromiseUnlock;

    /**
     * WFSPromiseUnlock函数别名
     * @public
    */
    unlock = this.WFSPromiseUnlock;

    /**
     * WFMSetTraceLevel函数别名
     * @public
    */
    setTraceLevel = this.WFMSetTraceLevel;

    /**
     * 创建异步创建CenXfsPromise对象
     * @public
    */
    static promise() {
        return new Promise((resolve, reject) => {
            new CenXfsPromise((object)=>{
                if(object) resolve(object);
                else reject(-15);
            });
        });
    }

    /**
     * CEN/XFS构造函数
     * @constructor
     * @param {CenXfs|CenXfsApi} cenXfs CenXfs对象或CenXfsApi对象
    */
    constructor(apiOrCenXfsOrCallback: any) 
    {
        if(apiOrCenXfsOrCallback instanceof CenXfsApi) {
            this.cenXfs = new CenXfs(apiOrCenXfsOrCallback);
        } else if(apiOrCenXfsOrCallback instanceof CenXfs) {
            this.cenXfs = apiOrCenXfsOrCallback;
        } else if(typeof apiOrCenXfsOrCallback == "function"){
            new CenXfs((cenXfsObj)=>{
                this.cenXfs = cenXfsObj;
                apiOrCenXfsOrCallback(this);
            });
        } else {
            throw new Error("CenXfsPromise constructor only accept CenXfs and CenXfsApi objects")
        }
    }

        /**
     * 获取服务支持的版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get supportSpiVersions() : Object {
        return this.cenXfs.supportSpiVersions;
    }

    /**
     * 获取WOSA/XFS API版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get dwVersionsRequired() : Object {
        return this.cenXfs.dwVersionsRequired;
    }

    /**
     * 获取WOSA/XFS spi版本信息
     * 调用open后才可获取到对应的版本信息
    */
    get spiVersion() : Object {
        return this.cenXfs.spiVersion;
    }

    /**
     * 打开设备
     * @param {string} lpszLogicalName 设备逻辑名称
     * @param {string} lpszAppID appID
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {number} dwTimeOut 打开设备超时时间
    */
    WFSPromiseOpen(
        lpszLogicalName:string,
        lpszAppID:string,
        dwTraceLevel:number,
        dwTimeOut:number = 0)
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncOpen(
                lpszLogicalName,
                lpszAppID,
                dwTraceLevel,
                dwTimeOut,
                (error, response) => {
                    if(error && error != 0) reject(error);
                    else resolve(response);
            });
        });
    }

    /**
     * 关闭设备
     * @public
    */
    WFSPromiseClose()
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncClose(function(error, response){
                if(error && (error != 0)) reject(error);
                else resolve(response);
            });
        });
    }

    /**
     * 取消请求
     * @public
    */
    WFSCancelAsyncRequest()
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSCancelAsyncRequest(function(error, response){
                if(error && (error != 0)) reject(error);
                else resolve(response);
            });
        });
    }

    /**
     * 注册事件处理函数
    */
    WFSPromiseRegister()
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncRegister((error, response) => {
                if(error && (error != 0)) reject(error);
                else resolve(response);
            });
        });
    }

   /**
    * 注销事件处理函数
   */
    WFSPromiseDeregister()
    {
      return new Promise((resolve, reject) => {
        this.cenXfs.WFSAsyncDeregister((error, response) => {
            if(error && (error != 0)) reject(error);
            else resolve(response);
        })
      });
  }

    /**
     * 执行Info命令
     * @param {number} dwCategory info命令标识
     * @param {JSON} lpQueryDetails info命令参数
     * @param {number} dwTimeOut 命令执行超时时间
    */
    WFSPromiseGetInfo(        
        dwCategory:number, 
        lpQueryDetails:JSON, 
        dwTimeOut:number = 0)
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncGetInfo(
                dwCategory,
                lpQueryDetails,
                dwTimeOut,
                (error, response) => {
                    if(error && (error != 0)) reject(error);
                    else resolve(response);
            })
        });
    }

    /**
     * 执行cmd命令
     * @param {number} dwCommand cmd命令标识
     * @param {JSON} lpCmdData cmd命令参数
     * @param {number} dwTimeOut 命令执行超时时间
    */
    WFSPromiseExecute(
        dwCommand:number,
        lpCmdData:JSON = null,
        dwTimeOut:number = 0)
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncExecute(
                dwCommand,
                lpCmdData,
                dwTimeOut,
                (error, response) => {
                    if(error && (error != 0)) reject(error);
                    else resolve(response);
            });
        });
    }

    /**
     * 锁定设备
     * @param {number} dwTimeOut 锁定设备超时时间
    */
    WFSPromiseLock(
        dwTimeOut:number = 0)
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncLock(
                dwTimeOut,
                (error, response) => {
                    if(error && (error != 0)) reject(error);
                    else resolve(response);
            });
        });
    }

    /**
     * 解除锁定
    */
    WFSPromiseUnlock()
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFSAsyncUnlock((error, response) => {
                if(error && (error != 0)) reject(error);
                else resolve(response);
            });
        });
    }

    /**
     * 修改日志跟踪级别
     * @param {number} dwTraceLevel 日志跟踪级别
    */
    WFMSetTraceLevel(
        dwTraceLevel:number)
    {
        return new Promise((resolve, reject) => {
            this.cenXfs.WFMSetTraceLevel(
                dwTraceLevel, 
                (error, response) => {
                    if(error && (error != 0)) reject(error);
                    else resolve(response);
            });
        })
    }

    /**
     * @class 
     * @description 添加事件监听函数
     * @param {number} eventID 事件ID
     * @param {(event:CEvent)=>void} listener 事件处理函数
    */
    addEventListener(eventID:number, listener:(event:CEvent)=>void) {
        this.cenXfs.addEventListener(eventID, listener);
    }

    /**
     * @description 删除事件监听函数
     * @param {string} evtName 事件名称
     * @param {(result:any)=>void} listener 事件处理函数
    */
    removeEventListener(eventID:number, listener:(event:CEvent)=>void) {
        this.cenXfs.removeEventListener(eventID, listener);
    }
}