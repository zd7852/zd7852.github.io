var posts=["2025/03/21/jar包导出到Linux里/","2025/04/08/hadoop生态组件安装部署的标准化基本流程/","2025/04/08/mysql入门测试题/","2025/03/27/数据库语言分类及简单介绍/","2025/03/27/mysql在centos7中rpm安装问题和方法/","2025/03/29/就问你苦不苦/","2025/04/18/管道符与重定向/","2025/03/21/见性与幻觉的辨析/","2025/04/01/阿里云一个月免费主机MySQL/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };