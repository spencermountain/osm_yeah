//stream a big wikipedia xml file into mongodb

var fs        = require('fs')
var path      = require('path')
var XmlStream = require('xml-stream')

// Create a file stream and pass it to XmlStream
var file= process.argv[2] || 'ontario-latest.osm';
var stream = fs.createReadStream(path.join(__dirname, file));
var xml = new XmlStream(stream);

var tag;
xml.on('endElement: node', function(node) {
  if(node['tag']){
    tag=node['tag']
    if( tag['$'].k=="amenity" && tag['$'].v=="nightclub"){
      console.log(node)
    }
  }
});
