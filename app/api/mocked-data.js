define([], 

    function() {

        var mockedData = {
            'default' : {
                tablet : undefined,
                smartphone: undefined,
                fluctuation : undefined,
                colors: undefined
            },
            'revenue' : {
                tablet : 120000,
                smartphone: 80000,
                fluctuation : [10,12,14,11,14,16,18,17,21,22,24,25,23,22,24,25,26,25,26,25,24,22,21],
                colors: ['#52d321', '#016501']
            },
            'impresions' : {
                tablet : 20000000,
                smartphone: 30000000,
                fluctuation : [22,23,24,21,24,16,18,17,11,12,14,15,13,12,14,15,16,15,16,15,14,12,11],
                colors: ['#04ccdf', '#004f65']
            },
             'visits' : {
                tablet : 480000000,
                smartphone: 120000000,
                fluctuation : [10,12,14,11,14,16,18,17,21,22,24,25,23,22,24,25,26,25,26,25,24,22,21],
                colors: ['#f8c109', '#d35907']
            }

        }
        
        return {
            get: function (name) {
                if (mockedData[name]!=undefined){
                    return mockedData[name]
                }else{
                    return  mockedData['default'];
                }
            }
        }
});