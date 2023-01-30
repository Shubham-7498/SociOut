const menuItems = document.querySelectorAll('.menuitems');
const notification = document.querySelector('#message-notifications')

const changeactiveitems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeactiveitems();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notificationspopup').style.display ='none';
        }else{
            document.querySelector('.notificationspopup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

notification.addEventListener('click', () =>{
    document.querySelector('.messages').style.boxShadow = '0px 0px 22px 7px rgba(255,0,0,0.75)';
    setTimeout(() => {
        document.querySelector('.messages').style.boxShadow ='none'
    }, 2000);
    document.querySelector('#message-notifications .notification-count').style.display='none';
})