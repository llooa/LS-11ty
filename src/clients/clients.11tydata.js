
const fetch = require('node-fetch'); //use node-fetch@2
module.exports = async function() {
   
    return fetch('http://trainingxyz.com/api/users/all')
      .then(res => res.json())
      .then(json => {
        return {
          clients: json //return data to clients variable
        }
      })
}
/*
module.exports = {
    clients: [
        {
            "id":"1",
            "name":"Audry Topsy",
            "title":"Owner",
            "company":"Topsy Turvy Cake Designs",
            "profile_photo":"http://trainingxyz.com/images/profiles/30825.jpg"
        },
        {
            "id":"2",
            "name":"Dahlia Landon",
            "title":"CEO",
            "company":"Landon Hotel",
            "profile_photo":"http://trainingxyz.com/images/profiles/15436.jpg"
        }
    ]
}
*/