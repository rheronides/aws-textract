# Prerequisites
You need to have an AWS account and some basic knowledge working with AWS services.

#AWS Services utilized
    Textract Service
    Lambda Service
    API Gateway
    
# AWS Textract

This project use [AWS Textract](https://aws.amazon.com/pt/textract/) with Python to easily extract text and data from any document.

> Amazon Textract is a service that automatically extracts text and data from scanned documents.

## Lambda Function

Implementing an AWS Lambda function to build an simple [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) to read an image and extract all the data returning an JSON with everything we need :smile:

### How to create a Lambda Function

Theres a plenty way to create a lambda function, but basicly we need a handler.

```python
def lambda_handler(event, context):
  # your code comes here
  return
```

This is the basic structure of an lambda function, to use AWS Textract we need to import

```python
import boto3
```
Before import the **boto3** lib in your code you need to import it's as a layer of your lambda function. You can download the file in **lib** folder. 

Here lies most of AWS function they use to help to create everything that they provide, to use the textract we use like this.

```python
import boto3

def lambda_handler(event, context):
  #...
  textract = boto3.client('textract')
  # ...
  return
```

 Check the full code in **py** folder.
