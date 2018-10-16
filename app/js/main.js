require.config({
  paths: {
    QWebChannel: './libs/qwebchannel',
    WFSMESSAGE: './cn.cenxfs/cenxfs.message',
    WFSERROR: './cn.cenxfs/cenxfs.error',
    CenXfsApi: './cn.cenxfs/cenxfs.api',
    CenXfs: './cn.cenxfs/cenxfs',
    CenXfsPromise: './cn.cenxfs/cenxfs.promise',
    xfsapi: './cn.cenxfs/class/xfsapi',
    xfsalm: './cn.cenxfs/class/xfsalm',
    xfsbcr: './cn.cenxfs/class/xfsbcr',
    xfscam: './cn.cenxfs/class/xfscam',
    xfscdm: './cn.cenxfs/class/xfscdm',
    xfsceu: './cn.cenxfs/class/xfsceu',
    xfschk: './cn.cenxfs/class/xfschk',
    xfscim: './cn.cenxfs/class/xfscim',
    xfscrd: './cn.cenxfs/class/xfscrd',
    xfsdep: './cn.cenxfs/class/xfsdep',
    xfsidc: './cn.cenxfs/class/xfsidc',
    xfsipm: './cn.cenxfs/class/xfsipm',
    xfspin: './cn.cenxfs/class/xfspin',
    xfsptr: './cn.cenxfs/class/xfsptr',
    xfssiu: './cn.cenxfs/class/xfssiu',
    xfsttu: './cn.cenxfs/class/xfsttu',
    xfsvdm: './cn.cenxfs/class/xfsvdm',
    APP: './app/app',
    ALM: './app/ALM',
    BCR: './app/BCR',
    CAM: './app/CAM',
    CDM: './app/CDM',
    CEU: './app/CEU',
    CHK: './app/CHK',
    CIM: './app/CIM',
    CRD: './app/CRD',
    DEP: './app/DEP',
    IDC: './app/IDC',
    IPM: './app/IPM',
    PIN: './app/PIN',
    PTR: './app/PTR',
    SIU: './app/SIU',
    TTU: './app/TTU',
    VDM: './app/VDM'
  },
  shim: {
    QWebChannel: {
      init: function() {
        return QWebChannel
      }
    },
    WFSMESSAGE: {
      init: function() {
        return WFSMESSAGE
      }
    },
    WFSERROR: {
      init: function() {
        return WFSERROR
      }
    },
    CenXfsApi: {
      deps: ['QWebChannel'],
      init: function() {
        return CxPons
      }
    },
    CenXfs: {
      deps: ['CenXfsApi'],
      init: function() {
        return CenXfs
      }
    },
    CenXfsPromise: {
      deps: ['CenXfsApi', 'CenXfs'],
      init: function() {
        return CenXfsPromise
      }
    },

    xfsapi: {
      init: function() {
        return null
      }
    },
    xfsalm: {
      deps: ['xfsapi'],
      init: function() {
        return ALM
      }
    },
    xfsbcr: {
      deps: ['xfsapi'],
      init: function() {
        return BCR
      }
    },
    xfscam: {
      deps: ['xfsapi'],
      init: function() {
        return CAM
      }
    },
    xfscdm: {
      deps: ['xfsapi'],
      init: function() {
        return CDM
      }
    },
    xfsceu: {
      deps: ['xfsapi'],
      init: function() {
        return CEU
      }
    },
    xfschk: {
      deps: ['xfsapi'],
      init: function() {
        return CHK
      }
    },
    xfscim: {
      deps: ['xfsapi'],
      init: function() {
        return CIM
      }
    },
    xfscrd: {
      deps: ['xfsapi'],
      init: function() {
        return CRD
      }
    },
    xfsdep: {
      deps: ['xfsapi'],
      init: function() {
        return DEP
      }
    },
    xfsidc: {
      deps: ['xfsapi'],
      init: function() {
        return IDC
      }
    },
    xfsipm: {
      deps: ['xfsapi'],
      init: function() {
        return IPM
      }
    },
    xfspin: {
      deps: ['xfsapi'],
      init: function() {
        return PIN
      }
    },
    xfsptr: {
      deps: ['xfsapi'],
      init: function() {
        return PTR
      }
    },
    xfssiu: {
      deps: ['xfsapi'],
      init: function() {
        return SIU
      }
    },
    xfsttu: {
      deps: ['xfsapi'],
      init: function() {
        return TTU
      }
    },
    xfsvdm: {
      deps: ['xfsapi'],
      init: function() {
        return VDM
      }
    },
    APP: {
      deps: [
        'xfsalm',
        'xfsbcr',
        'xfscam',
        'xfscdm',
        'xfsceu',
        'xfschk',
        'xfscim',
        'xfscrd',
        'xfsdep',
        'xfsidc',
        'xfsipm',
        'xfspin',
        'xfsptr',
        'xfssiu',
        'xfsttu',
        'xfsvdm',
        'WFSMESSAGE',
        'WFSERROR',
        'CenXfsPromise'
      ],
      init: function() {
        return null
      }
    },
    ALM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    BCR: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CAM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CDM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CEU: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CHK: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CIM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    CRD: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    DEP: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    IDC: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    IPM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    PIN: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    PTR: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    SIU: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    TTU: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    },
    VDM: {
      deps: ['APP'],
      init: function() {
        return CLASS
      }
    }
  }
})

var dataset
var params
var theRequest = GetRequest()

console.log('service name: ' + theRequest.service)

console.log(theRequest.Class)
require([theRequest.Class], function(CLASS) {
  console.log(CLASS)
  console.log('load finish.')
  // inf 命令
  var information = new Vue({
    el: '#inf',
    data: {
      funclist: []
    }
  })
  // 初始化 inf 命令
  for (var inf in window[CLASS].INF) {
    if (!/\d+/.test(inf)) {
      information.funclist.push({
        title: inf,
        url: "javascript:onInfoRequest('" + inf + "', " + CLASS + ');'
      })
    }
  }

  // cmd 命令
  var command = new Vue({
    el: '#cmd',
    data: {
      funclist: []
    }
  })

  // 初始化 cmd 命令
  for (var cmd in window[CLASS].CMD) {
    if (!/\d+/.test(cmd)) {
      command.funclist.push({
        title: cmd,
        url: "javascript:onCommandRequest('" + cmd + "', " + CLASS + ');'
      })
    }
  }

  // data
  dataset = new Vue({
    el: '#historylist',
    data: {
      datalist: []
    }
  })

  // params
  inputparams = new Vue({
    el: '#paramslist',
    data: {
      paramslist: {}
    },
    methods: {}
  })
})

// 获取url中的请求参数
function GetRequest() {
  var url = location.search //获取url中"?"符后的字串
  var theRequest = new Object()
  if (url.indexOf('?') != -1) {
    var str = url.substr(1)
    strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

function setWather(obj, cl) {
  let invoke = obj['invoke']
  // 一级监听器
  if (invoke) {
    let digit = cl['INF'][invoke.name]
    let params = null
    // 绑定监听器
    if (invoke.hasOwnProperty('watch')) {
      let watchname = 'paramslist.' + invoke['watch'] + '.value'
      inputparams.$watch(watchname, function(v) {
        if (!v) return
        let names = watchname.split('.')
        let curValueName = names[names.length - 1]
        if (invoke['param']) {
          if (invoke['paramType'] === 'string') {
            // 字符串
            params = inputparams.paramslist[invoke['paramRef']]['value']
          } else if (invoke['paramType'] === 'json') {
            // json
            params = {}
            invoke['paramRef'].map(p => {
              p === curValueName
                ? (params[p] = v)
                : (params[p] = inputparams.paramslist[p]['value'])
            })
          } else {
            // json数组
          }
          console.log(invoke.name)
          console.log(params)
          if (params) {
            service
              .WFSPromiseGetInfo(digit, params, 1000)
              .then(response => {
                if (invoke.outputRef) {
                  let out = invoke.output.split('.')
                  out.length > 1
                    ? (out = response[out[0]][out[1]])
                    : (out = response[out[0]])
                  if (
                    inputparams.paramslist[invoke.outputRef]['type'] === 'array'
                  ) {
                    inputparams.paramslist[invoke.outputRef]['options'] = out
                    inputparams.paramslist[invoke.outputRef]['value'] = out[0]
                  } else {
                    inputparams.paramslist[invoke.outputRef]['value'] = out
                  }
                }
                insertSuccReocrd(
                  response,
                  'WFSAsyncGetInfo ' + invoke.name + ' response'
                )
              })
              .catch(err => {
                insertErrRecord(
                  err,
                  'WFSAsyncGetInfo ' + invoke.name + ' response'
                )
              })
          }
        }
      })
    }
  }
  // 二级监听器
  if (invoke.hasOwnProperty('invoke')) {
    setWather(invoke, cl)
  }
}

function onInfoRequest(inf, CLASS) {
  // 清空参数数据缓冲区, 同时取消监听器
  inputparams.paramslist = {}
  if (typeof information == 'object' && typeof information[inf] == 'function') {
    let pa = information['render'][inf]
    inputparams.paramslist = pa.data
    let fnsObj = pa.methods
    if (fnsObj) {
      let fn = fnsObj['entry']
      let fnname = fnsObj[fn]['name']
      let digit = CLASS.INF[fnname]
      let output = fnsObj[fn]['output']
      // 事先设置监听器，兵马未动，粮草先行！
      setWather(fnsObj[fn], CLASS)
      service
        .WFSPromiseGetInfo(digit, null, 1000)
        .then(response => {
          if (output) {
            if (inputparams.paramslist[fn]['type'] === 'array') {
              inputparams.paramslist[fn]['options'] = response[output]
              inputparams.paramslist[fn]['value'] = response[output][0]
            } else {
              inputparams.paramslist[fn]['value'] = response[output]
            }
          }
          insertSuccReocrd(response, 'WFSAsyncGetInfo ' + fnname + ' response')
        })
        .catch(err => {
          insertErrRecord(err, 'WFSAsyncGetInfo ' + invoke.name + ' response')
        })
    }
    return
  }
  var tag = 'WFSAsyncGetInfo ' + inf + ' response'
  if (service) {
    showMask()
    service
      .WFSPromiseGetInfo(CLASS.INF[inf], null, 1000)
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  } else {
  }
}
/**
 * cmd 请求通用处理函数
 * 用以处理无需参数的cmd请求
 */
function onCommandRequest(cmd, CLASS) {
  var digit = CLASS.CMD[cmd]
  if (typeof command == 'object' && typeof command[cmd] == 'function') {
    command[cmd](digit)
    return
  }
  var tag = 'WFSAsyncGetInfo ' + cmd + ' response'
  if (service) {
    showMask()
    service
      .WFSPromiseExecute(digit, null, 1000)
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  } else {
  }
}
