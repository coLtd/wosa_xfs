var CLASS="PTR";

var information;
;(function(info){
    var fn = function (flag, params) {
      return (
        function (inf) {
          if (!service) return          
          showMask();
          service.WFSPromiseGetInfo(PTR.INF[flag], params, 1000).then((response)=>{
            insertSuccReocrd(response, "WFSAsyncGetInfo " + flag  + " response");
            hideMask();
          }).catch((err)=>{
            insertErrRecord(err, "WFSAsyncGetInfo " + flag  + " response");
            hideMask();
          });
        }
      )
    }
    info["WFS_INF_PTR_QUERY_FORM"] = fn("WFS_INF_PTR_QUERY_FORM", "GWIPassbookForm")
})(information || (information = {}));