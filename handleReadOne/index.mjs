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

  const response = { statusCode: null, body: null, };
  try {
    let id = event.pathParameters.id;
    let result = await peopleModel.scan('id').contains(id).exec();
    console.log('get by id', result);
    response.body = JSON.stringify(result);
    response.statusCode = 200;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 500;
  }

  return response;
};
