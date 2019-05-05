OpenStreetMaps is the coolest project on the web, with the most tangled, but well-meaning apis ever.

So, doing data-queries on a dump is the lonesome place you've found yourself.

this library helps you pluck data from a openstreetmaps dump, and get it into a wicked-small, web format.
It lets you grab all the restaurants, or whatever, and do dirty things with them.


The best strategy to do this, as of 2014, is this.
  ### download a region data file in ***.pbf*** format here - http://download.geofabrik.de/
    ```bash
    wget http://download.geofabrik.de/north-america/canada/ontario-latest.osm.pbf
    ```
    pbf is completely opaque, but wicked-fast.
  ### pluck out your data by a particular tag, or amenity, using [osmosis](http://wiki.openstreetmap.org/wiki/Osmosis) like this:
    ```bash
    ./build/fetch_xml.sh amenity.grave_yard
    ./build/fetch_xml.sh amenity.nightclub
    ```
  ### wrangle it into geoJSON with
    ```bash
    node ./build/to_json.js
    ```
  ### bring it on' home to mercator SVG with d3
    ```bash
    python -m SimpleHTTPServer 8080
    chrome http://localhost:8080/build/front_end
    ```



# Install
osmosis is a pretty opaque java library, but dammnit is it fast. On a mac, you can just hotlink the binary-
```bash
wget http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.tgz
tar xvfz osmosis-latest.tgz
cd osmosis-*
chmod a+x bin/osmosis
bin/osmosis
...and add it to your $path
```

xml-stream is a pretty sweet streaming xml parser, which lets us wrangle ungodly xml without putting them all in memory at once. It requires lower versions of nodejs though:
```bash
nave use 0.10.33
npm install xml-stream
```




