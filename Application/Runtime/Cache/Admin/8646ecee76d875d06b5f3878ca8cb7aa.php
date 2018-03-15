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
									<div class="table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th class="center">#</th>
													<th class="center">房源类型</th>
													<th class="center">发布人</th>
													<th class="center">价格</th>
													<th class="center">年份</th>
													<th class="center">室</th>  
													<th class="center">厅</th>
													<th class="center">楼层</th>
													<th class="center">面积</th>  
													<th class="center">朝向</th>                                   
													<th class="center">装修</th>  
													<th class="center">佣金</th>
													<th class="center">状态</th> 
													<th class="right">操作</th>  
												</tr>
											</thead>   
											<tbody>
												<?php if(empty($room)): ?><tr>
														<td colspan="13" class="center">
															<span class="text-danger">已无数据！</span>
														</td>
													</tr>
												<?php else: ?>
												<?php if(is_array($room)): foreach($room as $k=>$v): ?><tr>
													<td class="center"><?php echo ($k+1); ?></td>
													<td class="center"><?php echo ($v['room_type_zh']); ?></td>
													<td class="center">
														<?php if($v['post_type'] == 1): ?>业主
														<?php else: ?>
															经纪人<?php endif; ?>[tel:<?php echo ($v['owner']['phone']); ?>]
													</td>
													<td class="center">
														<?php if($v['is_promotion'] == 1): echo ($v['promotion_price']); ?>万[<span class="text-danger">优惠</span>]
														<?php else: ?>
														<?php echo ($v['price']); ?>万<?php endif; ?>
													</td>
													<td class="center"><?php echo ($v['age_format']); ?></td>
													<td class="center"><?php echo ($v['room']); ?></td>
													<td class="center"><?php echo ($v['hall']); ?></td>
													<td class="center"><?php echo ($v['floor']); ?></td>
													<td class="center"><?php echo ($v['area']); ?> m2</td>
													<td class="center"><?php echo ($v['orientation_zh']); ?></td>
													<td class="center"><?php echo ($v['decoration_zh']); ?></td>
													<td class="center">
														<?php if($v['is_commission'] == 1): echo ($v['commission']); ?>
														<?php else: ?>
															无<?php endif; ?>
													</td>
													<td class="center">
														<?php if($v['status'] == 1): ?>通过
														<?php elseif($v['status'] == 2): ?>
															待审核
														<?php elseif($v['status'] == 4): ?>
															拒绝<?php endif; ?>
													</td>
													<td class="bk-padding-off-right">
														<ul class="list-inline bk-margin-off-bottom text-right" data-id="<?php echo ($v["type_id"]); ?>">
															<?php if($v['status'] != 1): ?><li class="bk-padding-off-right">
																	<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info" data-toggle="tooltip" target="_blank" data-placement="top" title="通过" alt="通过" data-original-title="Edit" onclick="room_status(<?php echo ($v['id']); ?>, 1)">
																		通过
																	</a>
																</li><?php endif; ?>
															<?php if($v['status'] == 4): ?><li class="bk-padding-off-right">
																	<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info" data-toggle="tooltip" target="_blank" data-placement="top" title="拒绝" alt="拒绝" data-original-title="Edit" onclick="room_status(<?php echo ($v['id']); ?>, 4)">
																		拒绝
																	</a>
																</li><?php endif; ?>
															<li class="bk-padding-off-right">
																<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info" data-toggle="tooltip" data-placement="top" title="房源编辑" alt="房源编辑" data-original-title="Edit" href="/room/update?room_id=<?php echo ($v['id']); ?>">
																	<i class="fa fa-pencil"></i>
																</a>
															</li>
															<?php if($v['status'] == 1): if($v['show'] == 1): ?><a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info goods_show_down" data-toggle="tooltip" data-placement="top" title="下架" alt="下架" data-original-title="View" onclick="room_show(<?php echo ($v['id']); ?>, 2)">
																		<i class="fa fa-level-down"></i>
																	</a>
																<?php elseif($v['show'] == '2'): ?>
																	<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info goods_show_up" data-toggle="tooltip" data-placement="top" title="上架" alt="上架" data-original-title="View" onclick="room_show(<?php echo ($v['id']); ?>, 1)">
																		<i class="fa fa-level-up"></i>
																	</a><?php endif; endif; ?>
															<li class="bk-padding-off-right">
																<a class="bk-round bk-border-info bk-border-darken bk-bg-lighten bk-border-3x bk-icon bk-icon-default bk-bg-info" data-toggle="tooltip" target="_blank" data-placement="top" title="查看" alt="查看" data-original-title="Edit" href="/goods/<?php echo ($v["id"]); ?>">
																	<i class="fa fa-eye"></i>
																</a>
															</li>
														</ul>
													</td>
												</tr><?php endforeach; endif; endif; ?>												
											</tbody>
										</table>
									</div>
									<div class="actions">		
										<form method="get" action="">	
											<input type="submit" class="btn btn-success pull-right" value="搜索"/>

											<div class="pull-right" style="padding-top:8px;margin-right:8px">
												<span style="margin-right:5px">上架：</span>
												<select class="pull-right " name="sh">
													<option value>请选择 </option>
													<option <?php if($_GET['sh']== 1): ?>selected="selected"<?php endif; ?> value="1">上架</option>
													<option <?php if($_GET['sh']== '2'): ?>selected="selected"<?php endif; ?> value="2">下架</option>
												</select>
											</div>
											<div class="pull-right" style="padding-top:8px;margin-right:8px">
												<span style="margin-right:5px">状态 </span>
												<select id="select" name="st" size="1">
													<option value="">请选择</option>
													<option <?php if($_GET['st'] == 1): ?>selected="selected"<?php endif; ?> value="1">通过</option>
													<option <?php if($_GET['st'] == 2): ?>selected="selected"<?php endif; ?> value="2">审核中</option>
													<option <?php if($_GET['st'] == 4): ?>selected="selected"<?php endif; ?> value="4">拒绝</option>
												</select>
											</div>
										</form>
										<?php if($page == 1): ?><a href="/room/lst?st=<?php echo ($_GET['st']); ?>&sh=<?php echo ($_GET['sh']); ?>&p=1" class="btn btn-success">上一页</a>
	                                    <?php else: ?>
	                                        <a href="/room/lst?st=<?php echo ($_GET['st']); ?>&sh=<?php echo ($_GET['sh']); ?>&p=<?php echo ($page - 1); ?>" class="btn btn-success">上一页</a><?php endif; ?>
	                                    <a href="/room/lst?st=<?php echo ($_GET['st']); ?>&sh=<?php echo ($_GET['sh']); ?>&p=<?php echo ($page - 1); ?>" class="btn btn-success"><?php echo ($page); ?></a>
	                                    <a href="/room/lst?st=<?php echo ($_GET['st']); ?>&sh=<?php echo ($_GET['sh']); ?>&p=<?php echo ($page + 1); ?>" class="btn btn-success">下一页</a>
									</div>
								</div>
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
			function room_status(sourceId, status) {
				if (confirm("确定执行该操作吗 ?")) {

					$.post(
						"/room/set_status",
						{
							'room_id' : sourceId,
							'status' : status
						},
						function(data) {
							alert(data.data.msg);
							if (data.code == "200")
								location.reload();
						},"json")
				}
			}

			function room_show(sourceId, status) {
				if (confirm("确定执行该操作吗 ?")) {

					$.post(
						"/room/set_show",
						{
							'room_id' : sourceId,
							'status' : status
						},
						function(data) {
							alert(data.data.msg);
							if (data.code == "200")
								location.reload();
						},"json")
				}
			}

			$(document).ready(function(){
				$("li.delete_goods").click(function(){
					if (confirm("确定删除该商品吗 ?")) {
						var _this = $(this);
						$.post("/back/delete", {"goods_id":_this.attr("data-id")}, function(data){
							alert(data.msg);
							if (data.code == "200") location.reload();
						}, "json");
					}
				})

				$("select[name='pr']").change(function(){
					var _this = $(this);
					$.post('/common/get_areas', {'pid' : _this.val()}, function(data){
						if (data.code == "200") {
							var _html = "<option value>请选择</option>";
							$("select[name='di']").html(_html);

							$(data.data).each(function(index, item) {
								_html += "<option value='"+item.region_id+"'>"+item.region_name+"</option>";
							});

							$("select[name='ci']").html(_html);
						}
					}, 'json');
				});

				$("select[name='ci']").change(function(){
					var _this = $(this);
					$.post('/common/get_areas', {'pid' : _this.val()}, function(data){
						if (data.code == "200") {
							var _html = "<option value>请选择</option>";
							$(data.data).each(function(index, item) {
								_html += "<option value='"+item.region_id+"'>"+item.region_name+"</option>";
							});

							$("select[name='di']").html(_html);
						}
					}, 'json');
				});

				$(".goods_show_up").click(function(){
					var $this = $(this);

					$.post(
						"/back/set_up_display",
						{
							"goods_id" : $this.attr("data-id"),
							"is_show"  : "1"
						},
						function(data){
							if (data.code == "400") {

								alert(data.msg);
							} else {

								location.reload();
							}

						},"json")
				})

				$(".goods_show_down").click(function(){
					var $this = $(this);

					$.post(
						"/back/set_up_display",
						{
							"goods_id" : $this.attr("data-id"),
							"is_show"  : "0"
						},
						function(data){
							if (data.code == "400") {

								alert(data.msg);
							} else {

								location.reload();
							}

						},"json")
				})
			})
		</script>
	</body>
	
</html>