({
    init : function(cmp, event, helper) {
       // Figure out which buttons to display
       cmp.set("v.canBack", true);
       cmp.set("v.canNext", false);
       cmp.set("v.canFinish", false);
    },
         
    onButtonPressed: function(cmp, event, helper) {
        // Figure out which action was called
        var actionClicked = event.getSource().getLocalId();
      
        // Call that action
        var navigate = cmp.getEvent("navigateEvent");
        navigate.setParam("action", actionClicked);
        navigate.fire();
     },
     addNext: function(cmp, event, helper) {
      cmp.set("v.canNext", true);
     },
     removeNext: function(cmp, event, helper) {
      cmp.set("v.canNext", false);
     } 
     
 })