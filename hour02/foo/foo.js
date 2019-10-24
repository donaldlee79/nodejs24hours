var sampleList = [];

for (var i = 1; i <= 100; i++)
{
    sampleList.push(i);
}

var _ = require('underscore');
_.each(sampleList, function(num){
    console.log("underscore.js says " + num);
});