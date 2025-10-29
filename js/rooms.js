let currentTab = 'triple'; // Default to triple as active

function changeRoomTab(tabType) {
    // Hide all room sections
    const sections = ['single-room', 'double-room', 'triple-room'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.room-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Show selected section and activate tab
    document.getElementById(tabType + '-room').classList.remove('hidden');
    event.target.classList.add('active-tab');
    currentTab = tabType;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active tab
    document.querySelector('.active-tab').classList.add('active-tab');
});
