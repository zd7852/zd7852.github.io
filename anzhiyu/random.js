var posts=["2025/03/21/见性与幻觉的辨析/","2025/03/21/jar包导出到Linux里/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };