/**
 * Created by wjj on 13-11-29.
 */
var GridSprite = cc.Sprite.extend({

    ctor:function(){
        _rect:null,
        this._super();
        cc.registerTargetedDelegate(0, true, this);//注册点击事件
        this.setPosition(cc.p(0,0));
        this.init();
        this.width = 20;
        this.height = 20;
        this._rect = cc.rect(this.getPosition().x, this.getPosition().x,this.getPosition().x + this.width,this.getPosition().y+this.height);//设置点击区域
        var draw = cc.DrawNode.create();//画格
        this.addChild( draw, 10 );
        var star = [
            cc.p(0,0),cc.p(this.width,0),                  // lower spike
            cc.p(this.width,this.height),cc.p(0,this.height)        // left spike
        ];
        draw.drawPoly(star, cc.c4f(1,1,1,1), 1, cc.c4f(0,0,0,1) );

        console.log(this.getPosition());
    },onTouchBegan:function (touch, event) {//点击
        console.log(this.containPoint(touch));
    },containPoint:function(touch){//是否在点击区域
        var getPoint = touch.getLocation();
        return cc.rectContainsPoint(this._rect, getPoint);
    }
    });
