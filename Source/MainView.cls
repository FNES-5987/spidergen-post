
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();
	
}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

};

function MainView*onInitDone()
{
	super.onInitDone();
	

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
	
	
};

function MainView*click_btn_newPost(comp, info, e)
{

	var wnd  = new AWindow('create');
	wnd.openCenter('Source/create_new_post.lay');
	wnd.setModalBgOption('dark');
	
	wnd.setResultListener(this);
	
};

function MainView*table_row_click(comp, info, e)
{
	
	window.name = "parentForm";
	
	var index = this.grid_table.rowIndexOfCell(this.grid_table.getSelectedCells()[0]); // 선택된 row의 인덱스 값, 헤더 -1, 바디 0부터 시작

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

function MainView*onWindowResult(result, data, cntr) 
	{

		var cntrId = cntr.getContainerId();
		var rowNum = this.grid_table.getRowCount();
		var postNum = rowNum + 1; // 게시글 번호는 1번부터 시작
		
		if(rowNum > 0) {
			var iindex = this.grid_table.getRowSet(1);
			console.log(iindex);
		}

		if(result == 1)
		{
			var postItem = {
				name: data.name,
				title: data.title,
				content: data.content,
				createTime: data.createTime,
			};

			var addRowItem = [postNum, data.title, data.name, data.createTime];
			
			var addRow = this.grid_table.prependRow(addRowItem, postItem);	
			
    	} else if(result == 2) {
			var editItem = {
				name: data.editName,
				title: data.editTitle,
				content: data.editContent,
				createTime: data.editCreateTime,
			};
			
			var num = rowNum - data.postNum;

			var editRowItem = [data.postNum, data.editTitle, data.editName, data.editCreateTime];

			var editRow = this.grid_table.setRow(num, editRowItem);
			this.grid_table.setRowData(num, editItem);
				
		} else if(result == 3) {
			console.log(rowNum - data);
			this.grid_table.removeRow(rowNum - data);
		}
	};

	/*function MainView*click_btn_search(comp, info, e)
	{
		var select = this.search_select.getSelectedIndex();
		console.log(select);
		var inputText = this.search_input.getText();
		console.log(inputText);
		var rowNum = this.grid_table.getRowCount();
		console.log(rowNum);

		this.grid_table.createBackup(rowNum, rowNum);

		var rowData = [];

		for (i = 0; i < rowNum; i++) {
			var row = this.grid_table.findRowByCellText(select, inputText);
			console.log(row);

			var cells = row.querySelectorAll('td');
			cells.forEach(function(cell) {
				rowData.push(cell.textContent.trim());
			});
			console.log(rowData);
			this.grid_table.addRow(rowData);
			this.grid_table.removeRow(0);
		}
		this.grid_table.setDirectBackup(true);
		for(; i < rowNum; i++) this.grid_table.addRow(rowData);
	
		};*/
