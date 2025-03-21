var posts=["2025/03/18/再次测试/","2025/03/17/测试类文章/","2025/03/15/测试文章/","2025/03/21/说说易经/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };