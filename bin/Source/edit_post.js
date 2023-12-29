
/**
Constructor
Do not call Function in Constructor.
*/
function edit_post()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(edit_post, AView);

edit_post.prototype.now_time = function()
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


edit_post.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

edit_post.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.post_no.setText(this.post_no.value);
	this.edit_name.setText(this.edit_name.value);
	this.edit_title.setText(this.edit_title.value);
	this.edit_content.setText(this.edit_content.value);

};

edit_post.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

edit_post.prototype.click_btn_cancel = function(comp, info, e)
{

	this.getContainer().close();

};
edit_post.prototype.click_btn_edit = function(comp, info, e)
{

	var postNum = this.post_no.value;
	var name = this.edit_name.getText();
	var title = this.edit_title.getText();
	var content = this.edit_content.getText();
	var createTime = `! ${this.now_time()}`;
	
	this.getContainer().close(2, { 
		postNum: +postNum,
		editName: name,
		editTitle: title,
		editContent: content,
		editCreateTime: createTime,
	});

};

edit_post.prototype.click_btn_delete = function(comp, info, e)
{

	var postNum = this.post_no.value;
	
	this.getContainer().close(3, {postNum: postNum});

};
