function sfdcField(){
	this.tags = '';
	this.addTag = function(params){
		_.forEach(params, function(param){
			this.tags = this.tags + '\t<' + param[0] + '>' + param[1] + '</' + param[0] + '>\n';  
		});
	}
	this.compileField = function(){
		return this.tags;
	} 
}