
/**
Constructor
Do not call Function in Constructor.
*/
class PostApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function PostApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function PostApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
