import {z} from "zod";


function validateAndLog(schema, value) {
  try {
    const result = schema.parse(value);
    console.log(`성공: ${result}`)
  } catch(err) {
    console.log(`에러: ${err} | 입력값: ${value}`)
  }
}

const nameSchema = z.string()

// validateAndLog(nameSchema, 1313)

const emailSchema = z.email()

validateAndLog(emailSchema, "abcabc.com")