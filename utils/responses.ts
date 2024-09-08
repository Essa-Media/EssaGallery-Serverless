export const buildResponse = (statusCode: number, message: string, body: object|null) => {
    const rawBody = {
       statusCode,
       message,
       data: body,
    };
 
    return {
       statusCode,
       headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,DeviceId,deviceId,Deviceid,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
       },
       body: JSON.stringify(rawBody),
    };
 };