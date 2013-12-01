/**
 * Created by wjj on 13-11-29.
 */
var GridSprite = cc.Sprite.extend({
    ctor:function(){
        this._super();
        this.initWithFile(test);

        this.setContentSize({width:1,height:1});
        this.setColor(cc.c3b(255, 0, 0));
        this.setPosition(cc.p(200,300));

    }
});
