/**
 * @class 
 * @description 远程对象本地代理
*/
declare class CenXfsApi {

    /**
     * @function
     * @description 打开设备
     * @param {string} lpszLogicalName 设备逻辑名称
     * @param {string} lpszAppID App标识
     * @param {number} dwTraceLevel 日志级别
     * @param {number} dwTimeOut 超时时间
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一对象回调对象包含以下字段：
     *  {
     *      "hService":<value>,
     *      "hResult": <value>,
     *      "lpRequestID":<value>,
     *      "supportSpiVersions":<object>,
     *      "dwVersionsRequired":<object>,
     *      "spiVersion":<object>
     *  }
    */
    WFSAsyncOpen(
        lpszLogicalName:string,
        lpszAppID:string,
        dwTraceLevel:number,
        dwTimeOut:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function
     * @description 关闭设备
     * @param {number} hService 服务句柄
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncClose(
        hService:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function
     * @description 取消异步请求
     * @param {number} hService 服务句柄
     * @param {number} 请求ID，传0时取消所有请求
     * @param {callback} 回调函数，返回对象必定包含"hResult"字段
     * @example
     *  {
     *      "hResult":<value>
     *  }
    */
    WFSCancelAsyncRequest(
        hService:number,
        RequestID:number,
        callback:(resp:any)=>void);
    
    /**
     * @function
     * @description 注册事件
     * @param {hService} number 服务句柄
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>,
     *      "eventHandler":<value> // 成功时才有此字段
     *  }
    */
    WFSAsyncRegister(
        hService:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);


    /**
     * @function 
     * @description 注销事件
     * @param {number} hService 服务句柄
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncDeregister(
        hService:number,
        eventHandler:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function 
     * @description 获取信息函数
     * @param {number} hService 服务句柄
     * @param {number} dwCategory 信息种类标识
     * @param {Object | string | number | null} queryDetails 信息参数
     * @param {number} dwTimeOut 超时时间
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncGetInfo(
        hService:number,
        dwCategory:number,
        queryDetails:Object | string | number | null,
        dwTimeOut:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function 
     * @description 执行命令函数
     * @param {number} dwCommand 命令表示
     * @param {Object | string | number | null} cmdData 命令参数
     * @param {number} dwTimeOut 超时时间
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncExecute(
        hService:number,
        dwCommand:number,
        cmdData:Object | string | number | null,
        dwTimeOut:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function
     * @description 锁定设备
     * @param {number} hService 服务句柄
     * @param {number} dwTimeOut 超时时间
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncLock(
        hService:number,
        dwTimeOut:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);

    /**
     * @function
     * @description 解锁设备
     * @param {number} hService 服务句柄
     * @param {(resp:any)=>void} callback1 第一次回调，返回对象必定包含"hResult"字段
     * @param {(resp:any)=>void} callback2 第二次回调，返回响应对象
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *      "lpRequestID":<value>
     *  }
    */
    WFSAsyncUnlock(
        hService:number,
        callback1:(resp:any)=>void,
        callback2:(resp:any)=>void);
    
    /**
     * @function 
     * @description 设置日志跟踪级别
     * @param {number} dwTraceLevel 日志级别
     * @param {(resp:any)=>void} callback 回调函数
     * @example 第一次回调用对象包含以下字段：
     *  {
     *      "hResult":<value>,
     *  } 
    */
    WFMSetTraceLevel(
        dwTraceLevel:number,
        callback:(resp:any)=>void);


    /**
     * @function 
     * @description 注册事件，将服务句柄的事件分发到执行对象
     * @param {number} hService 服务句柄
     * @param {CenXfs} cenxfs CenXfs对象
    */
    registEventAssociatedObject(
        hService:number,
        cenxfs:CenXfs);

    /**
     * @function
     * @description 注销事件，注销指定服务句柄的所有事件处理对象
     * @param {number} hService 服务器句柄
    */
    unregistEventAssociatedObject(
        hService:number);
}


/**
 * @class
 * @description 处理远程信号
*/
declare class CxPons {

    constructor(callback:(cenxfs:CenXfsApi)=>void);
}