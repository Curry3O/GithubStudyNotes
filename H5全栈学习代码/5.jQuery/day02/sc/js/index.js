//处理点击切换页面
$(function(){
	//方法一
	// $('.content').load('./pages/student.html');
	$('.sc-body li').click(function(event){
		var text = $(event.target).text();
		switch (text) {
			case '学生管理':
				// 加载页面
				$('.content').load('./pages/student.html'); //当前路径index.html
				break;
			case '课程管理':
				// 加载页面
				$('.content').load('./pages/course.html');
				break;
			case '班级管理':
				// 加载页面
				$('.content').load('./pages/class.html');
				break;
			case '年级管理':
				// 加载页面
				$('.content').load('./pages/grade.html');
				break;
			case '教师管理':
				// 加载页面
				$('.content').load('./pages/teacher.html');
				break;
			default:
				break;
		}
	});
	// 方法二  模拟点击
	// $('.sc-body li').first().trigger('click');
	//效果一样
	$('.sc-body li:first').trigger('click');
});