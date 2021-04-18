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

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error("Note not found.");
  }

  return result.Item;
});