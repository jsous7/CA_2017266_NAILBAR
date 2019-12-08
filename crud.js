/** All the code and subroutines are based on the code of Mikhail Timofeev,
 * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

const fs = require('fs'),
    xmlParse = require('xslt-processor').xmlParse,
    xsltProcess = require('xslt-processor').xsltProcess;
const path = require('path');
xml2js = require('xml2js'); //This module does XML to JSON conversion and also allows us to get from JSON back to XML

module.exports = {
    create: (req, res) => {
        //todo: logic to create element
    },

    read: (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});

        const xml = fs.readFileSync('DataSource.xml', 'utf8');
        const xsl = fs.readFileSync('Structure.xsl', 'utf8');
        const doc = xmlParse(xml);
        const stylesheet = xmlParse(xsl);

        const result = xsltProcess(doc, stylesheet);

        res.end(result.toString());
    },

    update: (req, res) => {
        //todo: logic to update the element
    },

    delete: (req, res) => {
        // Function to read in XML file and convert it to JSON
        function xmlFileToJs(filename, cb) {
            var filepath = path.normalize(path.join(__dirname, filename));
            fs.readFile(filepath, 'utf8', function (err, xmlStr) {
                if (err) throw (err);
                xml2js.parseString(xmlStr, {}, cb);
            });
        }

        //Function to convert JSON to XML and save it
        function jsToXmlFile(filename, obj, cb) {
            var filepath = path.normalize(path.join(__dirname, filename));
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(obj);
            fs.unlinkSync(filepath);
            fs.writeFile(filepath, xml, cb);
        }

        // Function to read in a JSON file, add to it & convert to XML
        function deleteJSON(obj) {
            console.log(obj);
            // Function to read in XML file, convert it to JSON, delete the required object and write back to XML file
            xmlFileToJs('DataSource.xml', function (err, result) {
                console.log(result.nailbar.services);
                if (err) throw (err);
                //This is where we delete the object based on the position of the section and position of the entree, as being passed on from index.html
                delete result.nailbar.services[obj.section].entree[obj.entree];
                //This is where we convert from JSON and write back our XML file
                jsToXmlFile('DataSource.xml', result, function (err) {
                    if (err) console.log(err);
                })
            })
        }

        // Call appendJSON function and pass in body of the current POST request
        deleteJSON(req.body);
    }
}