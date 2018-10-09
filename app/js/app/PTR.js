var CLASS = 'PTR'

var information
;(function(info) {
  info.WFS_INF_PTR_QUERY_FORM = function(inf, params) {
    showMask()
    service
      .WFSPromiseGetInfo(inf, params, 1000)
      .then(response => {
        insertSuccReocrd(
          response,
          'WFSAsyncGetInfo WFS_INF_PTR_QUERY_FORM response'
        )
        hideMask()
      })
      .catch(err => {
        insertErrRecord(err, 'WFSAsyncGetInfo WFS_INF_PTR_QUERY_FORM response')
        hideMask()
      })
  }
})(information || (information = {}))
