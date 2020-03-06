// 248. Write a JavaScript program to deep flatten an array. 

const deepFlattenArray = (arr) => {
	while(true){
		arr = arr.flat();
		let isFlatten = true;

		for(let i = 0 ; i < arr.length; i++){
			if(typeof arr[i] == "object"){
				isFlatten = false;
				break;
			}else{
				continue;
			};
		};

		if(isFlatten){
			break;
		}else{
			continue;
		};
	};

	return arr;
};

console.log(deepFlattenArray([1, [2], [[3], 4], 5]));
