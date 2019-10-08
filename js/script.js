import LCC from 'lightning-container';

window.ml = cloudinary.openMediaLibrary({
    cloud_name: '<cloud-name>',
    api_key: '',
    username: '',
    timestamp: '1234567890',
    inline_container: '.media-container',
    multiple: false,
    folder: {path: "samples", resource_type: "image"}
   }, {
         insertHandler: function (data) {
            var msg = {
                url: data.assets[0].url
            };
            console.log(msg);
            LCC.sendMessage(msg);
           data.assets.forEach(asset => { 
               console.log("Inserted asset:",  JSON.stringify(asset, null, 2));
               console.log(LCC);
            })
         }
       }
    )