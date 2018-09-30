/// <reference path="systemtime.d.ts"/>

/**
 * @class CEvent
 * @description 事件类型声明
 * @property {number} RequestID 请求id，由WOSA自动生成
 * @property {number} hService 服务句柄，打开时由WOSA生成，每次请求相应服务时传入服务句柄
 * @property {SYSTEMTIME} tsTimestamp 时间戳
 * @property {number} hResult 结果表示，0表示成功，其他表示失败
 * @property {number} dwEventID 事件唯一标识
 * @property {any} lpBuffer 事件数据
*/
declare class CEvent {
    RequestID:number;
    hService:number;
    tsTimestamp:SYSTEMTIME;
    hResult:number;
    dwEventID:number;
    lpBuffer?:any;
}