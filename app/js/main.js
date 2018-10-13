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
      paramslist: {},
      paramsout: null
    },
    watch: {
      paramsout: {
        handler: function(v) {
          let name = Object.keys(v)[0]
          let o = v[name]
          if (!o) return
          let digit = o.invoke.class['INF'][o.invoke.name]
          let params = o.curValue
          if (!params) return
          let callbackfn = o.invoke.obj[o.invoke.name]
          callbackfn(digit, params)
        },
        deep: true
      }
    }
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

/**
 * info 请求通用处理函数
 * 用以处理无需参数的info请求
 */
function onInfoRequest(inf, CLASS) {
  console.log(inf)
  var digit = CLASS.INF[inf]
  var curparams = null
  if (typeof information == 'object' && typeof information[inf] == 'function') {
    var pname = information[inf + '_PRE']
    var pfns = pname['fnlist']
    inputparams.paramslist = {}
    for (var i = 0; i < pfns.length; i++) {
      var fn = pfns[i].name
      pfns[i].invoke.class = CLASS
      var dataSchema = {
        name: pfns[i].data,
        type: pfns[i].type,
        data: null,
        invoke: pfns[i].invoke,
        curValue: pfns[i].curValue
      }
      service
        .WFSPromiseGetInfo(CLASS.INF[fn], null, 1000)
        .then(response => {
          dataSchema.data = response['lpBuffer']
          dataSchema.curValue = dataSchema.data[0]
          inputparams.$set(inputparams.paramslist, dataSchema.name, dataSchema)
          insertSuccReocrd(response, 'WFSAsyncGetInfo ' + fn + ' response')
        })
        .catch(err => {
          insertErrRecord(err, 'WFSAsyncGetInfo ' + fn + ' response')
        })
    }
    return
  }
  var tag = 'WFSAsyncGetInfo ' + inf + ' response'
  if (service) {
    showMask()
    service
      .WFSPromiseGetInfo(digit, null, 1000)
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
