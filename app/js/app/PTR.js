var CLASS = 'PTR'
var ParamsRelation = {
  // WFS_INF_PTR_QUERY_FORM_PRE: {
  //   name: 'WFS_INF_PTR_FORM_LIST',
  //   type: 'Array',
  //   tag: 'lpszFormName'
  // },
  // WFS_INF_PTR_QUERY_MEDIA: {
  //   name: 'WFS_INF_PTR_MEDIA_LIST',
  //   type: 'Array',
  //   tag: 'lpszMediaName'
  // },
  WFS_INF_PTR_QUERY_FIELD: {
    name: null,
    type: 'html',
    html:
      '<div> lpszFormName：<input type="text" name="lpszFormName"/> lpszFieldName： <input type="text" name="lpszFieldName"/> </div>',
    values: ['lpszFormName', 'lpszFieldName']
  }
}
var information
;(function(info) {
  var _this = info
  _this.WFS_INF_PTR_QUERY_FORM_PRE = {
    fnlist: [
      {
        name: 'WFS_INF_PTR_FORM_LIST',
        data: 'lpszFormName',
        type: 'array',
        curValue: null,
        invoke: {
          name: 'WFS_INF_PTR_QUERY_FORM',
          params: ['lpszFormName'],
          obj: info,
          class: null
        }
      }
    ]
  }
  _this.WFS_INF_PTR_QUERY_MEDIA_PRE = {
    fnlist: [
      {
        name: 'WFS_INF_PTR_MEDIA_LIST',
        data: 'lpszMediaName',
        type: 'array',
        curValue: null,
        invoke: {
          name: 'WFS_INF_PTR_QUERY_MEDIA',
          params: ['lpszMediaName'],
          obj: info,
          class: null
        }
      }
    ]
  }
  // 通用调用方法
  _this.invokefn = function(inf, params, tag) {
    showMask()
    service
      .WFSPromiseGetInfo(inf, params, 1000)
      .then(response => {
        insertSuccReocrd(response, 'WFSAsyncGetInfo ' + tag + ' response')
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, 'WFSAsyncGetInfo ' + tag + ' response')
        hideMask()
      })
  }
  _this.WFS_INF_PTR_QUERY_FORM = function(inf, params) {
    _this.invokefn(inf, params, 'WFS_INF_PTR_QUERY_FORM')
  }
  _this.WFS_INF_PTR_QUERY_MEDIA = function(inf, params) {
    _this.invokefn(inf, params, 'WFS_INF_PTR_QUERY_MEDIA')
  }
  _this.WFS_INF_PTR_QUERY_FIELD = function(inf, params) {
    // _this.invokefn(inf, params, 'WFS_INF_PTR_QUERY_MEDIA')
  }
})(information || (information = {}))
