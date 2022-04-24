$(function(){
	var relid = $("#nav li.active").find("a").attr("rel");
	$("#nav li.active").attr("rel","true");
	$("#"+relid).show(); //Show the subnav

	$("#nav li").hover(function(){
		var obj = $(this);
		var active = obj.attr("class");

		if (!active)
		{
			$("#nav li[class='active']").removeClass("active");
			obj.addClass("active");
		}

		$(".nav_son").hide();
		var relid = $(this).find("a").attr("rel");
		if (relid)
		{			
			$("#"+relid).show(); //Show the subnav
		}
		
	},function(){		
		var obj = $(this);		

		var orel = obj.find("a").attr("rel");
		if (orel)
		{
			var n_obj = $("#"+orel);
			$("#nav li[class='active']").removeClass("active");
			//子菜单状态
			n_obj.hover(
				function(){
					var cid = $(this).attr("id");
					$("#nav a[rel='"+cid+"']").parent().addClass("active");
					
				},function(){
					$("#nav li[class='active']").removeClass("active");	
					$("#nav li[rel='true']").addClass("active");

					$(".nav_son").hide();
					var relid = $("#nav li[rel]").find("a").attr("rel");
					$("#"+relid).show();
				});

		}
		else
		{
			$("#nav li[class='active']").removeClass("active");	
			$("#nav li[rel='true']").addClass("active");

			$(".nav_son").hide();
			var relid = $("#nav li[rel]").find("a").attr("rel");
			$("#"+relid).show();

		}
		return false;

		
	});

	$(".indexTab li a").hover(function(){
		var tabTitCont = $(this).parent().parent("ul");
		var tabCont = tabTitCont.attr("rel");
		$("a",tabTitCont).parent().removeAttr("class");
		$(this).parent().attr("class","now");
		$("."+tabCont).hide();
		$("."+tabCont).eq(parseInt($(this).attr("id"))-1).show();
		return false;
	});

})	
