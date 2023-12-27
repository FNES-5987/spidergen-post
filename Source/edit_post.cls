
/**
Constructor
Do not call Function in Constructor.
*/
class edit_post()
{
	super();

	//TODO:edit here

}
extends AView;

function create_new_post*now_time()
{
	var koreanTime = new Date();
	var koreanYear = koreanTime.getUTCFullYear();
	var month = koreanTime.getMonth() + 1;
	var koreanMonth = month.toString().padStart(2, '0');
	var koreanDate = koreanTime.getDate().toString().padStart(2, '0');
	var koreanHours = koreanTime.getHours().toString().padStart(2, '0');
	var koreanMinutes = koreanTime.getMinutes().toString().padStart(2, '0');
	
	var result = `${koreanYear}-${koreanMonth}-${koreanDate} ${koreanHours}:${koreanMinutes}`;
	
	return result;
};


function edit_post*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function edit_post*onInitDone()
{
	super.onInitDone();
	
	this.post_no.setText(this.post_no.value);
	this.edit_name.setText(this.edit_name.value);
	this.edit_title.setText(this.edit_title.value);
	this.edit_content.setText(this.edit_content.value);

};

function edit_post*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function edit_post*click_btn_cancel(comp, info, e)
{

	this.getContainer().close();

};
function edit_post*click_btn_edit(comp, info, e)
{

	var postNum = this.post_no.value;
	var name = this.edit_name.getText();
	var title = this.edit_title.getText();
	var content = this.edit_content.getText();
	var createTime = `! ${this.now_time()}`;
	
	this.getContainer().close(2, { 
		postNum: postNum,
		editName: name,
		editTitle: title,
		editContent: content,
		editCreateTime: createTime,
	});

};

function edit_post*click_btn_delete(comp, info, e)
{

	var postNum = this.post_no.value;
	
	this.getContainer().close(3, postNum);

};
