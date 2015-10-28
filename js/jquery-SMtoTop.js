/*
	author:SM
	e-mail:sm0210@qq.com
	desc:SMtoTop返回顶部插件JS
	version:SMtoTop 0.1
*/
(function($){
		  
		 $.fn.initSMtoTop=function(options){
			//参数
			var s = $.extend({}, defaults, options || {});//
			
			//SMtopTop Id
			var smtoTopId='SMtoTop-';
			/**
				实例化SMtoTop
			*/
			s.newSMtoTop = function(){
				//获取SMtopTop Id
				smtoTopId += s.createRandom(2,0,50);
				//SMtoTop
				var smToTop = '<div id="'+smtoTopId+'" class="SMtoTop ';
				//如果有样式 添加样式
				if(s.smToTopCls)
					smToTop +=s.smToTopCls;
				//文本
				smToTop +='">'+(s.smToTopTxt =='' ? 'SMtoTop' : s.smToTopTxt)+'</div>';
				//实例化SMtoTop
				$('body').append(smToTop);
				//smtoTop对象
				smtoTopId = $('#'+smtoTopId);
				//是否隐藏
				if(s.smToTopHide){
					smtoTopId.css('display','none');
				}
				//样式
				smtoTopId.css({
				  position: 'fixed',
				  right: s.smTopTopRight || 15,
				  bottom: s.smToTopBottom || 30
				})
			
				//绑定事件
				smtoTopId.click(s.smToTopClick);
			},
			/**
				点击SMtoTop事件,返回顶部
			*/
			s.smToTopClick = function(){
				$('html, body').animate({scrollTop: 0}, s.smToTopTime);
			},
			/**
				num 要产生多少个随机数
				from 产生随机数的最小值
				to 产生随机数的最大值
			*/
			s.createRandom = function(num , from , to){
				var arr=[];
				var json={};
				while(arr.length<num)
				{
					//产生单个随机数
					var ranNum=Math.ceil(Math.random()*(to-from))+from;
					//通过判断json对象的索引值是否存在 来标记 是否重复
					if(!json[ranNum])
					{
						json[ranNum]=1;
						arr.push(ranNum);
					}
				}
				return arr.join('');
			},
			/**
				滚动窗口事件
			*/
			s.windwoScroll = function(){
				//获取距离
			 	var scrollVal = $(window).scrollTop();
                //如果默认不显示，进行判断
				if(s.smToTopHide){
					if(scrollVal > s.smToTop) smtoTopId.fadeIn(s.smToTopTime);
					else smtoTopId.fadeOut(s.smToTopTime);
				}
				
			}
			//end fun

			//function end
		
			//实例化SMtoTop
			s.newSMtoTop();
			//监听滚动窗口事件
			$(window).scroll(s.windwoScroll);
			
			//return s;
		 };	
		 
		//初始化参
		var defaults ={
			//默认不显示SMtoTop
			smToTopHide : true,
			//返回顶部文字
			smToTopTxt : 'SMtoTop',
			//返回顶部class
			smToTopCls : '',//SMtoTopCls
			//距离顶部间隔多少时显示回到顶部组件
			smToTop : 200,
			//返回顶部速度
			smToTopTime : 500,
			//距离右边距离
			smTopTopRight : 15,
			//距离左边距离
			smToTopBottom : 30
		};
		
})(jQuery);