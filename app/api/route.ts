import { object, string, array, ValidationError } from 'yup';
import assert from 'assert';

interface Needs {
  [key: string]: string
}

const token = process.env.TG_TOKEN;
const chatId = process.env.TG_CHAT_ID;
const needsss: Needs = {
    branding: '👁️',
    print: '🖼️',
    social: '🌟',
    dapp: '🖥️',
    website: '💎',
    pitchdeck: '🧩',
    metaverse: '👽',
    consulting: '🛠️',
}
const contactSchema = object({
    name: string().optional().min(3).max(256),
    text: string().optional().min(3).max(8000),
    telegram: string().optional().min(3).max(500),
    email: string().email().required().min(3).max(256),
    wishlist: array().of(string().oneOf(Object.keys(needsss))).required()
});
    


async function sendTelegramMessage(text: string) {
    assert(token, 'token is missing');
    assert(chatId, 'chatId is missing');
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text,
            link_preview_options: { is_disabled: true },
        }),
    });
    const data = await response.json();
    assert(data.ok && data.result?.message_id, 'invalid tg response');
}


function capitalizeFLetter(text: string) {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
}


export async function POST(req: Request) {
  if (req.headers.get('Content-type') !== 'application/json') {
    return Response.json({
      status: 'Error',
      error: 'Invalid request type'
    }, {
      status: 400,
    });
  }
  const contactData = await req.json();
  console.log(contactData)
  // console.info('contactData', contactData);
  let parsedContactData
  let parseContactErrors: string[] = []
  try {
    parsedContactData = await contactSchema.validate(
      contactData,
      { strict: true },
    );

    console.log(parsedContactData)
    // console.log('parsedContactData', parsedContactData);
  } catch (error) {
    parseContactErrors = error instanceof ValidationError ? error.errors : ['Invalid request']
  }

  if (parseContactErrors.length > 0) {
    return Response.json({
      status: 'Error',
      errors: parseContactErrors
    });
  }

  if(!parsedContactData){
    return;
  }

  try {
    let message = `✨ Nouveau client ✨\n\nEmail: ${parsedContactData.email}`;

    if (parsedContactData.name) {
      message += `\nName: ${parsedContactData.name}`;
    }

    if (parsedContactData.text) {
      message += `\nText: ${parsedContactData.text}`;
    }

    if (parsedContactData.telegram) {
      message += `\nTG: ${parsedContactData.telegram}`;
    }

    if (parsedContactData.wishlist.length > 0) {
      message += `\nNeeds: ${parsedContactData.wishlist.reduce((acc, need) => {
        const icon = need && Object.keys(needsss).includes(need) ? needsss[need] : ""
        return `\n   ${icon} ${capitalizeFLetter(need ?? '')}${acc}`;
      }, ``)}`;
    }

    console.log('message', message);

    await sendTelegramMessage(message);

  } catch (error) {
    console.error('error telegram send message', error);
    return Response.json({
      status: 'Internal server error'
    }, {
      status: 500,
    });
  }

  return Response.json({
    status: 'Success'
  });
}