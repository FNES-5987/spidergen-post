
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	
}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
	
	
};

MainView.prototype.window_open = function()
{
	var wnd  = new AWindow('window1');
	wnd.setResultListener(this);
	
	var thisObj = this;

	MainView.prototype.onWindowResult = function(result, data, cntr) 
	{

		var cntrId = cntr.getContainerId();
		var postNum = this.grid_table.getRowCount()+1;

		if(cntrId=='window1')
		{
// 			console.log(data);
			var postItem = [ data.name, data.password, data.title, data.content, data.createTime ];
// 			console.log(postItem);
			var addRow = [postNum, data.title, data.name, data.createTime];
			thisObj.grid_table.prependRow(addRow);
			postNum++;
    	}
	};
	
	
	wnd.openCenter('Source/create_new_post.lay');
	wnd.setModalBgOption('dark');
	
};

MainView.prototype.click_btn_newPost = function(comp, info, e)
{

	this.window_open();

};

MainView.prototype.grid_tableSelect = function(comp, info, e)
{

// 	console.log('test');

};

MainView.prototype.table_row_click = function(comp, info, e)
{

	console.log(this.grid_table.colIndexOfCell(this.grid_table.getSelectedCells()[0]));
	console.log(this.grid_table.tBody);

};
