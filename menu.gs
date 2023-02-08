function onOpen()
{
  initMenu()
}

// Initializes the custom menu.
function initMenu() 
{
  
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu("🌌 ESN Menu")
  
  menu.addItem("📆 New Meeting Agenda", "#")
  
  //menu.addSeparator()

  //var submenu = ui.createMenu("🔨 Set Up")
  //submenu.addItem("📝 Create New Form","createNewRecruitmentForm")
  //menu.addSubMenu(submenu)
  
  menu.addToUi()
}

function test(){

Logger.log(EVENT_GUESTS)

}