// document.addEventListener('DOMContentLoaded', function() {
//     // 添加一个测试代码，确认文件被加载
//     console.log('custom.js loaded successfully');
//
//     let typedElement = document.querySelector('.typed-strings');
//     let staticTexts = ["这是一个简单的个人网页", "This is the second message"];
//
//     async function fetchHitokoto() {
//         try {
//             const response = await fetch('https://international.v1.hitokoto.cn');
//             const data = await response.json();
//             console.log('Hitokoto fetched:', data); // 添加调试输出
//             return `${data.hitokoto} - ${data.from}`;
//         } catch (error) {
//             console.error('获取一言失败:', error);
//             return null;
//         }
//     }
//
//     async function updateSubtitle() {
//         const hitokoto = await fetchHitokoto();
//         console.log('Updating subtitle with:', hitokoto); // 添加调试输出
//         if (hitokoto && typedElement) {
//             let texts = [...staticTexts];
//             if (hitokoto) texts.push(hitokoto);
//
//             // 更新打字效果内容
//             if (window.typed) {
//                 window.typed.destroy();
//             }
//
//             new Typed(typedElement, {
//                 strings: texts,
//                 typeSpeed: 100,
//                 backSpeed: 80,
//                 startDelay: 500,
//                 backDelay: 1500,
//                 loop: true,
//                 smartBackspace: true
//             });
//         }
//     }
//
//     // 初始更新
//     updateSubtitle();
//
//     // 每60秒更新一次
//     setInterval(updateSubtitle, 60000);
// });