const arr = {
	name: 'akmal',
	age: '16',
	hello: function () {
		return 'my name is ' + this.name;
	},
};

console.log(arr.hello());
