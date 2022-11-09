const log = console.log;

let video_list = [
    {"NOTI_TIT" : "title1", "WRITE_DATE" : "2022.11.09"}
    ,{"NOTI_TIT" : "title2", "WRITE_DATE" : "2022.11.10"}
    ,{"NOTI_TIT" : "title3", "WRITE_DATE" : "2022.11.11"}
    ,{"NOTI_TIT" : "title4", "WRITE_DATE" : "2022.11.13"}
]

const totalCount = video_list.length;
//총 페이지
const totalPage = Math.ceil(totalCount / 10.0);

$(document).ready(function(){
    console.log("????");

    video_list = video_list.reverse();

    // 페이지 세팅
    setPageHtml();
    // 데이터 세팅
    setList();

});

function setPageHtml(){

    let pageHtml =  '<ul>';
    pageHtml +=  '<li class="first">';
    pageHtml +=		'<a href="#;" onClick="changePage('+"'first'"+');return false;">';
    pageHtml +=			'처음';
    pageHtml +=		'</a>';
    pageHtml +=	'</li>';
    pageHtml +=	'<li class="prev" onClick="changePage('+"'prev'"+');return false;">';
    pageHtml +=		'<a href="#;" >';
    pageHtml +=			'이전';
    pageHtml +=		'</a>';
    pageHtml +=	'</li>';
    pageHtml +=	'<li class="on">';
    pageHtml +=		'<a href="#;" onClick="changePage('+"'1'"+');return false;">1</a>';
    pageHtml +=	'</li>';

    for(let i = 2; i <= totalPage; i ++){
        pageHtml += '<li>';
        pageHtml +=		'<a href="#;" onClick="changePage("'+i+'");return false;">' + i + '</a>';
        pageHtml +=	'</li>';
    }

    pageHtml += '<li class="next">';
    pageHtml +=		'<a href="#;" onClick="changePage('+"'next'"+');return false;">';
    pageHtml +=			'다음';
    pageHtml +=		'</a>';
    pageHtml +=	'</li>';
    pageHtml +=	'<li class="last" onClick="changePage('+"'last'"+');return false;">';
    pageHtml +=		'<a href="#;" >';
    pageHtml +=			'마지막';
    pageHtml +=		'</a>';
    pageHtml +=	'</li>';
    pageHtml +='</ul>';

    $("#paging").empty();
    $("#paging").append(pageHtml);

}


function setList(page){

    // 페이지당 표시 될 튜플 수
    let pageCount = 10;
    page = page == null ? "1" : page;

    // 표시될 첫 게시글
    let startPage = (page - 1) * pageCount + 1;
    // 표시될 마지막 게시글
    let endPage = startPage + pageCount - 1;
    // if(마지막 게시글 > 총 게시글) 총 게시글을 마지막게시글로
    endPage = endPage > totalCount ? totalCount : endPage;

    showList(startPage, endPage);

    $("#page_info").html(+ page + "/" + totalPage + "쪽 [총 <strong>" + totalCount + "</strong>건]");

    $("#paging ul li").removeClass("on");
    $("#paging ul li:contains("+page+")").addClass("on");

}

/**
 * 게시판 세팅
 * @param startPage
 * @param endPage
 */
function showList(startPage, endPage){

    let html = "";

    for(let i = (startPage - 1) ; i < endPage; i++) {

        let title = video_list[i].NOTI_TIT;
        let writeDt = video_list[i].WRITE_DATE;

        html += `<tr className="alert" role="alert">
							<th scope="row">${totalCount - i}</th>
							<td>${title}</td>
							<td>${writeDt}</td>
						 </tr>`

    }

    document.getElementById("html_list").innerHTML = html;
}


/**
 * 페이지 클릭 이벤트
 * @param page
 * @returns
 */
function changePage(page){

    let nowPage = parseInt($("#paging ul .on a").text());

    if(page === "first"){
        page = "1";
    }else if(page === "prev"){
        page = (nowPage - 1) < 1 ? nowPage : (nowPage - 1);
    }else if(page === "next"){
        page = (nowPage + 1) > totalPage ? totalPage : (nowPage + 1);
    }else if(page === "last"){
        page = totalPage;
    }

    if(nowPage != page)
        setList(page);
}