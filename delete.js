import handler from "./libs/handler";
import dynamoDb from "./libs/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: "123",
      noteId: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);

  return {status: true};
});