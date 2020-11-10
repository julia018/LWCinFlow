({
    onInit: function( component, event, helper ) {        
        component.set("v.chosenAccountId", null);
    },
    handleNavigate: function(cmp, event) {
        console.log('Parent nav');
        var navigate = cmp.get("v.navigateFlow");
        var action = event.getParam("action");
        console.log('Action '+action);
        navigate(action);
    },

    handleAccountChosen: function(cmp, event) {
        console.log('Event in parent!');
        var accountId = event.getParam("accountId");
        console.log(accountId);
        cmp.set("v.chosenAccountId", accountId);
        /*var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The account has been chosen!"
        });
        toastEvent.fire();*/

        var footerCmp = cmp.find("footer");
        footerCmp.addNext();
    },
    clearAccountSelection: function(cmp, event) {
        cmp.set("v.chosenAccountId", null);
        var footerCmp = cmp.find("footer");
        footerCmp.removeNext();
    }    
})
