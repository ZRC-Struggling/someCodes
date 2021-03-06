myFocus.extend({//*********************淘宝2010主页风格******************
	mF_taobao2010:function(par){
		var box=this.$(par.id);
		this.addList(box,['txt','num']);
		var pics=this.$c('pic',box),txt=this.$li('txt',box),num=this.$li('num',box);
		var n=txt.length,param={};//运行时相关参数
		pics.innerHTML+=pics.innerHTML;//无缝复制
		//CSS
		var pic=this.$li('pic',box),dir=par.direction,dis=par.width;//先假设左右
		for(var i=0;i<pic.length;i++) pic[i].style.cssText='width:'+par.width+'px;height:'+par.height+'px;'//消除上下li间的多余间隙
		if(dir=='left'||dir=='right') {pics.style.cssText='width:'+2*dis*n+'px;';pics.className+=' '+dir;}//左右运动设定
		else {dis=par.height; pics.style.height=2*dis*n + 'px';}//上下运动设定
		if(dir=='bottom'||dir=='right') pics.style[dir]=0+'px';//向下或向右的特殊处理
		//PLAY
		eval(this.switchMF(function(){
			txt[index>=n?(index-n):index].style.display='none';
			num[index>=n?(index-n):index].className = '';
		},function(){
			param[dir]=-dis*next;
			myFocus.slide(pics,param,par.speed,par.easing);
			txt[next>=n?(next-n):next].style.display='block';
			num[next>=n?(next-n):next].className = 'current';
		},'par.less','dir'))
		eval(this.bind('num','par.trigger',par.delay));
	}
});
myFocus.set.params('mF_taobao2010',{//额外参数设置
	less:true,//是否无缝，可选：true（是）/false（否）
	speed:40,//运动速度，数值越大速度越小
	direction:'top',//运动方向，可选：'top'（向上）/'bottom'（向下）/'left'（向左）/'right'（向右）
	easing:'easeOut'//运动形式，可选：'easeOut'（快出慢入）/'easeIn'（慢出快入）/'easeInOut'（慢出慢入）/'linear'（匀速运动）
});