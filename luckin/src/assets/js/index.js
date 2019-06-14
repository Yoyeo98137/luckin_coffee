    var ofun = function(){
        // 导航栏
        var aNavlist = document.querySelectorAll('.header-list>ul>li>a');
        if(aNavlist!= undefined){
            for(let i=0;i<aNavlist.length;i++){
                aNavlist[i].onmouseover = function(){
                    aNavlist[i].classList.add('active');
                }
                aNavlist[i].onmouseout = function(){
                    if(i>=0){
                        aNavlist[i].classList.remove('active');
                    }
                }
            }
        }

        // 首页视频
        var video=document.querySelector('video');     //获取video对象
        if(video!=undefined){
            video.controls=false;       //设置控制条不显示
        }

        // 回到顶部
        var oBtn = document.getElementsByClassName('for-top')[0];
        
        if(oBtn!=undefined){
            function scrollCheck() {
                if(document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
                    oBtn.style.height = "50px";
                    oBtn.style.opacity = "1";
                } else {
                    oBtn.style.height = "0";
                    oBtn.style.opacity = "0";
                }
            }
            var body = document.documentElement || document.body;
            function goToTop() {
                /*延时上升*/
                var loop = setInterval(function(){
                    /*浏览器兼容*/
                    body.scrollTop -= 32;
                    // $(document).scrollTop();
                    // console.log(body.scrollTop);
                    if(body.scrollTop == 0) {
                        clearInterval(loop);
                    }
                }, 1);
            }
            /*滚动时执行*/
            window.onscroll = function() {
                scrollCheck();
            }
    
            oBtn.onclick = function() {
                goToTop();
            }
        }
    }

    module.exports = ofun;
    
