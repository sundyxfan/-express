$(function () {
    // 保存
    $('.adduser').on('click', function() {
        $.ajax({
            url: '/save',
            type: 'get',
            cache: false,
            data: {
                id: 12
            },
            dataType: 'json',
            contentType: 'application/json',
            success: function (json) {
                debugger
                if (json.code === '200') {
                    alert('保存成功');
                }
            }
        });
    });

    // 查询
    $('.getuser').on('click', function() {
        $.ajax({
            url: '/getUser',
            type: 'get',
            cache: false,
            data: {
                id: 12
            },
            dataType: 'json',
            contentType: 'application/json',
            success: function (json) {
                debugger
                if (json.code === '200') {
                    alert('保存成功');
                }
            }
        });
    });
});             