function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('Profile')),
		win2 = new Window(L('Wineries')),
		win3 = new Window(L('My Wines'));
	
	var tab1 = Ti.UI.createTab({
		title: 'My Profile',
		icon: '/images/face.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Wineries',
		icon: '/images/Factory.png', 
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: 'My Wines',
		icon: '/images/wine.png',
		window: win3
	});
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
