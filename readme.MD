# SETUP

Run the following commands:

```npm install```

```node app.js```

I used a npm package called "@gmod/vcf" to parse the VCF file so I can soley focus on parsing the data.

Each line in the VCF file is parsed and added to an array for later usage.

Once the file has been parsed and there are no errors I can worry about filtering through the data. If I had more time I would have added some error handling when parsing the file.

From the brief I used the Chromosone and Position values to return the reference values as you can see from my code.

### What are the limitation/problems with this solution?
I filter through the data after each line has already been parsed and added to an array. The search filtering could have been done whilst each line was being parsed to be more efficient.
The search values in this instance are static in the future they would be passed in to make this re-usable.
Also the vcf file path would be passed in and not just hardcode so you can filter different values from different vcf files.

### How would it scale?
I would need to make sure my code is more efficient and handles the filtering better. Handling large datasets and using lots of loops can quite easily cause problems when scaling.

Further down the line caching could be implemented to remove the need for duplicate searches.

Thorough testing would be carried out to ensure this works on a production level, depending on the use case we could test the program with concurrent users, etc.

As the application increased in size I would break it down into a component level so the whole application isn't needed just to use one part of the code. 

### How would you test it efficiently?
Provided I had more time I would have used the jest framework to write units tests to ensure my code works properly in different use cases. Such as a variation of vcf files, small and large files with different data and corrupted/broken files too.
