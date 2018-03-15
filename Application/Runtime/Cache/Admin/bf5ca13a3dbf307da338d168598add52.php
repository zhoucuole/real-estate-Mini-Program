<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">

	<head>
	
		<!-- Basic -->
    	<meta charset="UTF-8" />

		<title>后台管理</title>
		
		<!-- Mobile Metas -->
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		
		<!-- Import google fonts -->
          
        
		<!-- Favicon and touch icons -->
		<link rel="shortcut icon" href="/assets/back/ico/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" href="/assets/back/ico/apple-touch-icon.png" />
		<link rel="apple-touch-icon" sizes="57x57" href="/assets/back/ico/apple-touch-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/back/ico/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/back/ico/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/back/ico/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/back/ico/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/back/ico/apple-touch-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/back/ico/apple-touch-icon-152x152.png" />
		
	    <!-- start: CSS file-->
		
		<!-- Vendor CSS-->
		<link href="/assets/back/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
		<link href="/assets/back/vendor/skycons/css/skycons.css" rel="stylesheet" />
		<link href="/assets/back/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
		
		<!-- Plugins CSS-->
		<link href="/assets/back/plugins/bootkit/css/bootkit.css" rel="stylesheet" />
		<link href="/assets/back/plugins/fullcalendar/css/fullcalendar.css" rel="stylesheet" />
		<link href="/assets/back/plugins/jquery-ui/css/jquery-ui-1.10.4.min.css" rel="stylesheet" />					
		<link href="/assets/back/plugins/dropzone/css/dropzone.css" rel="stylesheet" />		
		
		<!-- Theme CSS -->
		<link href="/assets/back/css/jquery.mmenu.css" rel="stylesheet" />
		
		<!-- Page CSS -->		
		<link href="/assets/back/css/style.css" rel="stylesheet" />
		<link href="/assets/back/css/add-ons.min.css" rel="stylesheet" />
		
		<!-- end: CSS file-->	
	    
		
		<!-- Head Libs -->
		<script src="/assets/back/plugins/modernizr/js/modernizr.js"></script>
		
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
			<script src="http://apps.bdimg.com/libs/respond.js/1.4.2/respond.js"></script>
		<![endif]-->		
		
	</head>
	
	<body>
		<!--
    Start: Header
-->
<div class="navbar" role="navigation">
    <div class="container-fluid container-nav">
        <!-- Navbar Action -->
        <ul class="nav navbar-nav navbar-actions navbar-left">
            <li class="visible-md visible-lg">
                <a href="form-dropzone.html#" id="main-menu-toggle">
                    <i class="fa fa-th-large">
                    </i>
                </a>
            </li>
            <li class="visible-xs visible-sm">
                <a href="form-dropzone.html#" id="sidebar-menu">
                    <i class="fa fa-navicon">
                    </i>
                </a>
            </li>
        </ul>
    </div>
</div>
<!--
    End: Header
-->

		<!-- Start: Content -->
		<div class="container-fluid content">	
			<div class="row">
			
				<!-- Sidebar -->
				<div class="sidebar">
    <div class="sidebar-collapse">
        <!-- Sidebar Header Logo -->
        <!-- Sidebar Menu -->
        <div class="sidebar-menu">
            <nav id="menu" class="nav-main" role="navigation">
                <ul class="nav nav-sidebar">
                    <div class="panel-body text-center">
                        <div class="bk-padding-top-10">
                            <i class="fa fa-circle text-success">
                            </i>
                            <small>
                                <?php echo ($_SESSION['admin:name']); ?> [<a href="javascript:void(0);" class="log-out">退出</a>][<a href="/employee/reset">修改</a>]
                            </small>
                        </div>
                    </div>
                    <div class="divider2">
                    </div>
                    <li>
                        <a href="/back">
                            <i class="fa fa-laptop" aria-hidden="true">
                            </i>
                            <span>
                                操作板
                            </span>
                        </a>
                    </li>
                    <li class="nav-parent">
                        <a>
                            <i class="fa fa-list-alt" aria-hidden="true">
                            </i>
                            <span>
                                房源管理
                            </span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a href="/room/lst">
                                    <span class="text">
                                        房源列表
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/room/add">
                                    <span class="text">
                                        发布房源
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <?php if($_SESSION['admin:type'] <= 3): ?><li class="nav-parent">
                            <a>
                                <i class="fa fa-user" aria-hidden="true">
                                </i>
                                <span>
                                    员工管理
                                </span>
                            </a>
                            <ul class="nav nav-children">
                                <li>
                                    <a href="/employee/lst">
                                        <span class="text">
                                            员工列表
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/employee/add">
                                        <span class="text">
                                            添加员工
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li><?php endif; ?>
                    <li class="nav-parent">
                        <a>
                            <i class="fa fa-bullhorn" aria-hidden="true">
                            </i>
                            <span>
                                资讯管理
                            </span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a href="/news/lst">
                                    <span class="text">
                                        资讯列表
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/news/send">
                                    <span class="text">
                                        发送资讯
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/news/policy_lst">
                                    <span class="text">
                                        政策列表
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/news/policy">
                                    <span class="text">
                                        添加政策
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent">
                        <a>
                            <i class="fa fa-heart-o" aria-hidden="true">
                            </i>
                            <span>
                                预约管理
                            </span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a href="/reservation/lst">
                                    <span class="text">
                                        申请列表
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/back/vip_item">
                                    <span class="text">
                                        费用设置
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent">
                        <a>
                            <i class="fa fa-tasks" aria-hidden="true">
                            </i>
                            <span>
                                宣传管理
                            </span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a href="/advertise/lst">
                                    <span class="text">
                                        广告列表
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/advertise/add">
                                    <span class="text">
                                        添加广告
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent">
                        <a>
                            <i class="fa fa-cogs" aria-hidden="true">
                            </i>
                            <span>
                                系统管理
                            </span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a href="/back/config">
                                    <span class="text">
                                        系统设置
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/back/complain">
                                    <span class="text">
                                        投诉建议
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    
                </ul>
            </nav>
        </div>
        <!-- End Sidebar Menu -->
    </div>
    <!-- Sidebar Footer -->
    <div class="sidebar-footer">
        <ul class="sidebar-terms">
<!--             <li>
                <a href="index.html#">
                    Terms
                </a>
            </li>
            <li>
                <a href="index.html#">
                    Privacy
                </a>
            </li>
            <li>
                <a href="index.html#">
                    Help
                </a>
            </li>
            <li>
                <a href="index.html#">
                    About
                </a>
            </li> -->
        </ul>
        <div class="copyright text-center">
            闪风猫网络科技有限公司
        </div>
    </div>
    <!-- End Sidebar Footer -->
</div>
<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/assets/back/vendor/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $(".log-out").click(function(){
            $.post(
                "/employee/log_out", 
                {

                }, 
                function(data) {
                    if (data.code == "200") {
                        alert(data.data.msg);
                        location.reload();
                    }
                }, "json")
        })
    })
</script>
				<!-- End Sidebar -->
						
				<!-- Main Page -->
				<div class="main ">
					<!-- Page Header -->
					<div class="page-header">
						<div class="pull-left">
							<ol class="breadcrumb visible-sm visible-md visible-lg">								
								<li><a href="index.html"><i class="icon fa fa-home"></i>主页</a></li>
								<li><a href="#"><i class="icon fa fa-list-alt"></i>房源管理</a></li>
								<li class="active"><i class="fa fa-plus-square-o"></i>房源列表</li>								
							</ol>						
						</div>				
					</div>
					<!-- End Page Header -->
					<div class="row">
						<div class="col-lg-12">
							<div class="panel bk-bg-white">
								<div class="panel-heading bk-bg-primary">
									<h6><i class="fa fa-tags red"></i></h6>

								</div>
								<div class="panel-body bk-padding-bottom-40">
								<form method="post" action="/advertise/update">
									<div class="table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th class="center">#</th>
													<th class="center">大标题</th>
													<th class="center">小标题</th>
													<th class="center">图片</th>
													<th class="center">排序</th>
													<th class="center">发布时间</th>
													<th class="right">操作</th>  
												</tr>
											</thead>   
											<tbody>
												<?php if(empty($advertise)): ?><tr>
														<td colspan="13" class="center">
															<span class="text-danger">已无数据！</span>
														</td>
													</tr>
												<?php else: ?>
												<?php if(is_array($advertise)): foreach($advertise as $k=>$v): ?><tr>
													<td class="center"><?php echo ($k+1); ?></td>
													<td class="center"><textarea id="title" name="data[<?php echo ($v['id']); ?>][title]" rows="3" class="form-control"><?php echo ($v['title']); ?></textarea></td>
													<td class="center"><textarea id="subhead" name="data[<?php echo ($v['id']); ?>][subhead]" rows="3" class="form-control"><?php echo ($v['subhead']); ?></textarea></td>
													<td class="center"><img width="200" src="<?php echo ($v['goods_img']); ?>" /></td>
													<td class="center"><input class="text-center" size="2" type="text" name="data[<?php echo ($v['id']); ?>][sort]" value="<?php echo ($v['sort']); ?>" /></td>
													<td class="center"><?php echo ($v['ctime']); ?></td>
													<td class="bk-padding-off-right">
														<ul class="list-inline bk-margin-off-bottom text-right">
															<li class="bk-padding-off-right">
																<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info" data-toggle="tooltip" data-placement="top" title="删除" alt="删除" data-original-title="Edit" onclick="delete_advertise(<?php echo ($v['id']); ?>)">
																	<i class="fa fa-minus-square"></i>
																</a>
															</li>
														</ul>
													</td>
												</tr><?php endforeach; endif; endif; ?>												
											</tbody>
										</table>
									</div>
									<div class="actions">		
										<input type="submit" class="btn btn-success pull-right" value="修改"/>

										<?php if($page == 1): ?><a href="/advertise/lst?p=1" class="btn btn-success">上一页</a>
	                                    <?php else: ?>
	                                        <a href="/advertise/lst?p=<?php echo ($page - 1); ?>" class="btn btn-success">上一页</a><?php endif; ?>
	                                    <a href="/advertise/lst?p=<?php echo ($page - 1); ?>" class="btn btn-success"><?php echo ($page); ?></a>
	                                    <a href="/advertise/lst?p=<?php echo ($page + 1); ?>" class="btn btn-success">下一页</a>
									</div>
								</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- End Main Page -->		
		
				<!-- Usage -->
 
		<div class="clearfix"></div>
		
		
		<!-- start: JavaScript-->
		
		<!-- Vendor JS-->				
		
		<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="/assets/back/vendor/js/jquery-migrate-1.2.1.min.js"></script>
		<script src="/assets/back/vendor/bootstrap/js/bootstrap.min.js"></script>
		<script src="/assets/back/vendor/skycons/js/skycons.js"></script>
		
		<!-- Plugins JS-->
		<script src="/assets/back/plugins/jquery-ui/js/jquery-ui-1.10.4.min.js"></script>
		<script src="/assets/back/plugins/moment/js/moment.min.js"></script>	
		<script src="/assets/back/plugins/fullcalendar/js/fullcalendar.min.js"></script>
		<script src="/assets/back/plugins/dropzone/js/dropzone.min.js"></script>
		
		<!-- Theme JS -->		
		<script src="/assets/back/js/jquery.mmenu.min.js"></script>
		<script src="/assets/back/js/core.min.js"></script>
		
		<!-- Pages JS -->
		<script src="/assets/back/js/pages/form-dropzone.js"></script>
		
		<!-- end: JavaScript-->
		<script type="text/javascript">
			function delete_advertise(sourceId) {

				if (confirm("确定操作该预约吗 ?")) {

					$.post(
						"/advertise/delete",
						{
							'id' : sourceId,
						},
						function(data) {
							alert(data.msg);
							if (data.code == "200") location.reload();
						}, "json")
				}
			}
		</script>
	</body>
	
</html>