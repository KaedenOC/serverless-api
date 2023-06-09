'use strict';

import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});

const peopleModel = dynamoose.model("people", schema);

export const handler = async (event) => {
  console.log('this is event', event.body);
  // TODO implement
  // let id = event.pathParameters.id;
  // let createName = parsedData.name;

  const response = { statusCode: null, body: null, };
  try {
    let parsedData = JSON.parse(event.body);
    let result = await peopleModel.create(parsedData); //get
    console.log('created person', parsedData);
    response.body = JSON.stringify(result);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }


  // const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  // };
  return response;
};
