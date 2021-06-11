document.getElementById("button1").addEventListener('click', function (e) {
	console.log(e.target);
});

document.getElementById("button2").addEventListener('click', function (e) {
	console.log(e.target);
});

//e.target trả về phần tử HTML được bắt sự kiện

document.getElementById("input").addEventListener('keydown',function(e){
    console.log(e.key);
})
//e.key trả về value trong input mỗi 1 lần nhấn phím