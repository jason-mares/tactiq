$(document).ready(function(){
	$("#work-list li").sort(sort_li).appendTo('#work-list');
});

function sort_li(a, b){
    return ($(b).data('value')) < ($(a).data('value')) ? 1 : -1;
}