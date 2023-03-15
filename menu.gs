function onOpen()
{
  initMenu()
}

// Initializes the custom menu.
function initMenu() 
{
  
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu("🌌 ESN Menu")
  
  menu.addItem("📆 New Meeting Agenda", "newMeeting")
  
  
  menu.addToUi()
}

function test(){

Logger.log(EVENT_GUESTS)

}