// 侧边下拉目录
Vue.component('vue-dropdown-menu', {
  props: ['items'],
  template: `
        <ul class="dropdown-menu">
            <li v-for="item in items">
                <a :href="item.url"><i class="fa fa-caret-right"></i> {{ item.title }}</a>
            </li>
        </ul>
    `
})

// 通信数据列表
Vue.component('vue-communication-list', {
  props: ['records'],
  template: `
    <div>
        <div v-for="record in records" class="notification" style="margin-top: 0px;">
            <div :class="record.style">
                <span>{{ record.time }}</span> <i><{{ record.type }}></i>
            </div>
            <p><pre><code>{{ record.data }}</code></pre></p>
        </div>
    </div>
    `
})

Vue.component('vue-communication-params', {
  props: ['paramslist'],
  template: `
    <div class="notification"  style="margin-top: 0px;" v-if="Object.keys(paramslist).length > 0">
      <template v-for="p in Object.keys(paramslist)">
        <div v-if="paramslist[p].type === 'array'">
          <span>{{p}}：</span>
          <select :name="p" v-model="paramslist[p].value">
            <option v-for="name in paramslist[p].options" :value="name">{{ name }}</option>
          </select>
        </div>
      </template>
		</div>
  `
})

function showMask() {
  $('#communication').addClass('mask')
  $('#process').addClass('processing')
}

function hideMask() {
  $('#process').removeClass('processing')
  $('#communication').removeClass('mask')
}

function createRecord(record, resp, tag) {
  record.type = tag
  record.time = new Date().toLocaleTimeString()
  record.data = resp instanceof Error ? resp.stack : resp
  record.data =
    record.data instanceof Object
      ? JSON.stringify(record.data, null, 4)
      : record.data
  record.data =
    typeof record.data == 'number' ? WFSERROR[record.data] : record.data
  return record
}

function createErrRecord(err, tag) {
  record = {}
  record.style = 'notification notification-danger'
  return createRecord(record, err, tag + ' error')
}

function createSuccRecord(resp, tag) {
  record = {}
  record.style = 'notification notification-success'
  return createRecord(record, resp, tag)
}

function createEvtRecord(evt, tag) {
  record = {}
  record.style = 'notification notification-green'
  return createRecord(record, evt, tag)
}

function insertErrRecord(err, tag) {
  dataset.datalist.unshift(createErrRecord(err, tag))
}

function insertSuccReocrd(resp, tag) {
  dataset.datalist.unshift(createSuccRecord(resp, tag))
}

function insertEvtRecord(evt, tag) {
  dataset.datalist.unshift(createEvtRecord(evt, tag))
}

// 输入参数
function createParams(params, resp, tag) {
  params.type = tag
  params.value = resp
  return params
}

function createSuccParams(resp, tag) {
  params = {}
  params.style = 'notification notification-success'
  return createParams(params, resp, tag)
}

function insertSuccParams(resp, tag) {
  params.paramslist.unshift(createSuccParams(resp, tag))
}

// 设备对象
var service

function onWFSAsyncOpen() {
  var tag = 'WFSAsyncOpen response'
  CenXfsPromise.promise()
    .then(cenxfs => {
      showMask()
      service = cenxfs
      return service.WFSPromiseOpen(
        theRequest.service,
        'cn.cenxfs.receipt',
        0,
        2000
      )
    })
    .then(response => {
      insertSuccReocrd(response, tag)
      hideMask()
    })
    .catch(err => {
      insertErrRecord(err, tag)
      hideMask()
      service = null
    })
}

function onWFSAsyncClose() {
  var tag = 'WFSAsyncClose response'
  if (service) {
    showMask()
    service
      .WFSPromiseClose()
      .then(response => {
        insertSuccReocrd(response, tag)
        service = null
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  } else {
  }
}

function onWFSCancelAsyncRequest() {
  var tag = 'WFSCancelAsyncRequest response'
  if (service) {
    showMask()
    service
      .WFSCancelAsyncRequest()
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  }
}

function onWFSAsyncDeregister() {
  var tag = 'WFSAsyncDeregister response'
  if (service) {
    showMask()
    service
      .WFSPromiseDeregister()
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  }
}

function onWFSAsyncRegister() {
  var tag = 'WFSAsyncRegister response'
  if (service) {
    showMask()
    service
      .WFSPromiseRegister()
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  }
}

function onWFSAsyncLock() {
  var tag = 'WFSAsyncLock response'
  if (service) {
    showMask()
    service
      .WFSPromiseLock(1000)
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  }
}

function onWFSAsyncUnlock() {
  var tag = 'WFSAsyncUnlock response'
  if (service) {
    showMask()
    service
      .WFSPromiseUnlock()
      .then(response => {
        insertSuccReocrd(response, tag)
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, tag)
        hideMask()
      })
  }
}

function onWFMSetTraceLevel() {}
