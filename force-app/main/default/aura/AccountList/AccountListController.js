({
    onAccountsLoaded: function( component, event, helper ) {
        var cols = [
            {
                'label': 'Name',
                'fieldName': 'Name',
                'type': 'text'
            },
            {
                'label': 'Phone',
                'fieldName': 'Phone',
                'type': 'phone'
            },
            {
                'label': 'Website',
                'fieldName': 'Website',
                'type': 'url'
            },
            {
                'label': 'Details',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            },
            {
                'label': '...',
                'type': 'button',
                'typeAttributes': {
                    'label': 'Choose',
                    'name': 'choose_account'
                }
            }
        ];
        component.set( 'v.cols', cols );
        component.set( 'v.rows', event.getParam( 'accounts' ) );
    },
    onRowAction: function( component, event, helper ) {
        console.log('Action!');
        var action = event.getParam( 'action' );
        console.log(action);
        console.log(action.name);
        var row = event.getParam( 'row' );
        if ( action.name == 'view_details' ) {
            var navigation = component.find( 'navigation' );
            navigation.navigate({
                'type': 'standard__recordPage',
                'attributes': {
                    'objectApiName': 'Account',
                    'recordId': row.Id,
                    'actionName': 'view'
                }
            });
        } else if(action.name == 'choose_account') {
            try{
                console.log(row.Id);  
            var accId = row.Id + '';
            console.log("Acc id = " + accId);
            // fire event
            var accountChosenEvent = component.getEvent("AccountChosenEvent");
            console.log(accountChosenEvent);
            accountChosenEvent.setParams({
                "accountId" : accId
            });
            accountChosenEvent.fire();
            } catch(err) {
                console.log(err);
            }
            
            //accountChosenEvent.setParam("accountId", accId);
            //accountChosenEvent.fire();          
            /*var event = $A.get("e.c:accountChosenEvent");
            event.setParams({"accountId" : accId})
            event.fire();  
            console.log(row.Id);    */       
        }

    }
    
})