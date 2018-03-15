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
		<link href="/assets/back/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" />
		<link href="/assets/back/plugins/bootstrap-datepicker/css/datepicker-theme.css" rel="stylesheet" />
		<link href="/assets/back/plugins/bootstrap-timepicker/css/bootstrap-timepicker.css" rel="stylesheet" />
		<link href="/assets/back/plugins/fullcalendar/css/fullcalendar.css" rel="stylesheet" />
		<link href="/assets/back/plugins/jquery-ui/css/jquery-ui-1.10.4.min.css" rel="stylesheet" />		
		<!-- Theme CSS -->
		<link href="/assets/back/css/jquery.mmenu.css" rel="stylesheet" />
		
		<!-- Page CSS -->		
		<link href="/assets/back/css/style.css" rel="stylesheet" />
		<link href="/assets/back/css/add-ons.min.css" rel="stylesheet" />
		
		<!-- end: CSS file-->	
	    
		<script src="/assets/back/plugins/modernizr/js/modernizr.js"></script>
		<script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/ueditor.config.js"></script>
	    <script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/ueditor.all.min.js"> </script>
	    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
	    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
	    <script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/lang/zh-cn/zh-cn.js"></script>
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
						
				<!-- Main Page -->
				<div class="main ">
					<!-- Page Header -->
					<div class="page-header">
						<div class="pull-left">
							<ol class="breadcrumb visible-sm visible-md visible-lg">								
								<li><a href="index.html"><i class="icon fa fa-home"></i>主页</a></li>
								<li><a href="#"><i class="fa fa-list-alt"></i>房源管理</a></li>
								<li class="active"><i class="fa fa-tags"></i>房源修改</li>
							</ol>						
						</div>				
					</div>
					<!-- End Page Header -->					
					<div class="row">						
						<div class="col-lg-12">
							<div class="panel bk-bg-white">
								<div class="panel-heading bk-bg-primary">
									<h6><i class="fa fa-tags red"></i></h6>
									<div class="panel-actions">
										<a href="/room/lst"><i class="fa fa-mail-reply"></i></a>
									</div>
								</div>
								<div class="panel-body">
									<form action="/room/set_room" method="post" enctype="multipart/form-data" class="form-horizontal ">
										<div id="wizard1" class="wizard-type1">
											<ul class="steps">
												<li><a href="form-wizard.html#tab11" data-toggle="tab"><span class="badge badge-info"><i class="fa fa-star"></i></span> 房源信息</a></li>
												<li><a href="form-wizard.html#tab15" data-toggle="tab"><span class="badge badge-info"><i class="fa fa-female"></i></span> 房源封面</a></li>
												<li><a href="form-wizard.html#tab12" data-toggle="tab"><span class="badge badge-info"><i class="fa fa-credit-card"></i></span> 房源图片</a></li>
<!-- 												<li><a href="form-wizard.html#tab13" data-toggle="tab"><span class="badge badge-info"><i class="fa fa-building"></i></span> 商品图片</a></li>
												<li><a href="form-wizard.html#tab14" data-toggle="tab"><span class="badge badge-info"><i class="fa fa-check"></i></span> 商品属性</a></li> -->
											</ul>
											<div class="progress thin progress-striped active">
												<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
												</div>
											</div>
											<div class="tab-content">
												<div class="tab-pane" id="tab11">
													<input type="hidden" name="room_id" value="<?php echo ($_GET['room_id']); ?>"/>
													<div class="form-group">
														<label class="col-md-4 control-label" for="text-input">地　　址</label>
									                    <div class="col-md-3">
									                        <input type="text" id="address" name="data[address]" class="form-control" value="<?php echo ($room['address']); ?>" />
									                    </div>
									                </div>
									                <div class="form-group">
														<label class="col-md-4 control-label" for="text-input">区域选择</label>
														<div class="col-md-6 map-pos text-center center">
										                    <div id="mapContainer" style="width:60%;height:400px;"></div>
										                </div>
													</div>
									                <input type="hidden" id="lng" name="data[lng]" value="<?php echo ($room['lng']); ?>">
								                    <input type="hidden" id="lat" name="data[lat]" value="<?php echo ($room['lat']); ?>">
								                    <input type="hidden" id="prv" name="prv" value="">
								                    <input type="hidden" id="city" name="city" value="">
								                    <input type="hidden" id="area" name="area" value="">
													<div class="form-group">
														<label class="col-md-4 control-label" for="text-input">房源类型</label>
														<div class="col-md-3">
															<select id="select" name="data[room_type]" class="form-control" size="1">
																<option value>请选择</option>
																<option <?php if($room['room_type'] == 1): ?>selected="selected"<?php endif; ?> value="1">二手房</option>
																<option <?php if($room['room_type'] == 2): ?>selected="selected"<?php endif; ?> value="2">新房</option>
																<option <?php if($room['room_type'] == 3): ?>selected="selected"<?php endif; ?> value="3">别墅</option>
																<option <?php if($room['room_type'] == 4): ?>selected="selected"<?php endif; ?> value="4">公寓</option>
																<option <?php if($room['room_type'] == 5): ?>selected="selected"<?php endif; ?> value="5">商铺</option>
																<option <?php if($room['room_type'] == 6): ?>selected="selected"<?php endif; ?> value="6">写字楼</option>
															</select>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="village">小　　区</label>
									                    <div class="col-md-3">
									                        <input type="text" id="village" name="data[village]" class="form-control" value="<?php echo ($room['village']); ?>" />
									                    </div>
									                </div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="title">标　　题</label>
														<div class="col-md-3">
															<input type="text" id="title" name="data[title]" class="form-control" value="<?php echo ($room['title']); ?>">

														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="price">房源价格</label>
														<div class="col-md-3">
															<input type="text" id="price" name="data[price]" class="form-control" value="<?php echo ($room['price']); ?>">
															<span class="help-block">不得带小数点/纯整数类型</span>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="area">房源面积</label>
														<div class="col-md-3">
															<input type="text" id="area" name="data[area]" class="form-control" value="<?php echo ($room['area']); ?>">
															<span class="help-block">不得带小数点/纯整数类型</span>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="unit_price">单　　价</label>
														<div class="col-md-3">
															<input type="text" id="unit_price" name="data[unit_price]" class="form-control" value="<?php echo ($room['unit_price']); ?>">
															<span class="help-block">不得带小数点/纯整数类型(单位:元/㎡)</span>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="room">室</label>
														<div class="col-md-3">
															<input type="text" id="room" name="data[room]" class="form-control" value="<?php echo ($room['room']); ?>">
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="hall">厅</label>
														<div class="col-md-3">
															<input type="text" id="hall" name="data[hall]" class="form-control" value="<?php echo ($room['hall']); ?>">
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="floor">楼　　层</label>
														<div class="col-md-3">
															<input type="text" id="floor" name="data[floor]" class="form-control" value="<?php echo ($room['floor']); ?>">
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="decoration">装　　修</label>
														<div class="col-md-3">
															<select id="decoration" name="data[decoration]" class="form-control" size="1">
																<option value>请选择</option>
																<option <?php if($room['decoration'] == 1): ?>selected="selected"<?php endif; ?> value="1">毛坯</option>
																<option <?php if($room['decoration'] == 2): ?>selected="selected"<?php endif; ?> value="2">精装</option>
																<option <?php if($room['decoration'] == 3): ?>selected="selected"<?php endif; ?> value="3">简装</option>
															</select>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="orientation">朝　　向</label>
														<div class="col-md-3">
															<select id="orientation" name="data[orientation]" class="form-control" size="1">
																<option value>请选择</option>
																<option <?php if($room['orientation'] == 1): ?>selected="selected"<?php endif; ?> value="1">东</option>
																<option <?php if($room['orientation'] == 2): ?>selected="selected"<?php endif; ?> value="2">南</option>
																<option <?php if($room['orientation'] == 3): ?>selected="selected"<?php endif; ?> value="3">西</option>
																<option <?php if($room['orientation'] == 4): ?>selected="selected"<?php endif; ?> value="4">北</option>
																<option <?php if($room['orientation'] == 5): ?>selected="selected"<?php endif; ?> value="5">东南</option>
																<option <?php if($room['orientation'] == 6): ?>selected="selected"<?php endif; ?> value="6">西南</option>
																<option <?php if($room['orientation'] == 7): ?>selected="selected"<?php endif; ?> value="7">西北</option>
																<option <?php if($room['orientation'] == 8): ?>selected="selected"<?php endif; ?> value="8">东北</option>
															</select>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="age">房源年份</label>
														<div class="col-md-3" style="position:relative;">
															<div class="input-daterange input-group presell" >
																<span class="input-group-addon">
																	<i class="fa fa-calendar"></i>
																</span>
																<input type="text" class="form-control" id="age" name="data[age]" value="<?php echo ($room['age_format']); ?>"/>
															</div>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="commission">佣　　金</label>
														<div class="col-md-3" style="padding-top: .6em">
															<?php if($room['is_commission'] == 1): echo ($room['commission']); ?>
															<?php else: ?>
																<span class="text-danger">无佣金</span><?php endif; ?>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="selling">卖　　点</label>
														<div class="col-md-3">
															<textarea id="selling" name="data[selling]" rows="9" class="form-control" placeholder="暂无"><?php echo ($room['selling']); ?></textarea>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label">设　　置</label>
														<div class="col-md-4">
															<div class="checkbox-custom checkbox-inline">
																<input type="checkbox" id="inline-checkbox1" name="data[is_promotion]" <?php if($room['is_promotion'] == 1): ?>checked="checked"<?php endif; ?> value="1" onclick="set_promotion(this)"> 
																<label for="inline-checkbox1">优惠</label>
															</div>
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label">优惠价格</label>
														<div class="col-md-3">
															<input type="text" id="promotion_price" name="data[promotion_price]" class="form-control" <?php if($room['is_promotion'] != 1): ?>readOnly="true"<?php endif; ?> value="<?php echo ($room['promotion_price']); ?>">
														</div>
													</div>
													<div class="form-group">
														<label class="col-md-4 control-label" for="sort">排　　序</label>
														<div class="col-md-3">
															<input type="text" id="sort" name="data[sort]" class="form-control" value="<?php echo ($room['sort']); ?>">
														</div>
													</div>
												</div>
												<div class="tab-pane" id="tab15">
													<div class="form-group">
											            <label class="col-md-3 control-label" style="line-height:7em">
											            	旧　　图
											            </label>
											            <div class="col-md-9">
											                <img width="350" style="display:inline-block;width:375px;height:275px" src="<?php echo C('DOMAIN_NAME');?>/<?php echo ($room['avatar']); ?>" />
											            </div>
											        </div>
													<div class="form-group">
											            <label class="col-md-3 control-label"  for="file-input">
											                上传封面
											            </label>
											            <div class="col-md-9">
											                <input type="file" style="display:inline-block" id="avatar" name="avatar" onchange="preImg(this.id, 'avatar_cover', 'pre-avatar')"/>
											                <span class="help-block">[推荐尺寸 750 * 550]</span>
											            </div>
											        </div>
											        <div class="form-group" id="pre-avatar" style="display:none">
											            <label class="col-md-3 control-label" style="line-height:7em">
											            </label>
											            <div class="col-md-9">
											                <img width="350" style="display:inline-block;width:375px;height:275px" id="avatar_cover" src="" />
											            </div>
											        </div>
												</div>
												<div class="tab-pane" id="tab12">
													<div class="form-group">
														<label class="col-md-4 control-label" for="decoration">图　　册</label>
														<div class="col-md-3">
															<select class="form-control" size="1" onchange="upload_style(this.value)">
																<option value>请选择</option>
																<option value="detail">房源详情</option>
																<option value="fashion">时尚简约</option>
																<!-- <option value="3">简装</option> -->
															</select>
														</div>
													</div>
													<div class="style" id="detail" style="display: none">
														<?php if(is_array($gallery['detail'])): foreach($gallery['detail'] as $key=>$v): ?><div style="width:200px;margin: 0 auto">
																<img src="<?php echo C('DOMAIN_NAME');?>/<?php echo ($v['src']); ?>" style="width:200px"/>
																<a style="text-align:center;display:block;margin: 0 auto; color:black" href="javascript:void(0);" onclick="delete_gallery(this, <?php echo ($v['id']); ?>)">[-]</a>
															</div><?php endforeach; endif; ?>
														<div class="form-group">
		                                                    <label class="col-md-4 control-label addFileUp" for="file-input" style="cursor:pointer;">
		                                                        [+]

		                                                    </label>
		                                                    <div class="col-md-8" style="padding-top: 9px;">
		                                                        添加上传 [推荐尺寸 750 * 550]
		                                                    </div>
		                                                </div>
	                                                </div>
	                                                <div class="style" id="fashion" style="display: none">
	                                                	<?php if(is_array($gallery['fashion'])): foreach($gallery['fashion'] as $key=>$v): ?><div style="width:200px;margin: 0 auto">
																<img src="<?php echo C('DOMAIN_NAME');?>/<?php echo ($v['src']); ?>" style="width:200px"/>
																<a style="text-align:center;display:block;margin: 0 auto; color:black" href="javascript:void(0);" onclick="delete_gallery(this, <?php echo ($v['id']); ?>)">[-]</a>
															</div><?php endforeach; endif; ?>
		                                                <div class="form-group">
		                                                    <label class="col-md-3 control-label addFileUp" for="file-input" style="cursor:pointer;">
		                                                        [+]

		                                                    </label>
		                                                    <div class="col-md-9" style="padding-top: 9px;">
		                                                        添加上传 [推荐尺寸 750 * 550]
		                                                    </div>
		                                                </div>
	                                                </div>
												</div>
											</div>
										</div>
										<div class="actions">								
											<input type="submit" class="btn btn-success pull-right" value="修改"/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
							
				</div>
				<!-- End Main Page -->	
				<div id="_clone" style="display:none">
				</div>
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
		<script src="/assets/back/plugins/chosen/js/chosen.jquery.min.js"></script>
		<script src="/assets/back/plugins/autosize/jquery.autosize.min.js"></script>
		<script src="/assets/back/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
		<!-- <script src="/assets/back/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js"></script> -->
		<script src="/assets/back/plugins/placeholder/js/jquery.placeholder.min.js"></script>
		<script src="/assets/back/plugins/wizard/js/jquery.bootstrap.wizard.min.js"></script>
		<script src="/assets/back/plugins/maskedinput/js/jquery.maskedinput.js"></script>
		
		<!-- Theme JS -->		
		<script src="/assets/back/js/jquery.mmenu.min.js"></script>
		<script src="/assets/back/js/core.min.js"></script>
		
		<!-- Pages JS -->
		<script src="/assets/back/js/pages/form-wizard.js"></script>
		<script src="/assets/back/js/pages/form-elements.js"></script>
		<script src="/assets/js/common/search.js"></script>
		<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=66868dcb8cfa7de1f6771e6ca51f3b20&plugin=AMap.Geocoder"></script>
		 <script type="text/javascript">
		 	function delete_gallery(obj, sourceId) {
		 		var _this = $(obj);

		 		if(confirm("确定删除该图片吗 ?")) {

		 			$.post(
			 			"/room/delete_gallery",
			 			{
			 				id : sourceId
			 			},
			 			function(data) {

			 				alert(data.msg);
			 				if (data.code == "200") {

			 					_this.closest("div").remove();
			 				}
			 			}, "json")
		 		}
		 	}

		 	var _style;

		 	function upload_style(style) {
		 		_style = style;
		 		var uploadWindows = document.getElementsByClassName("style");
		 		var uploadWindow = document.getElementById(style);

		 		for(let i = 0; i<uploadWindows.length; i++) {

		 			uploadWindows[i].style.display = "none";
		 		}

		 		uploadWindow.style.display = "block";
		 	}

		 	/** 
            * 从 file 域获取 本地图片 url 
            */ 
            function getFileUrl(sourceId) { 
            	var url; 

	            if (navigator.userAgent.indexOf("MSIE")>=1) { // IE 

	            	url = document.getElementById(sourceId).value; 
	            } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox 

	            	url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0)); 
	            } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome 

	            	url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0)); 
	            } 
	            
	            return url; 
            } 

            /** 
            * 将本地图片 显示到浏览器上 
            */ 
            function preImg(sourceId, targetId, preId) { 
            	var url = getFileUrl(sourceId); 
            	
            	if (preId) {
            		var preAvatar = document.getElementById(preId);
            		preAvatar.style.display = "block";
            	}

            	var imgPre = document.getElementById(targetId); 
            	imgPre.src = url; 
            }

            var _fileInputCount = 1;

	        $(".addFileUp").click(function(){
		        if (_style != '') {
		        	var _html = `

			        <div class="form-group">
			            <label class="col-md-3 control-label" style="line-height:7em" for="file-input">
			                图片
			            </label>
			            <div class="col-md-9">
			                <input type="file" style="display:inline-block" id="file_${_fileInputCount}" name="${_style}[${_fileInputCount}]" onchange="preImg(this.id, $(this).next().attr('id'))"/>
			                <img width="150" style="display:inline-block;width:150px;height:110px" id="goods_img_t${_fileInputCount}" src="" />
			            </div>
			        </div>
			        `;

			        $(this).closest(".style").append(_html);
		        	_fileInputCount ++ ;
		        }

	        })

			function submit_form() {
				var area = $("#area").val();

				if (area != '440115') {

					alert('发布房源仅限南沙区');
					return false;
				}

				$('form').submit();
			}

          var windowsArr = [];
          // var marker = [];
          var map = new AMap.Map("mapContainer", {
            resizeEnable: true,
            center: [<?php echo ($room['lng']); ?>, <?php echo ($room['lat']); ?>],//地图中心点
            zoom: 17,//地图显示的缩放级别
            keyboardEnable: false
          });
          var marker =new AMap.Marker( {
                draggable: true,
                position: [<?php echo ($room['lng']); ?>, <?php echo ($room['lat']); ?>]
              })
          marker.setMap(map)

          marker.on("dragend", function(e){
            $("#lng").val(e.lnglat.lng)
            $("#lat").val(e.lnglat.lat)
            var lnglatXY=[e.lnglat.lng, e.lnglat.lat];//地图上所标点的坐标
            var geocoder = new AMap.Geocoder({
              city: ""//城市，默认：“全国”
            });
            geocoder.getAddress(lnglatXY, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                //获得了有效的地址信息:
                if(result.regeocode.addressComponent.adcode) {
                    var area = result.regeocode.addressComponent.adcode
                    for(var i=0;i< json.length;i++){
                        //找市级code
                        if(area == json[i].value){
                            console.log(json[i])
                            //区级
                            $("#area").val(json[i].value)

                            for(var j=0;j< json.length;j++){
                                if( json[i].parent == json[j].value) {
                                    //市级
                                    console.log( json[j])
                                    $("#city").val(json[j].value)
                                    //省级
                                    $("#prv").val(json[j].parent)

                                }
                            }

                        }
                    }

                }
                $("#address").val(result.regeocode.formattedAddress)
                //即，result.regeocode.formattedAddress
              }else{
                alert('请重新输入坐标，地址解析失败')
                //获取地址失败
              }
            });

          })



          AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
            var autoOptions = {
              city: "", //城市，默认全国
              input: "address"//使用联想输入的input的id
            };
            console.log(autoOptions )
            autocomplete= new AMap.Autocomplete(autoOptions);
            var placeSearch = new AMap.PlaceSearch({
              city:'',
              map:map
            })
            AMap.event.addListener(autocomplete, "select", function(e){
              map.clearMap()

                console.log(e)
                if(e.poi){
                    if (!e.poi.location) {
                        alert("未找到坐标")
                        return
                    }
                    var area = e.poi.adcode

                    for(var i=0;i< json.length;i++){
                        //找市级code
                        if(area == json[i].value){
                            console.log(json[i])
                            //区级
                            $("#area").val(json[i].value)

                            for(var j=0;j< json.length;j++){
                                if( json[i].parent == json[j].value) {
                                    //市级
                                    console.log( json[j])
                                    $("#city").val(json[j].value)
                                    //省级
                                    $("#prv").val(json[j].parent)

                                }
                            }

                        }
                    }



                }
              var marker =new AMap.Marker( {
                draggable: true,
                position: [e.poi.location.lng,e.poi.location.lat]
              })
              marker.setMap(map)
              marker.on("dragend", function(e){
                $("#lng").val(e.lnglat.lng)
                $("#lat").val(e.lnglat.lat)
                var lnglatXY=[e.lnglat.lng, e.lnglat.lat];//地图上所标点的坐标
                var geocoder = new AMap.Geocoder({
                  city: ""//城市，默认：“全国”
                });
                geocoder.getAddress(lnglatXY, function(status, result) {
                  if (status === 'complete' && result.info === 'OK') {
                    //获得了有效的地址信息:
                    if(result.regeocode.addressComponent.adcode) {
                        var area = result.regeocode.addressComponent.adcode
                        for(var i=0;i< json.length;i++){
                            //找市级code
                            if(area == json[i].value){
                                console.log(json[i])
                                //区级
                                $("#area").val(json[i].value)

                                for(var j=0;j< json.length;j++){
                                    if( json[i].parent == json[j].value) {
                                        //市级
                                        console.log( json[j])
                                        $("#city").val(json[j].value)
                                        //省级
                                        $("#prv").val(json[j].parent)

                                    }
                                }

                            }
                        }

                    }
                    $("#address").val(result.regeocode.formattedAddress)
                    //即，result.regeocode.formattedAddress
                  }else{
                    alert('请重新输入坐标，地址解析失败')
                    //获取地址失败
                  }
                });

              })
              map.setZoomAndCenter(16, [e.poi.location.lng,e.poi.location.lat]);
              $("#lng").val(e.poi.location.lng)
              $("#lat").val(e.poi.location.lat)

            });
          });
        </script>
		<script>
		$('#age').datepicker({
	        format: 'yyyy-mm-dd'
	    });

	    function set_promotion(obj) {

	    	if (obj.checked) {

	    		$("#promotion_price").attr("readOnly", false);
	    	} else {

	    		$("#promotion_price").attr("readOnly", true);
	    	}
	    } 
		</script>
		<!-- end: JavaScript-->
		
	</body>
	
</html>