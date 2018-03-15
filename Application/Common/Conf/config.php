<?php
return [
    'DB_TYPE'               => 'mysql', // 数据库类型
    'DB_HOST'               => '112.74.133.161', // 服务器地址
    'DB_NAME'               => 'fdc', // 数据库名
    'DB_USER'               => 'root', // 用户名
    'DB_PWD'                => 'sfm1234', // 输入安装MySQL时设置的密码
    'DB_PORT'               => '3306', // 端口
    'DB_PREFIX'             => 'fdc_', // 数据库表前缀
    'DB_DSN'                => '', // 数据库连接DSN 用于PDO方式
    'WECHAT_NOTIFY'         => true, // 是否开启微信通知
    'DOMAIN'                => 'www.fdc.com',
    'DOMAIN_NAME'           => 'http://www.fdc.com',
    'DEV'                   => 0, // 开发环境
    'UPLOAD'                => 'Uploads',
    'URL_PARAMS_BIND'       => true,
    'APP_SUB_DOMAIN_DEPLOY' => 1, // 开启子域名配置
    'APP_SUB_DOMAIN_RULES'  => [
        'fdsdsdc.lin-lianhuai.site' => 'Admin', // admin子域名指向Admin模块
        'fdc.lin-lianhuai.site'     => 'Home', // www子域名指向Home模块
        'dev.fdc.com'               => 'Dev', // www子域名指向Home模块
        'www.fdc.com'               => 'Home', // www子域名指向Home模块
        'admin.fdc.com'             => 'Admin', // www子域名指向Home模块
    ],
];
