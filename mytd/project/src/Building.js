/**
 * Created by Administrator on 13-12-7.
 */
var BuildingSprite = cc.Sprite.extend({
    radiu:20,
    rect:null,
    ctor:function(p){
        this._super();
        this.init();
        var draw = cc.DrawNode.create();
        this.setAnchorPoint(cc.p(0,0));
        this.addChild( draw, 10 );
        cc.registerTargetedDelegate(0, true, this);
        draw.drawDot( cc.p(this.radiu/2,this.radiu/2),this.radiu/2, cc.c4f( 0, 0, 0, 1) );
        this.rect = cc.rect(this.getPosition().x,this.getPosition().y,this.radiu,this.radiu);

    },containsTouchLocation:function (touch) {
        var getPoint = touch.getLocation();

        this.rect.x = this.getPosition().x;
        this.rect.y = this.getPosition().y;
        return cc.rectContainsPoint(this.rect, getPoint);
    },onTouchBegan:function (touch, event) {
        return this.containsTouchLocation(touch);
    },
    onTouchMoved:function (touch, event) {
        var touchPoint = touch.getLocation();
        this.setPosition(cc.p(touchPoint.x-this.radiu/2, touchPoint.y-this.radiu/2));
    }
});
