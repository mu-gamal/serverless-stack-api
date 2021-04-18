import handler from "./libs/handler";
import dynamoDb from "./libs/dynamodb";

export const main = handler(async () => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {":userId": "123"},
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});