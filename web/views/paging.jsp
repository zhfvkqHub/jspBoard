<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<title>jspBoard</title>
    <meta charset="utf-8">
	<script type = "text/javascript" src="/resources/js/paging.js"></script>
	<link href="/resources/css/style.css" rel="stylesheet">
  </head>

  <body>
	<section class="ftco-section" style="height: 1000px;">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">zhfvkq table</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<!-- page count -->
					<div id="page_info"></div>
					<!-- board -->
					<div class="table-wrap">
						<table class="table">
						  <thead class="thead-dark">
						    <tr>
						      <th>no.</th>
						      <th>title</th>
						      <th>date</th>
						    </tr>
						  </thead>
						  <tbody id="html_list">
						  </tbody>
						</table>
						<!-- pagination -->
						<nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center" id="paging">
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</section>
  </body>
</html>

