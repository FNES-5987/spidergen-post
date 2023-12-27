
/**
Constructor
Do not call Function in Constructor.
*/
function create_new_post()
{
	AView.call(this);

	//
	
}
afc.extendsClass(create_new_post, AView);


create_new_post.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

create_new_post.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);


};

create_new_post.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

create_new_post.prototype.click_btn_post = function(comp, info, e)
{

	var name = this.user_name.getText();
	var title = this.writing_title.getText();
	var content = this.writing_content.getText();
	var createTime = this.now_time();
		
	this.getContainer().close(1, { 
		name: name,
		title: title,
		content: content,
		createTime: createTime,
	});

};

create_new_post.prototype.now_time = function()
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


create_new_post.prototype.click_btn_cancel = function(comp, info, e)
{

	this.getContainer().close();
	console.log(this.getContainer());

};
