function Stack(){
	var items=[];
	this.push=function(element){			//添加一个（或几个）新元素到栈顶
		items.push(element);
	};
	this.pop=function(){					//移除栈顶的元素，同时返回被移除的元素
		return items.pop();
	};
	this.peek=function(){					//返回栈顶的元素，不对栈做任何修改
		return items[items.length-1];
	};
	this.isEmpty=function(){				//如果栈里没有任何元素就返回true，否则返回false
		return items.length==0;
	};
	this.size=function(){					//返回栈里的元素个数
		return items.length;
	};
	this.clear=function(){					//移除栈里的所有元素
		items=[];
	};
	this.print=function(){					//将栈里的所有元素都输出到控制台
		console.log(items.toString());
	};
}// JavaScript Document