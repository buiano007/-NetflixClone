const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    //Add border to current tab
    this.classLisr.add('tab-border');
    
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
