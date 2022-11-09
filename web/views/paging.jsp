<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<title>jspBoard</title>
    <meta charset="utf-8">
	<script src="../../resources/js/paging.js"></script>
  </head>

  <body>
	<section class="ftco-section" style="height: 1000px;">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Table</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="table-wrap">
						<div id="page_info"></div>
						<table class="table">
						  <thead class="thead-dark">
						    <tr>
						      <th>no.</th>
						      <th>title</th>
						      <th>date</th>
						    </tr>
						  </thead>
						  <tbody>
							  <div id="html_list">
							  </div>
						  </tbody>
						</table>
						<div id="paging"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </body>
</html>

