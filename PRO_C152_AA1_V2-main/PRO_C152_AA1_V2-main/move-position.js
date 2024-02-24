AFRAME.registerComponent("move",{
    schema:{
        moveX:{type: "number",default:0},
    },
    tick:function(){
        window.addEventListener("click", (e)=>{
            this.data.moveX=this.data.moveX+0.5;
        });
        var pos= this.el.getAttribute("position");
        pos.x=pos.x+this.data.moveX;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    }
});

AFRAME.registerComponent("camera-zoom-out",{
    schema:{
        moveZ:{type:"number", default:10},
    },
    tick:function(){
        this.data.moveZ=this.data.moveZ+0.01;
        var pos = this.el.getAttribute("posotion");
        pos.z=this.data.moveZ;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    },
});

AFRAME.registerComponent("fall-down",{
    schema:{
        moveY:{type:"number", default:0},
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.movey=this.data.moveY+0.0001;
        });
        var pos = this.el.getAttribute("posotion");
        pos.y=pos.y+this.data.moveY;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    },
});