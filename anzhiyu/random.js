var posts=["2025/03/15/测试文章/","2025/03/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };