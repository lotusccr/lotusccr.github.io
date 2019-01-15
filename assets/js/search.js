 function getRootPath(){  
        //获取当前网址，如： http://localhost:8088/projectName/index.jsp  
        var curWwwPath = window.document.location.href;  
        //获取主机地址之后的目录，如： projectName/index.jsp  
        var pathName = window.document.location.pathname;  
        var pos = curWwwPath.indexOf(pathName);  
        //获取主机地址，如： http://localhost:8088  
        var localhostPath = curWwwPath.substring(0, pos);  
        //获取带"/"的项目名，如：/projectName  
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/')+1);  
        return(localhostPath);  
    }  

 var page = { 
        url: location.pathname,
    };
	
 if ( page.url == '/posts/' ){
        document.querySelector('.page-search-input').addEventListener('keyup',function(e){
            var archive = document.getElementsByClassName('archive-item-link');
            for (var i = 0; i < archive.length; i++){
                if( archive[i].title.toLowerCase().indexOf(this.value.toLowerCase()) > -1 ) {
                    archive[i].closest('li').style.display = 'block';
                } else {
                    archive[i].closest('li').style.display = 'none';
                }
            }
            if(e.keyCode == 13){
               // location.href = '/search?keyword='+this.value;
            }
        })
    }

function getQuery(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}	
	

	