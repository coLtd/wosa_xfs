/// <reference path="cenxfs.ts"/>
/**
 * 将面向对象的CEN/XFS接口封装为Promise
 * @module
*/
/**
 * CEN/XFS api的promise实现
 * @class CenXfsPromise
*/
var CenXfsPromise = /** @class */ (function () {
    /**
     * CEN/XFS构造函数
     * @constructor
     * @param {CenXfs|CenXfsApi} cenXfs CenXfs对象或CenXfsApi对象
    */
    function CenXfsPromise(apiOrCenXfsOrCallback) {
        var _this = this;
        /**
         * WFSPromiseOpen函数别名
         * @public
        */
        this.promiseOpen = this.WFSPromiseOpen;
        /**
         * WFSPromiseOpen函数别名
         * @public
        */
        this.open = this.WFSPromiseOpen;
        /**
         * WFSPromiseClose函数别名
         * @public
        */
        this.promiseClose = this.WFSPromiseClose;
        /**
         * WFSPromiseClose函数别名
         * @public
        */
        this.close = this.WFSPromiseClose;
        /**
         * WFSCancelAsyncRequest函数别名
        */
        this.cancelAsyncRequest = this.WFSCancelAsyncRequest;
        /**
         * WFSPromiseRegister函数别名
         * @public
        */
        this.promiseRegister = this.WFSPromiseRegister;
        /**
         * WFSPromiseRegister函数别名
         * @public
        */
        this.register = this.WFSPromiseRegister;
        /**
         * WFSPromiseDeregister函数别名
         * @public
        */
        this.promiseDeregister = this.WFSPromiseDeregister;
        /**
         * WFSPromiseDeregister函数别名
         * @public
        */
        this.deregister = this.WFSPromiseDeregister;
        /**
         * WFSPromiseGetInfo函数别名
         * @public
        */
        this.promiseGetInfo = this.WFSPromiseGetInfo;
        /**
         * WFSPromiseGetInfo函数别名
         * @public
        */
        this.getInfo = this.WFSPromiseGetInfo;
        /**
         * WFSPromiseExecute函数别名
         * @public
        */
        this.promiseExecute = this.WFSPromiseExecute;
        /**
         * WFSPromiseExecute函数别名
         * @public
        */
        this.execute = this.WFSPromiseExecute;
        /**
         * WFSPromiseLock函数别名
         * @public
        */
        this.promiseLock = this.WFSPromiseLock;
        /**
         * WFSPromiseLock函数别名
         * @public
        */
        this.lock = this.WFSPromiseLock;
        /**
         * WFSPromiseUnlock函数别名
         * @public
        */
        this.promiseUnlock = this.WFSPromiseUnlock;
        /**
         * WFSPromiseUnlock函数别名
         * @public
        */
        this.unlock = this.WFSPromiseUnlock;
        /**
         * WFMSetTraceLevel函数别名
         * @public
        */
        this.setTraceLevel = this.WFMSetTraceLevel;
        if (apiOrCenXfsOrCallback instanceof CenXfsApi) {
            this.cenXfs = new CenXfs(apiOrCenXfsOrCallback);
        }
        else if (apiOrCenXfsOrCallback instanceof CenXfs) {
            this.cenXfs = apiOrCenXfsOrCallback;
        }
        else if (typeof apiOrCenXfsOrCallback == "function") {
            new CenXfs(function (cenXfsObj) {
                _this.cenXfs = cenXfsObj;
                apiOrCenXfsOrCallback(_this);
            });
        }
        else {
            throw new Error("CenXfsPromise constructor only accept CenXfs and CenXfsApi objects");
        }
    }
    /**
     * 创建异步创建CenXfsPromise对象
     * @public
    */
    CenXfsPromise.promise = function () {
        return new Promise(function (resolve, reject) {
            new CenXfsPromise(function (object) {
                if (object)
                    resolve(object);
                else
                    reject(-15);
            });
        });
    };
    Object.defineProperty(CenXfsPromise.prototype, "supportSpiVersions", {
        /**
     * 获取服务支持的版本信息
     * 调用open后才可获取到对应的版本信息
    */
        get: function () {
            return this.cenXfs.supportSpiVersions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenXfsPromise.prototype, "dwVersionsRequired", {
        /**
         * 获取WOSA/XFS API版本信息
         * 调用open后才可获取到对应的版本信息
        */
        get: function () {
            return this.cenXfs.dwVersionsRequired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CenXfsPromise.prototype, "spiVersion", {
        /**
         * 获取WOSA/XFS spi版本信息
         * 调用open后才可获取到对应的版本信息
        */
        get: function () {
            return this.cenXfs.spiVersion;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 打开设备
     * @param {string} lpszLogicalName 设备逻辑名称
     * @param {string} lpszAppID appID
     * @param {number} dwTraceLevel 日志跟踪级别
     * @param {number} dwTimeOut 打开设备超时时间
    */
    CenXfsPromise.prototype.WFSPromiseOpen = function (lpszLogicalName, lpszAppID, dwTraceLevel, dwTimeOut) {
        var _this = this;
        if (dwTimeOut === void 0) { dwTimeOut = 0; }
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncOpen(lpszLogicalName, lpszAppID, dwTraceLevel, dwTimeOut, function (error, response) {
                if (error && error != 0)
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 关闭设备
     * @public
    */
    CenXfsPromise.prototype.WFSPromiseClose = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncClose(function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 取消请求
     * @public
    */
    CenXfsPromise.prototype.WFSCancelAsyncRequest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSCancelAsyncRequest(function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 注册事件处理函数
    */
    CenXfsPromise.prototype.WFSPromiseRegister = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncRegister(function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 注销事件处理函数
    */
    CenXfsPromise.prototype.WFSPromiseDeregister = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncDeregister(function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 执行Info命令
     * @param {number} dwCategory info命令标识
     * @param {JSON} lpQueryDetails info命令参数
     * @param {number} dwTimeOut 命令执行超时时间
    */
    CenXfsPromise.prototype.WFSPromiseGetInfo = function (dwCategory, lpQueryDetails, dwTimeOut) {
        var _this = this;
        if (dwTimeOut === void 0) { dwTimeOut = 0; }
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncGetInfo(dwCategory, lpQueryDetails, dwTimeOut, function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 执行cmd命令
     * @param {number} dwCommand cmd命令标识
     * @param {JSON} lpCmdData cmd命令参数
     * @param {number} dwTimeOut 命令执行超时时间
    */
    CenXfsPromise.prototype.WFSPromiseExecute = function (dwCommand, lpCmdData, dwTimeOut) {
        var _this = this;
        if (lpCmdData === void 0) { lpCmdData = null; }
        if (dwTimeOut === void 0) { dwTimeOut = 0; }
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncExecute(dwCommand, lpCmdData, dwTimeOut, function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 锁定设备
     * @param {number} dwTimeOut 锁定设备超时时间
    */
    CenXfsPromise.prototype.WFSPromiseLock = function (dwTimeOut) {
        var _this = this;
        if (dwTimeOut === void 0) { dwTimeOut = 0; }
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncLock(dwTimeOut, function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 解除锁定
    */
    CenXfsPromise.prototype.WFSPromiseUnlock = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFSAsyncUnlock(function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * 修改日志跟踪级别
     * @param {number} dwTraceLevel 日志跟踪级别
    */
    CenXfsPromise.prototype.WFMSetTraceLevel = function (dwTraceLevel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cenXfs.WFMSetTraceLevel(dwTraceLevel, function (error, response) {
                if (error && (error != 0))
                    reject(error);
                else
                    resolve(response);
            });
        });
    };
    /**
     * @class
     * @description 添加事件监听函数
     * @param {number} eventID 事件ID
     * @param {(event:CEvent)=>void} listener 事件处理函数
    */
    CenXfsPromise.prototype.addEventListener = function (eventID, listener) {
        this.cenXfs.addEventListener(eventID, listener);
    };
    /**
     * @description 删除事件监听函数
     * @param {string} evtName 事件名称
     * @param {(result:any)=>void} listener 事件处理函数
    */
    CenXfsPromise.prototype.removeEventListener = function (eventID, listener) {
        this.cenXfs.removeEventListener(eventID, listener);
    };
    return CenXfsPromise;
}());
