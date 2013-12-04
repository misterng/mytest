/**
 * Created by wjj on 13-12-4.
 */
var MainLayer = cc.Layer.extend({

    ctor:function() {
        this._super();

        var bg = cc.Sprite.create(Bg);
        this.addChild(bg,0);

        bg.setAnchorPoint(cc.p(0,0));
        bg.setPosition(cc.p(0,0));

        this.grid = new GridSprite();
        this.addChild(this.grid,1);

    }
});