/**
<<<<<<< HEAD
 * Created by Administrator on 13-12-7.
 */
var front = cc.MoveBy.create(1, cc.p(0, 20));
var back = cc.MoveBy.create(1,cc.p(0,-20));
var left = cc.MoveBy.create(1,cc.p(20,0));
var right = cc.MoveBy.create(1,cc.p(-20,0));
var MainLayer = cc.LayerGradient.extend({
    GridWidth:20,
    GridHeight:20,
    grid:new Array,
    monster:null,
    ctor:function() {
        this._super();
        var a = cc.c4b(255,255,255,255);
        var b = cc.c4b(255,255,255,255);

        this.init( a, b );
        this.initgrid();
    },
    initgrid:function(){
        for(var i = 0;i<=this.GridHeight;i++){
            this.grid[i] = new Array();
        }
        for(var k = 0;k<=this.GridHeight;k++){
            for(var i = 0;i<=this.GridWidth;i++){
                this.grid[k][i] = new GridSprite(cc.p(i*20,200+20*k));
                this.addChild(this.grid[k][i],1);
            }
        }
        this.building = new BuildingSprite();
        this.addChild(this.building);

        this.monster = new MonsterSprite(cc.p(0,200));
        this.addChild(this.monster);
    }

=======
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
>>>>>>> ceddbc3706634a2868d83d0d21bffe90e68bc840
});