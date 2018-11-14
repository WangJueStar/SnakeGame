 //小蛇的 
 (function(){
    //存放每个小蛇的身体部分
    var elements=[];
    //小蛇的构造函数
    function Snack(width,height,direction){
        this.width=width||20;
        this.height=height||20;
        //小蛇的身体
        this.body=[
            {x:3,y:2,color:"red"},
            {x:2,y:2,color:"yellow"},
            {x:1,y:2,color:"yellow"}
        ];
        this.direction=direction||"right";
    };
    //小蛇的原型对象
    Snack.prototype.init=function(map){
        //先删除之前的小蛇
        remove();
        for(var i=0;i<this.body.length;i++){
            var obj=this.body[i];
            var div=document.createElement("div");  
            map.appendChild(div);
            div.style.position="absolute";
            div.style.width=this.width+"px";
            div.style.height=this.height+"px";
            div.style.left=obj.x*this.width+"px";
            div.style.top=obj.y*this.height+"px";
            div.style.backgroundColor=obj.color;
            //放入数组
            elements.push(div);
        };
    };

    //为原型添加方法--让小蛇动起来
    Snack.prototype.move=function(food,map){
        var i=this.body.length-1;
        for(;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        //判断方向
        switch(this.direction){
            case "right":this.body[0].x+=1;break;
            case "left":this.body[0].x-=1;break;
            case "top":this.body[0].y-=1;break;
            case "bottom":this.body[0].y+=1;break;
        };
        var headX=this.body[0].x*this.width;
        var heady=this.body[0].y*this.height;
        //判断蛇头坐标是否跟食物坐标相同
        if(headX==food.x&&heady==food.y){
            var last=this.body[this.body.length-1];
            this.body.push({x:last.x,y:last.y,color:last.color});
            //重新生成食物
            food.init(map);
        };
    };
    function remove(){
        var i=elements.length-1;
        for(;i>=0;i--){
            var ele=elements[i];
            //从map地图上删除DIV
            ele.parentNode.removeChild(ele);
            elements.splice(i,1);
        }
    }
    window.Snack=Snack;
}());  