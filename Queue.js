function Queue(){
	var items=[];
	this.enqueue=function(element){			//向队列尾部添加一个或多个新的项
		items.push(element);
	};
	this.dequeue=function(){			//移除队列的第一项，并返回被移除的项
		return items.shift();
	};
	this.front=function(){			//返回队列中的第一个元素
		return items[0];
	};
	this.isEmpty=function(){			//如果队列中不包含任何元素，返回true，否则返回false
		return items.length==0;
	};
	this.clear=function(){			//清楚队列中的所有元素
		items=[];
	};
	this.size=function(){			//返回队列包含的元素个数
		return items.length;	
	};
	this.print=function(){			//向控制台输出队列所有元素
		console.log(items.toString());	
	};
}
