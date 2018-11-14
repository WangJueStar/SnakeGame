//自调用函数--游戏对象
(function(){
    var that=null;
    function Game(map){
        //创建实例对象食物
        this.food=new Food();
        //创建实例对象小蛇
        this.sanke=new Snack();
        this.map=map;//地图
        that=this;
    };
    Game.prototype.init=function(){
        //初始化游戏
        //食物初始化
        this.food.init(this.map);
        //小蛇初始化
        this.sanke.init(this.map);
        //调用自动移动小蛇的方法
        this.runSnake(this.food,this.map);
        //调用改变小蛇方向的方法
        this.bindKey();
        /* setInterval(function(){
            that.sanke.move(that.fd,that.map);
            that.sanke.init(that.map);                
        },150); */
        /* this.sanke.move(this.food,this.map);
        this.sanke.init(this.map); */
    };
    //添加原型方法--让小蛇自动跑起来
    Game.prototype.runSnake=function(food,map){
        var time=setInterval(function(){
            this.sanke.move(food,map);
            this.sanke.init(map);
            var maxX=map.offsetWidth/this.sanke.width;
            var maxY=map.offsetHeight/this.sanke.height;
            var headX=this.sanke.body[0].x;
            var headY=this.sanke.body[0].y;
            //判断横坐标
            if(headX<0||headX>=maxX){
                //撞墙了
                clearInterval(time);
                alert("Game Over");

            };
            if(headY<0||headY>=maxY){
                clearInterval(time);
                alert("Game Over");
            }
        }.bind(that),150)
    };
    Game.prototype.bindKey=function(){
        //获取用户的按键，改变小蛇的方向
        /* document.addEventListener("keydown",function(e){
            switch(e.keyCode){
                case 37:this.sanke.direction="left";break;
                case 38:this.sanke.direction="top";break;
                case 39:this.sanke.direction="right";break;
                case 40:this.sanke.direction="bottom";break;
            }
        }.bind(that),false); */
        document.onkeydown=function(event){
            var event=event||window.event;
            switch(event.keyCode){
                case 37:this.sanke.direction="left";break;
                case 38:this.sanke.direction="top";break;
                case 39:this.sanke.direction="right";break;
                case 40:this.sanke.direction="bottom";break;
            }
        }.bind(that)
    }
    window.Game=Game;

}());