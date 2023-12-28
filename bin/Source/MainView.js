
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

	var selectRowData = this.grid_table.getRowData(index);
	
	var thisObj = this;
	
	if (index >= 0) {
	
		var wnd  = new AWindow('view');
		wnd.openCenter('Source/edit_post.lay');
		wnd.setModalBgOption('dark');
		
		wnd.setResultListener(this);
		
		var rowNum = thisObj.grid_table.getRowCount();
		var postNum = rowNum - index;
		
		wnd.findCompById('edit_name').value = selectRowData.name;
		wnd.findCompById('edit_title').value = selectRowData.title;
		wnd.findCompById('edit_content').value = selectRowData.content;
		wnd.findCompById('post_no').value = postNum;
		
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
		console.log(this.postArray);

	} else if(result == 2) {
		var editItem = {
			name: data.editName,
			title: data.editTitle,
			content: data.editContent,
			createTime: data.editCreateTime,
		};
		
		var num = this.rowNum - data.postNum;
		
		var editArr = this.postArray[num];
		console.log(editArr);

		var editRowItem = [data.postNum, data.editTitle, data.editName, data.editCreateTime, editItem];
		
		editArr = editRowItem;
		
		console.log(editArr);
		console.log(this.postArray);

		var editRow = this.grid_table.setRow(num, editRowItem);
		this.grid_table.setRowData(num, editItem);

	} else if(result == 3) {
		this.grid_table.removeRow(this.rowNum - data);
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
