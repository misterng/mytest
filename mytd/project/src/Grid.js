/**
 * Created by wjj on 13-11-29.
 */
var GridSprite = cc.Sprite.extend({
    width:20,
    height:20,

    ctor:function(p){
        this._super();
        this.init();

        this.setAnchorPoint(cc.p(0,0));
        this.setPosition(p);

        var draw = cc.DrawNode.create();
        this.addChild( draw, 10 );

        var star = [
            cc.p(0,0),cc.p(0,this.height),
            cc.p(this.width,this.height),cc.p(this.width,0)
        ];
        draw.drawPoly(star, cc.c4f(0,0,0,0), 1, cc.c4f(0,0,0,1) );

    }
});
