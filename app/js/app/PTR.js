var CLASS = 'PTR'
var information
;(function(info) {
  var _this = info
  // 渲染表单方法(参数) --> 渲染表单 ---> 表单触发 ---> 执行目标方法
  _this.render = {
    WFS_INF_PTR_QUERY_FIELD: {
      data: {
        lpszFormName: {
          type: 'array',
          options: [],
          value: null
        },
        lpszFields: {
          type: 'array',
          options: [],
          value: null
        }
      },
      methods: {
        entry: 'lpszFormName',
        lpszFormName: {
          name: 'WFS_INF_PTR_FORM_LIST',
          param: false,
          paramRef: null,
          output: 'lpBuffer',
          outputRef: 'lpszFormName',
          invoke: {
            name: 'WFS_INF_PTR_QUERY_FORM',
            param: true,
            paramType: 'string',
            paramRef: 'lpszFormName',
            outputRef: 'lpszFields',
            invoke: {
              name: 'WFS_INF_PTR_QUERY_FIELD',
              param: true,
              paramType: 'json',
              paramRef: ['lpszFormName', 'lpszFields']
            }
          }
        }
      }
    }
  }

  _this.WFS_INF_PTR_QUERY_FORM_PRE = {
    name: 'WFS_INF_PTR_FORM_LIST',
    data: 'lpszFormName',
    type: 'array',
    curValue: null,
    class: null,
    invoke: {
      name: 'WFS_INF_PTR_QUERY_FORM',
      params: ['lpszFormName'],
      paramstype: 'string',
      obj: info
    }
  }
  _this.WFS_INF_PTR_QUERY_MEDIA_PRE = {
    name: 'WFS_INF_PTR_MEDIA_LIST',
    data: 'lpszMediaName',
    type: 'array',
    curValue: null,
    class: null,
    invoke: {
      name: 'WFS_INF_PTR_QUERY_MEDIA',
      params: ['lpszMediaName'],
      paramstype: 'string',
      obj: info
    }
  }
  _this.WFS_INF_PTR_QUERY_FIELD_PRE = {
    name: 'WFS_INF_PTR_FORM_LIST',
    data: 'lpszFormName',
    type: 'array',
    curValue: null,
    class: null,
    invoke: {
      name: 'WFS_INF_PTR_QUERY_FORM',
      params: ['lpszFormName'],
      paramstype: 'string',
      obj: info
    },
    response: {
      name: 'lpszFields',
      type: 'array',
      data: null,
      curValue: null,
      invoke: {
        name: 'WFS_INF_PTR_QUERY_FIELD',
        params: ['lpszFormName', 'lpszFields'],
        paramstype: 'json',
        obj: info
      }
    }
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
    _this.invokefn(inf, params, 'WFS_INF_PTR_QUERY_FIELD')
  }
})(information || (information = {}))
