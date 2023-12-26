
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


edit_post.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

edit_post.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

edit_post.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
