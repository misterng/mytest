/**
 * Created by Administrator on 13-12-8.
 */
var MonsterSprite = cc.Sprite.extend({
    radiu:20,
    rect:null,
    life:100,
    ctor:function(p){
        this._super();
        this.init();
        this.setPosition(p);
        var draw = cc.DrawNode.create();
        this.setAnchorPoint(cc.p(0,0));
        this.addChild( draw, 10 );
        draw.drawDot( cc.p(this.radiu/2,this.radiu/2),this.radiu/2, cc.c4f( 0, 0, 0, 1) );
        this.rect = cc.rect(this.getPosition().x,this.getPosition().y,this.radiu,this.radiu);
        this.move(front);
    },
    move:function(action){
        this.runAction(action);
    }
});
