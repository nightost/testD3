var testSelector;
testSelector = {
	parentEl : null,
	init : function(selector){
		var parentEl = this.parentEl;
		if(parentEl === null){
			this.parentEl = d3.select(selector);
		}
	}
}
testSelector.init('#container');