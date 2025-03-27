var posts=["2025/03/21/jar包导出到Linux里/","2025/03/27/数据库语言分类及简单介绍/","2025/03/27/mysql在centos7中rpm安装问题和方法/","2025/03/21/见性与幻觉的辨析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };