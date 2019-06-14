class Validation{
	constructor(data={},rules={},msg={}){
		this.data = data;
		this.rules = rules;
		this.msg = Object.assign({},this._def_msg(),msg);
	}
	_def_msg(){
		return {
			'required':'is required !',
			'email' : 'is not email syntax!',
			'confirm' : 'do not match confirm !'
		}
	}
	fail(){
		let error=[];
		let rules = this.rules;
		Object.keys(rules).map(ite=>{
			let rule = rules[ite];
			let r_ar = rule.split('|');
			r_ar.forEach(rl=>{
				let check = this._check_rule(ite,rl);
				if(check){ error.push(check)}
			});
		});
		return error;
	}
	_check_rule(name='',rule=''){
		let error = false;
		switch(rule){
			case 'required':
				if(!this.data.hasOwnProperty(name) || this._is_null(this.data[name])){
					error = true;
				}
				break;
			case 'email':
				if(!this._is_email(this.data[name])){
					error = true;
				}
				break;
			case 'confirm':
				if(this.data[name] !== this.data[name+'_confirmation']){
					error = true;
				}	 	
		}
		if(error){
			return name+ ' ' +this.msg[rule] || name+ ' '+'error!'
		}
		return error;
	}
	_is_null(dt){
		if(dt === 'undefined' || dt===null || dt.trim()===''){
			return true;
		}
		return false;
	}
	_is_email(dt){
		 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dt))
		  {
		    return (true)
		  }
		    return (false)		
	}
}
export default Validation;