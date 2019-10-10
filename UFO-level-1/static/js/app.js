// from tableData.js
let tableData = data;
let $ = jQuery;

// YOUR CODE HERE!

let addToUFOTable = (ttableData) => {
	let row;
	$('#ufo-table tbody').empty();
	ttableData.forEach(d => {
		row = `
			<tr>
				<td>${d.datetime}</td>
				<td>${d.city}</td>
				<td>${d.state}</td>
				<td>${d.country}</td>
				<td>${d.shape}</td>
				<td>${d.durationMinutes}</td>
				<td>${d.comments}</td>
			</tr>
		`;
		$('#ufo-table tbody').append(row);
	})
};


addToUFOTable(tableData);

$('#filter-btn').click(() => {
	let searchDate =  $('#datetime').val();
	let searchResult = tableData.filter(d => d.datetime === searchDate);
	addToUFOTable(searchResult);
});

$('#reset-btn').click(() => {
	addToUFOTable(tableData);
});
