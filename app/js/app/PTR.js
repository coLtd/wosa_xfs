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
          value: 0
        },
        lpszFields: {
          type: 'array',
          options: [],
          value: 0
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
            output: 'lpBuffer.lpszFields',
            watch: 'lpszFormName',
            invoke: {
              name: 'WFS_INF_PTR_QUERY_FIELD',
              param: true,
              paramType: 'json',
              paramRef: ['lpszFormName', 'lpszFields'],
              watch: 'lpszFields',
              lastInvoke: true
            }
          }
        }
      }
    },
    WFS_INF_PTR_QUERY_MEDIA: {
      data: {
        lpszMediaName: {
          type: 'array',
          options: [],
          value: null
        }
      },
      methods: {
        entry: 'lpszMediaName',
        lpszMediaName: {
          name: 'WFS_INF_PTR_MEDIA_LIST',
          param: false,
          paramRef: null,
          output: 'lpBuffer',
          outputRef: 'lpszMediaName',
          invoke: {
            name: 'WFS_INF_PTR_QUERY_MEDIA',
            param: true,
            paramType: 'string',
            paramRef: 'lpszMediaName',
            watch: 'lpszMediaName'
          }
        }
      }
    },
    WFS_INF_PTR_QUERY_FORM: {
      data: {
        lpszFormName: {
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
            watch: 'lpszFormName'
          }
        }
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
