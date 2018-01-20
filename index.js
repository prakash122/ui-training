var button = $('#change-status');

var statusList = [
    'initial',
    'changed',
    'reviewed',
    'final'
];

button.click(function (e) {

    // e.currentTarget -> button

    var currentStatus = $('#status-div').attr('data-status');
    var newStatus;
    for (var i = 0; i < statusList.length; i++) {
        if (statusList[i] === currentStatus) {
            if (statusList[i + 1]) {
                newStatus = statusList[i + 1];
            } else {
                newStatus = statusList[0];
            }
        }
    }

    $('#status-div').attr('data-status', newStatus);
});

var modalButton = $('#show-modal');

modalButton.click(function(e) {

    var options = {};
    $('#myModal').modal(options);
})