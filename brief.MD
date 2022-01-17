# Brief Provided
Attached is a file "input_tiny.vcf" - this is an extract from a real genetic file, reporting the genetic sequence of someone. Any line starting with # is a comment. For a given chromosome (column "CHROM") and position(column "POS"), we need to extract the reference (column "REF").

Write a simple function that takes inputs chromosome and position and outputs the matching reference.
Don't worry about performance or tests for now.

For example:
chr1:16837 is "C"
chr1:17655 is "T"

Hint: treat the file like you would a CSV file

Use any libraries, packages or search on the internet as you would normally code.
Do not spend more than 1 hour on this - not looking for a perfect solution that is production-ready and full tested, more how you approach the problem and thinking behind it.

Please also provide:
What are the limitation/problems with this solution?
How would it scale?
How would you test it efficiently?
