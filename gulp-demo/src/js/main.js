// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面已加载完成');
    
    // 添加交互效果
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 添加简单的动画效果
    setTimeout(function() {
        document.querySelector('header').classList.add('animated');
    }, 500);
    
    // 显示欢迎消息
    showWelcomeMessage();
});

// 欢迎消息函数
function showWelcomeMessage() {
    console.log('欢迎使用Gulp教程示例！');
    console.log('这个JavaScript文件将被压缩和合并');
}

// 计算器示例函数
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// 更多未使用的函数，演示代码压缩会删除这些
function unusedFunction() {
    console.log('这个函数从未被调用，压缩时会被移除');
} 