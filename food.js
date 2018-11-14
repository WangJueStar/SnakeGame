//自调用函数--食物
(function(){
    var elements=[];//调用每个小方块食物
    function Food(x,y,width,height,color){
        this.x=x||0;
        this.y=y||0;
        this.width=width||20;
        this.height=height||20;
        this.color=color||"green";
    };
    Food.prototype.init=function(map){
        remove();
        //创建DIV
        var div=document.createElement("div");
        //把DIV加入到map中去
        map.appendChild(div);
        //设置div的样式
        div.style.width=this.width+"px";
        div.style.height=this.height+"px";
        div.style.backgroundColor=this.color;
/*             div.style.left=this.x+"px";//需要随机产生
        div.style.top=this.y+"px"; */
        //把div加入到elements数组中去
        div.style.position="absolute";
        //随机横纵坐标
        this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
        this.y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
        div.style.left=this.x+"px";
        div.style.top=this.y+"px";
        elements.push(div);
    };
    function remove(){
        for(var i=0;i<elements.length;i++){
            var ele=elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i,1)
        }
    };
    //局部变量变全局
    window.Food=Food;

}());