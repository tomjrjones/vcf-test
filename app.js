const fs = require('fs')
const VCF = require('@gmod/vcf').default
const readline = require('readline')

const rl = readline.createInterface({
    input: fs.createReadStream('input_tiny.vcf'),
})

let header = []
let elements = []
let filteredElements = []
let parser = undefined

rl.on('line', function (line) {
    if (line.startsWith('#')) {
        header.push(line)
        return
    } else if (!parser) {
        parser = new VCF({ header: header.join('\n') })
    }

    const element = parser.parseLine(line)
    elements.push(element)
})

rl.on('close', function () {

    // input values provided by chronomics, separate object for separate searches
    const searches = [
        {
            CHROM: 'chr1',
            POS: 16837,
        },
        {
            CHROM: 'chr1',
            POS: 17655,
        },
    ];
    initSearch(searches);

    // Log out relevant information
    console.log('RECORDS FOUND: (' + filteredElements.length + ')\n')
    filteredElements.forEach(element =>
        console.log('CHROMOSONE: ' + element.CHROM + '\nPOSITION: ' + element.POS + '\nREFERENCE: ' + element.REF + '\n'))
    ;
})

function initSearch(searches){
    // loops through the searches
    searches.forEach(search => searchElements(search));
}

// takes an object of key and value pairs to filter by
// filters through "elements" array (array of variant objects parsed from the vcf file)
// if a match is found the object is then pushed to the "filteredElements" array
function searchElements(filter) {
    let returnedElements = elements.filter(function (item) {
        for (let key in filter) {
            if (item[key] !== filter[key]) {
                return false;
            }
        }
        return true;
    });
    returnedElements.forEach(element => filteredElements.push(element));
}