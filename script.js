angular.module("exampleApp", []).controller("taskCtrl", function () {
	var vm = this;
	vm.style = [
		{
			header: "headerColor1",
			box1: "box1Color",
			box2: "box2Color",
			box3: "box3Color"
			
		},
		{
			header: "headerColor2",
			box1: "box1_2Color",
			box2: "box2_2Color",
			box3: "box3_2Color"
			
		},
		{
			header: "headerColor3",
			box1: "box1_3Color",
			box2: "box2_3Color",
			box3: "box3_3Color"
			
		}
	];
	vm.changeStyle = vm.style[0];
	vm.change1 = function(){
		vm.changeStyle = vm.style[0];
		console.log(vm.changeStyle);
	};
	vm.change2 = function(){
		vm.changeStyle = vm.style[1];
		console.log(vm.changeStyle);
	};
	vm.change3 = function(){
		vm.changeStyle = vm.style[2];
		console.log(vm.changeStyle);
	};
})