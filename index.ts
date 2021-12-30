import { reverseString, getVowels, nonRepeated } from "./helper";

export const reverse = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let response;
  try {
    const body = JSON.parse(event.body);
    const rawString = JSON.stringify(body.string);

    response = {
      statusCode: 200,
      body: reverseString(rawString),
    };

    return response;
  } catch (err) {
    response = {
      statusCode: 400,
      body: err.message,
    };
  }
  callback(null, response);
};

export const vowel = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let response;
  try {
    const body = JSON.parse(event.body);
    const rawString = JSON.stringify(body.string);

    response = {
      statusCode: 200,
      body: JSON.stringify(getVowels(rawString)),
    };

    return response;
  } catch (err) {
    response = {
      statusCode: 400,
      body: err.message,
    };
  }
  callback(null, response);
};

export const nonrepeat = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let response;
  try {
    const body = JSON.parse(event.body);
    const rawString = JSON.stringify(body.string);

    response = {
      statusCode: 200,
      body: JSON.stringify(nonRepeated(rawString)),
    };

    return response;
  } catch (err) {
    response = {
      statusCode: 400,
      body: err.message,
    };
  }
  callback(null, response);
};
