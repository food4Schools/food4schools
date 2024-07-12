import styles from "@css/buton.css";
import {testObject} from "@coolPlugin/coolPlugin";

/**
*  - 123
*/
$(document).on('knack-view-render.view_2', function(event, view, data) {
    console.log('styles %o', styles);
    //Knack.$('.kn-title').addClass(styles);
    
    testObject({
        name:"kelson",
        id: 123,
    })
});