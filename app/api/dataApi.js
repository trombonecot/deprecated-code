define([ "./../models/dataObject", "./mocked-data"], 

    function(DataObject, MockedData) {        
        return {
            getDataObject: function (name) {
                var serverData = MockedData.get(name);
                return new DataObject(name, serverData.tablet, serverData.smartphone, serverData.fluctuation, serverData.colors);
            }
        }
});