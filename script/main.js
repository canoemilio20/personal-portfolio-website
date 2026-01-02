const tabs = document.getElementsByClassName('tab');

const setSelected = (tab) => {

    const selected = document.getElementsByClassName('selected')[0];
    let target = tab.target;

    if(target.className === 'selected tab' || target.parentNode.className === 'selected tab'){

        console.log('Already selected');

    } else if(target.className === 'tab'){

        target.className = 'selected tab';
        selected.className = 'tab';

    } else{

        target = target.parentNode;
        target.className = 'selected tab';
        selected.className = 'tab';

    }

}

for(let tab of tabs){

    tab.onclick = setSelected;

}