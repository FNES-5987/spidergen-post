
/**
Constructor
Do not call Function in Constructor.
*/
class create_new_post()
{
	super();

	//
	
}
extends AView;


function create_new_post*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function create_new_post*onInitDone()
{
	super.onInitDone();


};

function create_new_post*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function create_new_post*click_btn_post(comp, info, e)
{

	var name = this.user_name.getText();
	var password = this.user_password.getText();
	var title = this.writing_title.getText();
	var content = this.writing_content.getText();
	var createTime = this.now_time();
	
// 	console.log(name, password, title, content, createTime);
	
	this.getContainer().close(-1, { 
		name: name,
		password: password,
		title: title,
		content: content,
		createTime: createTime,
	});

};

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


function create_new_post*click_btn_cancel(comp, info, e)
{

	this.getContainer().close();

};
