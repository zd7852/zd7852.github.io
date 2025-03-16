var posts=["2025/03/15/hello-world/","2025/03/15/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };