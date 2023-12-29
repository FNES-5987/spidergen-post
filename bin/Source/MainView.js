
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);
	
	this.rowNum = 0;
	this.postArray = [];
}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
	
};

MainView.prototype.click_btn_newPost = function(comp, info, e)
{

	var wnd  = new AWindow('create');
	wnd.openCenter('Source/create_new_post.lay');
	wnd.setModalBgOption('dark');
	
	wnd.setResultListener(this);
	
};

MainView.prototype.table_row_click = function(comp, info, e)
{
	
	window.name = "parentForm";
	
	var index = this.grid_table.rowIndexOfCell(this.grid_table.getSelectedCells()[0]);
	
	var selectRowNum = this.grid_table.getCellText(index, 0);
	
	var selectRowData = this.grid_table.getRowData(index);
	
	for (i = 0; i  < this.postArray.length; i++) {
		if (this.postArray[i][0] == selectRowNum) {
			selectRowData = this.postArray[i][4];
		}
	}
	
	var thisObj = this;
	
	if (index >= 0) {
	
		var wnd  = new AWindow('view');
		wnd.openCenter('Source/edit_post.lay');
		wnd.setModalBgOption('dark');
		
		wnd.setResultListener(this);

		var rowNum = thisObj.grid_table.getRowCount();
		var postNum = this.grid_table.getCellText(index, 0);
		
		wnd.findCompById('edit_name').value = selectRowData.name;
		wnd.findCompById('edit_title').value = selectRowData.title;
		wnd.findCompById('edit_content').value = selectRowData.content;
		wnd.findCompById('post_no').value = postNum;
		
	}

};

MainView.prototype.locationTable = function()
{
	this.grid_table.removeAll();
	
	var arrCnt = this.postArray.length;
	
	for (var i = 0; i < arrCnt; i++) {
		this.grid_table.prependRow(this.postArray[i], this.postArray[i][4]);
	}
};

MainView.prototype.onWindowResult = function(result, data, cntr) 
{

	var postNum = this.rowNum + 1;

	if(result == 1)
	{
		var postItem = {
			name: data.name,
			title: data.title,
			content: data.content,
			createTime: data.createTime,
		};

		var addRowItem = [postNum, data.title, data.name, data.createTime, postItem];

		var addRow = this.grid_table.prependRow(addRowItem, postItem);
		this.rowNum++;
		this.postArray.push(addRowItem);
		
		// 추가 완료시 홈으로 이동
		this.locationTable();

	} else if(result == 2) {
		var editItem = {
			name: data.editName,
			title: data.editTitle,
			content: data.editContent,
			createTime: data.editCreateTime,
		};

		var editRowItems = [data.postNum, data.editTitle, data.editName, data.editCreateTime, editItem];
		
		// 수정시 전역배열의 데이터 수정
		var editNum = +data.postNum;
		
		for (i = 0; i < this.postArray.length; i++) {
			if (this.postArray[i][0] === editNum) {
				this.postArray[i] = editRowItems;
				break;
			}
		}
		var editArr = this.postArray[editNum];
		
		// 수정 후 해당 열 데이터 변경
		var index = this.grid_table.rowIndexOfCell(this.grid_table.getSelectedCells()[0]); // 선택(수정)된 열 번호
		this.grid_table.setRow(index, editRowItems); //
		this.grid_table.setRowData(index, editRowItems[4]);

	} else if(result == 3) {
		this.index = this.grid_table.rowIndexOfCell(this.grid_table.getSelectedCells()[0]);
		this.grid_table.removeRow(this.index);
		
		// 삭제 시 전역배열의 데이터 삭제
		var deleteNum = +data.postNum;
		
		var filteredArray = this.postArray.filter(function (arr) {
			return arr[0] !== deleteNum;
		});
		
		this.postArray = filteredArray;

	}
};


MainView.prototype.click_btn_search = function(comp, info, e)
{
	
	var select = this.search_select.getSelectedIndex();
    var inputText = this.search_input.getText();
    var rowNum = this.grid_table.getRowCount();
    var colNum = this.grid_table.getColumnCount();

    if (inputText === '') { 
		return; 
	} else {
		var matchedRows = [];

		for (var i = 0; i < rowNum; i++) {
			var cellValue = this.grid_table.getCellText(i, select);

			if (cellValue.includes(inputText)) {
				var row = [];
				for (var j = 0; j < colNum; j++) {
					row.push(this.grid_table.getCellText(i, j));
				}
				row.push(this.grid_table.getRowData(i));
				matchedRows.push(row);
			}
		}

		this.grid_table.removeAll();

		for (i = 0; i < matchedRows.length; i++) {
			this.grid_table.addRow(matchedRows[i]);
			var rowData = matchedRows[i][4];
			this.grid_table.setRowData(0, rowData);
		}
	}

   
};
MainView.prototype.press_enter = function(comp, info, e)
{

	if (e.originalEvent.key === 'Enter') {
		this.click_btn_search();
	}

};

MainView.prototype.click_home_btn = function(comp, info, e)
{

	this.locationTable();

};
